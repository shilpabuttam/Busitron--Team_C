
import React, { useState } from 'react';
import VideoPlayer from './Components/VideoPlayer';
import LikeButton from './Components/LikeButton';
import CommentSection from './Components/CommentSection';

const App = () => {
  const userId = 'user123'; 
  const videoId = 'video456'; 

  return (
    <div className="app">
      <center>
      <h1>User Activity Tracker</h1>
        <VideoPlayer videoId={videoId} userId={userId} />
        <LikeButton videoId={videoId} userId={userId} />
        <CommentSection videoId={videoId} userId={userId} />
      </center>
      
    </div>
  );
};

export default App;
