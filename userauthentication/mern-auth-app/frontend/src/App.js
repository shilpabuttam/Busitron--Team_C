import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isLoggedIn");
    if (userLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* Ensure setIsLoggedIn is passed correctly */}
        <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
