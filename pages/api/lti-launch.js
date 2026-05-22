// pages/api/lti-launch.js
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  try {
    const { id_token } = req.query;

    // For testing, use test-secret. For production, fetch from Canvas JWKS
    const decoded = jwt.verify(id_token, 'test-secret', {
      algorithms: ['HS256']
    });

    console.log('✅ Token valid!');
    console.log('User:', decoded.email);
    console.log('Course:', decoded['https://purl.imsglobal.org/spec/lti/claim/context'].label);

    // For now, just show the user data
    res.json({
      success: true,
      user: decoded.email,
      course: decoded['https://purl.imsglobal.org/spec/lti/claim/context'].label,
      roles: decoded['https://purl.imsglobal.org/spec/lti/claim/roles']
    });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}
