import React from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import "../../Components/Knowledge/Knowledge.css";
import KnowledgeList from "../../Components/Knowledge/KnowledgeList";
import { useNavigate } from "react-router-dom";

const KnowledgeConfig = () => {
  const navigate = useNavigate(); // Replacing useHistory with useNavigate
  return (
    <div style={{ height: "100vh" }}>
      <PageHeader header="Knowledge Configuration" />
      <div className="accounts-create">
        <div
          className="create-account-button"
          onClick={() => {
            navigate("/knowledgeConfiguration/create");
          }}
        >
          Create Knowledge
        </div>
      </div>
      <div>
        <KnowledgeList />
      </div>
    </div>
  );
};

export default KnowledgeConfig;
