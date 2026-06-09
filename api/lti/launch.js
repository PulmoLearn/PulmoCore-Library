export default function handler(req, res) {
  const params = req.method === "POST" ? req.body : req.query;
  const idToken = params.id_token || "";

  function decodeJwtPayload(token) {
    try {
      const payload = token.split(".")[1];
      return JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    } catch {
      return {};
    }
  }

  const payload = decodeJwtPayload(idToken);

  const deepLinkSettings =
    payload["https://purl.imsglobal.org/spec/lti-dl/claim/deep_linking_settings"] || {};

  const deploymentId =
    payload["https://purl.imsglobal.org/spec/lti/claim/deployment_id"] || "";

  const canvasIssuer = payload.iss || "https://canvas.instructure.com";
  const returnUrl = deepLinkSettings.deep_link_return_url || "";

  res.setHeader("Content-Type", "text/html");

  return res.status(200).send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>PulmoLearn Lesson Picker</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f4fafc;
      color: #0b1f33;
      padding: 24px;
    }
    .lesson-card {
      background: white;
      border: 1px solid #d7e6ef;
      border-radius: 18px;
      padding: 20px;
      margin-bottom: 16px;
    }
    button {
      background: #1ca7a8;
      color: white;
      border: none;
      border-radius: 12px;
      padding: 12px 18px;
      font-weight: bold;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>Select a PulmoLearn Lesson</h1>
  <p>Choose a lesson to add to this Canvas assignment.</p>

  <div class="lesson-card">
    <h2>Foundations 1.1: Professional Communication & Conflict Resolution</h2>
    <p>Professional communication, patient-centered language, and conflict resolution.</p>
    <form method="POST" action="/api/lti/deep-link-response">
      <input type="hidden" name="title" value="Foundations 1.1: Professional Communication & Conflict Resolution">
      <input type="hidden" name="lessonUrl" value="https://www.pulmolearn.com/foundations/Foundations_1_1_Professional_Communication_Conflict_Resolution.html">
      <input type="hidden" name="lessonId" value="foundations_1_1">
      <input type="hidden" name="returnUrl" value="${returnUrl}">
      <input type="hidden" name="canvasIssuer" value="${canvasIssuer}">
      <input type="hidden" name="deploymentId" value="${deploymentId}">
      <button type="submit">Add to Canvas</button>
    </form>
  </div>

  <div class="lesson-card">
    <h2>Foundations 1.2: Medical Math, Units & Dosage Calculations</h2>
    <p>Metric conversions, dimensional analysis, and dosage calculations.</p>
    <form method="POST" action="/api/lti/deep-link-response">
      <input type="hidden" name="title" value="Foundations 1.2: Medical Math, Units & Dosage Calculations">
      <input type="hidden" name="lessonUrl" value="https://www.pulmolearn.com/foundations/Foundations_1_2_Medical_Math_Units_Dosage_Calculations.html">
      <input type="hidden" name="lessonId" value="foundations_1_2">
      <input type="hidden" name="returnUrl" value="${returnUrl}">
      <input type="hidden" name="canvasIssuer" value="${canvasIssuer}">
      <input type="hidden" name="deploymentId" value="${deploymentId}">
      <button type="submit">Add to Canvas</button>
    </form>
  </div>
</body>
</html>
  `);
}