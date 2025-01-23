import React, { useEffect, useState } from "react";
import { fetchAccounts } from "../../Api/AccountApi";
import { useSelector } from "react-redux";
import { selectUserDetails } from "../../redux/slice/userSlice";

const IntegrationModal = ({
  isOpen,
  onClose,
  onInvite,
  inputValue,
  setInputValue,
}) => {
  const [names, setNames] = useState(inputValue.invited_members || []); // Initialize invited members
  const [accounts, setAccounts] = useState([]); // State for accounts list
  const [loading, setLoading] = useState(false);
  const [currentEmail, setCurrentEmail] = useState(""); // Local state for email input
  const user = useSelector(selectUserDetails);

  // Fetch accounts when the modal opens
  useEffect(() => {
    if (isOpen) {
      const fetchAndSetAccounts = async () => {
        try {
          setLoading(true);
          const accountsList = await fetchAccounts(user.customer_id); // Replace 26 with dynamic customer ID if needed
          setAccounts(accountsList);
        } catch (error) {
          console.error("Error fetching accounts:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchAndSetAccounts();
    }
  }, [isOpen]);

  // Handle account selection
  const handleSelectedAccount = (e) => {
    const account_id = e.target.value;
    setInputValue((prev) => ({ ...prev, account_id })); // Update account_id in inputValue
  };

  // Handle integration name change
  const handleIntegrationNameChange = (e) => {
    const integration_name = e.target.value;
    setInputValue((prev) => ({ ...prev, integration_name })); // Update integration_name in inputValue
  };

  // Handle adding a new invited member
  const handleAddName = () => {
    const email = currentEmail.trim(); // Get and trim the email
    if (email && email !== "") {
      const updatedMembers = [...names, email];
      setNames(updatedMembers);
      setInputValue((prev) => ({
        ...prev,
        invited_members: updatedMembers, // Update invited_members in inputValue
      }));
      setCurrentEmail(""); // Clear the local email input
    }
    console.log("Invited members:", inputValue);
  };

  // Handle removing an invited member
  const handleDeleteName = (index) => {
    const updatedMembers = names.filter((_, i) => i !== index);
    setNames(updatedMembers);
    setInputValue((prev) => ({ ...prev, invited_members: updatedMembers })); // Update invited_members in inputValue
  };

  // Handle invite button click
  const handleInvite = () => {
    if (
      !inputValue.account_id ||
      !inputValue.integration_name ||
      names.length === 0
    ) {
      alert("Please fill all fields and invite at least one member.");
      return;
    }

    onInvite(inputValue); // Pass the complete inputValue object to the parent
    onClose(); // Close the modal
  };

  if (!isOpen) return null;

  if (loading) {
    return (
      <div className="modal-overlay">
        <div className="modal-container">Loading ......</div>
      </div>
    );
  }

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="close-modal">
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-header">Add members from your domain</div>
        <div>
          <select
            className="form-select-integration"
            value={inputValue.account_id || ""}
            onChange={handleSelectedAccount}
          >
            <option value="">Select Your Account Name</option>
            {accounts.map((account) => (
              <option key={account.account_id} value={account.account_id}>
                {account.account_name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="text"
            className="form-select-integration"
            style={{
              width: "85%",
              marginBlockStart: "0rem",
              padding: "0.6rem",
            }}
            placeholder="Enter your integration name"
            value={inputValue.integration_name || ""}
            onChange={handleIntegrationNameChange}
          />
        </div>
        <div className="modal-body">
          <input
            type="text"
            className="modal-input"
            placeholder="Invite member by company email"
            value={currentEmail} // Use the local email state
            onChange={(e) => setCurrentEmail(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleAddName()}
          />
          <div className="names-list">
            {names.map((name, index) => (
              <div key={index} className="name-item">
                {name}
                <button
                  className="delete-button"
                  onClick={() => handleDeleteName(index)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="modal-footer">
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="invite-button" onClick={handleInvite}>
            Invite
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntegrationModal;
