import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./sales.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Navbar sales={false} />
      <div className="sales-container">
        <div className="sales-head">Contact Sales</div>
        <div className="sales-description">
          Contact sales and let your journey to productivity and efficiency
          begin
        </div>
        <div className="sales-form-container">
          <div className="sales-form">
            {[
              {
                label: "Full Name",
                type: "text",
                placeholder: "Enter your full name",
              },
              {
                label: "Email Address",
                type: "email",
                placeholder: "Eg : business@example.com",
              },
              {
                label: "Phone Number",
                type: "grouped",
                placeholder: ["+1", "Input your phone number"],
              },
              {
                label: "Company Name",
                type: "text",
                placeholder: "Enter your company name",
              },
              {
                label: "Job Title",
                type: "text",
                placeholder: "Enter your job title",
              },
            ].map(({ label, type, placeholder }, index) => {
              if (type === "grouped") {
                return (
                  <div
                    className="sales-form-list phone-input-group"
                    key={index}
                  >
                    <label className="form-label">
                      {label} <span style={{ color: "red" }}>*</span>
                    </label>
                    <div style={{ display: "flex", gap: "0.3rem" }}>
                      <input
                        type="text"
                        placeholder={placeholder[0]} // Country code placeholder
                        style={{
                          width: "5%",
                          textAlign: "center",
                          border: "1px solid black",
                          borderRadius: "4px",
                        }}
                      />
                      <input
                        type="number"
                        placeholder={placeholder[1]} // Phone number placeholder
                        style={{
                          width: "80%",
                          border: "1px solid black",
                          borderRadius: "4px",
                        }}
                      />
                    </div>
                  </div>
                );
              }
              return (
                <div className="sales-form-list" key={index}>
                  <label className="form-label">
                    {label} <span style={{ color: "red" }}>*</span>
                  </label>
                  <input type={type} placeholder={placeholder} />
                </div>
              );
            })}
            <div className="sales-form-list">
              <label className="form-label">
                Number of Employees <span style={{ color: "red" }}>*</span>
              </label>
              <select>
                <option value="">Select</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="500+">500+</option>
              </select>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingRight: "2rem",
              }}
            >
              <button
                className="upload-button"
                style={{
                  marginBlock: "2rem",
                  padding: "0.7rem 8rem",
                  width: "max-content",
                }}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
