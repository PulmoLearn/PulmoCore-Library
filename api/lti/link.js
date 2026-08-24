import {
  jwtVerify,
  importSPKI
} from "jose";

import {
  createClient
} from "@supabase/supabase-js";

const LTI_PUBLIC_KEY =
  process.env.LTI_PUBLIC_KEY?.replace(/\\n/g, "\n");

const SITE =
  "https://www.pulmolearn.com";

const admin =
  createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE
  );

const authClient =
  createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE
  );

async function verifyHandoff(token) {
  if (!LTI_PUBLIC_KEY) {
    throw new Error("Missing LTI_PUBLIC_KEY");
  }

  const key =
    await importSPKI(
      LTI_PUBLIC_KEY,
      "RS256"
    );

  const { payload } =
    await jwtVerify(
      token,
      key,
      {
        issuer: SITE,
        audience: "pulmolearn-lti-link"
      }
    );

  return payload;
}


export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({
        error: "Method not allowed"
      });
  }

  try {
    const body =
      typeof req.body === "string"
        ? JSON.parse(req.body)
        : req.body;

    const ltiToken =
      body?.lti_token;

    const accessToken =
      body?.access_token;

    if (!ltiToken || !accessToken) {
      return res
        .status(400)
        .json({
          error: "Missing lti_token or access_token"
        });
    }

    let handoff;

    try {
      handoff =
        await verifyHandoff(
          ltiToken
        );
    } catch (error) {
      return res
        .status(401)
        .json({
          error: "Invalid or expired lti_token",
          details: error.message
        });
    }

    if (!handoff.sub) {
      return res
        .status(400)
        .json({
          error: "LTI handoff is missing Canvas user identifier"
        });
    }

    const {
      data: userData,
      error: userError
    } =
      await authClient.auth.getUser(
        accessToken
      );

    if (
      userError ||
      !userData?.user
    ) {
      return res
        .status(401)
        .json({
          error: "Invalid PulmoLearn session",
          details: userError?.message
        });
    }

    const userId =
      userData.user.id;

    const {
      error: linkError
    } =
      await admin
        .from("lti_users")
        .upsert(
          {
            lti_sub:
              handoff.sub,

            user_id:
              userId,

            lti_email:
              handoff.email || null,

            linked_at:
              new Date().toISOString()
          },
          {
            onConflict:
              "lti_sub"
          }
        );

    if (linkError) {
      return res
        .status(500)
        .json({
          error: "Canvas account link failed",
          details: linkError.message
        });
    }

    const lessonId =
      handoff.lessonId || "";

    const agsLineItem =
      handoff.agsLineItem || null;

    const agsScopes =
      Array.isArray(handoff.agsScopes)
        ? handoff.agsScopes
        : [];

    if (
      lessonId &&
      agsLineItem
    ) {
      const {
        error: contextError
      } =
        await admin
          .from("lti_launch_context")
          .upsert(
            {
              user_id:
                userId,

              lti_sub:
                handoff.sub,

              lesson_id:
                lessonId,

              line_item_url:
                agsLineItem,

              scopes:
                agsScopes,

              updated_at:
                new Date().toISOString()
            },
            {
              onConflict:
                "user_id,lesson_id"
            }
          );

      if (contextError) {
        console.error(
          "PulmoLearn: Failed to save Canvas AGS context:",
          contextError.message
        );
      } else {
        console.log(
          "PulmoLearn: Canvas AGS context saved:",
          {
            userId,
            lessonId,
            lineItemPresent: true,
            scopeCount: agsScopes.length
          }
        );
      }
    }

    const {
      data: access,
      error: accessError
    } =
      await admin
        .from("user_access")
        .select("user_id")
        .eq("user_id", userId)
        .maybeSingle();

    if (accessError) {
      return res
        .status(500)
        .json({
          error: "PulmoLearn access lookup failed",
          details: accessError.message
        });
    }

    const lessonUrl =
      handoff.lessonUrl ||
      `${SITE}/dashboard.html`;

    const finalLessonUrl =
      lessonUrl.includes("?")
        ? `${lessonUrl}&lti=1`
        : `${lessonUrl}?lti=1`;

    if (access) {
      return res
        .status(200)
        .json({
          ok: true,
          redirect: finalLessonUrl
        });
    }

    return res
      .status(200)
      .json({
        ok: true,
        redirect:
          `${SITE}/login.html` +
          `?lesson=${encodeURIComponent(lessonId)}` +
          `&lti=1&access=required`
      });

  } catch (error) {
    return res
      .status(500)
      .json({
        error: "LTI link endpoint failed",
        details: error.message
      });
  }
}
