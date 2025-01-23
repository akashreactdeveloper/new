import React from "react";
import { UploadIcon } from "../Icons";

const KnowledgeFiles = () => {
  return (
    <div className="knowledge-files-container">
      <h3 className="knowledge-files-title">
        Select file types and upload the files to add to knowledge
      </h3>

      <div className="upload-integration-title"> Upload Files</div>
      <div className="upload-box">
        <input type="file" className="file-input" />
        <p>
          <div>
            <UploadIcon />
          </div>
          Drag & Drop or <span className="browse-text">browse</span>
        </p>
      </div>
      <p className="upload-note">
        You can upload up to 10 files. Maximum limit 25 MB
      </p>
      <div className="knowledge-upload-button">
        <button className="upload-button">Save</button>
      </div>
    </div>
  );
};

export default KnowledgeFiles;
