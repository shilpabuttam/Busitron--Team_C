


import React, { useState, useRef, useEffect } from "react";
import "./../styles/VideoPlayer.css";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const trackRef = useRef(null);
  const [captionsEnabled, setCaptionsEnabled] = useState(true);

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.mode = captionsEnabled ? "showing" : "hidden";
    }
  }, [captionsEnabled]);

  const toggleCaptions = () => {
    setCaptionsEnabled((prev) => !prev);
  };

  return (
    <div className="video-container">
      <video ref={videoRef} controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        <track
          ref={trackRef}
          src="https://gist.githubusercontent.com/AnkitDroidGit/4cbec6446c742b9c0f96748a82cfb372/raw/dummy-captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
          default
        />
      </video>
      {/* <button onClick={toggleCaptions}>
        {captionsEnabled ? "Hide Captions" : "Show Captions"}
      </button> */}
    </div>
  );
};

export default VideoPlayer;











