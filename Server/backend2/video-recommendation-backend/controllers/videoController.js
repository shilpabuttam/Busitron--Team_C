const Video = require("../models/Video");

// Get all videos
exports.getVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update video stats
exports.updateVideoStats = async (req, res) => {
  const { videoId, userId, action } = req.body;

  try {
    const video = await Video.findById(videoId);
    if (!video) return res.status(404).json({ error: "Video not found" });

    if (action === "like") video.likes += 1;
    else if (action === "dislike") video.dislikes += 1;
    else if (action === "watch") video.watchHistory.push({ userId });

    await video.save();
    res.json(video);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get recommended videos
exports.getRecommendations = async (req, res) => {
  try {
    const videos = await Video.find().sort({ likes: -1 });
    res.json(videos.slice(0, 5));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
