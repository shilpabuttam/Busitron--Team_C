import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import AuthProvider from '../authContex';
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      // You can verify the token with an API request or decode it
      setUser(true); // Simulate a logged-in user
    }
  }, []);

  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Login />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
