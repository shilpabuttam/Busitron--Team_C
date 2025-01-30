import React from "react";
import { SketchPicker } from "react-color";

function ColorPicker({ setAvatarStyle, avatarStyle, target }) {
  const handleColorChange = (color) => {
    setAvatarStyle((prevStyle) => ({
      ...prevStyle,
      [target]: color.hex,  // Dynamically update the correct item color
    }));
  };

  return (
    <div className="color-picker">
      <h3>Pick a Color for {target}</h3>
      <SketchPicker
        color={avatarStyle[target] || "#fff"}  // Set initial color
        onChangeComplete={handleColorChange}  // Apply color on selection
      />
    </div>
  );
}

export default ColorPicker;
