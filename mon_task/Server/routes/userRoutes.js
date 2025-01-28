const express = require('express');
const User = require('../models/user_model');
const bcrypt = require('bcrypt');
const router = express.Router();

// Upload/Update Profile Picture and Bio
router.put('/profile', async (req, res) => {
  const { userId, profilePicture, bio } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { profilePicture, bio },
      { new: true }
    );
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update profile' });
  }
});

// Change Username and Password
router.put('/credentials', async (req, res) => {
  const { userId, username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.findByIdAndUpdate(
      userId,
      { username, password: hashedPassword },
      { new: true }
    );
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update credentials' });
  }
});

router.get("/data",async(req,res)=>{
  res.status(200).json({message:"data fetched successfully"})
})

// Manage Watchlist
router.post('/watchlist', async (req, res) => {
  const { userId, videoId } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { watchlist: videoId } },
      { new: true }
    );
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update watchlist' });
  }
});

// Watch History
router.post('/watch-history', async (req, res) => {
  const { userId, videoId, lastWatchedTime } = req.body;
  try {
    const user = await User.findById(userId);
    const existingEntry = user.watchHistory.find((item) => item.videoId == videoId);
    if (existingEntry) {
      existingEntry.lastWatchedTime = lastWatchedTime;
    } else {
      user.watchHistory.push({ videoId, lastWatchedTime });
    }
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update watch history' });
  }
});

module.exports = router;
