import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const socket = io("http://localhost:5000");

export default function FriendSystem() {
  const [friends, setFriends] = useState([]);
  const [requests, setRequests] = useState([]);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("friendRequest", (request) => {
      setRequests((prev) => [...prev, request]);
    });

    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("friendRequest");
      socket.off("message");
    };
  }, []);

  const addFriend = async () => {
    await fetch("http://localhost:5000/add-friend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: search }),
    });
    setSearch("");
  };

  const acceptRequest = async (id) => {
    await fetch("http://localhost:5000/accept-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setRequests(requests.filter((req) => req.id !== id));
  };

  const sendMessage = () => {
    if (selectedFriend) {
      socket.emit("sendMessage", { to: selectedFriend.id, message });
      setMessages([...messages, { to: selectedFriend.id, message }]);
      setMessage("");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Friend System</h2>
      <div className="my-2 flex">
        <Input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by username"
        />
        <Button onClick={addFriend}>Add</Button>
      </div>

      <h3 className="text-lg font-semibold">Friend Requests</h3>
      {requests.map((req) => (
        <div key={req.id} className="flex justify-between p-2 border-b">
          <span>{req.username}</span>
          <Button onClick={() => acceptRequest(req.id)}>Accept</Button>
        </div>
      ))}

      <h3 className="text-lg font-semibold">Friends</h3>
      {friends.map((friend) => (
        <div
          key={friend.id}
          className={`p-2 border-b cursor-pointer ${
            selectedFriend?.id === friend.id ? "bg-gray-200" : ""
          }`}
          onClick={() => setSelectedFriend(friend)}
        >
          {friend.username} ({friend.online ? "Online" : "Offline"})
        </div>
      ))}

      {selectedFriend && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Chat with {selectedFriend.username}</h3>
          <div className="h-40 overflow-y-auto border p-2 mb-2">
            {messages
              .filter((msg) => msg.to === selectedFriend.id)
              .map((msg, index) => (
                <div key={index}>{msg.message}</div>
              ))}
          </div>
          <div className="flex">
            <Input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message"
            />
            <Button onClick={sendMessage}>Send</Button>
          </div>
        </div>
      )}
    </div>
  );
}
