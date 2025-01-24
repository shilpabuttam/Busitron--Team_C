const express = require("express");
const { getEmbedPage, trackEngagement } = require("../controllers/embedController");
const router = express.Router();

router.get("/:videoId", getEmbedPage); // Route for iframe embed page
router.post("/track", trackEngagement); // Route for engagement tracking

module.exports = router;
