
const mongoose = require("mongoose");

const gameModeSchema = new mongoose.Schema({
  name: String,
  description: String,
  rules: [String], 
  difficulty: String,
  duration: Number,
  maxPlayers: {
    type: Number,
    min: 1,
    max: 10,
  },
  custom: { type: Boolean, default: false },
});

module.exports = mongoose.model("GameMode", gameModeSchema);