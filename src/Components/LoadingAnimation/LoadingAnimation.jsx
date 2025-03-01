import React from "react";
import "./LoadingAnimation.css";

const LoadingAnimation = () => {
  return (
    <div className="loading-animation-container">
      <div className="loading-animation-circle"></div>
      <div className="loading-animation-circle"></div>
      <div className="loading-animation-circle"></div>
    </div>
  );
};

export default LoadingAnimation;
