import React, { useState } from "react";
import AvatarPreview from "./AvatarPreview";
import "../styles/AvatarCustomization.css";

const AvatarCustomization = () => {
  const [avatarStyle, setAvatarStyle] = useState({
    clothing: "", // Holds either a Shirt or Jacket
    accessory: "", // Holds either a Hat or Glasses
  });

  const [finalAvatar, setFinalAvatar] = useState(null); // Stores final selection

  // Function to update only one clothing OR one accessory at a time
  const handleSelection = (type, image) => {
    setAvatarStyle((prev) => ({
      ...prev,
      [type]: image, // Updates only the clicked type
    }));
  };

  // Finalize selection on submit
  const handleSubmit = () => {
    setFinalAvatar({ ...avatarStyle });
  };

  return (
    <div className="customization-container">
    
      <h2>Player Customization</h2>
      

      {/* Left Side: Live Avatar Preview */}
      <AvatarPreview avatarStyle={avatarStyle} />

      {/* Selection Buttons */}
      <div className="customization-buttons">
        <h3>Select Clothing</h3>
        <button onClick={() => handleSelection("clothing", "/assets/jacket1.png")}>Jacket 1</button>
        <button onClick={() => handleSelection("clothing", "/assets/jacket2.png")}>Jacket 2</button>
        <button onClick={() => handleSelection("clothing", "/assets/shirt1.png")}>Shirt 1</button>
        <button onClick={() => handleSelection("clothing", "/assets/shirt2.png")}>Shirt 2</button>

        <h3>Select Accessory</h3>
        <button onClick={() => handleSelection("accessory", "/assets/hat1.png")}>Hat 1</button>
        <button onClick={() => handleSelection("accessory", "/assets/hat2.png")}>Hat 2</button>
        <button onClick={() => handleSelection("accessory", "/assets/glasses1.png")}>Glasses 1</button>
        <button onClick={() => handleSelection("accessory", "/assets/glasses2.png")}>Glasses 2</button>

        {/* Submit Button */}
        <div>
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
        </div>
        
      </div>

      {/* Right Side: Final Avatar */}
      <div className="final-avatar-container">
        {finalAvatar && <AvatarPreview avatarStyle={finalAvatar} />}
      </div>
    </div>
  );
};

export default AvatarCustomization;
