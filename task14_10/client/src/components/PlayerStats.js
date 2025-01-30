import React from 'react';
// import '../styles/playerStats.css';
import '../styles/playerStats.css'; // Importing the CSS for PlayerStats

const PlayerStats = ({ playerStats }) => {
  return (
    <div className="player-stats">
      <h2>Player Statistics</h2>
      {playerStats.map((player, index) => (
        <div key={index}>
          <h3>{player.name}</h3>
          <p>Wins: {player.wins}</p>
          <p>Losses: {player.losses}</p>
          <p>Average Playtime: {player.averagePlaytime} minutes</p>
          <p>Score: {player.score}</p>
        </div>
      ))}
    </div>
  );
};

export default PlayerStats;
