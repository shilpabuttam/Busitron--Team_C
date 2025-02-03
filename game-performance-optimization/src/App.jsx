import React, { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import useAdaptiveGraphics from "./hooks/useAdaptiveGraphics";
import useGameStore from "./store/gameStore";
import PerformanceMonitor from "./components/PerformanceMonitor";
import OptimizedImage from "./components/OptimizedImage";
import "./App.css";

const LazyGame = lazy(() => import("./pages/Game"));

const queryClient = new QueryClient();

const App = () => {
  const graphicsQuality = useAdaptiveGraphics();
  const { score, level, increaseScore, nextLevel, resetGame } = useGameStore();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <h1>Game Performance Optimization</h1>

        <PerformanceMonitor />

        <p><strong>Graphics Quality:</strong> {graphicsQuality}</p>

        {/* Score and Level Above Buttons */}
        <div className="score-container">
          <p>Level: {level} / 10</p>
          <p>Score: {score} / 100</p>
        </div>

        {/* Buttons in one line with spacing */}
        <div className="button-container">
          <button onClick={increaseScore} disabled={score >= 100}>
            Increase Score
          </button>

          <button onClick={nextLevel} disabled={level >= 10} className="next-btn">
            Next Level
          </button>

          <button onClick={resetGame} className="reset-btn">
            Reset Game
          </button>
        </div>

        {/* Displaying the optimized image */}
        <OptimizedImage />

        <Suspense fallback={<p>Loading Game...</p>}>
          <LazyGame />
        </Suspense>
      </div>
    </QueryClientProvider>
  );
};

export default App;
