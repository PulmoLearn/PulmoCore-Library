import {
  jwtVerify,
  importSPKI
} from "jose";
import { createClient } from "@supabase/supabase-js";

const LTI_PUBLIC_KEY = process.env.LTI_PUBLIC_KEY;
const SITE = "https://www.pulmolearn.com";

const admin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE
);

const authClient = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE
);

async function verifyHandoff(token) {
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

function withParams(rawUrl, values = {}) {
  const url =
    new URL(
      rawUrl,
      SITE
    );

  Object.entries(values)
    .forEach(
      ([key, value]) => {

        if (
          value !== undefined &&
          value !== null &&
          value !== ""
        ) {
          url.searchParams.set(
            key,
            String(value)
          );
        }

      }
    );

  return url.toString();
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
          error:
            "Missing lti_token or access_token"
        });
    }

    let handoff;

    try {

      handoff =
        await verifyHandoff(
          ltiToken
        );

    } catch (err) {

      return res
        .status(401)
        .json({
          error:
            "Invalid or expired lti_token",
          details:
            err.message
        });

    }

    const {
      data: userData,
      error: userErr
    } =
      await authClient
        .auth
        .getUser(
          accessToken
        );

    if (
      userErr ||
      !userData?.user
    ) {

      return res
        .status(401)
        .json({
          error:
            "Invalid session",
          details:
            userErr?.message
        });

    }

    const userId =
      userData.user.id;

    const { error: linkErr } =
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

    if (linkErr) {

      return res
        .status(500)
        .json({
          error:
            "Link failed",
          details:
            linkErr.message
        });

    }

    const { data: access } =
      await admin
        .from("user_access")
        .select("user_id")
        .eq(
          "user_id",
          userId
        )
        .maybeSingle();

    const lessonUrl =
      handoff.lessonUrl ||
      `${SITE}/dashboard.html`;

    const finalLessonUrl =
      withParams(
        lessonUrl,
        {
          lti: "1",
          lti_ctx:
            handoff.ltiCtx || ""
        }
      );

    return res
      .status(200)
      .json({
        ok: true,
        redirect:
          access
            ? finalLessonUrl
            : `${SITE}/payment.html?lesson=${encodeURIComponent(handoff.lessonId || "")}`
      });

  } catch (error) {

    return res
      .status(500)
      .json({
        error:
          "Link endpoint failed",
        details:
          error.message
      });

  }
}
