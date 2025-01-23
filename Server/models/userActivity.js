// server/models/UserActivity.js
const mongoose = require('mongoose');

const UserActivitySchema = new mongoose.Schema({
  userId: { type: String, required: true },
  videoId: { type: String, required: true },
  activityType: { type: String, enum: ['view', 'like', 'share', 'comment', 'purchase'], required: true },
  timestamp: { type: Date, default: Date.now },
  additionalData: { type: Object },  // Extra data like comment text or purchase details
});

module.exports = mongoose.model('UserActivity', UserActivitySchema);
