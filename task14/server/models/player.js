// backend/models/player.js
const mongoose = require('mongoose');

// Define the player schema
const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  winLossRatio: {
    type: Number,
    required: true,
  },
  averagePlaytime: {
    type: Number,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
