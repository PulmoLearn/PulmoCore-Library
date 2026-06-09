export default async function handler(req, res) {
  try {
    // Allow both GET and POST for testing
    const params =
      req.method === "POST" ? req.body : req.query;

    console.log("LTI Launch Params:", params);

    const userName =
      params.lis_person_name_full ||
      params.custom_canvas_user_name ||
      "Canvas Student";

    // TEMP prototype redirect
    return res.redirect(
      `/foundations/Foundations_1_1_Professional_Communication_Conflict_Resolution.html?lti=1&user=${encodeURIComponent(userName)}`
    );
  } catch (error) {
    return res.status(500).json({
      error: "LTI launch failed",
      details: error.message
    });
  }
}