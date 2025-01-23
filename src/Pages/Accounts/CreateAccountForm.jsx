import React, { useState, useEffect } from "react";
import TimezoneSelect from "react-timezone-select";
import {
  createAccount,
  updateAccount,
  getAccountDetails,
  deleteAccount, // Import delete API function
  prepareAccountData,
} from "../../Api/AccountApi"; // API functions
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIsLoading,
  setLoading,
} from "../../redux/slice/screenLoadingSlice";
import LoadingAnimation from "../../Components/LoadingAnimation/LoadingAnimation";
import { TrashIcon } from "lucide-react";
import { selectUserDetails } from "../../redux/slice/userSlice";

export default function AccountForm() {
  const { id } = useParams(); // Get account ID from the URL (if editing)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const user = useSelector(selectUserDetails);

  // State for form and delete confirmation modal
  const [formData, setFormData] = useState({
    accountName: "",
    emailId: "",
    fullName: "",
    companyName: "",
    // customer_id: user.customer_id, // Replace with actual customer ID as required
    timeZone: "UTC", // Default time zone
  });
  const [showDeleteModal, setShowDeleteModal] = useState(false); // Delete modal state

  // Fetch account details when editing
  useEffect(() => {
    if (id) {
      (async () => {
        dispatch(setLoading(true));
        try {
          const account = await getAccountDetails(id); // Fetch account details by ID
          console.log("Account details:", account);
          setFormData({
            accountName: account.account_name,
            emailId: account.account_owner_mailbox_address,
            fullName: account.full_name,
            companyName: account.company_name,
            timeZone: account.time_zone || "UTC",
          });
        } catch (error) {
          console.error("Error fetching account details:", error);
          alert("Failed to load account details.");
        } finally {
          dispatch(setLoading(false));
        }
      })();
    }
  }, [id, dispatch]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle time zone selection
  const handleTimezoneChange = (timezone) => {
    setFormData((prevState) => ({
      ...prevState,
      timeZone: timezone,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    try {
      const apiData = prepareAccountData(formData);

      // console.log("API Data:", apiData);
      if (id) {
        // Update existing account
        await updateAccount(id, apiData);
      } else {
        // Create a new account
        await createAccount(apiData);
      }
      navigate("/accounts"); // Redirect to accounts page
    } catch (error) {
      console.error("Error saving account:", error);
      alert(`Error: ${error.message}`);
    } finally {
      dispatch(setLoading(false));
    }
  };

  // Handle delete account
  const handleDelete = async () => {
    dispatch(setLoading(true));
    try {
      await deleteAccount(id); // Call delete API
      alert("Account deleted successfully.");
      navigate("/accounts"); // Redirect to accounts page
    } catch (error) {
      console.error("Error deleting account:", error);
      alert(`Error: ${error.message}`);
    } finally {
      dispatch(setLoading(false));
      setShowDeleteModal(false); // Close modal
    }
  };

  if (loading) {
    return (
      <div>
        <LoadingAnimation />
      </div>
    );
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>{id ? "Edit Account" : "Create Account"}</h2>
        <div className="form-grid">
          {/* Account Name */}
          <div className="form-group">
            <label className="form-label">
              Account Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="accountName"
              className="form-input outlin outline-gray-400"
              placeholder="Enter your account name"
              value={formData.accountName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email ID */}
          <div className="form-group">
            <label className="form-label">
              Email ID <span className="required">*</span>
            </label>
            <input
              type="email"
              name="emailId"
              className="form-input outlin outline-gray-400"
              placeholder="Enter your email ID"
              value={formData.emailId}
              onChange={handleChange}
              required
            />
          </div>

          {/* Full Name */}
          <div className="form-group">
            <label className="form-label">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              className="form-input outlin outline-gray-400"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Company Name */}
          <div className="form-group">
            <label className="form-label">
              Company Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              className="form-input outlin outline-gray-400"
              placeholder="Enter your company name"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Separator */}
          <div className="col-span-full">
            <hr className="border-t border-gray-400 my-4 mx-10" />
          </div>

          {/* Time Zone */}
          <div className="form-group">
            <label className="form-label">Time Zone</label>
            <TimezoneSelect
              value={formData.timeZone}
              placeholder={formData.timeZone}
              onChange={handleTimezoneChange}
            />
          </div>
        </div>

        <div className="button-group">
          {/* Submit Button */}
          <button type="submit" className="submit-button" disabled={loading}>
            {id ? "Update Account" : "Save and Create"}
          </button>

          {/* Delete Button (only if editing an account) */}
          {id && (
            <div className="delete-account">
              {" "}
              <div>Delete Account </div>
              <div className="trash-icon-account">
                <TrashIcon onClick={() => setShowDeleteModal(true)} />
              </div>
            </div>
          )}
        </div>
      </form>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="modal-overlay-account">
          <div className="modal-content-account">
            <h3>Are you sure you want to delete this account?</h3>
            <div className="modal-actions-account">
              <button
                className="confirm-button-account"
                onClick={handleDelete}
                disabled={loading}
              >
                Yes, Delete
              </button>
              <button
                className="cancel-button-account"
                onClick={() => setShowDeleteModal(false)}
                disabled={loading}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}