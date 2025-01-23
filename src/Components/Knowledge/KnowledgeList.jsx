import React from "react";
import "../Accounts/Accounts.css";

const accountData = [
  {knowledgeName: "Knowledge 1", name: "Account 1", integration: "Integration 1", status: false },
  {knowledgeName: "Knowledge 2", name: "Account 2", integration: "Integration 2", status: true },
  {knowledgeName: "Knowledge 3", name: "Account 3", integration: "Integration 3", status: true },
  {knowledgeName: "Knowledge 4", name: "Account 4", integration: "Integration 4", status: false },
  {knowledgeName: "Knowledge 5", name: "Account 5", integration: "Integration 5", status: true },
  {knowledgeName: "Knowledge 6", name: "Account 6", integration: "Integration 6", status: false },
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
            <th className="">Knowledge Name</th>
            <th className="">Account Name</th>
            <th className="">Integration</th>
            <th className="">STATUS</th>
            <th className=""></th>
          </tr>
        </thead>
        <tbody>
          {data.map((account) => (
            <tr key={account.id} className="account-row">
              <td className="">{account.knowledgeName}</td>
              <td className="">{account.name}</td>
              <td className="">{account.integration}</td>
              <td className="">
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
