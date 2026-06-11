import { jwtVerify, SignJWT, createRemoteJWKSet, importPKCS8 } from "jose";
import { createClient } from "@supabase/supabase-js";

const CANVAS_ISSUER = process.env.CANVAS_ISSUER;
const CANVAS_JWKS_URL = process.env.CANVAS_JWKS_URL;
const CLIENT_ID = process.env.CANVAS_CLIENT_ID;

const LTI_PRIVATE_KEY = process.env.LTI_PRIVATE_KEY; // PEM (PKCS8) string
const LTI_KEY_ID = process.env.LTI_KEY_ID;

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

// Sign a short-lived handoff token carrying the Canvas sub + lesson context.
// This is what we hand to /login.html so the sub can't be tampered with.
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
    const params = req.method === "POST" ? req.body : req.query;
    const idToken = params.id_token || "";

    if (!idToken) {
      return res.status(400).json({ error: "Missing id_token" });
    }

    // --- VERIFY SIGNATURE + claims against Canvas JWKS ---
    let payload;
    try {
      const result = await jwtVerify(idToken, CANVAS_JWKS, {
        issuer: CANVAS_ISSUER,
        audience: CLIENT_ID,
      });
      payload = result.payload;
    } catch (err) {
      return res
        .status(401)
        .json({ error: "Invalid LTI token", details: err.message });
    }

    const messageType =
      payload["https://purl.imsglobal.org/spec/lti/claim/message_type"];

    // ----- DEEP LINKING (picker) -----
    if (messageType === "LtiDeepLinkingRequest") {
      const deepLinkSettings =
        payload[
          "https://purl.imsglobal.org/spec/lti-dl/claim/deep_linking_settings"
        ] || {};
      const returnUrl = deepLinkSettings.deep_link_return_url || "";
      const canvasIssuer = payload.iss || CANVAS_ISSUER;
      const deploymentId =
        payload["https://purl.imsglobal.org/spec/lti/claim/deployment_id"] ||
        "";

      res.setHeader("Content-Type", "text/html");
      // KEEP YOUR EXISTING PICKER HTML HERE — unchanged from your current file.
      // returnUrl, canvasIssuer, deploymentId are available exactly as before.
      return res.status(200).send(`<!-- your existing picker markup here -->`);
    }

    // ----- RESOURCE LINK LAUNCH (student opening the lesson) -----
    if (messageType === "LtiResourceLinkRequest") {
      const custom =
        payload["https://purl.imsglobal.org/spec/lti/claim/custom"] || {};

      const lessonId = custom.lesson_id || "";
      const lessonUrl =
        custom.lesson_url ||
        `${SITE}/foundations/Foundations_1_1_Professional_Communication_Conflict_Resolution`;

      const sub = payload.sub; // Canvas stable user id — always present
      const email = (payload.email || "").trim().toLowerCase(); // may be absent

      // 1) Do we already know this Canvas user?
      const { data: link } = await supabase
        .from("lti_users")
        .select("user_id")
        .eq("lti_sub", sub)
        .maybeSingle();

      if (link && link.user_id) {
        // Known student — check entitlement
        const { data: access } = await supabase
          .from("user_access")
          .select("user_id")
          .eq("user_id", link.user_id)
          .maybeSingle();

        if (access) {
          // Has access → go to the lesson
          const finalLessonUrl = lessonUrl.includes("?")
            ? lessonUrl + "&lti=1"
            : lessonUrl + "?lti=1";
          return redirect303(res, finalLessonUrl);
        }

        // Linked but no entitlement → send to payment / voucher
        return redirect303(
          res,
          `${SITE}/payment.html?lesson=${encodeURIComponent(lessonId)}`
        );
      }

      // 2) Unknown Canvas user → send to login so they can authenticate
      //    and link their durable account. Carry a signed handoff token.
      const handoff = await signHandoff({ sub, email, lessonId, lessonUrl });
      return redirect303(
        res,
        `${SITE}/login.html?lti_token=${encodeURIComponent(handoff)}`
      );
    }

    return res
      .status(400)
      .json({ error: "Unknown message type", messageType });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "LTI launch failed", details: error.message });
  }
}