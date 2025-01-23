import React, { useState } from 'react';
import VideoEmbedModal from './components/VideoEmbedModal';

function App() {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoId, setVideoId] = useState("12345");  // Example videoId, replace with dynamic ID

  // Function to toggle modal visibility
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="App">
      <h1>Video Embed App</h1>
      
      <button onClick={toggleModal}>Open Video Embed Modal</button>

      {/* Conditionally render the modal if it's open */}
      {isModalOpen && (
        <VideoEmbedModal
          videoId={videoId}
          onClose={toggleModal}
        />
      )}
    </div>
  );
}

export default App;
