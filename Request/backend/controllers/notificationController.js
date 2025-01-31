const Notification = require('../models/Notification');

exports.sendNotification = async (req, res) => {
    const { userId, message, type } = req.body;

    try {
        const notification = new Notification({
            userId,
            message,
            type,
        });

        await notification.save();
        res.status(201).json({ message: 'Notification sent successfully!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
