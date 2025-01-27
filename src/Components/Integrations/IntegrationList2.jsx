import React, { useState } from "react";
import { LoaderCircleIcon, Trash2 } from "lucide-react";

const accountData = [
  {
    id: 1,
    source: "Email",
    company: "Microsoft",
    status: false,
    logo: "https://images.freeimages.com/fic/images/icons/2795/office_2013_hd/2000/outlook.png?fmt=webp&h=350" 
  },
  {
    id: 2,
    source: "Calendar",
    company: "Microsoft",
    status: false,
    logo: "https://img.icons8.com/?size=100&id=WnHyYA2ecNqL&format=png&color=000000",
  },
  {
    id: 3,
    source: "Gmail",
    company: "Google",
    status: false,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/768px-Gmail_icon_%282020%29.svg.png",
  },
  {
    id: 4,
    source: "Google Calendar",
    company: "Google",
    status: false,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/768px-Google_Calendar_icon_%282020%29.svg.png",
  },
];

const IntegrationList = ({ selectedCompany }) => {
  const [data, setData] = useState(accountData);

  const filteredData =
    selectedCompany === "All"
      ? data
      : data.filter((item) => item.company === selectedCompany);

  const handleToggleChange = (id) => {
    setData((prevData) =>
      prevData.map((account) =>
        account.id === id ? { ...account, status: !account.status } : account
      )
    );
  };

  const formatDate = (date) => {
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return new Date(date).toLocaleDateString("en-GB", options).replace(",", "");
  };

  return (
    <div className="integration-table-container">
      <table className="integration-table">
        <thead className="integration-header">
          <tr className="header-titles">
            <th className="header-title integration-name-header">
              Data Source
            </th>
            <th className="header-title created-header">Integrations</th>
            <th className="header-title created-header">Members</th>
            <th className="header-title created-header">Status</th>
            <th className="header-title created-header">Created</th>
            <th className="header-title created-header">Modified</th>
            <th className="header-title integration-header"></th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((account, i) => (
            <tr key={account.id} className="integration-row">
              <td className="integration-name">
                <div className="integration-logo">
                  <img src={account.logo} alt={account.source} />
                </div>
                <div className="integration-source">{account.source}</div>
              </td>
              <td>Hello</td>
              <td>Hello</td>
              <td className="created-date">
                <div style={{ flex: "2" }}>
                  <label className="label">
                    <div
                      className="toggle"
                      style={{
                        backgroundColor: account.status ? "#006fb9" : "gray",
                      }}
                    >
                      <input
                        className="toggle-state"
                        type="checkbox"
                        name="check"
                        value="check"
                        checked={account.status}
                        onChange={() => handleToggleChange(account.id)}
                      />
                      <div className="indicator"></div>
                    </div>
                  </label>
                </div>
              </td>
              <td>{formatDate(new Date())}</td>
              <td>{formatDate(new Date())}</td>
              <td className="integration-management">
                <a href="google.com" className="manage-link">
                  Manage
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IntegrationList;
