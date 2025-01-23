import React from "react";

const MyService = ({ onNext }) => {
  return (
    <div className="subscription-service">
      <div className="horizontal-line-full"></div>

      <div className="subscription-service-info">
        <div className="number-of-integrations">
          <div className="subscription-service-info-head">
            Number Of Integrations
          </div>
          <div className="subscription-service-data">4</div>
        </div>
        <div className="number-of-integrations">
          <div className="subscription-service-info-head">
            Platform fees per email account (in $)
          </div>
          <div className="subscription-service-data">$13</div>
        </div>
        <div className="number-of-integrations">
          <div className="subscription-service-info-head">
            Monthly Emails <span style={{ color: "red" }}>*</span>
          </div>
          {/* <div className="subscription-service-data"> */}
          <select name="" id="" className="subscription-service-data-select">
            <option value="10000">10,000</option>
            <option value="20000">20,000</option>
            <option value="30000">30,000</option>
            <option value="40000">40,000</option>
            <option value="50000">50,000</option>
          </select>
          {/* </div>/ */}
        </div>
        <div className="number-of-integrations">
          <div className="subscription-service-info-head">Dedicated Tenant</div>
          {/* <div className="subscription-service-data"> */}
          <div
            className="subscription-service-data"
            style={{ backgroundColor: "transparent", paddingInline: "0" }}
          >
            <label>
              <input type="radio" name="dedicatedTenant" value="yes" /> Yes
            </label>
            <label style={{ marginLeft: "1rem" }}>
              <input type="radio" name="dedicatedTenant" value="no" /> No
            </label>
          </div>
          {/* </div> */}
        </div>
      </div>

      {/* <button onClick={onNext}>Save and Next</button> */}
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
            padding: "0.7rem 0.9rem",
            width: "max-content",
          }}
          onClick={onNext}
        >
          Save and Next
        </button>
      </div>
    </div>
  );
};

export default MyService;
