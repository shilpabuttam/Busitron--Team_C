const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const config = require('./config');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

  app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
  });
