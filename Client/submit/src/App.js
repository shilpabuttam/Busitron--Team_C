// App.js
import React from 'react';
import './App.css';
import Home from './components/Home';
import { Task } from './components/Task';
const App = () => {
    return (
      <div>  
<Task/>
<Home/>
      </div>
       
    );
};

export default App;
