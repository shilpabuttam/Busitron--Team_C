import React, { useEffect, useState } from 'react';

const OfflineVideos = () => {
  const [offlineVideos, setOfflineVideos] = useState([]);

  useEffect(() => {
    const storedVideos = JSON.parse(localStorage.getItem('offlineVideos')) || [];
    setOfflineVideos(storedVideos);
  }, []);

  return (
    <div className="offline-videos-container">
      <h3>Offline Videos</h3>
      {offlineVideos.length === 0 ? (
        <p>No offline videos available.</p>
      ) : (
        <div className="videos-grid">
          {offlineVideos.map((video, index) => (
            <div className="video-card" key={index}>
              <h5>{`Video Key: ${video.key} - Quality: ${video.quality}`}</h5>
              <video controls width="100%"  className='ofvid'>
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OfflineVideos;
