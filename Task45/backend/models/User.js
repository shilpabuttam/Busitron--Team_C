const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  onlineStatus: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", UserSchema);
