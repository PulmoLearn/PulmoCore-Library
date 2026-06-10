export default function handler(req, res) {
  try {
    const params = req.method === "POST" ? req.body : req.query;

    function decodeJwtPayload(token) {
      try {
        if (!token) return {};
        const payloadPart = token.split(".")[1];
        return JSON.parse(Buffer.from(payloadPart, "base64url").toString("utf8"));
      } catch (error) {
        return { decodeError: error.message };
      }
    }

    const payload = decodeJwtPayload(params.id_token || "");

    const messageType =
      payload["https://purl.imsglobal.org/spec/lti/claim/message_type"];

    if (messageType === "LtiResourceLinkRequest") {
      const custom =
        payload["https://purl.imsglobal.org/spec/lti/claim/custom"] || {};

      return res.status(200).json({
        message: "Resource launch received",
        messageType,
        custom,
        lesson_id: custom.lesson_id,
        lesson_url: custom.lesson_url
      });
    }

    if (messageType === "LtiDeepLinkingRequest") {
      return res.status(200).json({
        message: "Deep linking launch received",
        messageType
      });
    }

    return res.status(400).json({
      error: "Unknown or missing LTI message type",
      messageType,
      payload
    });
  } catch (error) {
    return res.status(500).json({
      error: "LTI launch failed",
      details: error.message
    });
  }
}