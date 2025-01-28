import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import FilterBar from "./FilterBar";

const dummyVideos = [

        // Comedy
        {
          id: 1,
          title: "Funny Cats Compilation",
          genre: "comedy",
          region: "NA",
          views: 5000,
          likes: 1500,
          shares: 300,
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        },
        {
          id: 2,
          title: "Stand-Up Special",
          genre: "comedy",
          region: "EU",
          views: 8000,
          likes: 2500,
          shares: 500,
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        },
        {
          id: 3,
          title: "Indian Laughter Challenge",
          genre: "comedy",
          region: "IN",
          views: 10000,
          likes: 3500,
          shares: 700,
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        },
        {
          id: 4,
          title: "Korean Sitcom Moments",
          genre: "comedy",
          region: "KR",
          views: 6000,
          likes: 2000,
          shares: 400,
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        },
      
        // Documentary
        {
          id: 5,
          title: "Wildlife Wonders",
          genre: "documentary",
          region: "NA",
          views: 15000,
          likes: 5000,
          shares: 1200,
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        },
        {
          id: 6,
          title: "European History Highlights",
          genre: "documentary",
          region: "EU",
          views: 9000,
          likes: 3000,
          shares: 800,
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        },
        {
          id: 7,
          title: "Incredible India Travelogue",
          genre: "documentary",
          region: "IN",
          views: 18000,
          likes: 7000,
          shares: 1500,
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        },
        {
          id: 8,
          title: "Discovering Korea's Culture",
          genre: "documentary",
          region: "KR",
          views: 12000,
          likes: 4500,
          shares: 1000,
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        },
      
        // Music
        {
          id: 9,
          title: "Top Hits of North America",
          genre: "music",
          region: "NA",
          views: 25000,
          likes: 10000,
          shares: 2500,
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        },
        {
          id: 10,
          title: "Eurovision Highlights",
          genre: "music",
          region: "EU",
          views: 30000,
          likes: 15000,
          shares: 3000,
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        },
        {
          id: 11,
          title: "Bollywood Dance Party",
          genre: "music",
          region: "IN",
          views: 40000,
          likes: 20000,
          shares: 5000,
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        },
        {
          id: 12,
          title: "K-Pop Music Video",
          genre: "music",
          region: "KR",
          views: 50000,
          likes: 25000,
          shares: 6000,
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        },
      
        // Science
        {
          id: 13,
          title: "Space Exploration Highlights",
          genre: "science",
          region: "NA",
          views: 10000,
          likes: 5000,
          shares: 1200,
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        },
        {
          id: 14,
          title: "Discovering Particle Physics",
          genre: "science",
          region: "EU",
          views: 8000,
          likes: 4000,
          shares: 1000,
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        },
        {
          id: 15,
          title: "Indian Science Breakthroughs",
          genre: "science",
          region: "IN",
          views: 9000,
          likes: 4500,
          shares: 1100,
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        },
        {
          id: 16,
          title: "Korea's Tech Innovations",
          genre: "science",
          region: "KR",
          views: 12000,
          likes: 6000,
          shares: 1500,
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        },
      ];
      
  
  
   
const TrendingSection = () => {
  const [filters, setFilters] = useState({
    genre: "",
    region: "",
    timePeriod: "",
  });
  const [videos, setVideos] = useState([]);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null); 

  useEffect(() => {
    // Filter videos dynamically based on user filters
    const filteredVideos = dummyVideos.filter((video) => {
      const genreMatch = filters.genre ? video.genre === filters.genre : true;
      const regionMatch = filters.region ? video.region === filters.region : true;
      return genreMatch && regionMatch;
    });
  

     const sortedVideos = [...filteredVideos].sort((a, b) => {
      const aScore = a.views + a.likes * 2 + a.shares * 1.5; // Weighted score for ranking
      const bScore = b.views + b.likes * 2 + b.shares * 1.5;
      return bScore - aScore; // Sort by the highest score
    });

    setVideos(sortedVideos); // Set sorted videos to the state
  }, [filters]);

// Handle user interaction (like, share, view)
const handleInteraction = (id, type) => {
    setVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.id === id
          ? {
              ...video,
              [type]: video[type] + 1, // Increment the respective count (views, likes, shares)
            }
          : video
      )
    );
  };


  const handlePlayPause = (id) => {
    setCurrentlyPlaying((prevId) => (prevId === id ? null : id)); // Toggle play/pause
  };


  return (
    <div>
    <FilterBar setFilters={setFilters} />
    <div className="video-grid">
      {videos.length > 0 ? (
        videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            onInteract={handleInteraction}
            isPlaying={currentlyPlaying === video.id} // Pass play state
            onPlayPause={handlePlayPause} // Pass play/pause handler
          />
        ))
      ) : (
        <p>No videos found!</p>
      )}
    </div>
  </div>
  );
};

export default TrendingSection;
