
const Message = require('../models/Message');

const sendMessage = async (req, res) => {
    try {
        const { content, sender } = req.body;
        if (!content || !sender) {
            return res.status(400).json({ error: 'Content and sender are required' });
        }
        const message = await Message.create({ content, sender });
        res.status(201).json({ message: 'Message sent', data: message });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
};

const getMessages = async (req, res) => {
    try {
        const messages = await Message.find({}).sort({ timestamp: -1 });
        res.status(200).json(messages);
    } catch (error) {
        console.error('Error retrieving messages:', error);
        res.status(500).json({ error: 'Failed to retrieve messages' });
    }
};


const deleteMessage = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMessage = await Message.findByIdAndDelete(id);

        if (!deletedMessage) {
            return res.status(404).json({ error: 'Message not found' });
        }

        res.status(200).json({ message: 'Message deleted successfully' });
    } catch (error) {
        console.error('Error deleting message:', error);
        res.status(500).json({ error: 'Failed to delete message' });
    }
};


module.exports = { sendMessage, getMessages, deleteMessage };
