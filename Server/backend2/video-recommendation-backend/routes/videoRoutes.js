const express = require("express");
const router = express.Router();
const {
  getVideos,
  updateVideoStats,
  getRecommendations,
} = require("../controllers/videoController");

router.get("/videos", getVideos);
router.post("/videos/update", updateVideoStats);
router.get("/videos/recommendations", getRecommendations);

module.exports = router;
