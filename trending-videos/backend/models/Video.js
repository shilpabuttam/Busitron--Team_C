const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    title: String,
    genre: String,
    region: String,
    views: Number,
    likes: Number,
    shares: Number,
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Video", videoSchema);
