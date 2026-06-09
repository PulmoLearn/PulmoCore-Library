export default function handler(req, res) {
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
    <button onclick="selectLesson('Foundations 1.1: Professional Communication & Conflict Resolution', '/foundations/Foundations_1_1_Professional_Communication_Conflict_Resolution.html')">
      Add to Canvas
    </button>
  </div>

  <div class="lesson-card">
    <h2>Foundations 1.2: Medical Math, Units & Dosage Calculations</h2>
    <p>Metric conversions, dimensional analysis, and dosage calculations.</p>
    <button onclick="selectLesson('Foundations 1.2: Medical Math, Units & Dosage Calculations', '/foundations/Foundations_1_2_Medical_Math_Units_Dosage_Calculations.html')">
      Add to Canvas
    </button>
  </div>

  <script>
    function selectLesson(title, url) {
      alert("Selected: " + title + "\\n\\nNext step is sending this selection back to Canvas.");
    }
  </script>
</body>
</html>
  `);
}