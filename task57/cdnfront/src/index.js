import React from 'react';
import ReactDOM from 'react-dom/client';  // Change to react-dom/client
import App from './App';
import './styles.css'; // Importing custom CSS styles

// Register service worker for caching
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => console.log('Service Worker registered successfully'))
      .catch((error) => console.error('Service Worker registration failed:', error));
  });
}

// Render the React application with React 18 method
const root = ReactDOM.createRoot(document.getElementById('root')); // Updated method
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
