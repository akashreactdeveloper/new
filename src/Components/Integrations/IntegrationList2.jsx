import React, { useState } from "react";
import { LoaderCircleIcon, Trash2 } from "lucide-react";

const accountData = [
  {
    id: 1,
    source: "Email",
    company: "Microsoft",
    status: false,
    logo: "https://s3-alpha-sig.figma.com/img/2ce7/01e3/317cc4b29dc4a2894b960cb43f681d8e?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ex6eDOjBQdGxKZXJ7TJ-I4XWwDwvfBN5X70QZ3Z~wBofgjkVLprxzUMwLzxTR2HKV98cqF~f7vztUUMR2dz1LZq0WtTgFv9XELrJtiKdxgA8VbBupz8shHkrXE~4w2vXrZhIQPTWy7GrKtBTV6PWs3yybTUUSNzYn6~etCoT7hNhknHfngffmZrkjJirnNRdwei3f~VCxFujgMp2b3bBmcWSxldkxcE3dvmH4~cEEGvzbuVhBqxn~8V6us1BYH2ZXL2C2ITm5-I7uf89q~mNcj9T6flTCkhN9xxpo5ZGlBkVE5i~VsYZ6ZdLgEaohMT3Rekp9nDZIgXf3bU4lQX-2Q__",
  },
  {
    id: 2,
    source: "Calendar",
    company: "Microsoft",
    status: false,
    logo: "https://s3-alpha-sig.figma.com/img/58fd/0059/24fdffc0ee7340c959af0cef4c1e6c42?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KoPMIiLfvp7T1i-NG5zfTgFp5eCFvhDJ8EHHxylRrvHwafdT4V~Hdc-6Sulhm8eJrxarMDgL2udbDnWFQ8lpkKkPhKkIYCD7moP-Ycm97CkKmCphbexOvgcytJ77FrZ42rnagTQglS07SsryrxjnmYtQf4JLPFtJjI8RRdKIjQVwOrI55-Bb9ttKFBv3pt8oKUkkYx0EO1YXU6bq7t2HwQLQXhFRQTFOHDMy9dnQ2vqDI2xv2VayDbbdAUtGd5mnTnDLrgh5zFKBQdOH2n77iq6pQX7ty9AiU2hZxH~tc743J9tQOMijEUxN29LcMOObrZ-OwH3lT0G1bsx39IkVmQ__",
  },
  {
    id: 3,
    source: "Gmail",
    company: "Google",
    status: false,
    logo: "https://s3-alpha-sig.figma.com/img/c7d7/172c/54ab0ee7dd2186476bf2e6c7b808ac70?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=av1euKqADuf3Gr-Q0kIbnkSmcE1elQl3iRKsbnOmt~WfwBPc6llKExYYldjpOKl19Pm9bNre-X1P5dDpHTqUzdDok6zz78fA8~v6dPz9Rm46u~Css40S30C7fCse9db1WjDifINbYrXd4rpXHl545akdMTQGozzNfmOMBLO726Vs4ZTXw04Sdu1dPzmtz086uCCNC6AyQ7fUw0UNHZZVHT6HipKP5P4dnIwG1Zk3gWj4vksGtuR0kdHUaiB7ifJppuUgPftq8cDtd2a8SRJC~ysiT-Ll5yp4qSzFAcL8I785eUBeUXN4V5qWSsWp3e3dxAzLnIne8xj780GtUH5A-A__",
  },
  {
    id: 4,
    source: "Google Calendar",
    company: "Google",
    status: false,
    logo: "https://s3-alpha-sig.figma.com/img/a9ce/dd10/015300270951c4b20c5f1ed3abad303c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V~nIcZ2bzzY7QBMTv6yn39MCxY5xbI~GmS6vkFHnqb6X7PWQlorsZ4mmw3VhUBLlAQCjJ9sanFCllpdcLJY6Jb388uvMsjLrRJT7awptLAh00T0tcu5I6L-GqJbcekR~YP7FhbQ6TbEQLUYaio9UbmCQj1cxhMKmppgEstSSkwPV3DiBr-O8gCNdlXLabvkKD28WrxjsCprbJFv6V5lkPKCtGTZqfvXE8QrN6f~oEzeT8lOL0Hk0q0xiEwLF4Kko5iP-glGRDuFiSlgFzphONc6Rs1oBsQprQUqgIDn78zMogftuA3AKHrKUDnyDmtvb8lt6SwkR77RA3HmfC~LjEg__",
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
              DATA SOURCE
            </th>
            <th className="header-title created-header">Integrations</th>
            <th className="header-title created-header">Members</th>
            <th className="header-title created-header">STATUS</th>
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
