import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NewUsers from "./NewUser";
import SendFriendRequest from "./SendFriendRequest";
import SendAchievementUpdates from "./SendAchievementUpdates";
import "./App.css";

function Dashboard() {
    return (
        <div className="container">
            {/* Navbar */}
            <nav className="navbar">
                <h1>Notification Dashboard</h1>
            </nav>

            {/* Dashboard Content */}
            <div className="dashboard">
                <div className="button-container">
                    <Link to="/new-users" className="btn">Send Notification to New Users</Link>
                    <Link to="/send-friend-request" className="btn">Send Friend Request</Link>
                    <Link to="/send-achievement-updates" className="btn">Send Achievement Update</Link> {/* ✅ FIXED */}
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/new-users" element={<NewUsers />} />
            <Route path="/send-friend-request" element={<SendFriendRequest />} />
            <Route path="/send-achievement-updates" element={<SendAchievementUpdates />} /> {/* ✅ NEW ROUTE */}
        </Routes>
    );
}

export default App;
