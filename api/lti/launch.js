export default function handler(req, res) {
  const params = req.method === "POST" ? req.body : req.query;

  function decodeJwtPayload(token) {
    try {
      const payload = token.split(".")[1];
      return JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    } catch {
      return {};
    }
  }

  const payload = decodeJwtPayload(params.id_token || "");

  const messageType =
    payload["https://purl.imsglobal.org/spec/lti/claim/message_type"];

  // Deep linking picker mode
  if (messageType === "LtiDeepLinkingRequest") {
    res.setHeader("Content-Type", "text/html");
    return res.status(200).send(`
      <html>
        <body style="font-family:Arial;padding:24px;">
          <h1>Select a PulmoLearn Lesson</h1>

          <form method="POST" action="/api/lti/deep-link-response">
            <input type="hidden" name="title" value="Foundations 1.1: Professional Communication & Conflict Resolution">
            <input type="hidden" name="lessonUrl" value="https://www.pulmolearn.com/foundations/Foundations_1_1_Professional_Communication_Conflict_Resolution.html">
            <input type="hidden" name="lessonId" value="foundations_1_1">
            <input type="hidden" name="returnUrl" value="${payload["https://purl.imsglobal.org/spec/lti-dl/claim/deep_linking_settings"]?.deep_link_return_url || ""}">
            <input type="hidden" name="canvasIssuer" value="${payload.iss || "https://canvas.instructure.com"}">
            <input type="hidden" name="deploymentId" value="${payload["https://purl.imsglobal.org/spec/lti/claim/deployment_id"] || ""}">
            <button type="submit">Add Foundations 1.1 to Canvas</button>
          </form>

          <br>

          <form method="POST" action="/api/lti/deep-link-response">
            <input type="hidden" name="title" value="Foundations 1.2: Medical Math, Units & Dosage Calculations">
            <input type="hidden" name="lessonUrl" value="https://www.pulmolearn.com/foundations/Foundations_1_2_Medical_Math_Units_Dosage_Calculations.html">
            <input type="hidden" name="lessonId" value="foundations_1_2">
            <input type="hidden" name="returnUrl" value="${payload["https://purl.imsglobal.org/spec/lti-dl/claim/deep_linking_settings"]?.deep_link_return_url || ""}">
            <input type="hidden" name="canvasIssuer" value="${payload.iss || "https://canvas.instructure.com"}">
            <input type="hidden" name="deploymentId" value="${payload["https://purl.imsglobal.org/spec/lti/claim/deployment_id"] || ""}">
            <button type="submit">Add Foundations 1.2 to Canvas</button>
          </form>
        </body>
      </html>
    `);
  }

  // Normal student assignment launch mode
  if (messageType === "LtiResourceLinkRequest") {
    const custom =
      payload["https://purl.imsglobal.org/spec/lti/claim/custom"] || {};

    const lessonUrl =
      custom.lesson_url ||
      "https://www.pulmolearn.com/foundations/Foundations_1_1_Professional_Communication_Conflict_Resolution.html";

    return res.redirect(lessonUrl + "?lti=1");
  }

  return res.status(400).json({
    error: "Unknown or missing LTI message type",
    messageType,
    payload
  });
}