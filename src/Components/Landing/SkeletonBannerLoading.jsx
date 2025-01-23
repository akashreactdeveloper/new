import React from "react";
import "./Landing.css";

const SkeletonBannerLoading = () => {
  return (
    <div className="generative-ai-section skeleton">
      {/* Skeleton for Left Section */}
      <div className="skeleton-text">
        <div className="skeleton-heading"></div>
        <div className="skeleton-paragraph"></div>
        <div className="skeleton-cta-buttons">
          <div className="skeleton-button"></div>
          <div className="skeleton-button"></div>
        </div>
        <div className="skeleton-terms"></div>
      </div>

      {/* Skeleton for Right Section */}
      <div className="skeleton-image"></div>
    </div>
  );
};

export default SkeletonBannerLoading;
