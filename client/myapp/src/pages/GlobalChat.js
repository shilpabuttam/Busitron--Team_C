import React, { useEffect, useState } from "react";
import ChatBox from "../components/ChatBox";
import socket from "../socket"; // Import the socket connection

const GlobalChat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Listen for incoming messages
    socket.on("message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = (message) => {
    socket.emit("message", { text: message, sender: "me" }, () => {
      console.log("Message sent");
    });
  };

  return (
    <div className="container mt-4">
      <h2>Global Chat</h2>
      <ChatBox messages={messages} sendMessage={sendMessage} />
    </div>
  );
};

export default GlobalChat;
