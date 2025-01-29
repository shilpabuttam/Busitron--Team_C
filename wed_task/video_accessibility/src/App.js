import React, { useRef } from "react";
import VideoPlayer from "./components/VideoPlayer";
import CaptionSettings from "./components/CaptionSettings";
import AccessibilityControls from "./components/AccessibilityControls";
import "./styles/VideoPlayer.css";

const App = () => {
  const videoRef = useRef(null);

  return (
    <div>
      <h1 style={{textAlign:"center",padding:"20px"}}>Accessible Video Player</h1>
      <VideoPlayer videoRef={videoRef} />
      <CaptionSettings />
      <AccessibilityControls videoRef={videoRef} />
    </div>
  );
};

export default App;
