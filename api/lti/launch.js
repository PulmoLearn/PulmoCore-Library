export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).send("Method not allowed");
    }

    const jose = await import("jose");

    return res.status(200).json({
      message: "LTI launch endpoint is alive",
      joseLoaded: true,
      joseKeys: Object.keys(jose).slice(0, 5)
    });
  } catch (error) {
    return res.status(500).json({
      error: "Launch test failed",
      details: error.message
    });
  }
}