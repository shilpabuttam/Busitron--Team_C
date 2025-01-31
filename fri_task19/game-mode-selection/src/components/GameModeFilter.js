

import React, { useState } from 'react';
import './GameModeFilter.css';

const GameModeFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    difficulty: '',
    duration: '',
    players: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  return (
    <form onSubmit={handleSubmit} className="game-mode-filter">
      <select name="difficulty" value={filters.difficulty} onChange={handleChange}>
        <option value="">Select Difficulty</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
      <input
        type="number"
        name="duration"
        placeholder="Duration (minutes)"
        value={filters.duration}
        onChange={handleChange}
      />
      <input
        type="number"
        name="players"
        placeholder="Number of Players"
        value={filters.players}
        onChange={handleChange}
      />
      <button type="submit">Filter</button>
    </form>
  );
};

export default GameModeFilter;