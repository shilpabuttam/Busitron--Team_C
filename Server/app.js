
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const activityRoutes = require('./routes/activityRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/userActivityDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/activities', activityRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
