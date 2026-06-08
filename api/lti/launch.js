export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  return res.status(200).json({
    message: "LTI launch endpoint is alive"
  });
}