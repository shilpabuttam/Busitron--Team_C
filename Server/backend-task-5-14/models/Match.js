const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  match_id: { type: Number, required: true, unique: true },
  match_date: { type: Date, default: Date.now },
  map_name: { type: String, required: false },
  game_mode: { type: String, required: true }
});

module.exports = mongoose.model('Match', matchSchema);