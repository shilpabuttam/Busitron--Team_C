import React, { useState } from "react";

const InviteFriend = ({ userId, sendFriendRequest }) => {
  const [friendId, setFriendId] = useState("");

  const handleInvite = () => {
    sendFriendRequest(friendId);
    setFriendId("");
  };

  return (
    <div >
      <input className="inviteInput"
        type="text"
        placeholder="Enter friend ID"
        value={friendId}
        onChange={(e) => setFriendId(e.target.value)}
      />
      <button onClick={handleInvite} className="reqButton">Send Friend Request</button>
    </div>
  );
};

export default InviteFriend;
