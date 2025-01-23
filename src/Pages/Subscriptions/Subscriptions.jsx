import React, { useState } from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import { useNavigate } from "react-router-dom";
import "../../Components/Subscriptions/Subscriptions.css";
import SubscriptionSummary from "../../Components/Subscriptions/SubscriptionSummary";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
// import { CalendarIcon } from "../../Components/Icons";
import TransactionList from "../../Components/Subscriptions/TransactionList";

const Subscriptions = () => {
  const navigate = useNavigate(); // Replacing useHistory with useNavigate

  const [formData, setFormData] = useState({
    transactionDate: "", // Changed to empty string for React DatePicker
  });

  const handleDateChange = (date) => {
    const formattedDate = date ? format(date, "yyyy-MM-dd") : "";
    setFormData((prevData) => ({
      ...prevData,
      trqnsactionDate: formattedDate,
    }));
    console.log(formData);
  };

  const accounts = [
    { value: "account1", label: "Account 1" },
    { value: "account2", label: "Account 2" },
    { value: "account3", label: "Account 3" },
  ];
  return (
    <div style={{ height: "100vh" }}>
      <PageHeader header="Subscriptions" />
      <div className="subscription-account-select">
        <select name="" id="">
          <option value="">Select your account name</option>
          {accounts.map((account) => (
            <option key={account.value} value={account.value}>
              {account.label}
            </option>
          ))}
        </select>
      </div>
      <SubscriptionSummary />
      <div className="transaction-date">
        <div className="transaction-date-title">Select date</div>
        <div className="transaction-date-input">
          <DatePicker
            selected={
              formData.transactionDate
                ? new Date(formData.transactionDate)
                : null
            }
            onChange={handleDateChange}
            placeholderText={formData.transactionDate || "Select Date"}
            className="date-input-transactions"
            dateFormat="yyyy-MM-dd"
            maxDate={new Date()} // Optional: Disable past dates
            required
          />
          {/* <CalendarIcon /> */}
        </div>
      </div>
      <TransactionList />
      <div className="knowledge-upload-button">
        <button
          className="upload-button"
          style={{
            marginBlock: "2rem",
            padding: "0.7rem 0.9rem",
            width: "max-content",
          }}
          onClick={() => navigate("/subscriptions/detail")}
        >
          Add New Subscription
        </button>
      </div>
    </div>
  );
};

export default Subscriptions;
