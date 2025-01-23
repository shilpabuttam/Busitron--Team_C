// server.js (Backend)
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000; // You can change this to any port you prefer

// Enable Cross-Origin Resource Sharing
app.use(cors());

// Sample data to mimic fetching video data (e.g., from a database)
const videos = [
  { id: "12345", title: "Sample Video 1", description: "A sample video description." },
  { id: "67890", title: "Sample Video 2", description: "Another sample video description." }
];

// Route to get video data
app.get('/api/videos', (req, res) => {
  res.json(videos);
});

// Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
