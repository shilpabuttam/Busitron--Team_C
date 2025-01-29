import React from 'react';

const DownloadButton = ({ videoUrl, videoKey, quality }) => {
const handleDownload = () => {
   
    const link = document.createElement('a');
    link.href = videoUrl;
    link.download = `video_${videoKey}_${quality}.mp4`;


    link.click();

    const downloadedVideos = JSON.parse(localStorage.getItem('offlineVideos')) || [];
    downloadedVideos.push({
      url: videoUrl,
      key: videoKey,
      quality: quality,
    });

    localStorage.setItem('offlineVideos', JSON.stringify(downloadedVideos));

    alert('Video downloaded successfully!');
  };

  return (
    <button onClick={handleDownload}>Download</button>
  );
};

export default DownloadButton;



