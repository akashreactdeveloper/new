import React from "react";
import "../../Components/Booking/Booking.css";

function LeftSection() {
  return (
    <div className="left-section">
      <div className="logo">
        {/* SVG logo */}
        <svg
          width="131"
          height="40"
          viewBox="0 0 131 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG paths */}
        </svg>
      </div>
      <h1 className="headline-book">
        Imagine a World Where 80% of Your Emails Answer Themselves. See it
        happen with <span className="highlight">Gatepax AI.</span>
      </h1>
      <img
        src="https://via.placeholder.com/600x300"
        alt="Email Preview"
        className="email-preview"
      />
      <blockquote className="quote">
        “Gatepax AI uses your existing data to{" "}
        <span className="highlight2">
          generate insightful email replies automatically
        </span>
        . Our AI understands your business context and provides relevant,
        personalized responses,{" "}
        <span className="highlight2">
          eliminating the need for manual drafting
        </span>{" "}
        and freeing your valuable employees to focus on strategic growth.”
      </blockquote>
    </div>
  );
}

export default LeftSection;
