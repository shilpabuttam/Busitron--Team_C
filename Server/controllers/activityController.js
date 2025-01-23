// server/controllers/activityController.js
const UserActivity = require('../models/userActivity');

exports.logActivity = async (req, res) => {
  try {
    const { userId, videoId, activityType, additionalData } = req.body;
    const newActivity = new UserActivity({
      userId,
      videoId,
      activityType,
      additionalData,
    });

    await newActivity.save();
    res.status(200).send('Activity logged successfully!');
  } catch (err) {
    res.status(500).send('Error logging activity');
  }
};
