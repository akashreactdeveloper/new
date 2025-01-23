import React, { useEffect, useState } from "react";
import Banner from "../../Components/Landing/Banner";
import Features from "../../Components/Landing/Features";
import Contact from "../../Components/Landing/Contact";
import { selectUserDetails } from "../../redux/slice/userSlice";
import { useSelector } from "react-redux";
import SkeletonBannerLoading from "../../Components/Landing/SkeletonBannerLoading";

const Landing = () => {
  const user = useSelector(selectUserDetails);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading state (e.g., while checking user session)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust timeout as needed
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // Case 1: Still checking for user session
    return (
      <div>
        <SkeletonBannerLoading />
      </div>
    );
  }
  // Case 3: User session found
  return (
    <div style={{ width: "100%" }}>
      <section style={{ minHeight: "70vh" }}>
        <Banner user={user} />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
};

export default Landing;
