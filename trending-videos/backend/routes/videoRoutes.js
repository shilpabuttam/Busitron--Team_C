const express = require("express");
const Video = require("../models/Video");
const router = express.Router();

// Get trending videos
router.get("/", async (req, res) => {
  const { genre, region, timePeriod } = req.query;

  const timeFilter = timePeriod
    ? { createdAt: { $gte: new Date(Date.now() - timePeriod * 24 * 60 * 60 * 1000) } }
    : {};

  const filters = {
    ...(genre && { genre }),
    ...(region && { region }),
    ...timeFilter,
  };

  try {
    const videos = await Video.find(filters)
      .sort({ views: -1, likes: -1, shares: -1 })
      .limit(20);
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new video
router.post("/", async (req, res) => {
  const { title, genre, region, views, likes, shares } = req.body;

  try {
    const video = new Video({ title, genre, region, views, likes, shares });
    const savedVideo = await video.save();
    res.json(savedVideo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
