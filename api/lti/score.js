import {
  SignJWT,
  importPKCS8
} from "jose";

import {
  createClient
} from "@supabase/supabase-js";

import crypto from "crypto";

const CLIENT_ID =
  process.env.CANVAS_CLIENT_ID;

const LTI_PRIVATE_KEY =
  process.env.LTI_PRIVATE_KEY?.replace(/\\n/g, "\n");

const LTI_KEY_ID =
  process.env.LTI_KEY_ID ||
  "pulmolearn-lti-key-1";

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

const SCORE_SCOPE =
  "https://purl.imsglobal.org/spec/lti-ags/scope/score";

function getCanvasTokenUrl(lineItemUrl) {
  const url =
    new URL(lineItemUrl);

  return `${url.origin}/login/oauth2/token`;
}

function getScoreUrl(lineItemUrl) {
  return `${lineItemUrl.replace(/\/$/, "")}/scores`;
}

async function getCanvasAccessToken(tokenUrl) {
  if (!CLIENT_ID) {
    throw new Error("Missing CANVAS_CLIENT_ID");
  }

  if (!LTI_PRIVATE_KEY) {
    throw new Error("Missing LTI_PRIVATE_KEY");
  }

  const privateKey =
    await importPKCS8(
      LTI_PRIVATE_KEY,
      "RS256"
    );

  const now =
    Math.floor(
      Date.now() / 1000
    );

  const assertion =
    await new SignJWT({
      iss:
        "https://www.pulmolearn.com",

      sub:
        CLIENT_ID,

      aud:
        tokenUrl,

      jti:
        crypto.randomUUID()
    })
      .setProtectedHeader({
        alg: "RS256",
        kid: LTI_KEY_ID,
        typ: "JWT"
      })
      .setIssuedAt(now)
      .setExpirationTime(now + 300)
      .sign(privateKey);

  const body =
    new URLSearchParams();

  body.set(
    "grant_type",
    "client_credentials"
  );

  body.set(
    "client_assertion_type",
    "urn:ietf:params:oauth:client-assertion-type:jwt-bearer"
  );

  body.set(
    "client_assertion",
    assertion
  );

  body.set(
    "scope",
    SCORE_SCOPE
  );

  const response =
    await fetch(
      tokenUrl,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded"
        },
        body:
          body.toString()
      }
    );

  const text =
    await response.text();

  let result;

  try {
    result =
      JSON.parse(text);
  } catch {
    result = { raw: text };
  }

  if (!response.ok) {
    throw new Error(
      `Canvas token request failed (${response.status}): ${JSON.stringify(result)}`
    );
  }

  if (!result.access_token) {
    throw new Error(
      "Canvas token response did not include access_token"
    );
  }

  return result.access_token;
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

    const accessToken =
      body?.access_token;

    const lessonId =
      body?.lesson_id;

    const completed =
      body?.completed === true;

    if (!accessToken || !lessonId) {
      return res
        .status(400)
        .json({
          error: "Missing access_token or lesson_id"
        });
    }

    if (!completed) {
      return res
        .status(200)
        .json({
          ok: true,
          skipped: true,
          reason: "Lesson is not complete"
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
      data: context,
      error: contextError
    } =
      await admin
        .from("lti_launch_context")
        .select(
          "lti_sub, line_item_url, scopes"
        )
        .eq("user_id", userId)
        .eq("lesson_id", lessonId)
        .maybeSingle();

    if (contextError) {
      return res
        .status(500)
        .json({
          error: "Canvas launch context lookup failed",
          details: contextError.message
        });
    }

    if (!context) {
      return res
        .status(404)
        .json({
          error: "No Canvas launch context found for this lesson"
        });
    }

    const scopes =
      Array.isArray(context.scopes)
        ? context.scopes
        : [];

    if (!scopes.includes(SCORE_SCOPE)) {
      return res
        .status(403)
        .json({
          error:
            "Canvas did not grant the AGS score scope for this launch"
        });
    }

    const lineItemUrl =
      context.line_item_url;

    const canvasUserId =
      context.lti_sub;

    if (!lineItemUrl || !canvasUserId) {
      return res
        .status(500)
        .json({
          error:
            "Stored Canvas launch context is incomplete"
        });
    }

    const tokenUrl =
      getCanvasTokenUrl(
        lineItemUrl
      );

    const canvasAccessToken =
      await getCanvasAccessToken(
        tokenUrl
      );

    const scoreUrl =
      getScoreUrl(
        lineItemUrl
      );

    const scorePayload =
      {
        userId:
          canvasUserId,

        scoreGiven:
          100,

        scoreMaximum:
          100,

        activityProgress:
          "Completed",

        gradingProgress:
          "FullyGraded",

        timestamp:
          new Date().toISOString()
      };

    console.log(
      "PulmoLearn: Sending Canvas AGS score:",
      {
        userId,
        lessonId,
        canvasUserId,
        scoreUrl
      }
    );

    const scoreResponse =
      await fetch(
        scoreUrl,
        {
          method: "POST",
          headers: {
            "Authorization":
              `Bearer ${canvasAccessToken}`,

            "Content-Type":
              "application/vnd.ims.lis.v1.score+json"
          },
          body:
            JSON.stringify(scorePayload)
        }
      );

    const scoreText =
      await scoreResponse.text();

    if (!scoreResponse.ok) {
      return res
        .status(scoreResponse.status)
        .json({
          error:
            "Canvas score passback failed",

          canvas_status:
            scoreResponse.status,

          canvas_response:
            scoreText
        });
    }

    console.log(
      "PulmoLearn: Canvas AGS score accepted:",
      {
        userId,
        lessonId,
        canvasUserId
      }
    );

    return res
      .status(200)
      .json({
        ok: true,
        passed_back: true,
        lesson_id: lessonId,
        score: 100
      });

  } catch (error) {
    console.error(
      "PulmoLearn score endpoint error:",
      error
    );

    return res
      .status(500)
      .json({
        error:
          "Canvas score endpoint failed",
        details:
          error.message
      });
  }
}
