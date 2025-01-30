import React from 'react';
import PlayerStats from './components/PlayerStats';
import GameModes from './components/GameModes';
import Maps from './components/Maps';
import Trends from './components/Trends';
import { getGameModes } from './services/api';



const App = () => {
  return (
    <div>
      <h1>Game Analytics Dashboard</h1>
      <PlayerStats />
      <GameModes />
      <Maps />
      <Trends />
    </div>
  );
};

export default App;
