// App.js
import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

// Import pages
import Home from './components/HomePage';
import Movies from './components/MoviePage';

// Import styles
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
          </ul>
        </nav>

        {/* Route Setup */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
