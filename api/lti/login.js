import crypto from "crypto";

export default async function handler(req, res) {
  const query = req.query || {};

  return res.status(200).json({
    message: "PulmoLearn LTI login endpoint reached",
    method: req.method,
    query
  });
}

export default async function handler(req, res) {
  try {
    const {
      iss,
      login_hint,
      target_link_uri,
      lti_message_hint
    } = req.query;

    // Basic validation
    if (!iss || !login_hint || !target_link_uri) {
      return res.status(400).send("Missing required LTI parameters");
    }

    // Generate random state + nonce
    const state = crypto.randomUUID();
    const nonce = crypto.randomUUID();

    // Store temporarily in cookies
    res.setHeader("Set-Cookie", [
      `lti_state=${state}; Path=/; HttpOnly; Secure; SameSite=None`,
      `lti_nonce=${nonce}; Path=/; HttpOnly; Secure; SameSite=None`
    ]);

    // Canvas authorization redirect
    const redirectUrl = new URL(
      "https://sso.canvaslms.com/api/lti/authorize_redirect"
    );

    redirectUrl.searchParams.set("response_type", "id_token");
    redirectUrl.searchParams.set("response_mode", "form_post");
    redirectUrl.searchParams.set("scope", "openid");
    redirectUrl.searchParams.set("prompt", "none");

    redirectUrl.searchParams.set(
      "client_id",
      process.env.CANVAS_CLIENT_ID
    );

    redirectUrl.searchParams.set(
      "redirect_uri",
      target_link_uri
    );

    redirectUrl.searchParams.set("login_hint", login_hint);
    redirectUrl.searchParams.set("nonce", nonce);
    redirectUrl.searchParams.set("state", state);

    if (lti_message_hint) {
      redirectUrl.searchParams.set(
        "lti_message_hint",
        lti_message_hint
      );
    }

    redirectUrl.searchParams.set("response_mode", "form_post");

    return res.redirect(redirectUrl.toString());

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "LTI login failed",
      details: error.message
    });
  }
}