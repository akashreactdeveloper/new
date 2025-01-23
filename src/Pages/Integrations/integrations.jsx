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
