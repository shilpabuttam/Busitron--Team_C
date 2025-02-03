import React, { useState } from "react";
import axios from "axios";  // Import Axios

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSendClick = async () => {
    if (message.trim()) {
      // Send message via WebSocket
      onSendMessage(message);

      try {
        // Send message to backend using Axios POST request
        await axios.post("http://localhost:4000/send-message", { 
          messageContent: message,  // Match backend expectation
          type: "global"            // Set message type as global
        });

        console.log("Message sent to backend successfully!");
      } catch (error) {
        console.error("Error sending message to backend:", error);
      }

      setMessage(""); // Clear the input after sending the message
    }
  };

  return (
    <div className="d-flex p-2">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleSendClick}>Send</button>
    </div>
  );
};

export default MessageInput;
