const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const connetDB = require('./database/db');

const app = express();
app.use(express.json());

// MongoDB Connection
// mongoose.connect('mongodb://localhost:27017/user-profile', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// API Routes
app.use('/api/user', userRoutes);
connetDB();

app.listen(5500, () => console.log('Server running on port 5500'));
