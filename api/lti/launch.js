import { jwtVerify, SignJWT, createRemoteJWKSet, importPKCS8 } from "jose";
import { createClient } from "@supabase/supabase-js";

const CANVAS_ISSUER   = process.env.CANVAS_ISSUER;
const CANVAS_JWKS_URL = process.env.CANVAS_JWKS_URL;
const CLIENT_ID       = process.env.CANVAS_CLIENT_ID;

const LTI_PRIVATE_KEY = process.env.LTI_PRIVATE_KEY;
const LTI_KEY_ID      = process.env.LTI_KEY_ID;

const SITE = "https://www.pulmolearn.com";

// Cached across warm invocations
const CANVAS_JWKS = createRemoteJWKSet(new URL(CANVAS_JWKS_URL));

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE
);

function redirect303(res, location) {
  res.setHeader("Location", location);
  return res.status(303).end();
}

async function signHandoff({ sub, email, lessonId, lessonUrl }) {
  const key = await importPKCS8(LTI_PRIVATE_KEY, "RS256");
  return await new SignJWT({ sub, email, lessonId, lessonUrl })
    .setProtectedHeader({ alg: "RS256", kid: LTI_KEY_ID })
    .setIssuedAt()
    .setIssuer(SITE)
    .setAudience("pulmolearn-lti-link")
    .setExpirationTime("10m")
    .sign(key);
}

export default async function handler(req, res) {
  try {
    const params  = req.method === "POST" ? req.body : req.query;
    const idToken = params.id_token || "";

    if (!idToken) {
      return res.status(400).json({ error: "Missing id_token" });
    }

    // --- VERIFY SIGNATURE + claims against Canvas JWKS ---
    let payload;
    try {
      const result = await jwtVerify(idToken, CANVAS_JWKS, {
        issuer:   CANVAS_ISSUER,
        audience: CLIENT_ID,
      });
      payload = result.payload;
    } catch (err) {
      return res.status(401).json({ error: "Invalid LTI token", details: err.message });
    }

    const messageType =
      payload["https://purl.imsglobal.org/spec/lti/claim/message_type"];

    // ----- DEEP LINKING (picker) -----
    if (messageType === "LtiDeepLinkingRequest") {
      const deepLinkSettings =
        payload["https://purl.imsglobal.org/spec/lti-dl/claim/deep_linking_settings"] || {};
      const returnUrl    = deepLinkSettings.deep_link_return_url || "";
      const canvasIssuer = payload.iss || CANVAS_ISSUER;
      const deploymentId =
        payload["https://purl.imsglobal.org/spec/lti/claim/deployment_id"] || "";

      res.setHeader("Content-Type", "text/html");
      return res.status(200).send(`
<!DOCTYPE html>
<html>
  <body style="font-family: Arial, sans-serif; padding: 24px; background:#f4fafc; color:#0b1f33;">
    <h1>Select a PulmoLearn Lesson</h1>
    <p>Choose a lesson to add to this Canvas assignment.</p>

    <div style="background:white;border:1px solid #d7e6ef;border-radius:18px;padding:20px;margin-bottom:16px;">
      <h2>Foundations 1.1: Professional Communication &amp; Conflict Resolution</h2>
      <p>Professional communication, patient-centered language, and conflict resolution.</p>
      <form method="POST" action="/api/lti/deep-link-response">
        <input type="hidden" name="title"        value="Foundations 1.1: Professional Communication & Conflict Resolution">
        <input type="hidden" name="lessonUrl"    value="https://www.pulmolearn.com/foundations/Foundations_1_1_Professional_Communication_Conflict_Resolution">
        <input type="hidden" name="lessonId"     value="foundations_1_1">
        <input type="hidden" name="returnUrl"    value="${returnUrl}">
        <input type="hidden" name="canvasIssuer" value="${canvasIssuer}">
        <input type="hidden" name="deploymentId" value="${deploymentId}">
        <button type="submit" style="background:#1ca7a8;color:white;border:0;border-radius:12px;padding:12px 18px;font-weight:bold;">Add to Canvas</button>
      </form>
    </div>

    <div style="background:white;border:1px solid #d7e6ef;border-radius:18px;padding:20px;margin-bottom:16px;">
      <h2>Foundations 1.2: Medical Math, Units &amp; Dosage Calculations</h2>
      <p>Metric conversions, dimensional analysis, and dosage calculations.</p>
      <form method="POST" action="/api/lti/deep-link-response">
        <input type="hidden" name="title"        value="Foundations 1.2: Medical Math, Units & Dosage Calculations">
        <input type="hidden" name="lessonUrl"    value="https://www.pulmolearn.com/foundations/Foundations_1_2_Medical_Math_Units_Dosage_Calculations">
        <input type="hidden" name="lessonId"     value="foundations_1_2">
        <input type="hidden" name="returnUrl"    value="${returnUrl}">
        <input type="hidden" name="canvasIssuer" value="${canvasIssuer}">
        <input type="hidden" name="deploymentId" value="${deploymentId}">
        <button type="submit" style="background:#1ca7a8;color:white;border:0;border-radius:12px;padding:12px 18px;font-weight:bold;">Add to Canvas</button>
      </form>
    </div>
  </body>
</html>
      `);
    }

    // ----- RESOURCE LINK LAUNCH (student opening the lesson) -----
    if (messageType === "LtiResourceLinkRequest") {
      const custom =
        payload["https://purl.imsglobal.org/spec/lti/claim/custom"] || {};

      const lessonId  = custom.lesson_id || "";
      const lessonUrl =
        custom.lesson_url ||
        `${SITE}/foundations/Foundations_1_1_Professional_Communication_Conflict_Resolution`;

      const sub   = payload.sub;
      const email = (payload.email || "").trim().toLowerCase();

      // 1) Known Canvas user?
      const { data: link } = await supabase
        .from("lti_users")
        .select("user_id")
        .eq("lti_sub", sub)
        .maybeSingle();

      if (link && link.user_id) {
        const { data: access } = await supabase
          .from("user_access")
          .select("user_id")
          .eq("user_id", link.user_id)
          .maybeSingle();

        if (access) {
          const finalLessonUrl = lessonUrl.includes("?")
            ? lessonUrl + "&lti=1"
            : lessonUrl + "?lti=1";
          return redirect303(res, finalLessonUrl);
        }

        return redirect303(
          res,
          `${SITE}/payment.html?lesson=${encodeURIComponent(lessonId)}`
        );
      }

      // 2) Unknown Canvas user → send to login with signed handoff token
      const handoff = await signHandoff({ sub, email, lessonId, lessonUrl });
      return redirect303(
        res,
        `${SITE}/login.html?lti_token=${encodeURIComponent(handoff)}`
      );
    }

    return res.status(400).json({ error: "Unknown message type", messageType });

  } catch (error) {
    return res.status(500).json({ error: "LTI launch failed", details: error.message });
  }
}