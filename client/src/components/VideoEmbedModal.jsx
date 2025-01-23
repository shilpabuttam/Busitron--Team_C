import React, { useState } from "react";
// import generateEmbedCode from "../utils/embedUtils"; 
import generateEmbedCode from "../utils/embedUtils";// Correct import path

const VideoEmbedModal = ({ videoId, onClose }) => {
  const [quality, setQuality] = useState("720p");
  const [autoplay, setAutoplay] = useState(false);
  const [embedCode, setEmbedCode] = useState("");

  const generateCode = () => {
    const options = { quality, autoplay };
    const code = generateEmbedCode(videoId, options);
    setEmbedCode(code);
  };

  return (
    <div
      className="embed-modal"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        color: "white",
        padding: "20px",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1000,
      }}
    >
      <h3>Embed Video</h3>
      <div>
        <label htmlFor="quality">Quality:</label>
        <select id="quality" value={quality} onChange={(e) => setQuality(e.target.value)}>
          <option value="360p">360p</option>
          <option value="480p">480p</option>
          <option value="720p">720p</option>
          <option value="1080p">1080p</option>
        </select>
      </div>
      <div>
        <label htmlFor="autoplay">Autoplay:</label>
        <input
          type="checkbox"
          id="autoplay"
          checked={autoplay}
          onChange={(e) => setAutoplay(e.target.checked)}
        />
      </div>
      <button onClick={generateCode}>Generate Embed Code</button>
      {embedCode && (
        <div>
          <h4>Embed Code:</h4>
          <textarea rows="4" cols="50" value={embedCode} readOnly />
          <button onClick={() => navigator.clipboard.writeText(embedCode)}>Copy Embed Code</button>
        </div>
      )}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default VideoEmbedModal;
