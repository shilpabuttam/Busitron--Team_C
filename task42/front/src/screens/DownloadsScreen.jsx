import React, { useEffect, useState } from 'react';

const DownloadsScreen = () => {
  const [downloadedVideos, setDownloadedVideos] = useState([]);

  useEffect(() => {
    const videos = JSON.parse(localStorage.getItem('downloadedVideos')) || [];
    setDownloadedVideos(videos);
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Downloaded Videos</h2>
      {downloadedVideos.length === 0 ? (
        <p>No videos downloaded yet!</p>
      ) : (
        <div className="row">
          {downloadedVideos.map((video, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <video width="100%" controls>
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="card-body">
                  <p>{video.quality} Quality</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DownloadsScreen;
