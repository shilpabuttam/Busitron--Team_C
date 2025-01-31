const express = require('express');
const router = express.Router();
const Notification = require('../models/Notification');

router.post('/send', async (req, res) => {
    const { userId, message, type } = req.body;

    const notification = new Notification({
        userId,
        message,
        type,
    });

    try {
        await notification.save();
        res.status(201).json({ message: 'Notification sent!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
