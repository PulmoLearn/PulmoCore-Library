import {
  jwtVerify,
  SignJWT,
  createRemoteJWKSet,
  importPKCS8
} from "jose";

const CANVAS_ISSUER = process.env.CANVAS_ISSUER;
const CANVAS_JWKS_URL = process.env.CANVAS_JWKS_URL;
const CLIENT_ID = process.env.CANVAS_CLIENT_ID;

const LTI_PRIVATE_KEY =
  process.env.LTI_PRIVATE_KEY?.replace(/\\n/g, "\n");

const LTI_KEY_ID =
  process.env.LTI_KEY_ID || "pulmolearn-lti-key-1";

const SITE = "https://www.pulmolearn.com";

let canvasJwks;

function getCanvasJwks() {
  if (!CANVAS_JWKS_URL) {
    throw new Error("Missing CANVAS_JWKS_URL");
  }

  if (!canvasJwks) {
    canvasJwks =
      createRemoteJWKSet(
        new URL(CANVAS_JWKS_URL)
      );
  }

  return canvasJwks;
}

function redirect303(res, location) {
  res.setHeader("Location", location);
  return res.status(303).end();
}

function htmlEscape(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

async function signHandoff({
  sub,
  email,
  lessonId,
  lessonUrl,
  agsLineItem,
  agsScopes
}) {
  if (!LTI_PRIVATE_KEY) {
    throw new Error("Missing LTI_PRIVATE_KEY");
  }

  const key =
    await importPKCS8(
      LTI_PRIVATE_KEY,
      "RS256"
    );

  return await new SignJWT({
    sub,
    email: email || null,
    lessonId,
    lessonUrl,
    agsLineItem: agsLineItem || null,
    agsScopes: Array.isArray(agsScopes)
      ? agsScopes
      : []
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
      params?.id_token || "";

    if (!idToken) {
      return res.status(400).json({
        error: "Missing id_token"
      });
    }

    if (!CANVAS_ISSUER || !CLIENT_ID) {
      return res.status(500).json({
        error: "Missing Canvas LTI environment configuration"
      });
    }

    let payload;

    try {
      const result =
        await jwtVerify(
          idToken,
          getCanvasJwks(),
          {
            issuer: CANVAS_ISSUER,
            audience: CLIENT_ID
          }
        );

      payload = result.payload;
    } catch (error) {
      return res.status(401).json({
        error: "Invalid LTI token",
        details: error.message
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

      const deepLinkData =
        deepLinkSettings.data || "";

      const canvasIssuer =
        payload.iss || CANVAS_ISSUER;

      const deploymentId =
        payload[
          "https://purl.imsglobal.org/spec/lti/claim/deployment_id"
        ] || "";

      if (!returnUrl || !deploymentId) {
        return res.status(400).json({
          error: "Canvas deep-link request is missing required settings"
        });
      }

      res.setHeader(
        "Content-Type",
        "text/html; charset=utf-8"
      );

      return res.status(200).send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PulmoLearn Lesson Picker</title>
</head>
<body style="font-family:Arial,sans-serif;padding:24px;background:#f4fafc;color:#0b1f33;">
  <h1>Select a PulmoLearn Lesson</h1>
  <p>Choose a lesson to add to this Canvas assignment.</p>

  <div style="background:white;border:1px solid #d7e6ef;border-radius:18px;padding:20px;margin-bottom:16px;">
    <h2>Foundations 1.1: Professional Communication &amp; Conflict Resolution</h2>
    <p>Professional communication, patient-centered language, and conflict resolution.</p>

    <form method="POST" action="/api/lti/deep-link-response">
      <input type="hidden" name="title"
        value="Foundations 1.1: Professional Communication &amp; Conflict Resolution">

      <input type="hidden" name="lessonUrl"
        value="https://www.pulmolearn.com/foundations/Foundations_1_1_Professional_Communication_Conflict_Resolution.html">

      <input type="hidden" name="lessonId"
        value="foundations_1_1">

      <input type="hidden" name="returnUrl"
        value="${htmlEscape(returnUrl)}">

      <input type="hidden" name="canvasIssuer"
        value="${htmlEscape(canvasIssuer)}">

      <input type="hidden" name="deploymentId"
        value="${htmlEscape(deploymentId)}">

      <input type="hidden" name="deepLinkData"
        value="${htmlEscape(deepLinkData)}">

      <button type="submit"
        style="background:#1ca7a8;color:white;border:0;border-radius:12px;padding:12px 18px;font-weight:bold;cursor:pointer;">
        Add to Canvas
      </button>
    </form>
  </div>

  <div style="background:white;border:1px solid #d7e6ef;border-radius:18px;padding:20px;margin-bottom:16px;">
    <h2>Foundations 1.2: Medical Math, Units &amp; Dosage Calculations</h2>
    <p>Metric conversions, dimensional analysis, and dosage calculations.</p>

    <form method="POST" action="/api/lti/deep-link-response">
      <input type="hidden" name="title"
        value="Foundations 1.2: Medical Math, Units &amp; Dosage Calculations">

      <input type="hidden" name="lessonUrl"
        value="https://www.pulmolearn.com/foundations/Foundations_1_2_Medical_Math_Units_Dosage_Calculations.html">

      <input type="hidden" name="lessonId"
        value="foundations_1_2">

      <input type="hidden" name="returnUrl"
        value="${htmlEscape(returnUrl)}">

      <input type="hidden" name="canvasIssuer"
        value="${htmlEscape(canvasIssuer)}">

      <input type="hidden" name="deploymentId"
        value="${htmlEscape(deploymentId)}">

      <input type="hidden" name="deepLinkData"
        value="${htmlEscape(deepLinkData)}">

      <button type="submit"
        style="background:#1ca7a8;color:white;border:0;border-radius:12px;padding:12px 18px;font-weight:bold;cursor:pointer;">
        Add to Canvas
      </button>
    </form>
  </div>
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
        `${SITE}/foundations/Foundations_1_1_Professional_Communication_Conflict_Resolution.html`;

      const sub =
        payload.sub;

      const email =
        (payload.email || "")
          .trim()
          .toLowerCase();

      if (!sub) {
        return res.status(400).json({
          error: "Canvas launch is missing the user subject identifier"
        });
      }

      const agsEndpoint =
        payload[
          "https://purl.imsglobal.org/spec/lti-ags/claim/endpoint"
        ] || {};

      const agsLineItem =
        agsEndpoint.lineitem || null;

      const agsScopes =
        Array.isArray(agsEndpoint.scope)
          ? agsEndpoint.scope
          : [];

      console.log(
        "PulmoLearn LTI AGS context:",
        {
          lessonId,
          canvasSub: sub,
          lineItemPresent: Boolean(agsLineItem),
          scopes: agsScopes
        }
      );

      const handoff =
        await signHandoff({
          sub,
          email,
          lessonId,
          lessonUrl,
          agsLineItem,
          agsScopes
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
