

const express = require('express');
const router = express.Router();
const { sendMessage, getMessages ,deleteMessage} = require('../controllers/messageController');

router.post('/send', sendMessage);
router.get('/get', getMessages);
router.delete('/delete/:id', deleteMessage);

module.exports = router;
