const express = require('express');
const router = express.Router();
const Activity = require('../Models/Activity');

// Record an activity
router.post('/', async (req, res) => {
  try {
    const activity = new Activity(req.body);
    await activity.save();
    res.status(201).json({ message: 'Activity recorded', activity });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Fetch user activities
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  const { type } = req.query;

  try {
    const filter = { userId };
    if (type) filter.type = type;

    const activities = await Activity.find(filter).sort({ timestamp: -1 });
    res.status(200).json(activities);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
