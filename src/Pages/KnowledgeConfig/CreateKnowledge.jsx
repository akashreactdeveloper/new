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
      <div className="knowledge-integration-name">
        <div className="knowledge-integration-label">
          Integration Name <span style={{ color: "red" }}>*</span>{" "}
        </div>
        <div>
          <select name="" id="">
            <option value="">Select Integration</option>
            {integrations.map((integration) => (
              <option key={integration.value} value={integration.value}>
                {integration.label}
              </option>
            ))}
          </select>
        </div>
        <div className="knowledge-integration-label">
          Knowledge Name <span style={{ color: "red" }}>*</span>{" "}
        </div>
        <div>
          <input
            type="text"
            className="knowledge-integration-input"
            placeholder="Enter Knowledge Name"
          />
        </div>
        <div className="knowledge-config-choice">
          <div
            className={selectedOption === "files" ? "active" : ""}
            onClick={() => handleOptionClick("files")}
            style={{ cursor: "pointer" }}
          >
            Files
          </div>
          <div
            className={selectedOption === "mailbox" ? "active" : ""}
            onClick={() => handleOptionClick("mailbox")}
            style={{ cursor: "pointer" }}
          >
            Mailbox
          </div>
        </div>
      </div>
      {selectedOption === "files" && <KnowledgeFiles />}
      {selectedOption === "mailbox" && <KnowledgeMailBox />}
    </div>
  );
};

export default CreateKnowledge;
