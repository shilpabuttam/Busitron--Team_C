// src/utils/data.js
const playerStats = [
    { playerId: 1, wins: 10, losses: 5, score: 200 },
    { playerId: 2, wins: 15, losses: 3, score: 250 },
    // more data...
  ];
  
  const gameModes = [
    { mode: 'Deathmatch', popularity: 60 },
    { mode: 'Capture the Flag', popularity: 30 },
    // more data...
  ];
  
  const peakPlayHours = [
    { hour: '8:00 AM', activePlayers: 200 },
    { hour: '10:00 AM', activePlayers: 300 },
    // more data...
  ];
  
  const performanceReports = [
    { playerId: 1, performance: 'Excellent' },
    { playerId: 2, performance: 'Average' },
    // more data...
  ];
  
  export { playerStats, gameModes, peakPlayHours, performanceReports };
  