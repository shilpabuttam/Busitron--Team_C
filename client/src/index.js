import React from 'react';
import ReactDOM from 'react-dom/client';  // Updated import
import App from './App';  // Import your App component
import './index.css';  // Optional: add styles if needed

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
