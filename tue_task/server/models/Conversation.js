

const mongoose = require('mongoose');

const ConversationSchema = new mongoose.Schema({
    participants: [String],
});


module.exports = mongoose.model('Conversation', ConversationSchema);