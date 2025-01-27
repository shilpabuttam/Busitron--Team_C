// Import required modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import routes
const videoRoutes = require('./routes/videoRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');

// Initialize express app
const app = express();

// Middleware for handling JSON requests and CORS
app.use(bodyParser.json());
app.use(cors());

// Define API routes
app.use('/api/videos', videoRoutes);
app.use('/api/analytics', analyticsRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Video Streaming Platform!');
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
