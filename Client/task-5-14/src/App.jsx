// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { Dashboard } from './components/pages/Dashboard'
// import Leaderboard from './components/Leaderboard'

// function App() {
  

//   return (
//     <>
     
//       <Dashboard/>
      
//     </>
//   )
// }

// export default App

import React, { useState } from 'react';
import Leaderboard from './components/Leaderboard';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import { Dashboard } from './components/pages/Dashboard';

const App = () => {
    const [filters, setFilters] = useState({});

    return (
        <div>
             <Dashboard/>
            <Leaderboard filters={filters} />
           
        </div>
    );
};

export default App;
