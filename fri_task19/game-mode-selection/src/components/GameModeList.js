
import React, { useEffect, useState } from "react";
import "./GameModeList.css";

const GameModeList = ({ filters }) => {
  const [gameModes, setGameModes] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(filters).toString();
    fetch(`http://localhost:5000/api/game-modes?${queryParams}`)
      .then((response) => response.json())
      .then((data) => setGameModes(data))
      .catch((error) => console.error("Error fetching game modes:", error));
  }, [filters]);

  return (
    <div className="game-mode-list">
      <h1>Game Mode List</h1>
      {gameModes.map((mode) => (
        <div key={mode._id} className="game-mode-item">
          <h2>{mode.name}</h2>
          <p>{mode.description}</p>
          <p>Difficulty: {mode.difficulty}</p>
          <p>Duration: {mode.duration} minutes</p>
          <p>Players: {mode.maxPlayers}</p>
          <ul>
            {mode.rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GameModeList;