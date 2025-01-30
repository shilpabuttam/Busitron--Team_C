const express = require('express');
const { getPerformanceReports } = require('../controllers/performanceReportController');

const router = express.Router();

// Route for getting performance reports
router.get('/', getPerformanceReports);

module.exports = router;
