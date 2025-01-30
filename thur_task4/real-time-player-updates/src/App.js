
// import React, { useState, useEffect } from 'react';

// import io from 'socket.io-client';
// import './App.css';

// const socket = io('http://localhost:5000');

// const App = () => {
//   const [players, setPlayers] = useState({});
//   const playerId = socket.id;

//   useEffect(() => {
//     socket.on('playersUpdate', (updatedPlayers) => {
//       setPlayers(updatedPlayers);
//     });
//     return () => socket.off('playersUpdate');
//   }, []);

//   const updateScore = () => {
//     socket.emit('updateScore', { playerId });
//   };

//   return (
//     <div className="container">
//       <h1>Real-Time Player Updates</h1>
//       <div className="player-grid">
//         {Object.entries(players).map(([id, player]) => (
//           <div key={id} className={`player-card ${id === playerId ? 'highlight' : ''}`}>
//             <h3>{id === playerId ? 'You' : `Player ${id.slice(-4)}`}</h3>
//             <p><strong>Score:</strong> {player.score}</p>
//             <p><strong>Rank:</strong> {player.rank}</p>
//             <p><strong>Health:</strong> {player.health}</p>
//           </div>
//         ))}
//       </div>
//       <button className="update-btn" onClick={updateScore}>Update Score</button>
//     </div>
//   );
// };

// export default App;



import React from 'react'
import PlayerDashboard from './components/PlayerDashboard'

function App() {
  return (
    <div>
         <h1>Player dashboard</h1>
        <PlayerDashboard/>
    </div>
  )
}

export default App

