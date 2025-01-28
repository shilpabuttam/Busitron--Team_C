import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import VideoCard from './components/VideoCard';
import DownloadsScreen from './screens/DownloadsScreen';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const App = () => {
  const videos = [
    {
      name: 'Biggboss',
      description: 'This is a sample video description.',
      hdUrl: 'https://videos.pexels.com/video-files/7290154/7290154-sd_640_360_25fps.mp4', 
      sdUrl: 'https://videos.pexels.com/video-files/7290154/7290154-sd_640_360_25fps.mp4', 
    },
    {
      name: 'Dance',
      description: 'This is a sample video description.',
      hdUrl: 'https://videos.pexels.com/video-files/8688465/8688465-sd_640_360_25fps.mp4', 
      sdUrl: 'https://videos.pexels.com/video-files/8688465/8688465-sd_640_360_25fps.mp4', 
    },
    {
      name: 'Food',
      description: 'This is a sample video description.',
      hdUrl: 'https://videos.pexels.com/video-files/4912725/4912725-sd_640_360_24fps.mp4', 
      sdUrl: 'https://videos.pexels.com/video-files/4912725/4912725-sd_640_360_24fps.mp4', 
    },
    {
      name: 'Party',
      description: 'This is a sample video description.',
      hdUrl: 'https://videos.pexels.com/video-files/3195885/3195885-sd_640_360_25fps.mp4',
      sdUrl: 'https://videos.pexels.com/video-files/3195885/3195885-sd_640_360_25fps.mp4', 
    },
    {
      name: 'Tourism',
      description: 'This is a sample video description.',
      hdUrl: 'https://videos.pexels.com/video-files/4125025/4125025-sd_640_360_24fps.mp4', 
      sdUrl: 'https://videos.pexels.com/video-files/4125025/4125025-sd_640_360_24fps.mp4',
    },
    {
      name: 'Shopping',
      description: 'This is a sample video description.',
      hdUrl: 'https://videos.pexels.com/video-files/1338590/1338590-sd_640_360_30fps.mp4',
      sdUrl: 'https://videos.pexels.com/video-files/1338590/1338590-sd_640_360_30fps.mp4', 
    },
    {
      name: 'Nature',
      description: 'This is a sample video description.',
      hdUrl: 'https://videos.pexels.com/video-files/1409899/1409899-sd_640_360_25fps.mp4', 
      sdUrl: 'https://videos.pexels.com/video-files/1409899/1409899-sd_640_360_25fps.mp4', 
    },
    {
      name: 'Flowers',
      description: 'This is a sample video description.',
      hdUrl: 'https://videos.pexels.com/video-files/2616637/2616637-sd_640_360_30fps.mp4', 
      sdUrl: 'https://videos.pexels.com/video-files/2616637/2616637-sd_640_360_30fps.mp4', 
    },
  ];

  const handleDownload = (videoUrl, quality) => {
    const downloadedVideos = JSON.parse(localStorage.getItem('downloadedVideos')) || [];
    const video = { url: videoUrl, quality };
    downloadedVideos.push(video);
    localStorage.setItem('downloadedVideos', JSON.stringify(downloadedVideos));
    alert(`Video downloaded in ${quality} quality!`);
  };

  return (
    <Router>
      <Navbar/>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route
            path="/videos"
            element={
              <div className="row">
                {videos.map((video, index) => (
                  <VideoCard key={index} video={video} handleDownload={handleDownload} />
                ))}
              </div>
            }
          />
          <Route path="/downloads" element={<DownloadsScreen />} />
          <Route path="/about" element={<AboutScreen/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
