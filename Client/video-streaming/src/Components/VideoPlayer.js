


import React, { useState, useRef, useEffect } from 'react';

const VideoPlayer = () => {
  //   // const videoQualities = {
//   //   '144p': 'BMW-Add-ix1-144p.mp4',
//   //   '720p': 'BMW-Add-ix1-720p.mp4',
//   //   '1080p': 'BMW-Add-ix1-1080p.mp4',
//   // };
  const videoQualities = {
    '144p': 'Sitaram2.mp4',
    '720p': 'Sitaram3.mp4',
    '1080p': 'Sitaram.mp4',
  };

  // Default selected quality is 720p
  const [selectedQuality, setSelectedQuality] = useState('720p');
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef(null);

  // Handle quality change by user
  const handleQualityChange = (e) => {
    const newQuality = e.target.value;
    setSelectedQuality(newQuality);

   
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  // Update the video playback time when the video updates
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  // Ensure the video starts at the right time once metadata is loaded
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      // After the video is loaded, set the playback time to the previously saved time
      videoRef.current.currentTime = currentTime;
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // Reload the video to apply the new quality
    }
  }, [selectedQuality]);

  return (
    <div>
      {/* Video Player */}
      <video
        ref={videoRef}
        controls
        style={{ width: '100%', maxHeight: '500px' }}
        src={`http://localhost:4000/videos/${videoQualities[selectedQuality]}`} 
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata} 
      />
      
      {/* Quality Selection Dropdown */}
      <div style={{ marginTop: '10px' }}>
        <label htmlFor="quality">Select Quality: </label>
        <select id="quality" value={selectedQuality} onChange={handleQualityChange}>
          <option value="144p">144p</option>
          <option value="720p">720p</option>
          <option value="1080p">1080p</option>
        </select>
      </div>
    </div>
  );
};

export default VideoPlayer;

