import React from "react";
import "../../Components/Booking/Booking.css";
import LeftSection from "../../Components/Booking/LeftSection";
import RightSection from "../../Components/Booking/RightSection";
import { selectIsLoading } from "../../redux/slice/screenLoadingSlice";
import { useSelector } from "react-redux";
import LoadingAnimation from "../../Components/LoadingAnimation/LoadingAnimation";

function Booking() {
  const loading = useSelector(selectIsLoading);

  if (loading) {
    return (
      <div className="signup-container">
        <LoadingAnimation />
      </div>
    );
  }

  return (
    <div className="demo-container">
      {/* Left Section */}
      <LeftSection />

      {/* Right Section */}
      <RightSection />
    </div>
  );
}

export default Booking;
