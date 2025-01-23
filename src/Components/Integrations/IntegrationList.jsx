import React, { useState } from "react";
import IntegrationList from "./IntegrationList2";
import ManageMembersList from "./ManageMembersList";
import InvitationStatusList from "./InvitationStatusList";
import "./Integrations.css";

const IntegrationDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="integration-dashboard">
      {/* Integration Company Selector */}
      <div className="integration-company">
        <div
          className={`company-item ${selectedTab === "All" ? "active" : ""}`}
          onClick={() => handleTabClick("All")}
        >
          Integrations
        </div>

        <div
          className={`company-item ${selectedTab === "Manage" ? "active" : ""}`}
          onClick={() => handleTabClick("Manage")}
        >
          Manage Members
        </div>
        <div
          className={`company-item ${
            selectedTab === "Invitation" ? "active" : ""
          }`}
          onClick={() => handleTabClick("Invitation")}
        >
          Invitation Status
        </div>
      </div>

      {/* Conditional Rendering of Components */}
      {selectedTab === "All" ||
      selectedTab === "Microsoft" ||
      selectedTab === "Google" ? (
        <IntegrationList selectedCompany={selectedTab} />
      ) : selectedTab === "Manage" ? (
        <ManageMembersList />
      ) : selectedTab === "Invitation" ? (
        <InvitationStatusList />
      ) : null}
    </div>
  );
};

export default IntegrationDashboard;
