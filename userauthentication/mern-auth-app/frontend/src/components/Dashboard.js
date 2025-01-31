import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Remove login state
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome to the Dashboard 🎉</h2>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
