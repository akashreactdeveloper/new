import React from "react";

const PaymentMethod = ({}) => {
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

  const billingFields = [
    { label: "Full Name", placeholder: "Enter your full name" },
    { label: "Card Number", placeholder: "Enter your card number" },
    {
      label: "Card Expiration Date",
      placeholder: "Enter your card expiration date",
    },
    {
      label: "Card security number",
      placeholder: "Enter your card security number",
    },
  ];

  const addressFields = [
    { label: "Country", placeholder: "Enter your country name" },
    { label: "Zipcode", placeholder: "Enter your zip code" },
    { label: "City", placeholder: "Enter your city name" },
    { label: "State", placeholder: "Enter your state name" },
    { label: "Address", placeholder: "Enter your full address" },
  ];

  const renderFields = (fields) =>
    fields.map((field, index) => (
      <div
        key={index}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          width: "48%",
        }}
      >
        <label>{field.label}</label>
        <input
          type="text"
          placeholder={field.placeholder}
          style={{
            width: "90%",
            padding: "0.5rem 1rem",
            fontSize: "16px",
          }}
        />
      </div>
    ));

  return (
    <div className="subscription-payment-method-container">
      <div className="order-summary">
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
              <div
                className={detail.isBold ? "service-detail-head" : undefined}
              >
                {detail.label}
              </div>
              <div style={detail.isBold ? { fontWeight: "bold" } : {}}>
                {detail.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Method Details */}
      <div className="payment-method-details">
        <div className="service-detail">
          <div className="service-detail-head">Payment details</div>
          <div
            className="service-detail-list"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div>Select new payment method type </div>
            <select
              className="subscription-service-data-select"
              style={{ width: "50%", backgroundColor: "white" }}
            >
              <option value="CreditCard/DebitCard">
                CreditCard / DebitCard
              </option>
              <option value="ACHDirectDebitCard">ACH Direct Debit Card</option>
            </select>
          </div>
        </div>
      </div>

      {/* Billing Information */}
      <div className="payment-method-details">
        <div className="service-detail">
          <div className="service-detail-head">Billing Information</div>
          <div
            className="service-detail-list"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            {renderFields(billingFields)}
          </div>
        </div>
      </div>

      {/* Billing Address */}
      <div className="payment-method-details">
        <div className="service-detail">
          <div className="service-detail-head">Billing Address</div>
          <div
            className="service-detail-list"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            {renderFields(addressFields)}
          </div>
        </div>
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
            padding: "0.7rem 0.9rem",
            width: "max-content",
          }}
        >
          Pay Now
        </button>
        {/* <div>Contact Sales</div> */}
      </div>
    </div>
  );
};

export default PaymentMethod;
