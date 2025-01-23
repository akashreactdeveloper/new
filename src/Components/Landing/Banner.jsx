import React from "react";
import "./Landing.css";
import { useNavigate } from "react-router-dom";

function Banner({ user }) {
  const navigate = useNavigate(); // Replacing useHistory with useNavigate

  const handleBookClick = () => {
    navigate("/book"); // Using navigate instead of history.push
  };
  const handleLoginClick = () => {
    navigate("/signup"); // Using navigate instead of history.push
  };
  return (
    <div className="generative-ai-section">
      {/* Left Text Section */}
      <div className="generative-ai-text">
        <h1>
          Now Reply To Your Mails <br /> Within Seconds Using <br />
          <span className="highlight-contact">Generative AI</span>
          <p>
            We understand time is gold. That’s why our mission is to help you
            use your time wisely. Don’t get time to reply to mails? Leave that
            to us as that is our mission.
          </p>
        </h1>

        <div className="cta-buttons">
          <button className="sign-up-button" onClick={handleLoginClick}>
            Sign up for free <span className="arrow">→</span>
          </button>

          <button className="book-demo-button" onClick={handleBookClick}>
            Book a demo
          </button>
        </div>
        <p className="terms-a">
          By signing up, you agree to the{" "}
          <a href="#terms">Terms and Conditions</a> and{" "}
          <a href="#privacy">Privacy Policy</a>.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="generative-ai-image">
        <img
          src="https://ik.imagekit.io/i3divn77k/Gatepax/2024-12-19_10-58-34%20(1).gif?updatedAt=1734764985950"
          alt="Generative AI"
          className="generative-ai-gif"
        />
        {/* <img
          src="https://via.placeholder.com/800x500" // Replace with your actual image URL
          alt="Generative AI"
          className="email-preview"
        /> */}
      </div>
    </div>
  );
}

export default Banner;
