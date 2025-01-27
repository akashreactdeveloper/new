import React, { useState } from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import KnowledgeFiles from "../../Components/Knowledge/KnowledgeFiles";
import KnowledgeMailBox from "../../Components/Knowledge/KnowledgeMailBox";
// import AccountForm from "./CreateAccountForm";

const CreateKnowledge = () => {
  const [selectedOption, setSelectedOption] = useState("files");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const integrations = [
    { value: "knowledge1", label: "Knowledge 1" },
    { value: "knowledge2", label: "Knowledge 2" },
    { value: "knowledge3", label: "Knowledge 3" },
  ];

  return (
    <div style={{ height: "100vh" }}>
      <PageHeader header="Knowledge Configuration" />
      <div className="pl-10">
        <div className="knowledge-integration-label">
          Integration Name <span style={{ color: "red" }}>*</span>{" "}
        </div>
        <div className="w-96 mb-4">
          <select name="" id="">
            <option value="">Select the integration name</option>
            {integrations.map((integration) => (
              <option key={integration.value} value={integration.value}>
                {integration.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <KnowledgeFiles />
    </div>
  );
};

export default CreateKnowledge;
