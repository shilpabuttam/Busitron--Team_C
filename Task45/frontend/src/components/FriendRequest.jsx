import React from "react";

const FriendRequest = ({ userId, friendRequests, acceptFriendRequest, rejectFriendRequest }) => {
  return (
    <div>
      {friendRequests
        .filter((request) => request.receiverId === userId)
        .map((request, index) => (
          <div key={index}>
            <span className="reqDesc">Friend request from {request.senderId}</span>
            <button onClick={() => acceptFriendRequest(request.senderId)} className="acceptButton">Accept</button>
            <button onClick={() => rejectFriendRequest(request.senderId)} className="rejectButton">Reject</button>
          </div>
        ))}
    </div>
  );
};

export default FriendRequest;
