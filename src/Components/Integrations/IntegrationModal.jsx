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
      <div className="bg-white py-10 px-10 w-1/3 relative rounded-lg">
        <button className="absolute top-2 right-4 text-3xl" onClick={onClose}>
          &times;
        </button>
        <div className="flex justify-center items-center mb-4 font-semibold text-lg">Add members from your domain</div>
        <div className="px-6">
          <input
            type="text"
            className="w-full h-10 p-4 mb-4 border border-gray-600 rounded-lg"
            placeholder="Invite member by names or email ID"
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
        <div className="flex justify-between space-x-8 px-12">
          <button className="h-10 w-full rounded-lg border-2 text-blue-500 border-blue-500" onClick={onClose}>
            Cancel
          </button>
          <button className="h-10 w-full bg-blue-500 text-white rounded-lg border-2 border-blue-500" onClick={handleInvite}>
            Invite
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntegrationModal;
