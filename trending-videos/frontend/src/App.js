import React from "react";
import TrendingSection from "./components/TrendingSection";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Trending Videos</h1>
      </header>
      <main className="app-main">
        <TrendingSection />
      </main>
      <footer className="app-footer">
        <p>© 2025 Trending Videos. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
