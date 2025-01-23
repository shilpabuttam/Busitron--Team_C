import React, { useState } from "react";
import axios from "axios";

const VideoUpload = () => {
  const [video, setVideo] = useState(null);

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!video) {
      alert("Please select a video to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("video", video);

    try {
      const response = await axios.post("http://localhost:4000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Video uploaded successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading video:", error);
      alert("Failed to upload video.");
    }
  };

  return (
    <div>
      <h2 className="mb-5 mt-2">Upload a Video</h2>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
        <form onSubmit={handleUpload} className="form-control">
        <input type="file" accept="video/*" onChange={handleVideoChange}className="form-control" />
        <button type="submit" className="btn btn-primary mt-2">Upload</button>
      </form>
        </div>

      </div>
    </div>
  );
};

export default VideoUpload;
