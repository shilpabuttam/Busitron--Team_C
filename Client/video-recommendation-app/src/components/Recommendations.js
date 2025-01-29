import React, { useEffect, useState } from "react";
import { getRecommendations } from "../services/api";

const Recommendations = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const { data } = await getRecommendations();
      setVideos(data);
    };
    fetchRecommendations();
  }, []);

  return (
    <div>
      <h2>Recommended for You</h2>
      {videos.map((video) => (
        <div key={video._id}>{video.title}</div>
      ))}
    </div>
  );
};

export default Recommendations;
