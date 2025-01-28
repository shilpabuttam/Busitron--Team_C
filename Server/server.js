// require('dotenv').config();
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const connectDB = require('./Database/db');
// const activityRoutes = require('./Routes/activity');

// // Connect to MongoDB
// connectDB();

// // Initialize Express app
// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // Routes
// app.use('/api/activity', activityRoutes);

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// Example of server setup with routes
require('dotenv').config();
const express = require('express');
const app = express();
// const mongoose = require('mongoose');
const cors = require('cors');

const connectDB=require('./Database/db')

// Middleware
app.use(express.json());

app.use(cors()); // Enable CORS for all routes


const Activity=require('./Models/Activity')


// Define a route for GET request to the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Activity Log API');
});



app.get('/api/activity-log', async (req, res) => {
  const { filter } = req.query;
  let activities;

  if (filter === 'all') {
      activities = await Activity.find();  // Fetch all activities
  } else {
      activities = await Activity.find({ type: filter });  // Fetch based on type
  }

  res.json(activities);
});






connectDB()
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
