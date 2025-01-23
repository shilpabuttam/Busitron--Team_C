const express = require('express');
const router = express.Router();
const ActivityController = require('../controllers/activityController');

router.post('/log', ActivityController.logActivity);

module.exports = router;