import React, { useRef, useEffect } from "react";

const VideoCard = ({ video, onInteract, isPlaying, onPlayPause }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play(); // Play video
    } else {
      videoRef.current.pause(); // Pause video
    }
  }, [isPlaying]); // Trigger every time the play state changes

  const handleLike = () => {
    onInteract(video.id, "likes");
  };

  const handleShare = () => {
    onInteract(video.id, "shares");
  };

  const handleView = () => {
    onInteract(video.id, "views");
  };

  const handleClick = () => {
    onPlayPause(video.id); // Toggle play/pause when video is clicked
  };

  return (
    <div className="video-card">
      <video
        ref={videoRef}
        controls
        src={video.url}
        className="video-player"
        onPlay={handleView} // Increment views when the video starts
        onClick={handleClick} // Toggle play/pause when clicked
      />
      <h3>{video.title}</h3>
      <p>Genre: {video.genre}</p>
      <p>Region: {video.region}</p>
      <p>Views: {video.views}</p>
      <p>Likes: {video.likes}</p>
      <p>Shares: {video.shares}</p>

      <div className="interaction-buttons">
        <button onClick={handleLike}>Like</button>
        <button onClick={handleShare}>Share</button>
      </div>
    </div>
  );
};

export default VideoCard;
