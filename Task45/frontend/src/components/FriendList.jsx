import React from "react";

const FriendList = ({ userId, users }) => {
  const user = users.find((user) => user.id === userId);
  return (
    <div className="friendsList">
      {user && user.friends.length > 0 ? (
        user.friends.map((friendId, index) => (
          <div key={index}>{friendId}</div>
        ))
      ) : (
        <p>No friends yet.</p>
      )}
    </div>
  );
};

export default FriendList;
