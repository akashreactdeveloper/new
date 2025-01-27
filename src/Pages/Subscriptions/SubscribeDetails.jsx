import React, { useState } from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import { TickLogo } from "../../Components/Icons";
import MyService from "../../Components/Subscriptions/MyService";
import OrderSummary from "../../Components/Subscriptions/OrderSummary";
import PaymentMethod from "../../Components/Subscriptions/PaymentMethod";

const SubscribeDetails = () => {
  const [activeStep, setActiveStep] = useState(1);

  const flow = [
    {
      title: "Step 1",
      heading: "My Services",
      logo: <TickLogo />,
      component: <MyService onNext={() => setActiveStep(2)} />,
    },
    {
      title: "Step 2",
      heading: "Order Summary",
      logo: <TickLogo />,
      component: (
        <OrderSummary
          onNext={() => setActiveStep(3)}
          onBack={() => setActiveStep(1)}
        />
      ),
    },
    {
      title: "Step 3",
      heading: "Payment Method",
      logo: <TickLogo />,
      component: <PaymentMethod onBack={() => setActiveStep(2)} />,
    },
  ];

  return (
    <div style={{ height: "100vh" }}>
      <PageHeader header="Subscription" />
      <div className="subscription-header">
        {flow.map((step, index) => (
          <>
            <div
              key={index}
              className={`step ${activeStep === index + 1 ? "active" : ""}`}
              style={{ color: activeStep === index + 1 ? "#006fb9" : "gray" }}
            >
              <div className="step-logo">
                <TickLogo />
              </div>
              <div className="step-info">
                <span className="step-title">{step.title}</span>
                <span className="step-heading">{step.heading}</span>
              </div>
            </div>

            {index < 2 && <div className="horizontal-line"></div>}
          </>
        ))}
      </div>
      <div className="subscription-service-head">
        <div className="subscription-service-title">Account Name <span className="text-red-600 ml-2 flex items-center"> * </span></div>
        <select className="w-80 h-10">
          <option value="" disabled selected>
            Select your account name 
          </option>
          <option value="account1">Account 1</option>
          <option value="account2">Account 2</option>
          <option value="account3">Account 3</option>
        </select>
      </div>
      <div className="subscription-content">
        {flow[activeStep - 1].component}
      </div>
    </div>
  );
};

export default SubscribeDetails;
