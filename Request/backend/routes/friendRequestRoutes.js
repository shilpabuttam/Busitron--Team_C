const express = require('express');
const router = express.Router();
const FriendRequest = require('../models/FriendRequest');
const { sendFriendRequest } = require('../controllers/friendRequestController');


router.post('/send', sendFriendRequest);  
router.post('/send', async (req, res) => {
    const { senderId, receiverId } = req.body;

    const friendRequest = new FriendRequest({
        senderId,
        receiverId,
    });


    try {
        await friendRequest.save();
        res.status(201).json({ message: 'Friend request sent!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
