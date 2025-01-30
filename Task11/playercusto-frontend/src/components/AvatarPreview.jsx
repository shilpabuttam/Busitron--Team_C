import React from "react";
import "../styles/AvatarPreview.css";

function AvatarPreview({ avatarStyle }) {
  return (
    <div className="avatar-preview">
      <div className="avatar-image">
        {/* Base Avatar */}
        <img src="/assets/base-avatar.png" alt="Avatar Base" className="avatar-base" />
        
        {/* Only One Clothing at a Time */}
        {avatarStyle.clothing && <img src={avatarStyle.clothing} alt="Clothing" className="avatar-item clothing" />}

        {/* Only One Accessory at a Time */}
        {avatarStyle.accessory && <img src={avatarStyle.accessory} alt="Accessory" className="avatar-item accessory" />}
      </div>
    </div>
  );
}

export default AvatarPreview;
