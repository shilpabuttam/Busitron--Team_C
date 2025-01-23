// client/src/App.js
import React, { useState } from 'react';
import VideoPlayer from './Components/VideoPlayer';
import LikeButton from './Components/LikeButton';
import CommentSection from './Components/CommentSection';

const App = () => {
  const userId = 'user123';  // For example, you can make this dynamic
  const videoId = 'video456';  // Example video ID

  return (
    <div className="app">
      <h1>User Activity Tracker</h1>
      <VideoPlayer videoId={videoId} userId={userId} />
      <LikeButton videoId={videoId} userId={userId} />
      <CommentSection videoId={videoId} userId={userId} />
    </div>
  );
};

export default App;
