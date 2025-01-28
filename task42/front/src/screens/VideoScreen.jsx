import React from 'react';
import VideoCard from '../components/VideoCard';

const VideoScreen = () => {
  const videos = [
    {
      name: "Biggboss",
      thumbnail: "https://via.placeholder.com/150",
      description: "This is a sample video description.",
      hdUrl: "https://videos.pexels.com/video-files/7290154/7290154-sd_640_360_25fps.mp4", // HD video URL
      sdUrl: "https://videos.pexels.com/video-files/7290154/7290154-sd_640_360_25fps.mp4", // SD video URL
    },
    {
      name: "Sample Video 2",
      thumbnail: "https://via.placeholder.com/150",
      description: "This is another sample video description.",
      hdUrl: "path/to/video2-hd.mp4", // HD video URL
      sdUrl: "path/to/video2-sd.mp4", // SD video URL
    },
    {
      name: "Sample Video 2",
      thumbnail: "https://via.placeholder.com/150",
      description: "This is another sample video description.",
      hdUrl: "path/to/video2-hd.mp4", // HD video URL
      sdUrl: "path/to/video2-sd.mp4", // SD video URL
    },
    {
      name: "Sample Video 2",
      thumbnail: "https://via.placeholder.com/150",
      description: "This is another sample video description.",
      hdUrl: "path/to/video2-hd.mp4", // HD video URL
      sdUrl: "path/to/video2-sd.mp4", // SD video URL
    },
    {
      name: "Sample Video 2",
      thumbnail: "https://via.placeholder.com/150",
      description: "This is another sample video description.",
      hdUrl: "path/to/video2-hd.mp4", // HD video URL
      sdUrl: "path/to/video2-sd.mp4", // SD video URL
    },
    {
      name: "Sample Video 2",
      thumbnail: "https://via.placeholder.com/150",
      description: "This is another sample video description.",
      hdUrl: "path/to/video2-hd.mp4", // HD video URL
      sdUrl: "path/to/video2-sd.mp4", // SD video URL
    },
    {
      name: "Sample Video 2",
      thumbnail: "https://via.placeholder.com/150",
      description: "This is another sample video description.",
      hdUrl: "path/to/video2-hd.mp4", // HD video URL
      sdUrl: "path/to/video2-sd.mp4", // SD video URL
    },
    {
      name: "Sample Video 2",
      thumbnail: "https://via.placeholder.com/150",
      description: "This is another sample video description.",
      hdUrl: "path/to/video2-hd.mp4", // HD video URL
      sdUrl: "path/to/video2-sd.mp4", // SD video URL
    },
    {
      name: "Sample Video 2",
      thumbnail: "https://via.placeholder.com/150",
      description: "This is another sample video description.",
      hdUrl: "path/to/video2-hd.mp4", // HD video URL
      sdUrl: "path/to/video2-sd.mp4", // SD video URL
    }
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Videos</h2>
      <div className="row">
        {videos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoScreen;
