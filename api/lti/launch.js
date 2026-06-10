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

    const deepLinkSettings =
      payload["https://purl.imsglobal.org/spec/lti-dl/claim/deep_linking_settings"] || {};

    const returnUrl = deepLinkSettings.deep_link_return_url || "";
    const canvasIssuer = payload.iss || "https://canvas.instructure.com";
    const deploymentId =
      payload["https://purl.imsglobal.org/spec/lti/claim/deployment_id"] || "";

    if (messageType === "LtiDeepLinkingRequest") {
      res.setHeader("Content-Type", "text/html");

      return res.status(200).send(`
<!DOCTYPE html>
<html>
  <body style="font-family: Arial, sans-serif; padding: 24px; background:#f4fafc; color:#0b1f33;">
    <h1>Select a PulmoLearn Lesson</h1>
    <p>Choose a lesson to add to this Canvas assignment.</p>

    <div style="background:white;border:1px solid #d7e6ef;border-radius:18px;padding:20px;margin-bottom:16px;">
      <h2>Foundations 1.1: Professional Communication & Conflict Resolution</h2>
      <p>Professional communication, patient-centered language, and conflict resolution.</p>
      <form method="POST" action="/api/lti/deep-link-response">
        <input type="hidden" name="title" value="Foundations 1.1: Professional Communication & Conflict Resolution">
        <input type="hidden" name="lessonUrl" value="https://www.pulmolearn.com/foundations/Foundations_1_1_Professional_Communication_Conflict_Resolution">
        <input type="hidden" name="lessonId" value="foundations_1_1">
        <input type="hidden" name="returnUrl" value="${returnUrl}">
        <input type="hidden" name="canvasIssuer" value="${canvasIssuer}">
        <input type="hidden" name="deploymentId" value="${deploymentId}">
        <button type="submit" style="background:#1ca7a8;color:white;border:0;border-radius:12px;padding:12px 18px;font-weight:bold;">Add to Canvas</button>
      </form>
    </div>

    <div style="background:white;border:1px solid #d7e6ef;border-radius:18px;padding:20px;margin-bottom:16px;">
      <h2>Foundations 1.2: Medical Math, Units & Dosage Calculations</h2>
      <p>Metric conversions, dimensional analysis, and dosage calculations.</p>
      <form method="POST" action="/api/lti/deep-link-response">
        <input type="hidden" name="title" value="Foundations 1.2: Medical Math, Units & Dosage Calculations">
        <input type="hidden" name="lessonUrl" value="https://www.pulmolearn.com/foundations/Foundations_1_2_Medical_Math_Units_Dosage_Calculations">
        <input type="hidden" name="lessonId" value="foundations_1_2">
        <input type="hidden" name="returnUrl" value="${returnUrl}">
        <input type="hidden" name="canvasIssuer" value="${canvasIssuer}">
        <input type="hidden" name="deploymentId" value="${deploymentId}">
        <button type="submit" style="background:#1ca7a8;color:white;border:0;border-radius:12px;padding:12px 18px;font-weight:bold;">Add to Canvas</button>
      </form>
    </div>
  </body>
</html>
      `);
    }

       if (messageType === "LtiResourceLinkRequest") {
      const custom =
        payload["https://purl.imsglobal.org/spec/lti/claim/custom"] || {};

      const lessonUrl =
        custom.lesson_url ||
        "https://www.pulmolearn.com/foundations/Foundations_1_1_Professional_Communication_Conflict_Resolution";

      const finalLessonUrl = lessonUrl.includes("?")
        ? lessonUrl + "&lti=1"
        : lessonUrl + "?lti=1";

      res.setHeader("Location", finalLessonUrl);
      return res.status(303).end();
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