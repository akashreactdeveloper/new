import React from "react";

const OrderSummary = ({ onNext, onBack }) => {
  const serviceDetails = [
    { label: "No. of integrations", value: "3" },
    { label: "Platform fees per email account", value: "$0" },
    { label: "Monthly emails", value: "1000" },
    { label: "Dedicated tenant", value: "No" },
  ];

  const totalDetails = [
    { label: "Sub total", value: "$100", isBold: false },
    { label: "Tax", value: "$20", isBold: false },
    { label: "Total account", value: "$120", isBold: true },
  ];

  const summaryDetails = [
    ...serviceDetails,
    { label: "Total account", value: "$120", isBold: true },
  ];

  return (
    <div className="subscription-order-summary">
      {/* My service details */}
      <div className="service-detail">
        <div className="service-detail-head">My service details</div>
        {serviceDetails.map((detail, index) => (
          <div key={index} className="service-detail-list">
            <div>{detail.label}</div>
            <div>{detail.value}</div>
          </div>
        ))}
      </div>

      {/* Summary section */}
      <div className="service-detail">
        <div className="service-detail-head">Your order summary</div>
        <div className="horizontal-line-full"></div>
        {totalDetails.map((detail, index) => (
          <div
            key={index}
            className="service-detail-list"
            style={detail.isBold ? { marginBlockStart: "1rem" } : {}}
          >
            <div className={detail.isBold ? "service-detail-head" : undefined}>
              {detail.label}
            </div>
            <div style={detail.isBold ? { fontWeight: "bold" } : {}}>
              {detail.value}
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
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

export default OrderSummary;
