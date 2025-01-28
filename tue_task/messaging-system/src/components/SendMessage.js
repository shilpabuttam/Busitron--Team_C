

import React, { useState } from 'react';
import axios from 'axios';

const SendMessage = () => {
    const [content, setContent] = useState('');
    const [sender, setSender] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5600/api/messages/send', { content, sender });
            alert(response.data.message);
            setContent('');
            setSender('');
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message');
        }
    };

    return (
        <div className="container mt-4">
            <h2>Send Message</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Sender</label>
                    <input
                        type="text"
                        className="form-control"
                        value={sender}
                        onChange={(e) => setSender(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea
                        className="form-control"
                        rows="3"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
            </form>
        </div>
    );
};

export default SendMessage;
