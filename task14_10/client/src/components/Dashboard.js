import React from 'react';
import PlayerStats from './PlayerStats';
import GameModes from './GameModes';
import PeakPlayHours from './PeakPlayHours';
import PerformanceReports from './PerformanceReports';
import { playerStats, gameModes, peakPlayHours, performanceReports } from '../utils/data';
import '../styles/dashboard.css';
const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Game Analytics Dashboard</h1>
      <PlayerStats playerStats={playerStats} />
      <GameModes gameModes={gameModes} />
      <PeakPlayHours peakPlayHours={peakPlayHours} />
      <PerformanceReports performanceReports={performanceReports} />
    </div>
  );
};

export default Dashboard;
