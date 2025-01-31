import React, { createContext, useState, useEffect } from 'react';
import axios from '../api';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        try {
          const response = await axios.get('/auth/me', {
            headers: { Authorization: `Bearer ${token}` }
          });
          setUser(response.data.user);
        } catch (error) {
          console.error('User authentication failed:', error);
          logout();
        }
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  const login = async (email, password) => {
    const response = await axios.post('/auth/login', { email, password });
    localStorage.setItem('authToken', response.data.token);
    setUser(response.data.user);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
