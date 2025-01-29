

import React, { useState } from "react";
import "./../styles/CaptionSettings.css";


import { FaCog } from "react-icons/fa"; 

const CaptionSettings = () => {
  const [fontSize, setFontSize] = useState(16);
  const [contrast, setContrast] = useState("normal");
  const [settingsVisible, setSettingsVisible] = useState(false); 

  const toggleSettings = () => {
    setSettingsVisible(!settingsVisible); 
  };

  return (
    <div className="caption-settings">
   
      <div className="caption-preview-container">
     
        <div className={`caption-preview ${contrast}`} style={{ fontSize: `${fontSize}px` }}>
          The Video is Taken from the w3schools website
        </div>

        
        <div onClick={toggleSettings} className="settings-icon">
          <FaCog size={24} />
        </div>
      </div>

      {settingsVisible && (
        <div className="settings-options">
          <div>
            <label>Font Size:</label>
            <input
              type="range"
              min="12"
              max="30"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label>Contrast:</label>
            <select value={contrast} onChange={(e) => setContrast(e.target.value)}>
              <option value="normal">Normal</option>
              <option value="high">High Contrast</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaptionSettings;



