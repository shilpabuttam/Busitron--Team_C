// components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to the Home Page!</h2>
      
      {/* Explore Button */}
      <Link to="/movies" className="explore-button">Explore Movies</Link>
    </div>
  );
}

export default Home;
