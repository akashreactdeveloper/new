import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const KnowledgeConfigModal = ({ isOpen, onClose }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const [formData, setFormData] = useState({ requestedDemoDate: "" });

  const handleDateChange = (date) => {
    const formattedDate = date ? format(date, "yyyy-MM-dd") : "";
    setFormData((prevData) => ({
      ...prevData,
      requestedDemoDate: formattedDate,
    }));
    console.log(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container" style={{ width: "30%" }}>
        <div className="close-modal">
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-header">Choose where to start</div>
        <div className="modal-content">
          <div className="option-knowledge-modal">
            <label>
              <input
                type="radio"
                name="startOption"
                value="fromNow"
                checked={selectedOption === "fromNow"}
                onChange={() => setSelectedOption("fromNow")}
              />
              From now on
            </label>
          </div>
          <div className="option-knowledge-modal">
            <label>
              <input
                type="radio"
                name="startOption"
                value="specificDate"
                checked={selectedOption === "specificDate"}
                onChange={() => setSelectedOption("specificDate")}
              />
              Emails from after a specific date
            </label>
            {selectedOption === "specificDate" && (
              <div className="" style={{ width: "15%" }}>
                <DatePicker
                  // selected={
                  //   formData.requestedDemoDate
                  //     ? new Date(formData.requestedDemoDate)
                  //     : null
                  // }
                  onChange={handleDateChange}
                  placeholderText="Select Date"
                  // className="date-input"
                  dateFormat="yyyy-MM-dd"
                  maxDate={new Date()} // Optional: Disable past dates
                  required
                />
              </div>
            )}
          </div>
          <div className="option-knowledge-modal">
            <label>
              <input
                type="radio"
                name="startOption"
                value="allEmails"
                checked={selectedOption === "allEmails"}
                onChange={() => setSelectedOption("allEmails")}
              />
              All emails
            </label>
          </div>
        </div>
        <div className="modal-footer">
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="invite-button">Done</button>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeConfigModal;
