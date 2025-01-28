const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
    {
        content: { type: String, required: true },
        sender: { type: String, required: true },
        timestamp: { type: Date, default: Date.now },
    },
    { versionKey: false }
);

module.exports = mongoose.model('Message', messageSchema);
