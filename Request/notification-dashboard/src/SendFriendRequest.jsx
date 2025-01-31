import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const SendFriendRequest = () => {
    // Sample users list
    const [users, setUsers] = useState([
        { id: 1, name: "Alice", requested: false },
        { id: 2, name: "Bob", requested: false },
        { id: 3, name: "Charlie", requested: false },
    ]);

    // Function to update request status
    const handleFriendRequest = (userId) => {
        setUsers(users.map(user =>
            user.id === userId ? { ...user, requested: true } : user
        ));
    };

    return (
        <div className="container">
            {/* Navbar */}
            <nav className="navbar">
                <h1>Send Friend Request</h1>
            </nav>

            <div className="dashboard">
                <h2>Select Users</h2>
                <ul className="user-list">
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.name}
                            <button
                                className={`request-btn ${user.requested ? "requested" : ""}`}
                                onClick={() => handleFriendRequest(user.id)}
                                disabled={user.requested}
                            >
                                {user.requested ? "Requested" : "Send Request"}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Back button below the list */}
                <Link to="/" className="back-btn">← Back to Dashboard</Link>
            </div>
        </div>
    );
};

export default SendFriendRequest;
