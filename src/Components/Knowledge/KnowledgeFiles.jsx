import React from "react";
import { UploadIcon } from "../Icons";
import { FaPencilAlt } from "react-icons/fa";

const KnowledgeFiles = () => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [configName, setConfigName] = React.useState("Configuration set");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setConfigName(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };
  const [showNewForm, setShowNewForm] = React.useState(false);

const handleAddConfigClick = () => {
  setShowNewForm(true);
};

  return (
    <div>
      <div className="bg-gray-100 mx-10 py-6 rounded-xl">
        <h1 className="ml-8 font-semibold mb-6 text-xl flex">
          {isEditing ? (
            <input
              type="text"
              value={configName}
              onChange={handleInputChange}
              onBlur={handleBlur}
              autoFocus
              className="border-b-2 border-blue-700 outline-none"
            />
          ) : (
            <>
              {configName}
              <FaPencilAlt className="ml-4 text-blue-700 cursor-pointer" onClick={handleEditClick} />
            </>
          )}
        </h1>
        <div className="knowledge-files-container">
          <div className="mb-2"> File Upload</div>
          <div className="bg-white h-40 flex items-center justify-center">
            <input type="file" className="file-input" />
            <p>
              <div>
                <UploadIcon />
              </div>
              Drag & Drop or <span className="browse-text">browse</span>
            </p>
          </div>
        </div>
        <div className="flex w-full px-8 justify-between">
          <div className="flex flex-col mr-4 w-full">
            <label className="mb-2 font-semibold">Mailbox folder</label>
            <input type="text" className="mb-4 p-2 border rounded" />
            <div>
              <div className="mt-2 flex space-x-6">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Continous crawl</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Data range</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Time interval</span>
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label className="mb-2 font-semibold">Mailbox members</label>
            <input type="text" className="p-2 border rounded" />
          </div>
        </div>
      </div>
      <div className="flex justify-end mr-10 mt-4 mb-4">
      <button
        className="bg-blue-600 text-white py-2 px-4 rounded-lg"
        onClick={handleAddConfigClick}
      >
        Add configuration set
      </button>
    </div>
    {showNewForm && (
      <div className="bg-gray-100 mx-10 py-6 rounded-xl mt-4">
        <h1 className="ml-8 font-semibold mb-6 text-xl flex">
          <input
            type="text"
            value={configName}
            onChange={handleInputChange}
            onBlur={handleBlur}
            autoFocus
            className="border-b-2 border-blue-700 outline-none"
          />
        </h1>
        <div className="knowledge-files-container">
          <div className="mb-2"> File Upload</div>
          <div className="bg-white h-40 flex items-center justify-center">
            <input type="file" className="file-input" />
            <p>
              <div>
                <UploadIcon />
              </div>
              Drag & Drop or <span className="browse-text">browse</span>
            </p>
          </div>
        </div>
        <div className="flex w-full px-8 justify-between">
          <div className="flex flex-col mr-4 w-full">
            <label className="mb-2 font-semibold">Mailbox folder</label>
            <input type="text" className="mb-4 p-2 border rounded" />
            <div>
              <div className="mt-2 flex space-x-6">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Continous crawl</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Data range</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Time interval</span>
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label className="mb-2 font-semibold">Mailbox members</label>
            <input type="text" className="p-2 border rounded" />
          </div>
        </div>
      </div>
    )}
    </div>
  );
};

export default KnowledgeFiles;