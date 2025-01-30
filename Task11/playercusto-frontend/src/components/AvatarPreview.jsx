import React from "react";
import "../styles/AvatarPreview.css";

function AvatarPreview({ avatarStyle }) {
  return (
    <div className="avatar-preview">
      <div className="avatar-image">
     
        <img src="/assets/base-avatar.png" alt="Avatar Base" className="avatar-base" />
        
        
        {avatarStyle.clothing && <img src={avatarStyle.clothing} alt="Clothing" className="avatar-item clothing" />}

       
        {avatarStyle.accessory && <img src={avatarStyle.accessory} alt="Accessory" className="avatar-item accessory" />}
      </div>
    </div>
  );
}

export default AvatarPreview;
