const express = require('express');
const { getPlayerStats } = require('../controllers/playerController');

const router = express.Router();

// Route for getting all player stats
router.get('/', getPlayerStats);

module.exports = router;
