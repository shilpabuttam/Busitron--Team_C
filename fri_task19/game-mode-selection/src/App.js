
import React, { useState } from "react";
import GameModeList from "./components/GameModeList";
import GameModeFilter from "./components/GameModeFilter";
import CreateGameMode from "./components/CreateGameMode";
import "./App.css";

const App = () => {
  const [filters, setFilters] = useState({});

  const handleFilter = (filters) => {
    setFilters(filters);
  };

  const handleCreateGameMode = (gameMode) => {
    console.log("Sending data:", gameMode); 
    fetch("http://localhost:5000/api/game-modes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gameMode),
    })
      .then((response) => response.json())
      .then((data) => console.log("Game mode created:", data))
      .catch((error) => console.error("Error creating game mode:", error));
  };
  return (
    <div className="App">
      <h1>Game Mode Selection</h1>
      <GameModeFilter onFilter={handleFilter} />
      <GameModeList filters={filters} />
      <CreateGameMode onCreate={handleCreateGameMode} />
    </div>
  );
};

export default App;