import React from "react";
import { useParams } from "react-router-dom";

const EmbedPage = () => {
  const { videoId } = useParams();
  const queryParams = new URLSearchParams(window.location.search);
  const quality = queryParams.get("quality") || "720p";
  const autoplay = queryParams.get("autoplay") === "true";

  return (
    <div className="embed-responsive">
      <video
        src={`https://your-platform.com/videos/${videoId}/${quality}`}
        controls
        autoPlay={autoplay}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default EmbedPage;
