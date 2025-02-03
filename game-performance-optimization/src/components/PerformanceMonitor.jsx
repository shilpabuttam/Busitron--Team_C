import React, { useEffect, useState } from "react";

const PerformanceMonitor = () => {
  const [fps, setFps] = useState(0);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();

    const updateFPS = () => {
      const now = performance.now();
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = now;
      }
      requestAnimationFrame(updateFPS);
    };

    requestAnimationFrame(updateFPS);
    return () => cancelAnimationFrame(updateFPS);
  }, []);

  return (
    <div className="fps">
      <p>FPS: {fps}</p>
    </div>
  );
};

export default PerformanceMonitor;
