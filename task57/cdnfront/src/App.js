import React from "react";
import VideoPlayer from "./components/VideoPlayer";
import OfflineVideos from "./components/OfflineVideos";
import "./styles.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="mainTitle">Offline Video Player</h1>
      <div className="vid">
        <VideoPlayer videoKey="action1" />
        <VideoPlayer videoKey="comedy1" />
        <VideoPlayer videoKey="drama1" />
        <VideoPlayer videoKey="action2" />
      </div>
      <hr />
      <OfflineVideos />
    </div>
  );
};

export default App;
