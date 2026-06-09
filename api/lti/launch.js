export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");

  return res.status(200).send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>PulmoLearn Picker Test</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 24px;
            background: #f4fafc;
            color: #0b1f33;
          }
          .card {
            background: white;
            border: 1px solid #d7e6ef;
            border-radius: 18px;
            padding: 20px;
            max-width: 700px;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>PulmoLearn Picker Loaded</h1>
          <p>If you can see this inside Canvas, the launch window is working.</p>
          <p>Next step: embed the lesson picker directly here.</p>
        </div>
      </body>
    </html>
  `);
}