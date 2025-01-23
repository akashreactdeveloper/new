import React, { useState } from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import IntegrationApps from "./IntegrationApps";
import IntegrationModal from "../../Components/Integrations/IntegrationModal"; // Ensure the path is correct
import { useSelector } from "react-redux";
import { selectUserDetails } from "../../redux/slice/userSlice";

const AddIntegrations = () => {
  const user = useSelector(selectUserDetails);
  console.log("User:", user);
  const [isModalOpen, setModalOpen] = useState(false); // State to manage modal visibility
  const [selectedIntegrations, setSelectedIntegrations] = useState([]);
  const [inputValue, setInputValue] = useState({
    account_id: "",
    // customer_id: user.customer_id,
    integrationtypeList: [],
    integration_name: "",
    invited_members: [],
  }); // State for modal input value

  const handleInvite = () => {
    // console.log("Inviting:", inputValue);
    // setModalOpen(false); // Close the modal
    // setInputValue(""); // Clear the input field
    inputValue.integrationtypeList = selectedIntegrations;
    console.log("Inviting:", inputValue);
  };

  return (
    <div style={{ height: "100vh" }}>
      <PageHeader header="Add Integrations" />
      <div className="select-account-integration">
        <div className="account-integration-list">
          <div
            className="add-integrate-button"
            onClick={() => {
              if (selectedIntegrations.length === 0) {
                alert("Please select at least one integration");
                return;
              }
              setModalOpen(true);
            }} // Open modal on click
          >
            + Invite Members
          </div>
        </div>
      </div>
      <IntegrationApps
        selectedIntegrations={selectedIntegrations}
        setSelectedIntegrations={setSelectedIntegrations}
      />

      {/* Modal Component */}
      <IntegrationModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)} // Close modal on cancel
        onInvite={handleInvite} // Handle invite action
        inputValue={inputValue} // Pass input value to modal
        setInputValue={setInputValue} // Pass setter function for input value
      />
    </div>
  );
};

export default AddIntegrations;
