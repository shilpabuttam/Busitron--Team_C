import { useState, useRef, useEffect } from "react";

const VideoChapterMarkers = ({ videoSrc, chapters = [] }) => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const updateTime = () => setCurrentTime(video.currentTime);
      video.addEventListener("timeupdate", updateTime);
      return () => video.removeEventListener("timeupdate", updateTime);
    }
  }, []);

  const seekToChapter = (time) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  return (
    <div className="video-container">
      <video ref={videoRef} controls width="100%">
        <source src={videoSrc} type="video/mp4" />
      </video>
      
      <div className="timeline">
        {videoRef.current?.duration && chapters.map((chapter, index) => (
          <div
            key={index}
            className="chapter-marker"
            style={{ left: `${(chapter.time / videoRef.current.duration) * 100}%` }}
            onClick={() => seekToChapter(chapter.time)}
          />
        ))}
      </div>
      
      <div className="chapter-list">
        {chapters.map((chapter, index) => (
          <button key={index} onClick={() => seekToChapter(chapter.time)}>
            {chapter.title} ({Math.floor(chapter.time / 60)}:{String(Math.floor(chapter.time % 60)).padStart(2, '0')})
          </button>
        ))}
      </div>
    </div>
  );
};

export default VideoChapterMarkers;
