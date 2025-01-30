import React, { useState } from "react";
import AvatarCustomization from "./components/AvatarCustomization";
import AvatarPreview from "./components/AvatarPreview";
import './styles/App.css';

function App() {
  const [avatarStyle, setAvatarStyle] = useState({
    skin: "default",
    clothing: "shirt",
    accessory: "hat",
    color: "#ffffff",
  });

  return (
    <div className="app">
      <h1 className="projTitle">Player Customization Avatar</h1>
      <div className="customization-container">
        <AvatarCustomization avatarStyle={avatarStyle} setAvatarStyle={setAvatarStyle} />
        {/* <AvatarPreview avatarStyle={avatarStyle} /> */}
      </div>
    </div>
  );
}

export default App;
