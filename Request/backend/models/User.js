const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    notifications: Array,
    friendRequests: Array,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
