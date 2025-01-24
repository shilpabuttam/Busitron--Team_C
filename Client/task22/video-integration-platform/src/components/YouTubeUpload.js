import React, { useState } from "react";
import axios from "axios";

const YouTubeUpload = () => {
  const [videoTitle, setVideoTitle] = useState("");
  const [videoFile, setVideoFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", videoFile);
    formData.append("title", videoTitle);

    try {
      const response = await axios.post(
        "https://www.googleapis.com/upload/youtube/v3/videos",
        formData,
        {
          headers: {
            Authorization: `Bearer your_oauth_token`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("YouTube Upload Success:", response.data);
    } catch (error) {
      console.error("Error uploading to YouTube:", error);
    }
  };

  return (
    <div>
      <h2>Upload to YouTube</h2>
      <input
        type="text"
        placeholder="Video Title"
        value={videoTitle}
        onChange={(e) => setVideoTitle(e.target.value)}
      />
      <input type="file" accept="video/*" onChange={(e) => setVideoFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload to YouTube</button>
    </div>
  );
};

export default YouTubeUpload;
