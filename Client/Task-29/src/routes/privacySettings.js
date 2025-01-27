const express = require('express');
const PrivacySettings = require('../models/PrivacySettings');
const router = express.Router();

// Update Privacy Settings
router.put('/update-privacy-settings', async (req, res) => {
    try {
        const { userId, profileVisibility, videoVisibility, commentVisibility, twoFactorEnabled } = req.body;

        // Check if the user exists and update their privacy settings
        let settings = await PrivacySettings.findOne({ userId });

        if (!settings) {
            settings = new PrivacySettings({
                userId,
                profileVisibility,
                videoVisibility,
                commentVisibility,
                twoFactorEnabled,
            });
        } else {
            settings.profileVisibility = profileVisibility;
            settings.videoVisibility = videoVisibility;
            settings.commentVisibility = commentVisibility;
            settings.twoFactorEnabled = twoFactorEnabled;
        }

        await settings.save();
        res.json({ message: "Privacy settings updated successfully" });
    } catch (error) {
        console.error("Error updating privacy settings:", error);
        res.status(500).json({ error: "Failed to update privacy settings" });
    }
});

module.exports = router;
