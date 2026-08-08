import crypto from "crypto";

const CANVAS_ISSUER = process.env.CANVAS_ISSUER;
const CANVAS_CLIENT_ID = process.env.CANVAS_CLIENT_ID;

const SITE = "https://www.pulmolearn.com";
const LTI_LAUNCH_URL = `${SITE}/api/lti/launch`;

export default async function handler(req, res) {
  try {
    const params =
      req.method === "POST"
        ? req.body
        : req.query;

    const {
      iss,
      login_hint,
      target_link_uri,
      lti_message_hint,
      client_id
    } = params || {};

    if (
      !iss ||
      !login_hint ||
      !target_link_uri ||
      !client_id
    ) {
      return res.status(400).json({
        error: "Missing required LTI parameters"
      });
    }

    if (
      CANVAS_ISSUER &&
      iss !== CANVAS_ISSUER
    ) {
      return res.status(400).json({
        error: "Unexpected Canvas issuer"
      });
    }

    if (
      CANVAS_CLIENT_ID &&
      client_id !== CANVAS_CLIENT_ID
    ) {
      return res.status(400).json({
        error: "Unexpected Canvas client_id"
      });
    }

    const state =
      crypto.randomBytes(32).toString("hex");

    const nonce =
      crypto.randomBytes(32).toString("hex");

    res.setHeader("Set-Cookie", [
      `lti_state=${state}; Path=/; HttpOnly; Secure; SameSite=None; Max-Age=600`,
      `lti_nonce=${nonce}; Path=/; HttpOnly; Secure; SameSite=None; Max-Age=600`
    ]);

    const redirectUrl =
      new URL(
        "https://sso.canvaslms.com/api/lti/authorize_redirect"
      );

    redirectUrl.searchParams.set(
      "response_type",
      "id_token"
    );

    redirectUrl.searchParams.set(
      "response_mode",
      "form_post"
    );

    redirectUrl.searchParams.set(
      "scope",
      "openid"
    );

    redirectUrl.searchParams.set(
      "prompt",
      "none"
    );

    redirectUrl.searchParams.set(
      "client_id",
      client_id
    );

    redirectUrl.searchParams.set(
      "redirect_uri",
      LTI_LAUNCH_URL
    );

    redirectUrl.searchParams.set(
      "login_hint",
      login_hint
    );

    redirectUrl.searchParams.set(
      "nonce",
      nonce
    );

    redirectUrl.searchParams.set(
      "state",
      state
    );

    if (lti_message_hint) {
      redirectUrl.searchParams.set(
        "lti_message_hint",
        lti_message_hint
      );
    }

    return res.redirect(
      redirectUrl.toString()
    );

  } catch (error) {
    return res.status(500).json({
      error: "LTI login failed",
      details: error.message
    });
  }
}
