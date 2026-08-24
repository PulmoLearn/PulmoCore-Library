import {
  jwtVerify,
  SignJWT,
  createRemoteJWKSet,
  importPKCS8
} from "jose";
import { createClient } from "@supabase/supabase-js";

const CANVAS_ISSUER   = process.env.CANVAS_ISSUER;
const CANVAS_JWKS_URL = process.env.CANVAS_JWKS_URL;
const CLIENT_ID       = process.env.CANVAS_CLIENT_ID;

const LTI_PRIVATE_KEY = process.env.LTI_PRIVATE_KEY;
const LTI_KEY_ID      = process.env.LTI_KEY_ID;

const SITE = "https://www.pulmolearn.com";

const CANVAS_JWKS = createRemoteJWKSet(new URL(CANVAS_JWKS_URL));

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE
);

function redirect303(res, location) {
  res.setHeader("Location", location);
  return res.status(303).end();
}

function withParams(rawUrl, values = {}) {
  const url = new URL(rawUrl, SITE);

  Object.entries(values).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, String(value));
    }
  });

  return url.toString();
}

async function signLtiContext({
  sub,
  lessonId,
  lineitem,
  scopes,
  issuer,
  deploymentId,
  resourceLinkId
}) {
  const key = await importPKCS8(LTI_PRIVATE_KEY, "RS256");

  return await new SignJWT({
    sub,
    lessonId,
    lineitem: lineitem || "",
    scopes: Array.isArray(scopes) ? scopes : [],
    canvasIssuer: issuer || CANVAS_ISSUER || "",
    deploymentId: deploymentId || "",
    resourceLinkId: resourceLinkId || ""
  })
    .setProtectedHeader({
      alg: "RS256",
      kid: LTI_KEY_ID,
      typ: "JWT"
    })
    .setIssuedAt()
    .setIssuer(SITE)
    .setAudience("pulmolearn-lti-score")
    .setExpirationTime("4h")
    .sign(key);
}

async function signHandoff({
  sub,
  email,
  lessonId,
  lessonUrl,
  ltiCtx
}) {
  const key = await importPKCS8(LTI_PRIVATE_KEY, "RS256");

  return await new SignJWT({
    sub,
    email,
    lessonId,
    lessonUrl,
    ltiCtx
  })
    .setProtectedHeader({
      alg: "RS256",
      kid: LTI_KEY_ID
    })
    .setIssuedAt()
    .setIssuer(SITE)
    .setAudience("pulmolearn-lti-link")
    .setExpirationTime("10m")
    .sign(key);
}

export default async function handler(req, res) {
  try {
    const params =
      req.method === "POST"
        ? req.body
        : req.query;

    const idToken =
      params.id_token || "";

    if (!idToken) {
      return res.status(400).json({
        error: "Missing id_token"
      });
    }

    let payload;

    try {
      const result = await jwtVerify(
        idToken,
        CANVAS_JWKS,
        {
          issuer: CANVAS_ISSUER,
          audience: CLIENT_ID
        }
      );

      payload = result.payload;
    } catch (err) {
      return res.status(401).json({
        error: "Invalid LTI token",
        details: err.message
      });
    }

    const messageType =
      payload[
        "https://purl.imsglobal.org/spec/lti/claim/message_type"
      ];

    if (messageType === "LtiDeepLinkingRequest") {
      const deepLinkSettings =
        payload[
          "https://purl.imsglobal.org/spec/lti-dl/claim/deep_linking_settings"
        ] || {};

      const returnUrl =
        deepLinkSettings.deep_link_return_url || "";

      const canvasIssuer =
        payload.iss || CANVAS_ISSUER;

      const deploymentId =
        payload[
          "https://purl.imsglobal.org/spec/lti/claim/deployment_id"
        ] || "";

      // Keep the existing picker behavior. Your current dynamic picker /
      // assignment builder may replace this HTML.
      res.setHeader("Content-Type", "text/html");

      return res.status(200).send(`
<!DOCTYPE html>
<html>
  <body style="font-family:Arial,sans-serif;padding:24px;background:#f4fafc;color:#0b1f33">
    <h1>Select a PulmoLearn Lesson</h1>
    <p>Use your PulmoLearn assignment picker to select a resource.</p>
    <p>This launch endpoint is AGS-ready.</p>
    <input type="hidden" id="deepLinkReturnUrl" value="${returnUrl.replace(/"/g, "&quot;")}">
    <input type="hidden" id="canvasIssuer" value="${String(canvasIssuer || "").replace(/"/g, "&quot;")}">
    <input type="hidden" id="deploymentId" value="${String(deploymentId || "").replace(/"/g, "&quot;")}">
  </body>
</html>
      `);
    }

    if (messageType === "LtiResourceLinkRequest") {
      const custom =
        payload[
          "https://purl.imsglobal.org/spec/lti/claim/custom"
        ] || {};

      const lessonId =
        custom.lesson_id || "";

      const lessonUrl =
        custom.lesson_url ||
        `${SITE}/dashboard.html`;

      const sub =
        payload.sub || "";

      const email =
        (payload.email || "").trim().toLowerCase();

      const deploymentId =
        payload[
          "https://purl.imsglobal.org/spec/lti/claim/deployment_id"
        ] || "";

      const resourceLink =
        payload[
          "https://purl.imsglobal.org/spec/lti/claim/resource_link"
        ] || {};

      const ags =
        payload[
          "https://purl.imsglobal.org/spec/lti-ags/claim/endpoint"
        ] || {};

      const lineitem =
        ags.lineitem || "";

      const scopes =
        Array.isArray(ags.scope)
          ? ags.scope
          : [];

      const ltiCtx =
        await signLtiContext({
          sub,
          lessonId,
          lineitem,
          scopes,
          issuer: payload.iss || CANVAS_ISSUER,
          deploymentId,
          resourceLinkId: resourceLink.id || ""
        });

      console.log("PulmoLearn LTI AGS launch:", {
        lessonId,
        subPresent: Boolean(sub),
        lineitemPresent: Boolean(lineitem),
        scoreScopePresent: scopes.includes(
          "https://purl.imsglobal.org/spec/lti-ags/scope/score"
        ),
        resourceLinkId: resourceLink.id || ""
      });

      const { data: link } =
        await supabase
          .from("lti_users")
          .select("user_id")
          .eq("lti_sub", sub)
          .maybeSingle();

      if (link?.user_id) {
        const { data: access } =
          await supabase
            .from("user_access")
            .select("user_id")
            .eq("user_id", link.user_id)
            .maybeSingle();

        if (access) {
          return redirect303(
            res,
            withParams(
              lessonUrl,
              {
                lti: "1",
                lti_ctx: ltiCtx
              }
            )
          );
        }

        return redirect303(
          res,
          `${SITE}/payment.html?lesson=${encodeURIComponent(lessonId)}`
        );
      }

      const handoff =
        await signHandoff({
          sub,
          email,
          lessonId,
          lessonUrl,
          ltiCtx
        });

      return redirect303(
        res,
        `${SITE}/login.html?lti_token=${encodeURIComponent(handoff)}`
      );
    }

    return res.status(400).json({
      error: "Unknown message type",
      messageType
    });

  } catch (error) {
    return res.status(500).json({
      error: "LTI launch failed",
      details: error.message
    });
  }
}
