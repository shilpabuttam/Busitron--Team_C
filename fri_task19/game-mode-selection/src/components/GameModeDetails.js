
import React from 'react';
import './GameModeDetail.css';

const GameModeDetail = ({ mode }) => (
  <div className="game-mode-detail">
    <h2>{mode.name}</h2>
    <p>{mode.description}</p>
    <p>Difficulty: {mode.difficulty}</p>
    <p>Duration: {mode.duration} minutes</p>
    <p>Players: {mode.players}</p>
    <ul>
      {mode.rules.map((rule, index) => (
        <li key={index}>{rule}</li>
      ))}
    </ul>
  </div>
);

export default GameModeDetail;