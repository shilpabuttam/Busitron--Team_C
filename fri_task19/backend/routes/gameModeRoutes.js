
const express = require("express");
const gameModeController = require("../controllers/gameModeController");
const router = express.Router();


router.get("/game-modes", gameModeController.getGameModes);
router.post("/game-modes", gameModeController.createGameMode);

module.exports = router;