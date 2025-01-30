import React, { useEffect, useState } from 'react';
import { getGameModes } from '../services/api';

const GameModes = () => {
  const [gameModes, setGameModes] = useState([]);

  useEffect(() => {
    const fetchGameModes = async () => {
      try {
        const data = await getGameModes();
        setGameModes(data);
      } catch (error) {
        console.error('Error fetching game modes:', error);
      }
    };

    fetchGameModes();
  }, []);

  return (
    <div>
      <h2>Game Modes</h2>
      <ul>
        {gameModes.map((mode) => (
          <li key={mode.id}>
            <strong>{mode.name}</strong> - {mode.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameModes;
