// backend/models/gameMode.js
const mongoose = require('mongoose');

// Define the game mode schema
const gameModeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  popularity: {
    type: Number,
    required: true,
  },
});

const GameMode = mongoose.model('GameMode', gameModeSchema);

module.exports = GameMode;
