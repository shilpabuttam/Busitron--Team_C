import React, { useState } from 'react';
import axios from 'axios';

const VideoPlayer = () => {
  const [videoId, setVideoId] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const handleFetchVideo = async () => {
    try {
      const response = await axios.get('http://localhost:3000/generate-video-url', {
        params: { videoId },
      });
      setVideoUrl(response.data.playbackUrl);
    } catch (error) {
      console.error('Error fetching video URL:', error);
    }
  };

  return (
    <div>
      <h1>Video Player</h1>
      <input
        type="text"
        placeholder="Enter video ID"
        value={videoId}
        onChange={(e) => setVideoId(e.target.value)}
      />
      <button onClick={handleFetchVideo}>Get Video</button>
      {videoUrl && (
        <video controls>
          <source src={videoUrl} type="application/x-mpegURL" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;
