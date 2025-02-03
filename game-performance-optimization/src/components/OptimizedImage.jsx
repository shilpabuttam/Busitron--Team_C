import React from "react";
import useGameStore from "../store/gameStore";

const OptimizedImage = () => {
  const { imageUrl } = useGameStore();

  return (
    <div className="image-container">
      <img src={imageUrl} alt="Game Level" className="game-image" />
    </div>
  );
};

export default OptimizedImage;
