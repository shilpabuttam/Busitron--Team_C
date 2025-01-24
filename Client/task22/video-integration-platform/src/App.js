import React from "react";
import VideoUpload from "./components/VideoUpload";
import YouTubeUpload from "./components/YouTubeUpload";
import AnalyticsDashboard from "./components/AnalyticsDashboard";
import CDNIntegration from "./components/CDNIntegration";

function App() {
  return (
    <div className="App">
      <h1>Third-Party Services Integration</h1>
      <VideoUpload />
      <YouTubeUpload />
      <AnalyticsDashboard />
      <CDNIntegration />
    </div>
  );
}

export default App;
