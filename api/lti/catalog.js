import { ltiCourses } from "../../lib/lti-course-catalog.js";

export default function handler(req, res) {
  res.setHeader("Cache-Control", "public, max-age=300");
  return res.status(200).json({
    courses: ltiCourses
  });
}
