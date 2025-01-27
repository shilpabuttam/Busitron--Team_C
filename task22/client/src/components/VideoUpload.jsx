import React, { useState } from 'react';
import axios from 'axios';

const VideoUpload = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [uploadResult, setUploadResult] = useState('');

  const handleUpload = async () => {
    try {
      const response = await axios.post('http://localhost:3000/upload-video', { videoUrl });
      setUploadResult(response.data.videoId);
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <div>
      <h1>Upload Video</h1>
      <input
        type="text"
        placeholder="Enter video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <button onClick={handleUpload}>Upload</button>
      {uploadResult && <p>Video uploaded successfully! ID: {uploadResult}</p>}
    </div>
  );
};

export default VideoUpload;
