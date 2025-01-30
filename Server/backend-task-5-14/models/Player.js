const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    username: { type: String, required: true },
    score: { type: Number, required: true },
    kills: { type: Number, required: true },
    gameType: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
