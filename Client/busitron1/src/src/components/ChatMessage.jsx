import React from 'react';

const ChatMessage = ({ message }) => (
    <div className="message">
        <span>{message.timestamp}: </span>
        <span>{message.text}</span>
    </div>
);

export default ChatMessage;
