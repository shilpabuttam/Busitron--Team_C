import React, { useState } from 'react';
import { useWebSocket } from '../utilities/websocket';
import './ChatBox.css'; // Add a CSS file for styling if needed.

const ChatBox = () => {
    const [message, setMessage] = useState('');
    const { sendMessage } = useWebSocket();

    const handleSend = () => {
        if (message.trim()) {
            sendMessage({ text: message, timestamp: new Date() });
            setMessage('');
        }
    };

    return (
        <div className="chat-box-container">
            <div className="chat-input-wrapper">
                <input
                    type="text"
                    className="chat-input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                />
                <button className="send-button" onClick={handleSend}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatBox;
