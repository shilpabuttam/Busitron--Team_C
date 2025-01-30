


require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Allow requests from React frontend


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB Atlas"))
.catch(err => console.error("MongoDB Connection Error:", err));

// Define Player Schema
const PlayerSchema = new mongoose.Schema({
    username: String,
    score: Number,
    kills: Number,
    gameType: String,
    date: Date
});
const Player = mongoose.model('Player', PlayerSchema);

// API Route to Get Leaderboard Data
app.get('/api/leaderboard', async (req, res) => {
    try {
        const players = await Player.find().sort({ score: -1 }); // Sort by highest score
        res.json(players);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

