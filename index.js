import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5173;
const app = express();

app.get('/iberia/discordoauth/redirect', async (req, res) => {
  const { code, state } = req.query;

  if (!code) {
    return res.status(400).json({ error: 'Missing code' });
  }

  console.log("🔹 Received OAuth code:", code);
  console.log("🔹 ClientId:", process.env.ClientId);
  console.log("🔹 ClientSecret length:", process.env.ClientSecret?.length);

  const formData = new URLSearchParams({
    client_id: process.env.ClientId,
    client_secret: process.env.ClientSecret,
    grant_type: 'authorization_code',
    code: code.toString(),
    redirect_uri: 'https://priyaang.github.io/iberia/discordoauth/redirect',
  });

  try {
    const output = await axios.post(
      'https://discord.com/api/v10/oauth2/token',
      formData,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    console.log("✅ Token exchange success:", output.data);

    const userinfo = await axios.get(
      'https://discord.com/api/v10/users/@me',
      {
        headers: {
          Authorization: `Bearer ${output.data.access_token}`,
        },
      }
    );

    console.log("✅ User info:", userinfo.data);
    console.log(userinfo.data.username)
     res.redirect(`https://priyaang.github.io/iberia/index.html?username=${encodeURIComponent(userinfo.data.username)}&state=${encodeURIComponent(state)}`);

  } catch (err) {
    console.error("❌ Token exchange failed:");
    console.error(err.response?.status, err.response?.data);
    return res.status(500).json({ 
      error: 'OAuth failed', 
      details: err.response?.data 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
