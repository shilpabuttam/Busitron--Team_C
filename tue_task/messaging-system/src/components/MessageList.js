
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MessageList = () => {
    const [messages, setMessages] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:5600/api/messages/get')
            .then(response => setMessages(response.data))
            .catch(error => console.error('Error fetching messages:', error));
    }, []);

 
    const handleDelete = async (messageId) => {
        try {
            await axios.delete(`http://localhost:5600/api/messages/delete/${messageId}`);
            setMessages(messages.filter(message => message._id !== messageId)); 
        } catch (error) {
            console.error('Error deleting message:', error);
            alert('Failed to delete message');
        }
    };

    return (
        <div className="container mt-4">
            <h2>Messages</h2>
            <div className="list-group">
                {messages.map((message, index) => (
                    <div key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <strong>{message.sender}</strong>: {message.content}
                            <small className="text-muted d-block">{new Date(message.timestamp).toLocaleString()}</small>
                        </div>
                        <button 
                            className="btn btn-danger btn-sm" 
                            onClick={() => handleDelete(message._id)}
                            title="Delete"
                        >
                            <i className="fas fa-trash-alt">Delete</i> 
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MessageList;
