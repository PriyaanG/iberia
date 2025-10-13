require('dotenv').config();
const express = require('express');
const axios = require('axios');
const PORT = process.env.PORT;
const app = express();

app.get('/iberia/discordoauth/redirect', async (req, res) => {
  const { code, state } = req.query;

  if (!code) {
    return res.status(400).json({ error: 'Missing code' });
  }

  console.log("🔹 Received OAuth code:", code);
  console.log("🔹 ClientId:", process.env.ClientId);
  console.log("🔹 ClientSecret length:", process.env.ClientSecret?.length);
  console.log("🔹 Redirect URI:", 'https://congenial-happiness-g4x94w967vvjh9g9q-5174.app.github.dev/iberia/discordoauth/redirect');

  const formData = new URLSearchParams({
    client_id: process.env.ClientId,
    client_secret: process.env.ClientSecret,
    grant_type: 'authorization_code',
    code: code.toString(),
    redirect_uri: 'https://congenial-happiness-g4x94w967vvjh9g9q-5174.app.github.dev/iberia/discordoauth/redirect',
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
     res.redirect(`https://congenial-happiness-g4x94w967vvjh9g9q-5173.app.github.dev/iberia/index.html?username=${encodeURIComponent(userinfo.data.username)}&state=${encodeURIComponent(state)}`);

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
