
const express = require('express');
const mongoose = require('mongoose');
const gameModeRoutes = require('./routes/gameModeRoutes');
const connectDB = require('./config/db');
const cors=require("cors")

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
connectDB();



app.use('/api', gameModeRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));