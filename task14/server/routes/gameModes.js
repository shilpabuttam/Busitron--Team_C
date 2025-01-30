const express = require('express');
const { getGameModes } = require('../controllers/gameModeController');

const router = express.Router();

// Route for getting all game modes
router.get('/', getGameModes);

module.exports = router;
