import {
  jwtVerify,
  importSPKI,
  importPKCS8,
  SignJWT
} from "jose";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";

const SITE = "https://www.pulmolearn.com";

const CLIENT_ID =
  process.env.CANVAS_CLIENT_ID;

const LTI_PRIVATE_KEY =
  process.env.LTI_PRIVATE_KEY;

const LTI_PUBLIC_KEY =
  process.env.LTI_PUBLIC_KEY;

const LTI_KEY_ID =
  process.env.LTI_KEY_ID;

const SCORE_SCOPE =
  "https://purl.imsglobal.org/spec/lti-ags/scope/score";

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

async function verifyLtiContext(token) {
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
        audience: "pulmolearn-lti-score"
      }
    );

  return payload;
}

async function getCanvasAgsToken(lineitem) {
  const origin =
    new URL(lineitem).origin;

  const tokenUrl =
    `${origin}/login/oauth2/token`;

  const key =
    await importPKCS8(
      LTI_PRIVATE_KEY,
      "RS256"
    );

  const assertion =
    await new SignJWT({})
      .setProtectedHeader({
        alg: "RS256",
        kid: LTI_KEY_ID,
        typ: "JWT"
      })
      .setIssuer(SITE)
      .setSubject(CLIENT_ID)
      .setAudience(tokenUrl)
      .setIssuedAt()
      .setJti(
        crypto.randomUUID()
      )
      .setExpirationTime("5m")
      .sign(key);

  const form =
    new URLSearchParams({
      grant_type:
        "client_credentials",
      client_assertion_type:
        "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
      client_assertion:
        assertion,
      scope:
        SCORE_SCOPE
    });

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
          form.toString()
      }
    );

  const result =
    await response
      .json()
      .catch(
        () => ({})
      );

  if (
    !response.ok ||
    !result?.access_token
  ) {

    throw new Error(
      `Canvas AGS token request failed (${response.status}): ` +
      `${result?.error_description || result?.error || "No access token returned"}`
    );

  }

  return result.access_token;
}

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res
      .status(405)
      .json({
        ok: false,
        error:
          "Method not allowed"
      });
  }

  try {

    const body =
      typeof req.body === "string"
        ? JSON.parse(req.body)
        : req.body;

    const lessonId =
      String(
        body?.lesson_id || ""
      );

    const completed =
      body?.completed === true;

    const ltiContextToken =
      body?.lti_context || "";

    const accessToken =
      body?.access_token || "";

    if (
      !lessonId ||
      !completed ||
      !ltiContextToken
    ) {

      return res
        .status(400)
        .json({
          ok: false,
          passed_back: false,
          error:
            "Missing lesson_id, completed=true, or lti_context"
        });

    }

    const ctx =
      await verifyLtiContext(
        ltiContextToken
      );

    if (
      String(ctx.lessonId || "") !==
      lessonId
    ) {

      return res
        .status(400)
        .json({
          ok: false,
          passed_back: false,
          error:
            "LTI context lesson does not match the completed lesson"
        });

    }

    const lineitem =
      String(
        ctx.lineitem || ""
      );

    if (!lineitem) {

      return res
        .status(409)
        .json({
          ok: false,
          passed_back: false,
          error:
            "Canvas launch did not include an AGS lineitem. Confirm the Canvas LTI developer key has the AGS score scope and that the assignment is linked as a graded External Tool."
        });

    }

    const scopes =
      Array.isArray(ctx.scopes)
        ? ctx.scopes
        : [];

    if (
      !scopes.includes(
        SCORE_SCOPE
      )
    ) {

      return res
        .status(403)
        .json({
          ok: false,
          passed_back: false,
          error:
            "Canvas launch did not grant the LTI AGS score scope."
        });

    }

    // Optional extra identity validation when a PulmoLearn session is available.
    if (accessToken) {

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
            ok: false,
            passed_back: false,
            error:
              "Invalid PulmoLearn session"
          });

      }

      const {
        data: link,
        error: linkErr
      } =
        await admin
          .from("lti_users")
          .select("lti_sub")
          .eq(
            "user_id",
            userData.user.id
          )
          .eq(
            "lti_sub",
            ctx.sub
          )
          .maybeSingle();

      if (
        linkErr ||
        !link
      ) {

        return res
          .status(403)
          .json({
            ok: false,
            passed_back: false,
            error:
              "PulmoLearn account does not match this Canvas launch."
          });

      }

    }

    const canvasToken =
      await getCanvasAgsToken(
        lineitem
      );

    const scoreUrl =
      `${lineitem.replace(/\/+$/, "")}/scores`;

    const scoreBody = {
      timestamp:
        new Date().toISOString(),
      scoreGiven:
        1,
      scoreMaximum:
        1,
      activityProgress:
        "Completed",
      gradingProgress:
        "FullyGraded",
      userId:
        String(ctx.sub)
    };

    const scoreResponse =
      await fetch(
        scoreUrl,
        {
          method: "POST",
          headers: {
            "Authorization":
              `Bearer ${canvasToken}`,
            "Content-Type":
              "application/vnd.ims.lis.v1.score+json"
          },
          body:
            JSON.stringify(
              scoreBody
            )
        }
      );

    const responseText =
      await scoreResponse.text();

    if (!scoreResponse.ok) {

      return res
        .status(502)
        .json({
          ok: false,
          passed_back: false,
          error:
            `Canvas rejected the score (${scoreResponse.status}).`,
          details:
            responseText.slice(0, 1200)
        });

    }

    return res
      .status(200)
      .json({
        ok: true,
        passed_back: true,
        lesson_id:
          lessonId,
        activityProgress:
          "Completed",
        gradingProgress:
          "FullyGraded"
      });

  } catch (error) {

    console.error(
      "PulmoLearn LTI score error:",
      error
    );

    return res
      .status(500)
      .json({
        ok: false,
        passed_back: false,
        error:
          "LTI score passback failed",
        details:
          error.message
      });

  }
}
