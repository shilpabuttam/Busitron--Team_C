import { useState, useEffect } from "react";

const useAdaptiveGraphics = () => {
  const [graphicsQuality, setGraphicsQuality] = useState("high");

  useEffect(() => {
    const lowEndDevices = /Mobi|Android/i.test(navigator.userAgent);
    setGraphicsQuality(lowEndDevices ? "low" : "high");
  }, []);

  return graphicsQuality;
};

export default useAdaptiveGraphics;
