// src/components/VideoList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch videos from the backend
    axios.get('http://localhost:5000/api/videos')
      .then(response => setVideos(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Videos</h2>
      <ul>
        {videos.map(video => (
          <li key={video._id}>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <p>Tags: {video.tags.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;