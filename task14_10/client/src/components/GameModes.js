import React from 'react';
import '../styles/gameModes.css';
const GameModes = ({ gameModes }) => {
  return (
    <div className="game-modes">
      <h2>Most Popular Game Modes</h2>
      {gameModes.map((mode, index) => (
        <div key={index}>
          <h3>{mode.mode}</h3>
          <p>Popularity: {mode.popularity}%</p>
        </div>
      ))}
    </div>
  );
};

export default GameModes;
