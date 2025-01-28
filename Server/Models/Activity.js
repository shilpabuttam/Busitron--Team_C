const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['video_view', 'subscription', 'comment'], required: true },
  videoId: { type: Schema.Types.ObjectId, ref: 'Video' },
  commentId: { type: Schema.Types.ObjectId, ref: 'Comment' },
  subscriptionId: { type: Schema.Types.ObjectId, ref: 'Subscription' },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Activity', activitySchema);
