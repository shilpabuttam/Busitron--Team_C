import React, { useState } from 'react';

const Movies = () => {
  const movieData = [
    // Action Movies
    {
      image: '/movie1.jpg',
      name: 'Action',
      category: 'Action',
      duration: '120 min',
    },
    {
      image: '/movie5.jpg',
      name: 'Fast & Furious',
      category: 'Action',
      duration: '130 min',
    },
    {
      image: '/movie6.jpg',
      name: 'John Wick',
      category: 'Action',
      duration: '110 min',
    },
    {
      image: '/movie7.jpg',
      name: 'Avengers',
      category: 'Action',
      duration: '150 min',
    },

    // Comedy Movies
    {
      image: '/movie2.jpg',
      name: 'Athithi',
      category: 'Comedy',
      duration: '95 min',
    },
    {
      image: '/movie8.jpg',
      name: 'The Hangover',
      category: 'Comedy',
      duration: '100 min',
    },
    {
      image: '/movie9.jpg',
      name: 'Dumb and Dumber',
      category: 'Comedy',
      duration: '105 min',
    },
    {
      image: '/movie10.jpg',
      name: 'Superbad',
      category: 'Comedy',
      duration: '102 min',
    },

    // Drama Movies
    {
      image: '/movie3.jpg',
      name: 'Drishyam',
      category: 'Drama',
      duration: '150 min',
    },
    {
      image: '/movie11.jpg',
      name: 'The Pursuit of Happyness',
      category: 'Drama',
      duration: '117 min',
    },
    {
      image: '/movie12.jpg',
      name: 'Forrest Gump',
      category: 'Drama',
      duration: '142 min',
    },
    {
      image: '/movie13.jpg',
      name: 'The Shawshank Redemption',
      category: 'Drama',
      duration: '144 min',
    },

    // Horror Movies
    {
      image: '/movie4.jpg',
      name: 'Chhorri',
      category: 'Horror',
      duration: '110 min',
    },
    {
      image: '/movie14.jpg',
      name: 'The Conjuring',
      category: 'Horror',
      duration: '112 min',
    },
    {
      image: '/movie15.jpg',
      name: 'Hereditary',
      category: 'Horror',
      duration: '127 min',
    },
    {
      image: '/movie16.jpg',
      name: 'It',
      category: 'Horror',
      duration: '135 min',
    },
  ];

  const categories = ['All', 'Action', 'Comedy', 'Drama', 'Horror'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter movies based on category selection
  const filteredMovies =
    selectedCategory === 'All'
      ? movieData
      : movieData.filter((movie) => movie.category === selectedCategory);

  const handleWatchClick = (movieName) => {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(movieName)}+movie+watch`;
  };

  return (
    <div className="movie-page">
      {/* Categories Section */}
      <div className="categories">
        <h2>Categories</h2>
        <div className="category-buttons">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Movie Cards */}
      <div className="movie-cards-container">
        {filteredMovies.map((movie, index) => (
          <div key={index} className="movie-card">
            <img
              src={movie.image}
              alt={movie.name}
              className="movie-image"
              onError={(e) => (e.target.src = '/fallback.jpg')}
            />
            <h3>{movie.name}</h3>
            <p>Category: {movie.category}</p>
            <p>Duration: {movie.duration}</p>
            <button className="watch-button" onClick={() => handleWatchClick(movie.name)}>
              Watch
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
