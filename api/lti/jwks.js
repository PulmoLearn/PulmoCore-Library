import { createPublicKey } from "crypto";

export default function handler(req, res) {
  try {
    const keyId        = process.env.LTI_KEY_ID || "pulmolearn-lti-key-1";
    const publicKeyPem = process.env.LTI_PUBLIC_KEY;

    if (!publicKeyPem) {
      return res.status(500).json({ error: "Missing LTI_PUBLIC_KEY" });
    }

    const publicKey = createPublicKey(publicKeyPem);
    const jwk       = publicKey.export({ format: "jwk" });

    res.setHeader("Content-Type", "application/json");
    return res.status(200).json({
      keys: [
        {
          ...jwk,
          kid: keyId,
          use: "sig",
          alg: "RS256"
        }
      ]
    });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to generate JWKS",
      details: error.message
    });
  }
}