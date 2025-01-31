const FriendRequest = require('../models/FriendRequest');

exports.sendFriendRequest = async (req, res) => {
    const { senderId, receiverId } = req.body;

    try {
        const friendRequest = new FriendRequest({
            senderId,
            receiverId,
        });

        await friendRequest.save();
        res.status(201).json({ message: 'Friend request sent successfully!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
