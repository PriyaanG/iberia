import axios from 'axios';

export default async function handler(req, res) {
  const { code, state } = req.query;

  if (!code) {
    return res.status(400).json({ error: 'Missing code' });
  }

  try {
    const formData = new URLSearchParams({
      client_id: process.env.ClientId,
      client_secret: process.env.ClientSecret,
      grant_type: 'authorization_code',
      code: code.toString(),
      redirect_uri: 'https://iberiava.vercel.app/api/discordoauth.js',
    });

    const output = await axios.post(
      'https://discord.com/api/v10/oauth2/token',
      formData,
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    const userinfo = await axios.get(
      'https://discord.com/api/v10/users/@me',
      { headers: { Authorization: `Bearer ${output.data.access_token}` } }
    );

    res.redirect(
      `https://iberiava.vercel.app/booking.html?username=${encodeURIComponent(
        userinfo.data.username
      )}&state=${encodeURIComponent(state)}`
    );
  } catch (err) {
    console.error("❌ OAuth failed:", err.response?.data);
    res.status(500).json({ error: 'OAuth failed', details: err.response?.data });
  }
}
