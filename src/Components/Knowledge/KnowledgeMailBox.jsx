import React, { useState } from "react";
import { Plus, Settings } from "lucide-react";
import KnowledgeConfigModal from "./KnowledgeConfigModal";

const KnowledgeMailBox = () => {
  const mailboxFolders = ["Sent Item", "Recieved Item", "Lorem Ipsum"];
  const [showOptions, setShowOptions] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (folder) => {
    setModalContent(`Settings for: ${folder}`);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
  };

  return (
    <div className="knowledge-files-container">
      <h3 className="knowledge-files-title">
        Select mailbox account and mailbox account name to add to knowledge.
      </h3>
      <div className="knowledge-mailbox-choose">
        <div className="mailbox-account">
          <div className="mailbox-account-title">Mailbox Account</div>
          <select name="mailbox-account" id="mailbox-account">
            <option value="Select">Select</option>
          </select>
          <div className="knowledge-add">
            <div className="knowledge-add-button">
              <Plus />
            </div>
          </div>
        </div>
        <div className="mailbox-account">
          <div className="mailbox-account-title">Mailbox Folder Name</div>
          <select
            name="mailbox-account"
            id="mailbox-account"
            onClick={() => {
              setShowOptions(!showOptions);
            }}
          >
            {/* <option value="Select">Select</option> */}
          </select>
          {showOptions && (
            <div className="mailbox-folder-options">
              {mailboxFolders.map((folder, index) => (
                <div className="mailbox-folder-list" key={index}>
                  <div className="mailbox-folder-list-name">{folder}</div>
                  <div
                    className="setting-icon"
                    onClick={() => openModal(folder)}
                    style={{ cursor: "pointer" }}
                  >
                    <Settings />
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="knowledge-add">
            <div className="knowledge-add-button">
              <Plus />
            </div>
          </div>
        </div>
      </div>

      <button
        style={{
          width: "max-content",
          padding: "10px 20px",
        }}
        type="submit"
        className="submit-button"
      >
        Save and Create
      </button>

      {/* Modal Component */}
      <KnowledgeConfigModal
        isOpen={isModalOpen}
        onClose={closeModal}
        content={modalContent}
      />
    </div>
  );
};

export default KnowledgeMailBox;
