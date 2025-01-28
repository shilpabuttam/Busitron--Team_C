import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Task1 from './components/Task1';
import Dashboard from './components/Dashboard';
import Stream from './components/Stream';
import Login from './components/Login';

function App() {
  return (
      <div>
         <Link to={'/'}></Link>
        <Link to={'/dashboard'}></Link>
        <Link to={'/stream'}></Link>
  <Routes>
  <Route path="/" element={<Login />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/stream" element={<Stream />} />
      </Routes>
      {/* <h1>HII</h1> */}
      {/* <Task1/> */}
      </div>
    
 
  );
}

export default App;
