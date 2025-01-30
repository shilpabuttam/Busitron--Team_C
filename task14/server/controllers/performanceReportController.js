const PerformanceReport = require('../models/performanceReport');

// Get performance reports
const getPerformanceReports = async (req, res) => {
  try {
    const reports = await PerformanceReport.find();
    res.json(reports);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

module.exports = { getPerformanceReports };
