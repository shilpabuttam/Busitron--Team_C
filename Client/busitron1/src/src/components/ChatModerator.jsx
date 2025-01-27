import React from 'react';

const ChatModerator = ({ onBlockUser, onDeleteMessage }) => (
    <div>
        <button onClick={onBlockUser}>Block User</button>
        <button onClick={onDeleteMessage}>Delete Message</button>
    </div>
);

export default ChatModerator;

