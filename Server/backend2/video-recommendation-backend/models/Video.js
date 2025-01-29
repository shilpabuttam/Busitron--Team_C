const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  tags: [String],
  watchHistory: [{ userId: String }],
});

module.exports = mongoose.model("Video", videoSchema);
