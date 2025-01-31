import React from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import "../../Components/Integrations/Integrations.css";

import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import IntegrationList from "../../Components/Integrations/IntegrationList";

const Home = () => {
  const navigate = useNavigate(); // Replacing useHistory with useNavigate

  return (
    <div style={{ height: "100vh" }}>
      <PageHeader header="Integrations" />
      <div className="flex ml-8 space-x-10 my-6">
        <div className="bg-gray-100 px-10 py-6 flex flex-col items-center rounded-xl">
          <span className="font-bold text-lg">10</span>
          <span className="text-sm">Approved Invitations</span>
        </div>
        <div className="bg-gray-100 px-10 py-6 flex flex-col items-center rounded-xl">
          <span className="font-bold text-lg">10</span>
          <span className="text-sm">Pending Invitations</span>
        </div>
        <div className="bg-gray-100 px-10 py-6 flex flex-col items-center rounded-xl">
          <span className="font-bold text-lg">10</span>
          <span className="text-sm">Declined Invitations</span>
        </div>
      </div>
      <div className="add-integration">
        <div className="search-integration">
          <div>
            <Search style={{ color: "gray" }} size={20} />
          </div>
          <input type="text" placeholder="Search by integrations name" />
        </div>
        <div
          className="add-integrate-button"
          onClick={() => {
            navigate("/integrations/add");
          }}
        >
          + Add Integration
        </div>
      </div>
      <div>
        <IntegrationList />
      </div>
    </div>
  );
};

export default Home;
