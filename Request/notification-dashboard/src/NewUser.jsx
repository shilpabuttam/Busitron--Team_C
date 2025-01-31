import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const NewUsers = () => {
    // Sample new users
    const [users, setUsers] = useState([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
    ]);

    const handleNotify = (user) => {
        alert(`Notification sent to ${user.name}!`);
    };

    return (
        <div className="container">
            {/* Navbar */}
            <nav className="navbar">
                <h1>New Users</h1>
            </nav>

            <div className="dashboard">
                <h2>Notify New Users</h2>
                <ul className="user-list">
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.name}
                            <button className="notify-btn" onClick={() => handleNotify(user)}>Notify</button>
                        </li>
                    ))}
                </ul>

                {/* Back button below the list */}
                <Link to="/" className="back-btn">← Back to Dashboard</Link>
            </div>
        </div>
    );
};

export default NewUsers;
