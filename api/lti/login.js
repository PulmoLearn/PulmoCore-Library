export default function handler(req, res) {
  res.status(200).json({
    message: "PulmoLearn LTI login endpoint reached",
    method: req.method,
    query: req.query || {},
    body: req.body || {}
  });
}