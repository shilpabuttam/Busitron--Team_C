// client/src/components/PlayerStats.js
import React, { useState, useEffect } from 'react';
import { getPlayerStats } from '../services/api';

function PlayerStats() {
  const [playerStats, setPlayerStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      const data = await getPlayerStats();
      setPlayerStats(data);
    };
    fetchStats();
  }, []);

  return (
    <div className="stats-card">
      <h3>Player Statistics</h3>
      {playerStats ? (
        <div>
          <p>Name: {playerStats.name}</p>
          <p>Win/Loss Ratio: {playerStats.winLossRatio}</p>
          <p>Average Playtime: {playerStats.averagePlaytime} hours</p>
          <p>Score: {playerStats.score}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PlayerStats;
