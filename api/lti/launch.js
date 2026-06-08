import { jwtVerify, createRemoteJWKSet } from "jose";

const JWKS = createRemoteJWKSet(
  new URL(process.env.CANVAS_JWKS_URL)
);

export default async function handler(req, res) {
  try {
    // Canvas sends POST request
    if (req.method !== "POST") {
      return res.status(405).send("Method not allowed");
    }

    const { id_token, state } = req.body;

    if (!id_token) {
      return res.status(400).send("Missing id_token");
    }

    // Verify JWT from Canvas
    const { payload } = await jwtVerify(id_token, JWKS, {
      issuer: process.env.CANVAS_ISSUER,
      audience: process.env.CANVAS_CLIENT_ID
    });

    console.log("LTI Launch Payload:", payload);

    // Example learner data
    const userId = payload.sub;
    const userName = payload.name || "Unknown User";

    // TEMPORARY:
    // redirect into PulmoLearn lesson
    return res.redirect(
      `/foundations/Foundations_1_1_Professional_Communication_Conflict_Resolution.html?lti=1&user=${encodeURIComponent(userName)}`
    );

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "LTI launch failed",
      details: error.message
    });
  }
}