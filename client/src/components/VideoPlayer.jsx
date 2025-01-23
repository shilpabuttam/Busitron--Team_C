import React from "react";

const VideoPlayer = ({ videoId }) => {
  const videoSource = `https://your-platform.com/videos/${videoId}.mp4`; // Replace with your actual video source URL

  return (
    <div className="video-player">
      <video
        src={videoSource}
        controls
        style={{
          width: "100%",
          maxWidth: "600px",
          height: "auto",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
