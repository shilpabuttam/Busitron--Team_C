import React, { useState } from "react";
import DownloadButton from "./DownloadButton";

const VideoPlayer = ({ videoKey }) => {
  const [quality, setQuality] = useState("720p"); 
  const videoUrls = {
    "action1": {
      "720p": "https://videos.pexels.com/video-files/854024/854024-sd_640_360_25fps.mp4",
      "480p": "https://videos.pexels.com/video-files/854024/854024-sd_640_360_25fps.mp4" 
    },
    "comedy1": {
      "720p": "https://videos.pexels.com/video-files/7290154/7290154-sd_640_360_25fps.mp4", 
      "480p": "https://videos.pexels.com/video-files/7290154/7290154-sd_640_360_25fps.mp4"    
    },
    "drama1": {
      "720p": "https://videos.pexels.com/video-files/4912725/4912725-sd_640_360_24fps.mp4", 
      "480p": "https://videos.pexels.com/video-files/4912725/4912725-sd_640_360_24fps.mp4"   
    },
    "action2": {
      "720p": "https://videos.pexels.com/video-files/2260990/2260990-sd_640_360_24fps.mp4", 
      "480p": "https://videos.pexels.com/video-files/2260990/2260990-sd_640_360_24fps.mp4"  
    }
  };

  
  const videoUrl = videoUrls[videoKey] ? videoUrls[videoKey][quality] : null;

  if (!videoUrl) {
    return <p>Video not found!</p>;
  }

  return (
    <div className="video-container">
      <video controls width="100%">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <h1 className="vidTitle">VSPI Channel</h1>
        <p className="vidDesc">This is my channel this is my first vlog please like share and subscribe</p>
    <div className="qualitySection">
    <h4>Select Quality:</h4>
      <select onChange={(e) => setQuality(e.target.value)} value={quality}>
        <option value="720p">HD (720p)</option>
        <option value="480p">SD (480p)</option>
      </select><br />
    </div>
      

      <DownloadButton videoUrl={videoUrl} videoKey={videoKey} quality={quality} />
    </div>
  );
};

export default VideoPlayer;
