const MessageModel = require('../Models/messageModel');  // Assuming you have a Mongoose model for messages

// Save a new message to the database
const saveMessage = async (messageContent, type) => {
  const newMessage = new MessageModel({
    messageContent,
    type,
    timestamp: new Date()
  });
  await newMessage.save();
};

// Retrieve all messages from the database
const getMessages = async () => {
  return await MessageModel.find().sort({ timestamp: -1 });  // Fetch messages sorted by most recent
};

module.exports = {
  saveMessage,
  getMessages
};
