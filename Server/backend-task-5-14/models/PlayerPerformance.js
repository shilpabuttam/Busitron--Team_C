const mongoose = require('mongoose');

const performanceSchema = new mongoose.Schema({
  player_id: { type: Number, required: true },
  match_id: { type: Number, required: true },
  score: { type: Number, required: true },
  kills: { type: Number, required: true },
  deaths: { type: Number, required: true },
  assists: { type: Number, required: true },
  objective_contribution: { type: Number, required: true },
  damage_dealt: { type: Number, required: true },
  healing_support: { type: Number, required: true },
  survival_time: { type: Number, required: true },
  team_won: { type: Boolean, required: true }
});

module.exports = mongoose.model('PlayerPerformance', performanceSchema);