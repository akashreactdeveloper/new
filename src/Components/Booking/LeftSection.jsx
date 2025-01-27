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
        src="https://s3-alpha-sig.figma.com/img/eb6a/ef8a/1891fabe1d216423cd49564ad783d63e?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jsc-WTOz8U9X5YAb3e7M9-5dDxnamkcmd29GL2YTzlpHZ3~DIIpWi0pXNrh74zJPUr1wBawQsVpuovgwxJnWJM6Jj0DZi5BR9Fr1BnbQZnWSErGabIg12xHJ46I0I~SMMPTk7J9vcki4Lkbi8qQc9qt2UNNImQpQa88ARrLGuR8Y-TNBM1~d3d2IcC2nxVvgiJba2elYJR-iLkb8nDyvu2NRamVrhRLUxJCQUbUtLW7rsOhUC-yzbwtKMcfEBJCjzwfmeBPyGdOl5NIMdagYGmUhQ8qKJvvGGxwMpdm2yhQTQH8vgW8Qkx3~7vfau4ax-pbdIF4XceA1SIPkDg4Klg__"
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
