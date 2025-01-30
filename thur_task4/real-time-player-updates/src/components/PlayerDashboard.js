

import React, { useState } from 'react';
import './PlayerDashboard.css'; 
const PlayerDashboard = () => {

  const [score, setScore] = useState(0);
  const [health, setHealth] = useState(100);
  const [rank, setRank] = useState('NewPlayer');


  const increaseScore = () => {

    setScore(prevScore => {
     
    const randomScoreIncrease = Math.floor(Math.random() * 201);  

    const newScore =  randomScoreIncrease;

    newScore <= 100 ? setHealth(100) : newScore <= 200 ? setHealth(80) : setHealth(60);

    newScore >200 ? setRank('Expert') : newScore > 100 ? setRank('Intermediate') : setRank('NewPlayer');

      return newScore;
    });
  };

  return (
    <div className="dashboard-container">
       
      <h2 className="dashboard-title">YOU</h2>
      <div className="stat">
        <span className="stat-label">Score:</span>
        <span className="stat-value">{score}</span>
      </div>
      <div className="stat">
        <span className="stat-label">Health:</span>
        <span className={`stat-value health-${health}`}>{health}</span>
      </div>
      <div className="stat">
        <span className="stat-label">Rank:</span>
        <span className="stat-value">{rank}</span>
      </div>
      <button className="increase-btn" onClick={increaseScore}>Increase Score</button>
    </div>
  );
};

export default PlayerDashboard;
