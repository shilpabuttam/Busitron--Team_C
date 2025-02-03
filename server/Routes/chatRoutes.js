const express = require('express');
const router = express.Router();
const { saveMessage, getMessages } = require('../controllers/chatController');

// POST route to save a message
router.post('/send-message', async (req, res) => {
  const { messageContent, type } = req.body;

  try {
    await saveMessage(messageContent, type);
    res.status(200).send('Message saved');
  } catch (error) {
    res.status(500).send('Failed to save message');
  }
});

// GET route to fetch all messages
router.get('/messages', async (req, res) => {
  try {
    const messages = await getMessages();  // Fetch messages from the controller
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).send('Failed to fetch messages');
  }
});

module.exports = router;
