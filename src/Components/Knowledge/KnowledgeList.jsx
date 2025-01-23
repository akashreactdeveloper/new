import React from "react";
import "../Accounts/Accounts.css";

const accountData = [
  { id: 1, name: "Account 1", status: false },
  { id: 2, name: "Account 2", status: true },
  { id: 3, name: "Account 3", status: true },
  { id: 4, name: "Account 4", status: false },
  { id: 5, name: "Account 5", status: true },
  { id: 6, name: "Account 6", status: false },
];

export default function KnowledgeList() {
  const [data, setData] = React.useState(accountData);

  const handleToggleChange = (id) => {
    setData((prevData) =>
      prevData.map((account) =>
        account.id === id ? { ...account, status: !account.status } : account
      )
    );
  };

  return (
    <div className="account-table-container">
      <table className="accounts-table">
        <thead className="account-header">
          <tr className="header-titles">
            <th className="header-title account-count-header"></th>
            <th className="header-title account-name-header">ACCOUNT NAME</th>
            <th className="header-title created-header">STATUS</th>
            <th className="header-title action-header"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((account) => (
            <tr key={account.id} className="account-row">
              <td className="account-number">{account.id}</td>
              <td className="account-name">{account.name}</td>
              <td className="created-date">
                <div style={{ flex: "2" }}>
                  <label
                    className="label"
                    aria-label={`Toggle status for ${account.name}`}
                  >
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
              <td>
                <a href="Google.com" className="manage-link">
                  Manage account
                </a>
              </td>
              {/* <td></td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
