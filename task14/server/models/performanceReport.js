// backend/models/performanceReport.js
const mongoose = require('mongoose');

// Define the performance report schema
const performanceReportSchema = new mongoose.Schema({
  playerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: true,
  },
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team', // Assuming you have a Team model as well
  },
  peakPlayHours: {
    type: String,
    required: true,
  },
  frequentUsers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
  }],
});

const PerformanceReport = mongoose.model('PerformanceReport', performanceReportSchema);

module.exports = PerformanceReport;
