export default function handler(req, res) {
  const keyId = process.env.LTI_KEY_ID || "pulmolearn-lti-key-1";

  const jwk = {
    kty: "RSA",
    use: "sig",
    kid: keyId,
    alg: "RS256",

    // These public-key values will be filled in during the next step.
    n: "PLACEHOLDER_MODULUS",
    e: "AQAB"
  };

  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    keys: [jwk]
  });
}