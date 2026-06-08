export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).send("Method not allowed");
    }

    const { jwtVerify, createRemoteJWKSet } = await import("jose");

    const canvasJwksUrl = process.env.CANVAS_JWKS_URL;
    const canvasIssuer = process.env.CANVAS_ISSUER;
    const canvasClientId = process.env.CANVAS_CLIENT_ID;

    if (!canvasJwksUrl || !canvasIssuer || !canvasClientId) {
      return res.status(500).json({
        error: "Missing Canvas environment variables"
      });
    }

    const { id_token } = req.body;

    if (!id_token) {
      return res.status(400).send("Missing id_token");
    }

    const JWKS = createRemoteJWKSet(new URL(canvasJwksUrl));

    const { payload } = await jwtVerify(id_token, JWKS, {
      issuer: canvasIssuer,
      audience: canvasClientId
    });

    const userName = payload.name || "Unknown User";

    return res.redirect(
      `/foundations/Foundations_1_1_Professional_Communication_Conflict_Resolution.html?lti=1&user=${encodeURIComponent(userName)}`
    );
  } catch (error) {
    return res.status(500).json({
      error: "LTI launch failed",
      details: error.message
    });
  }
}