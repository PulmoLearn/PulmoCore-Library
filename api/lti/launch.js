export default function handler(req, res) {
  try {
    const params = req.method === "POST" ? req.body : req.query;

    if (params.id_token) {
      return res.redirect("/lti-picker.html");
    }

    return res.status(400).json({
      error: "No id_token received",
      received: params
    });
  } catch (error) {
    return res.status(500).json({
      error: "Launch failed",
      details: error.message
    });
  }
}

