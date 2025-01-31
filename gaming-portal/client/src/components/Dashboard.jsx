import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Welcome, {user?.username || 'Guest'}!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
