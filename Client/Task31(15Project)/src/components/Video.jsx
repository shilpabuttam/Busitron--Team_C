import { useState, useRef, useEffect } from "react";

function Video() {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const savedProgress = parseFloat(localStorage.getItem("videoProgress:")) || 0;

    const onYouTubeIframeAPIReady = () => {
      if (window.YT && videoRef.current) {
        const player = new window.YT.Player(videoRef.current, {
          events: {
            onReady: (event) => {
              event.target.seekTo(savedProgress, true);
            },
            onStateChange: (event) => {
              if (
                event.data === window.YT.PlayerState.PAUSED ||
                event.data === window.YT.PlayerState.ENDED
              ) {
                const current = event.target.getCurrentTime();
                setCurrentTime(current);
                localStorage.setItem("videoProgress", current);
              }
            },
          },
        });
      }
    };

    if (!window.YT) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      script.onload = onYouTubeIframeAPIReady;
      document.body.appendChild(script);
    } else {
      onYouTubeIframeAPIReady();
    }
  }, []);

  return (
    <div>
      <iframe
        ref={videoRef}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/DDBUrQ8bdlc?enablejsapi=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <p>Current Progress: {currentTime.toFixed(2)} seconds</p>
    </div>
  );
}

export default Video;
