import React, { useEffect } from "react";
import "./../styles/AccessibilityControls.css";

const AccessibilityControls = ({ videoRef }) => {

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!videoRef.current) return;
      switch (e.key) {
        case " ":
          videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
          break;
        case "ArrowRight":
          videoRef.current.currentTime += 3;
          break;
        case "ArrowLeft":
          videoRef.current.currentTime -= 3;
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [videoRef]);


};

export default AccessibilityControls;
