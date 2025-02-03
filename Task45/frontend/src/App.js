import React, { useState, useEffect } from "react";
import FriendList from "./components/FriendList";
import FriendRequest from "./components/FriendRequest";
import InviteFriend from "./components/InviteFriend";
import Notifications from "./components/Notifications";
import './styles/styles.css'

const App = () => {
  const [userId] = useState("user1"); 
  
  const [users, setUsers] = useState([
    { id: "user1", username: "John", friends: ["user2"], notifications: [] },
    { id: "user2", username: "Alice", friends: ["user1"], notifications: [] },
    { id: "user3", username: "Bob", friends: ["user1"], notifications: [] }
  ]);

  const [friendRequests, setFriendRequests] = useState([
    { senderId: "user1", receiverId: "user2", status: "pending" }
  ]);

  const sendFriendRequest = (receiverId) => {
    setFriendRequests([...friendRequests, { senderId: userId, receiverId, status: "pending" }]);
  };

  const acceptFriendRequest = (requestId) => {
    const request = friendRequests.find((req) => req.senderId === requestId);
    if (request) {
      const updatedUsers = users.map((user) => {
        if (user.id === request.senderId || user.id === request.receiverId) {
          return { ...user, friends: [...user.friends, request.receiverId] };
        }
        return user;
      });
      setUsers(updatedUsers);

      addNotification(request.senderId, `${request.receiverId} accepted your friend request.`);
      addNotification(request.receiverId, `You accepted ${request.senderId}'s friend request.`);

      setFriendRequests(friendRequests.filter((req) => req !== request));
    }
  };

  const rejectFriendRequest = (requestId) => {
    const request = friendRequests.find((req) => req.senderId === requestId);
    if (request) {
      addNotification(request.senderId, `${request.receiverId} rejected your friend request.`);
      setFriendRequests(friendRequests.filter((req) => req.senderId !== requestId));
    }
  };

  const addNotification = (userId, message) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        return { ...user, notifications: [...user.notifications, message] };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  return (
    <div className="App">
      <h1 className="taskTitle">Friend System...</h1>
      <div className="mainContainer">
        <div>

        </div>
        <div>
          
        </div>
      </div>
      {/* Invite Friend Section */}
      <div className="invites">
        <h2 className="inviteTitle">Invite a Friend...</h2>
        <InviteFriend userId={userId} sendFriendRequest={sendFriendRequest} />
      </div>

      {/* Friend Requests Section */}
      <div className="invites">
        <h2 className="inviteTitle">Friend Requests...</h2>
        <FriendRequest
          userId={userId}
          friendRequests={friendRequests}
          acceptFriendRequest={acceptFriendRequest}
          rejectFriendRequest={rejectFriendRequest}
        />
      </div>

      {/* Friends List Section */}
      <div className="invites">
        <h2 className="inviteTitle">Your Friends...</h2>
        <FriendList userId={userId} users={users} />
      </div>

      {/* Notifications Section */}
      <div className="invites">
        <h2 className="inviteTitle">Notifications...</h2>
        <Notifications users={users} userId={userId} />
      </div>
    </div>
  );
};

export default App;
