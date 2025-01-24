// import React, { useState } from "react";
// import VideoEmbedModal from "./components/VideoEmbedModal";

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const videoUrl = "https://videos.pexels.com/video-files/28728787/12464794_1080_1920_30fps.mp4";  // Pexels video URL

//   const toggleModal = () => setIsModalOpen(!isModalOpen);

//   return (
//     <div className="App">
//       <h1>Embed Video App</h1>
//       <button onClick={toggleModal}>Open Embed Modal</button>
      
//       {isModalOpen && <VideoEmbedModal videoUrl={videoUrl} onClose={toggleModal} />}
//     </div>
//   );
// };

// export default App;
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { VideoCard } from './components/VideoCard';
import { EmbedPlayer } from './components/EmbedPlayer';
import { supabase } from './lib/supabase';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    loadVideos();
    addInitialVideo();
  }, []);

  const loadVideos = async () => {
    const { data, error } = await supabase
      .from('videos')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error loading videos:', error);
      return;
    }

    setVideos(data || []);
  };

  const addInitialVideo = async () => {
    const { data: existingVideos } = await supabase
      .from('videos')
      .select('id')
      .limit(1);

    if (existingVideos && existingVideos.length > 0) {
      return;
    }

    const { error } = await supabase
      .from('videos')
      .insert({
        title: 'Footsteps on the Beach Sand',
        url: 'https://player.vimeo.com/video/8816326',
        settings: {
          autoplay: false,
          quality: 'auto',
          controls: true,
          startTime: 0
        }
      });

    if (error) {
      console.error('Error adding initial video:', error);
      return;
    }

    loadVideos();
  };

  const handleUpdateSettings = async (id, settings) => {
    const { error } = await supabase
      .from('videos')
      .update({ settings })
      .match({ id });

    if (error) {
      console.error('Error updating settings:', error);
      return;
    }

    setVideos(videos.map(video => 
      video.id === id ? { ...video, settings } : video
    ));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Toaster position="top-right" />
        
        <Routes>
          <Route path="/embed/:id" element={<EmbedPlayer />} />
          <Route path="/" element={
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold mb-8">Video Embedding System</h1>
              <div className="space-y-6">
                {videos.map(video => (
                  <VideoCard
                    key={video.id}
                    video={video}
                    onUpdateSettings={handleUpdateSettings}
                  />
                ))}
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;