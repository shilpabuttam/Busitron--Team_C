import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const SendAchievementUpdates = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "Alice", achievement: "Top Scorer", updated: false },
        { id: 2, name: "Bob", achievement: "Level 50 Unlocked", updated: false },
        { id: 3, name: "Charlie", achievement: "Winner of Weekly Tournament", updated: false },
    ]);

    const handleAchievementUpdate = (userId) => {
        setUsers(users.map(user =>
            user.id === userId ? { ...user, updated: true } : user
        ));
    };

    return (
        <div className="container">
            <nav className="navbar">
                <h1>Send Achievement Updates</h1>
            </nav>

            <div className="dashboard">
                <h2>Users & Achievements</h2>
                <ul className="user-list">
                    {users.map((user) => (
                        <li key={user.id}>
                            <div>
                                <strong>{user.name}</strong> - {user.achievement}
                            </div>
                            {/* ✅ Send Update Button Below */}
                            <button
                                className={`update-btn ${user.updated ? "updated" : ""}`}
                                onClick={() => handleAchievementUpdate(user.id)}
                                disabled={user.updated}
                            >
                                {user.updated ? "Update Sent" : "Send Update"}
                            </button>
                        </li>
                    ))}
                </ul>

                <Link to="/" className="back-btn">← Back to Dashboard</Link>
            </div>
        </div>
    );
};

export default SendAchievementUpdates;
