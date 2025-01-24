import React, { useState } from 'react';
import axios from 'axios';
import './PreferencesForm.css';

const PreferencesForm = () => {
    const [email, setEmail] = useState('');
    const [genres, setGenres] = useState('');
    const [categories, setCategories] = useState('');
    const [type, setType] = useState('in-app');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/add-preference', {
                userEmail: email,
                genres: genres.split(',').map((g) => g.trim()), // Convert comma-separated string to an array
                categories: categories.split(',').map((c) => c.trim()),
                notificationType: type,
            });
            setResponseMessage(response.data);
        } catch (error) {
            console.error('Error saving preferences:', error);
            setResponseMessage('Failed to save preferences.');
        }
    };

    return (
        <div className="preferences-form">
            <h2>Set Notification Preferences</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email: </label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Genres: </label>
                    <select value={genres} onChange={(e) => setGenres(e.target.value)} required>
                        <option value="">Select Genre</option>
                        <option value="Action">Action</option>
                        <option value="Drama">Drama</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Horror">Horror</option>
                        <option value="Romance">Romance</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Categories: </label>
                    <select value={categories} onChange={(e) => setCategories(e.target.value)} required>
                        <option value="">Select Category</option>
                        <option value="Movies">Movies</option>
                        <option value="Books">Books</option>
                        <option value="Music">Music</option>
                        <option value="Sports">Sports</option>
                        <option value="Technology">Technology</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Notification Type: </label>
                    <select value={type} onChange={(e) => setType(e.target.value)} required>
                        <option value="in-app">In-App</option>
                        <option value="email">Email</option>
                    </select>
                </div>
                <button type="submit">Save Preferences</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default PreferencesForm;
