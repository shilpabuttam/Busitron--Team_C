import React from 'react';

const VideoCard = ({ video, handleDownload }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
        <div className="card-footer">
          <video width="100%" controls>
            <source src={video.hdUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
          <h5 className="card-title">{video.name}</h5>
          <p className="card-text">{video.description}</p>
          <div className="btn-group" role="group" aria-label="Video download options">
            
            <button
              className="btn btn-primary"
              onClick={() => handleDownload(video.hdUrl, 'HD')}
            >
              Download HD
            </button>
         
            <button
              className="btn btn-secondary"
              onClick={() => handleDownload(video.sdUrl, 'SD')}
            >
              Download SD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
