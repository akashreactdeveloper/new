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
        <div className="flex justify-between">
          <div>
            <div className="mb-4">
              <label
                htmlFor="accountname"
                className="block text-sm font-semibold mb-2 text-gray-700"
              >
                Account Name
              </label>
              <select
                id="accountname"
                className="mt-1 block w-full h-10 px-3 py-2 border border-gray-600 w-80 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={inputValue.account_id}
                onChange={(e) =>
                  setInputValue({ ...inputValue, account_id: e.target.value })
                }
              >
                <option value="">Select your account name</option>
                {/* Add options here */}
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="integrationName"
                className="block text-sm font-semibold mb-2 text-gray-700"
              >
                Integration Name
              </label>
              <input
                type="text"
                id="integrationName"
                className="mt-1 block w-full px-3 h-10 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your Integration Name"
                value={inputValue.integration_name}
                onChange={(e) =>
                  setInputValue({ ...inputValue, integration_name: e.target.value })
                }
              />
            </div>
          </div>
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
