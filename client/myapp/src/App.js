import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalChat from "./pages/GlobalChat";
import TeamChat from "./pages/TeamChat";
import PrivateChat from "./pages/PrivateChat";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<GlobalChat />} />
        <Route path="/team" element={<TeamChat />} />
        <Route path="/private" element={<PrivateChat />} />
      </Routes>
    </div>
  );
}

export default App;