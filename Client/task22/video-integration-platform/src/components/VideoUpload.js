import React, { useState } from "react";
import AWS from "aws-sdk";
import axios from "axios";

const VideoUpload = () => {
  const [videoFile, setVideoFile] = useState(null);

  // AWS S3 Configuration
  AWS.config.update({
    region: process.env.REACT_APP_AWS_REGION,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
  });

  const s3 = new AWS.S3();

  const handleUpload = async () => {
    if (!videoFile) {
      alert("Please select a video to upload.");
      return;
    }

    // Uploading video to AWS S3
    const params = {
      Bucket: "your-s3-bucket-name",
      Key: videoFile.name,
      Body: videoFile,
      ContentType: videoFile.type,
    };

    try {
      await s3.upload(params).promise();
      alert("Video uploaded successfully!");
      // Trigger transcoding via AWS MediaConvert (if needed)
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  return (
    <div>
      <h2>Upload and Transcode Video</h2>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default VideoUpload;
