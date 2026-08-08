export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res
        .status(405)
        .send("Method not allowed");
    }

    const {
      SignJWT,
      importPKCS8
    } =
      await import("jose");

    const {
      title,
      lessonUrl,
      lessonId,
      returnUrl,
      canvasIssuer,
      deploymentId,
      deepLinkData
    } =
      req.body || {};

    const clientId =
      process.env.CANVAS_CLIENT_ID;

    const keyId =
      process.env.LTI_KEY_ID ||
      "pulmolearn-lti-key-1";

    const privateKeyPem =
      process.env.LTI_PRIVATE_KEY
        ?.replace(/\\n/g, "\n");

    if (
      !title ||
      !lessonUrl ||
      !returnUrl ||
      !deploymentId
    ) {
      return res
        .status(400)
        .json({
          error:
            "Missing required deep link fields"
        });
    }

    if (
      !privateKeyPem ||
      !clientId
    ) {
      return res
        .status(500)
        .json({
          error:
            "Missing LTI_PRIVATE_KEY or CANVAS_CLIENT_ID"
        });
    }

    const privateKey =
      await importPKCS8(
        privateKeyPem,
        "RS256"
      );

    const claims = {
      iss: clientId,
      aud:
        canvasIssuer ||
        "https://canvas.instructure.com",

      "https://purl.imsglobal.org/spec/lti/claim/message_type":
        "LtiDeepLinkingResponse",

      "https://purl.imsglobal.org/spec/lti/claim/version":
        "1.3.0",

      "https://purl.imsglobal.org/spec/lti/claim/deployment_id":
        deploymentId,

      "https://purl.imsglobal.org/spec/lti-dl/claim/content_items":
        [
          {
            type: "ltiResourceLink",
            title,
            url:
              "https://www.pulmolearn.com/api/lti/launch",
            custom:
              {
                lesson_id:
                  lessonId || "",
                lesson_url:
                  lessonUrl
              }
          }
        ]
    };

    if (deepLinkData) {
      claims[
        "https://purl.imsglobal.org/spec/lti-dl/claim/data"
      ] = deepLinkData;
    }

    const jwt =
      await new SignJWT(claims)
        .setProtectedHeader({
          alg: "RS256",
          kid: keyId
        })
        .setIssuedAt()
        .setExpirationTime("5m")
        .sign(privateKey);

    res.setHeader(
      "Content-Type",
      "text/html; charset=utf-8"
    );

    return res
      .status(200)
      .send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Returning to Canvas</title>
</head>
<body>
  <form
    id="deepLinkForm"
    method="POST"
    action="${returnUrl}"
  >
    <input type="hidden" name="JWT" value="${jwt}">
    <input type="hidden" name="jwt" value="${jwt}">
  </form>

  <script>
    document
      .getElementById("deepLinkForm")
      .submit();
  </script>
</body>
</html>
      `);

  } catch (error) {
    return res
      .status(500)
      .json({
        error:
          "Deep link response failed",
        details:
          error.message
      });
  }
}
