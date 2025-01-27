import React, { useState } from "react";
import CommentForm from "./Components/CommentForm";
import CommentList from "./Components/CommentList";
import "./styles/App.css";

function App() {
  const [comments, setComments] = useState(
    JSON.parse(localStorage.getItem("comments")) || []
  );

  const addComment = (newComment) => {
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  const updateComments = (updatedComments) => {
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  return (
    <div className="app-container">
      <h1 className="heading">Video Commenting System✍️</h1>
      <video src="https://videos.pexels.com/video-files/30333849/13003124_640_360_25fps.mp4" controls className="videoSource"></video>
      <CommentForm addComment={addComment} />
      <CommentList comments={comments} updateComments={updateComments} />
    </div>
  );
}

export default App;
