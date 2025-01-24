import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NotificationPanel.css';  // Importing the new CSS

const NotificationPanel = ({ email }) => {
    const [notifications, setNotifications] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/get-notifications/${email}`);
                console.log('API Response:', response.data);  // Log the response
                setNotifications(response.data);
            } catch (err) {
                console.error('Error fetching notifications:', err);
                setError('Failed to load notifications.');
            }
        };

        if (email) {
            fetchNotifications();  // Only fetch notifications if email is provided
        }
    }, [email]);

    return (
        <div className="notification-panel">
            <h2>Your Notifications</h2>
            {error && <p className="error">{error}</p>}
            <ul>
                {notifications.length > 0 ? (
                    notifications.map((notif, idx) => (
                        <li key={idx}>
                            <p>{notif.message}</p>
                            <p>
                                <small>{new Date(notif.createdAt).toLocaleString()}</small>
                            </p>
                        </li>
                    ))
                ) : (
                    <p className="no-notifications">No notifications yet.</p>
                )}
            </ul>
        </div>
    );
};

export default NotificationPanel;
