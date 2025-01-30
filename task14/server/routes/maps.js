const express = require('express');
const { getMaps } = require('../controllers/mapController');

const router = express.Router();

// Route for getting all maps
router.get('/', getMaps);

module.exports = router;
