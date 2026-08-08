import {
  jwtVerify,
  SignJWT,
  createRemoteJWKSet,
  importPKCS8
} from "jose";

import {
  ltiCourses
} from "../../lib/lti-course-catalog.js";

const CANVAS_ISSUER = process.env.CANVAS_ISSUER;
const CANVAS_JWKS_URL = process.env.CANVAS_JWKS_URL;
const CLIENT_ID = process.env.CANVAS_CLIENT_ID;

const LTI_PRIVATE_KEY =
  process.env.LTI_PRIVATE_KEY?.replace(/\\n/g, "\n");

const LTI_KEY_ID =
  process.env.LTI_KEY_ID || "pulmolearn-lti-key-1";

const SITE = "https://www.pulmolearn.com";

let canvasJwks;

function getCanvasJwks() {
  if (!CANVAS_JWKS_URL) {
    throw new Error("Missing CANVAS_JWKS_URL");
  }

  if (!canvasJwks) {
    canvasJwks = createRemoteJWKSet(
      new URL(CANVAS_JWKS_URL)
    );
  }

  return canvasJwks;
}

function redirect303(res, location) {
  res.setHeader("Location", location);
  return res.status(303).end();
}

function htmlEscape(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

async function signHandoff({
  sub,
  email,
  lessonId,
  lessonUrl,
  agsLineItem,
  agsScopes
}) {
  if (!LTI_PRIVATE_KEY) {
    throw new Error("Missing LTI_PRIVATE_KEY");
  }

  const key = await importPKCS8(
    LTI_PRIVATE_KEY,
    "RS256"
  );

  return await new SignJWT({
    sub,
    email: email || null,
    lessonId,
    lessonUrl,
    agsLineItem: agsLineItem || null,
    agsScopes: Array.isArray(agsScopes)
      ? agsScopes
      : []
  })
    .setProtectedHeader({
      alg: "RS256",
      kid: LTI_KEY_ID
    })
    .setIssuedAt()
    .setIssuer(SITE)
    .setAudience("pulmolearn-lti-link")
    .setExpirationTime("10m")
    .sign(key);
}

function buildPickerHtml({
  returnUrl,
  canvasIssuer,
  deploymentId,
  deepLinkData
}) {
  const safeReturnUrl = htmlEscape(returnUrl);
  const safeIssuer = htmlEscape(canvasIssuer);
  const safeDeploymentId = htmlEscape(deploymentId);
  const safeDeepLinkData = htmlEscape(deepLinkData);
  const catalogJson = JSON.stringify(ltiCourses).replace(/</g, "\\u003c");

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PulmoLearn Lesson Picker</title>
  <style>
    :root {
      --navy:#0B1F33;
      --teal:#1CA7A8;
      --teal-dark:#128486;
      --mist:#F4FAFC;
      --white:#FFFFFF;
      --slate:#415A77;
      --border:#D7E6EF;
      --amber:#F4B860;
    }
    * { box-sizing:border-box; }
    body {
      margin:0;
      padding:24px;
      background:var(--mist);
      color:var(--navy);
      font-family:Arial,Helvetica,sans-serif;
    }
    .shell { max-width:920px; margin:0 auto; }
    .header {
      background:var(--navy);
      color:#fff;
      border-radius:20px;
      padding:24px;
      margin-bottom:18px;
    }
    .eyebrow {
      color:#8FE0D5;
      text-transform:uppercase;
      letter-spacing:.08em;
      font-weight:700;
      font-size:12px;
      margin-bottom:7px;
    }
    h1 { margin:0 0 8px; font-size:28px; }
    .header p { margin:0; color:#E8F3F6; line-height:1.5; }
    .controls {
      background:#fff;
      border:1px solid var(--border);
      border-radius:16px;
      padding:18px;
      margin-bottom:18px;
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:14px;
    }
    label {
      display:block;
      font-weight:700;
      margin-bottom:6px;
      font-size:14px;
    }
    select {
      width:100%;
      border:1px solid var(--border);
      border-radius:10px;
      padding:11px 12px;
      background:#fff;
      color:var(--navy);
      font-size:15px;
    }
    select:focus-visible,
    button:focus-visible {
      outline:3px solid var(--amber);
      outline-offset:3px;
    }
    .lesson-card {
      background:#fff;
      border:1px solid var(--border);
      border-left:6px solid var(--teal);
      border-radius:16px;
      padding:20px;
    }
    .lesson-card h2 {
      margin:0 0 8px;
      font-size:22px;
      line-height:1.3;
    }
    .meta {
      color:var(--slate);
      font-size:13px;
      font-weight:700;
      margin-bottom:10px;
    }
    .description {
      color:#243B55;
      line-height:1.55;
      margin:0 0 18px;
    }
    .add-btn {
      background:var(--teal);
      color:#fff;
      border:0;
      border-radius:11px;
      padding:12px 18px;
      font-weight:700;
      font-size:15px;
      cursor:pointer;
    }
    .add-btn:hover { background:var(--teal-dark); }
    .count {
      color:var(--slate);
      font-size:13px;
      margin-top:10px;
    }
    @media (max-width:700px) {
      body { padding:14px; }
      .controls { grid-template-columns:1fr; }
    }
  </style>
</head>
<body>
  <main class="shell">
    <section class="header">
      <div class="eyebrow">PulmoLearn External Tool</div>
      <h1>Select a PulmoLearn Lesson</h1>
      <p>Choose a course first, then select the lesson you want to add to this Canvas assignment.</p>
    </section>

    <section class="controls" aria-label="PulmoLearn lesson filters">
      <div>
        <label for="courseSelect">Course</label>
        <select id="courseSelect"></select>
      </div>
      <div>
        <label for="lessonSelect">Lesson</label>
        <select id="lessonSelect"></select>
      </div>
    </section>

    <section class="lesson-card" id="lessonCard"></section>
  </main>

  <script>
    const courses = ${catalogJson};

    const courseSelect = document.getElementById("courseSelect");
    const lessonSelect = document.getElementById("lessonSelect");
    const lessonCard = document.getElementById("lessonCard");

    function fillCourses() {
      courseSelect.innerHTML = courses.map(course =>
        '<option value="' + course.key + '">' + course.label + '</option>'
      ).join('');
      fillLessons();
    }

    function getCurrentCourse() {
      return courses.find(course => course.key === courseSelect.value) || courses[0];
    }

    function fillLessons() {
      const course = getCurrentCourse();
      lessonSelect.innerHTML = course.lessons.map(lesson =>
        '<option value="' + lesson.id + '">' + lesson.title + '</option>'
      ).join('');
      renderLesson();
    }

    function renderLesson() {
      const course = getCurrentCourse();
      const lesson = course.lessons.find(item => item.id === lessonSelect.value) || course.lessons[0];

      if (!lesson) {
        lessonCard.innerHTML = '<p>No lessons are available for this course.</p>';
        return;
      }

      const title = escapeHtml(lesson.title);
      const description = escapeHtml(lesson.description);
      const category = escapeHtml(lesson.category || course.label);
      const time = escapeHtml(lesson.time || '');
      const level = escapeHtml(lesson.level || '');

      lessonCard.innerHTML =
        '<h2>' + title + '</h2>' +
        '<div class="meta">' + category +
        (time ? ' · ' + time : '') +
        (level ? ' · ' + level : '') +
        '</div>' +
        '<p class="description">' + description + '</p>' +
        '<form method="POST" action="/api/lti/deep-link-response">' +
          '<input type="hidden" name="title" value="' + attr(lesson.title) + '">' +
          '<input type="hidden" name="lessonUrl" value="' + attr(lesson.url) + '">' +
          '<input type="hidden" name="lessonId" value="' + attr(lesson.id) + '">' +
          '<input type="hidden" name="returnUrl" value="${safeReturnUrl}">' +
          '<input type="hidden" name="canvasIssuer" value="${safeIssuer}">' +
          '<input type="hidden" name="deploymentId" value="${safeDeploymentId}">' +
          '<input type="hidden" name="deepLinkData" value="${safeDeepLinkData}">' +
          '<button class="add-btn" type="submit">Add to Canvas</button>' +
        '</form>' +
        '<div class="count">' + course.lessons.length + ' lessons in ' + escapeHtml(course.label) + '</div>';
    }

    function escapeHtml(value) {
      return String(value ?? '')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
    }

    function attr(value) {
      return escapeHtml(value);
    }

    courseSelect.addEventListener("change", fillLessons);
    lessonSelect.addEventListener("change", renderLesson);

    fillCourses();
  </script>
</body>
</html>
  `;
}

export default async function handler(req, res) {
  try {
    const params =
      req.method === "POST"
        ? req.body
        : req.query;

    const idToken =
      params?.id_token || "";

    if (!idToken) {
      return res.status(400).json({
        error: "Missing id_token"
      });
    }

    if (!CANVAS_ISSUER || !CLIENT_ID) {
      return res.status(500).json({
        error: "Missing Canvas LTI environment configuration"
      });
    }

    let payload;

    try {
      const result = await jwtVerify(
        idToken,
        getCanvasJwks(),
        {
          issuer: CANVAS_ISSUER,
          audience: CLIENT_ID
        }
      );

      payload = result.payload;
    } catch (error) {
      return res.status(401).json({
        error: "Invalid LTI token",
        details: error.message
      });
    }

    const messageType =
      payload[
        "https://purl.imsglobal.org/spec/lti/claim/message_type"
      ];

    if (messageType === "LtiDeepLinkingRequest") {
      const deepLinkSettings =
        payload[
          "https://purl.imsglobal.org/spec/lti-dl/claim/deep_linking_settings"
        ] || {};

      const returnUrl =
        deepLinkSettings.deep_link_return_url || "";

      const deepLinkData =
        deepLinkSettings.data || "";

      const canvasIssuer =
        payload.iss || CANVAS_ISSUER;

      const deploymentId =
        payload[
          "https://purl.imsglobal.org/spec/lti/claim/deployment_id"
        ] || "";

      if (!returnUrl || !deploymentId) {
        return res.status(400).json({
          error: "Canvas deep-link request is missing required settings"
        });
      }

      res.setHeader(
        "Content-Type",
        "text/html; charset=utf-8"
      );

      return res.status(200).send(
        buildPickerHtml({
          returnUrl,
          canvasIssuer,
          deploymentId,
          deepLinkData
        })
      );
    }

    if (messageType === "LtiResourceLinkRequest") {
      const custom =
        payload[
          "https://purl.imsglobal.org/spec/lti/claim/custom"
        ] || {};

      const lessonId =
        custom.lesson_id || "";

      const lessonUrl =
        custom.lesson_url || "";

      if (!lessonId || !lessonUrl) {
        return res.status(400).json({
          error: "Canvas resource link is missing PulmoLearn lesson information"
        });
      }

      const sub =
        payload.sub;

      const email =
        (payload.email || "")
          .trim()
          .toLowerCase();

      if (!sub) {
        return res.status(400).json({
          error: "Canvas launch is missing the user subject identifier"
        });
      }

      const agsEndpoint =
        payload[
          "https://purl.imsglobal.org/spec/lti-ags/claim/endpoint"
        ] || {};

      const agsLineItem =
        agsEndpoint.lineitem || null;

      const agsScopes =
        Array.isArray(agsEndpoint.scope)
          ? agsEndpoint.scope
          : [];

      console.log(
        "PulmoLearn LTI AGS context:",
        {
          lessonId,
          canvasSub: sub,
          lineItemPresent: Boolean(agsLineItem),
          scopes: agsScopes
        }
      );

      const handoff =
        await signHandoff({
          sub,
          email,
          lessonId,
          lessonUrl,
          agsLineItem,
          agsScopes
        });

      return redirect303(
        res,
        `${SITE}/login.html?lti_token=${encodeURIComponent(handoff)}`
      );
    }

    return res.status(400).json({
      error: "Unknown message type",
      messageType
    });

  } catch (error) {
    return res.status(500).json({
      error: "LTI launch failed",
      details: error.message
    });
  }
}
