const FriendRequest = require("../models/FriendRequest");
const User = require("../models/User");

// Send Friend Request
exports.sendFriendRequest = async (req, res) => {
  const { senderId, receiverId } = req.body;

  const existingRequest = await FriendRequest.findOne({ sender: senderId, receiver: receiverId });
  if (existingRequest) return res.status(400).json({ message: "Request already sent" });

  const request = new FriendRequest({ sender: senderId, receiver: receiverId });
  await request.save();

  res.status(200).json({ message: "Friend request sent!" });
};

// Accept Friend Request
exports.acceptFriendRequest = async (req, res) => {
  const { requestId } = req.body;

  const request = await FriendRequest.findById(requestId);
  if (!request) return res.status(404).json({ message: "Request not found" });

  request.status = "accepted";
  await request.save();

  await User.findByIdAndUpdate(request.sender, { $push: { friends: request.receiver } });
  await User.findByIdAndUpdate(request.receiver, { $push: { friends: request.sender } });

  res.status(200).json({ message: "Friend request accepted!" });
};

// Get Friend List
exports.getFriends = async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId).populate("friends", "username onlineStatus");
  res.status(200).json(user.friends);
};
