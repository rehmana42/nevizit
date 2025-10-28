const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors'); // Optional, for handling CORS
const app = express();
const port = 5173;

app.use(cors()); // Enable CORS for all origins

app.get('/api/places', async (req, res) => {
  const { latitude, longitude, type } = req.query;
  const API_KEY = 'AIzaSyCzrlSgiR2oVqdz_AWc1JRlWdt266GNTxc'; // Replace with your Google API key
  const radius = 5000; // Adjust radius as needed
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${type}&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => console.log(`Proxy server running on http://localhost:${port}`));
