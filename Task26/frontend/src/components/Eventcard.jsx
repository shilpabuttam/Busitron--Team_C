import React, { useState } from 'react';
import './EventCard.css';

const EventCard = ({ event }) => {
    const { name, description, startDate, endDate, reward, progress } = event;
    const [isJoined, setIsJoined] = useState(false);

    const toggleJoinEvent = () => {
        setIsJoined(!isJoined);
    };

    return (
        <div className="event-card">
            <h2>{name}</h2>
            <p>{description}</p>
            <p><strong>Start Date:</strong> {new Date(startDate).toLocaleDateString()}</p>
            <p><strong>End Date:</strong> {new Date(endDate).toLocaleDateString()}</p>
            <p><strong>Reward:</strong> {reward}</p>
            <button className="join-btn" onClick={toggleJoinEvent}>
                {isJoined ? "Leave Event" : "Join Event"}
            </button>
        </div>
    );
};

export default EventCard;
