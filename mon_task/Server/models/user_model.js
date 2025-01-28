const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String, default: '' },
  bio: { type: String, default: '' },
  watchlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }],
  watchHistory: [
    {
      videoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' },
      lastWatchedTime: { type: Number, default: 0 },
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
