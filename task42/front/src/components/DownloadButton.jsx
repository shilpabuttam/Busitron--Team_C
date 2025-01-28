import React from 'react';

const DownloadButton = ({ videoUrl, videoName }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = videoUrl;
    link.download = videoName;
    link.click();
  };

  return <button onClick={handleDownload}>Download</button>;
};

export default DownloadButton;
