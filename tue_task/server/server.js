

const express = require('express');
// const dotenv = require('dotenv');
const connectDB = require('./config/db');
const messageRoutes = require('./routes/messageRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();
const cors = require('cors');
app.use(cors());

port=5600


// dotenv.config();
connectDB();

app.use(express.json());

app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

// const PORT = process.env.PORT || 5500;
app.listen(port, () => console.log(`Server running on port ${port}`));