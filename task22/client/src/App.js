import React from 'react';
import VideoUpload from './components/VideoUpload';
import AnalyticsTracker from './components/AnalyticsTracker';
import VideoPlayer from './components/VideoPlayer';
import './styles.css';

const App = () => {
  return (
    <div>
      <VideoUpload />
      <AnalyticsTracker />
      <VideoPlayer />
    </div>
  );
};

export default App;
