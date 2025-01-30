import React, { useState } from "react";
import AvatarPreview from "./AvatarPreview";
import "../styles/AvatarCustomization.css";

const AvatarCustomization = () => {
  const [avatarStyle, setAvatarStyle] = useState({
    clothing: "", 
    accessory: "", 
  });

  const [finalAvatar, setFinalAvatar] = useState(null); 

 
  const handleSelection = (type, image) => {
    setAvatarStyle((prev) => ({
      ...prev,
      [type]: image, 
    }));
  };


  const handleSubmit = () => {
    setFinalAvatar({ ...avatarStyle });
  };

  return (
    <div className="customization-container">
    
      <h2>Player Customization</h2>
      

    
      <AvatarPreview avatarStyle={avatarStyle} />

  
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

        <div>
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
        </div>
        
      </div>

      <div className="final-avatar-container">
        {finalAvatar && <AvatarPreview avatarStyle={finalAvatar} />}
      </div>
    </div>
  );
};

export default AvatarCustomization;
