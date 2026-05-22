// pages/api/test-lti-launch.js
import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    // Return an HTML form to trigger the launch
    return res.send(`
      <form method="POST">
        <button type="submit">Simulate Canvas LTI Launch</button>
      </form>
    `);
  }

  // Generate a mock JWT token
  const token = jwt.sign(
    {
      iss: 'https://canvas.instructure.com',
      sub: 'user-123',
      aud: 'your-client-id',
      exp: Math.floor(Date.now() / 1000) + 3600,
      iat: Math.floor(Date.now() / 1000),
      email: 'test@example.com',
      name: 'Test User',
      'https://purl.imsglobal.org/spec/lti/claim/roles': ['Instructor'],
      'https://purl.imsglobal.org/spec/lti/claim/context': {
        id: 'course-123',
        label: 'Test Course'
      }
    },
    'test-secret' // Use a test secret key
  );

  // Redirect to your launch endpoint with the token
  res.redirect(`/api/lti-launch?id_token=${token}`);
}
