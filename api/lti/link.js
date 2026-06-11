import { jwtVerify, importSPKI } from "jose";
import { createClient } from "@supabase/supabase-js";

const LTI_PUBLIC_KEY = process.env.LTI_PUBLIC_KEY; // PEM (SPKI) string
const SITE = "https://www.pulmolearn.com";

// Service-role client — bypasses RLS, used to write the link + read access.
const admin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE
);

// A second client used ONLY to validate the caller's access token.
const authClient = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE
);

async function verifyHandoff(token) {
  const key = await importSPKI(LTI_PUBLIC_KEY, "RS256");
  const { payload } = await jwtVerify(token, key, {
    issuer: SITE,
    audience: "pulmolearn-lti-link",
  });
  return payload; // { sub, email, lessonId, lessonUrl }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const ltiToken = body?.lti_token;
    const accessToken = body?.access_token; // Supabase session access token

    if (!ltiToken || !accessToken) {
      return res
        .status(400)
        .json({ error: "Missing lti_token or access_token" });
    }

    // 1) Verify the handoff token → trustworthy Canvas sub + lesson
    let handoff;
    try {
      handoff = await verifyHandoff(ltiToken);
    } catch (err) {
      return res
        .status(401)
        .json({ error: "Invalid or expired lti_token", details: err.message });
    }

    // 2) Identify the logged-in user from their Supabase access token
    const { data: userData, error: userErr } =
      await authClient.auth.getUser(accessToken);
    if (userErr || !userData?.user) {
      return res
        .status(401)
        .json({ error: "Invalid session", details: userErr?.message });
    }
    const userId = userData.user.id;

    // 3) Link sub ↔ user_id (idempotent). One Canvas identity → one account.
    const { error: linkErr } = await admin.from("lti_users").upsert(
      {
        lti_sub: handoff.sub,
        user_id: userId,
        lti_email: handoff.email || null,
        linked_at: new Date().toISOString(),
      },
      { onConflict: "lti_sub" }
    );
    if (linkErr) {
      return res
        .status(500)
        .json({ error: "Link failed", details: linkErr.message });
    }

    // 4) Check entitlement and tell the client where to go next
    const { data: access } = await admin
      .from("user_access")
      .select("user_id")
      .eq("user_id", userId)
      .maybeSingle();

    const lessonUrl = handoff.lessonUrl || `${SITE}/dashboard.html`;
    const finalLessonUrl = lessonUrl.includes("?")
      ? lessonUrl + "&lti=1"
      : lessonUrl + "?lti=1";

    return res.status(200).json({
      ok: true,
      redirect: access
        ? finalLessonUrl
        : `${SITE}/payment.html?lesson=${encodeURIComponent(handoff.lessonId || "")}`,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Link endpoint failed", details: error.message });
  }
}