const express = require("express");
const router = express.Router();
const friendController = require("../controllers/friendController");

router.post("/send-request", friendController.sendFriendRequest);
router.post("/accept-request", friendController.acceptFriendRequest);
router.get("/friends/:id", friendController.getFriends);

module.exports = router;
