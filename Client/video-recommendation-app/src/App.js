import React, { useEffect, useState } from "react";
import { getVideos, updateVideoStats } from "./services/api";
import VideoCard from "./components/VideoCard";
import Recommendations from "./components/Recommendations";

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const { data } = await getVideos();
      setVideos(data);
    };
    fetchVideos();
  }, []);

  const handleAction = async (videoId, action) => {
    await updateVideoStats({ videoId, userId: "user123", action });
  };

  return (
    <div>
      <h1>Video Recommendations</h1>
      {videos.map((video) => (
        <VideoCard key={video._id} video={video} onAction={handleAction} />
      ))}
      <Recommendations />
    </div>
  );
};

export default App;
