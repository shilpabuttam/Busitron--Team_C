import React, { useState } from "react";
import generateEmbedCode from "../utils/embedUtils";
import axios from "axios";

const VideoEmbedModal = ({ videoUrl, onClose }) => {
  const [quality, setQuality] = useState("1080p");
  const [autoplay, setAutoplay] = useState(false);
  const [embedCode, setEmbedCode] = useState("");

  const generateCode = async () => {
    const options = { quality, autoplay };
    const code = generateEmbedCode(videoUrl, options);
    setEmbedCode(code);

    // Send the embed usage data to backend
    await axios.post("http://localhost:5000/api/videos/embed", { videoUrl, quality, autoplay });
  };

  return (
    <div className="embed-modal" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", color: "white", padding: "20px", position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 1000 }}>
      <h3>Embed Video</h3>
      <div>
        <label>Quality:</label>
        <select value={quality} onChange={(e) => setQuality(e.target.value)}>
          <option value="360p">360p</option>
          <option value="480p">480p</option>
          <option value="720p">720p</option>
          <option value="1080p">1080p</option>
        </select>
      </div>
      <div>
        <label>Autoplay:</label>
        <input type="checkbox" checked={autoplay} onChange={(e) => setAutoplay(e.target.checked)} />
      </div>
      <button onClick={generateCode}>Generate Embed Code</button>
      {embedCode && (
        <div>
          <textarea value={embedCode} readOnly rows="4" cols="50" />
          <button onClick={() => navigator.clipboard.writeText(embedCode)}>Copy Embed Code</button>
        </div>
      )}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default VideoEmbedModal;
