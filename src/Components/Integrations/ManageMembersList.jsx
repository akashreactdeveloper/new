import React, { useState } from "react";

const membersData = [
  {
    id: 1,
    mailbox: "example@gmail.com",
    status: true,
    createdOn: "03.11.24, 11:00:00 AM",
    modifiedOn: "12.12.24, 12:00:00 PM",
    logo: "https://s3-alpha-sig.figma.com/img/2ce7/01e3/317cc4b29dc4a2894b960cb43f681d8e?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ex6eDOjBQdGxKZXJ7TJ-I4XWwDwvfBN5X70QZ3Z~wBofgjkVLprxzUMwLzxTR2HKV98cqF~f7vztUUMR2dz1LZq0WtTgFv9XELrJtiKdxgA8VbBupz8shHkrXE~4w2vXrZhIQPTWy7GrKtBTV6PWs3yybTUUSNzYn6~etCoT7hNhknHfngffmZrkjJirnNRdwei3f~VCxFujgMp2b3bBmcWSxldkxcE3dvmH4~cEEGvzbuVhBqxn~8V6us1BYH2ZXL2C2ITm5-I7uf89q~mNcj9T6flTCkhN9xxpo5ZGlBkVE5i~VsYZ6ZdLgEaohMT3Rekp9nDZIgXf3bU4lQX-2Q__",
  },
  {
    id: 2,
    mailbox: "example@gmail.com",
    status: false,
    createdOn: "03.11.24, 11:00:00 AM",
    modifiedOn: "12.12.24, 12:00:00 PM",
    logo: "https://s3-alpha-sig.figma.com/img/c7d7/172c/54ab0ee7dd2186476bf2e6c7b808ac70?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=av1euKqADuf3Gr-Q0kIbnkSmcE1elQl3iRKsbnOmt~WfwBPc6llKExYYldjpOKl19Pm9bNre-X1P5dDpHTqUzdDok6zz78fA8~v6dPz9Rm46u~Css40S30C7fCse9db1WjDifINbYrXd4rpXHl545akdMTQGozzNfmOMBLO726Vs4ZTXw04Sdu1dPzmtz086uCCNC6AyQ7fUw0UNHZZVHT6HipKP5P4dnIwG1Zk3gWj4vksGtuR0kdHUaiB7ifJppuUgPftq8cDtd2a8SRJC~ysiT-Ll5yp4qSzFAcL8I785eUBeUXN4V5qWSsWp3e3dxAzLnIne8xj780GtUH5A-A__",
  },
  {
    id: 3,
    mailbox: "example@gmail.com",
    status: true,
    createdOn: "03.11.24, 11:00:00 AM",
    modifiedOn: "12.12.24, 12:00:00 PM",
    logo: "https://s3-alpha-sig.figma.com/img/2ce7/01e3/317cc4b29dc4a2894b960cb43f681d8e?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ex6eDOjBQdGxKZXJ7TJ-I4XWwDwvfBN5X70QZ3Z~wBofgjkVLprxzUMwLzxTR2HKV98cqF~f7vztUUMR2dz1LZq0WtTgFv9XELrJtiKdxgA8VbBupz8shHkrXE~4w2vXrZhIQPTWy7GrKtBTV6PWs3yybTUUSNzYn6~etCoT7hNhknHfngffmZrkjJirnNRdwei3f~VCxFujgMp2b3bBmcWSxldkxcE3dvmH4~cEEGvzbuVhBqxn~8V6us1BYH2ZXL2C2ITm5-I7uf89q~mNcj9T6flTCkhN9xxpo5ZGlBkVE5i~VsYZ6ZdLgEaohMT3Rekp9nDZIgXf3bU4lQX-2Q__",
  },
];

const ManageMembersList = () => {
  const [data, setData] = useState(membersData);

  const handleToggleChange = (id) => {
    setData((prevData) =>
      prevData.map((member) =>
        member.id === id ? { ...member, status: !member.status } : member
      )
    );
  };

  return (
    <div
      className="manage-members-table-container"
      style={{ marginBlockStart: "1.2rem" }}
    >
      <table className="manage-members-table">
        <thead className="manage-members-header">
          <tr>
            <th></th>
            <th>Mailbox Address</th>
            <th>Status</th>
            <th>Created</th>
            <th>Modified</th>
          </tr>
        </thead>
        <tbody>
          {data.map((member) => (
            <tr key={member.id}>
              {/* <td>
                <img src={member.logo} alt="logo" className="mailbox-logo" />
              </td> */}
              <td>
                <div className="integration-logo">
                  <img src={member.logo} alt="logo" className="mailbox-logo" />
                </div>
              </td>
              <td>
                <div className="mailbox-info">{member.mailbox}</div>
              </td>
              <td>
                <div style={{ flex: "2" }}>
                  <label className="label">
                    <div
                      className="toggle"
                      style={{
                        backgroundColor: member.status ? "#006fb9" : "gray",
                      }}
                    >
                      <input
                        className="toggle-state"
                        type="checkbox"
                        name="check"
                        value="check"
                        checked={member.status}
                        onChange={() => handleToggleChange(member.id)}
                      />
                      <div className="indicator"></div>
                    </div>
                  </label>
                  {/* <span style={{ marginLeft: "10px" }}>
                    {member.status ? "Active" : "Inactive"}
                  </span> */}
                </div>
              </td>
              <td>{member.createdOn}</td>
              <td>{member.modifiedOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageMembersList;
