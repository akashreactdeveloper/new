import React, { useState } from "react";
import "../../Components/Booking/Booking.css";
import baseurl from "../../Api/baseURL";
import { useNavigate } from "react-router-dom";
import { setLoading } from "../../redux/slice/screenLoadingSlice";
import store from "../../redux/store";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

function RightSection() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    requestedDemoDate: "", // Changed to empty string for React DatePicker
  });

  const [loading, setLoadingState] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleDateChange = (date) => {
    const formattedDate = date ? format(date, "yyyy-MM-dd") : "";
    setFormData((prevData) => ({
      ...prevData,
      requestedDemoDate: formattedDate,
    }));
    console.log(formData);
  };

  const handleSubmitBooking = async (e) => {
    e.preventDefault();

    setLoadingState(true);
    store.dispatch(setLoading(true));
    try {
      const response = await fetch(`${baseurl}/user-engagement/bookDemo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Booking successful: " + data.message);
        navigate("/");
      } else {
        alert("Booking failed: " + (data.message || "Unknown error occurred"));
      }
    } catch (error) {
      console.error("Error booking demo:", error);
      alert("Booking failed due to a network or server error.");
    } finally {
      setLoadingState(false);
      store.dispatch(setLoading(false));
    }
  };

  return (
    <div className="right-section">
      <h2 className="text-blue-600 font-semibold">Get started with Gatepax AI</h2>
      <form className="demo-form" onSubmit={handleSubmitBooking}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Work Email ID"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Work Email ID"
          value={formData.company}
          onChange={handleChange}
          required
        />
        <div className="w-40" style={{ width: 'calc(40% + 14px)' }}>
          <DatePicker
            selected={
              formData.requestedDemoDate
                ? new Date(formData.requestedDemoDate)
                : null
            }
            onChange={handleDateChange}
            placeholderText="Select Demo Date"
            className="date-input"
            dateFormat="yyyy-MM-dd"
            minDate={new Date()} // Optional: Disable past dates
            required
          />
        </div>
        <p className="form-disclaimer">
          We respect your data. By submitting this form, you agree that we will
          contact you in relation to our products and services, in accordance
          with our{" "}
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
            Privacy policy
          </a>
          .
        </p>
        <button type="submit" className="bg-blue-500 text-white py-4 rounded-lg" disabled={loading}>
          {loading ? "Booking..." : "Book a demo"}
        </button>
      </form>
      <div className="demo-info">
        <h3>In a 30-minute demo, we’ll show you how to:</h3>
        <ul>
          <li>Improve employee productivity and job satisfaction</li>
          <li>
            Strengthen customer relationships through timely and personalized
            responses
          </li>
          <li>Streamline workflows and improve overall efficiency</li>
        </ul>
      </div>
    </div>
  );
}

export default RightSection;
