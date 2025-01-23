import React from "react";
import { Trash2 } from "lucide-react";

const invitationData = [
  {
    id: 1,
    mailbox: "example@gmail.com",
    memberName: "Alex",
    status: "Pending",
    createdOn: "03.11.24, 11:00:00 AM",
    updatedOn: "12.12.24, 12:00:00 PM",
    logo: "https://s3-alpha-sig.figma.com/img/c7d7/172c/54ab0ee7dd2186476bf2e6c7b808ac70?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=av1euKqADuf3Gr-Q0kIbnkSmcE1elQl3iRKsbnOmt~WfwBPc6llKExYYldjpOKl19Pm9bNre-X1P5dDpHTqUzdDok6zz78fA8~v6dPz9Rm46u~Css40S30C7fCse9db1WjDifINbYrXd4rpXHl545akdMTQGozzNfmOMBLO726Vs4ZTXw04Sdu1dPzmtz086uCCNC6AyQ7fUw0UNHZZVHT6HipKP5P4dnIwG1Zk3gWj4vksGtuR0kdHUaiB7ifJppuUgPftq8cDtd2a8SRJC~ysiT-Ll5yp4qSzFAcL8I785eUBeUXN4V5qWSsWp3e3dxAzLnIne8xj780GtUH5A-A__",
  },
  {
    id: 2,
    mailbox: "example@gmail.com",
    memberName: "Alex",
    status: "Declined",
    createdOn: "03.11.24, 11:00:00 AM",
    updatedOn: "12.12.24, 12:00:00 PM",
    logo: "https://s3-alpha-sig.figma.com/img/2ce7/01e3/317cc4b29dc4a2894b960cb43f681d8e?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ex6eDOjBQdGxKZXJ7TJ-I4XWwDwvfBN5X70QZ3Z~wBofgjkVLprxzUMwLzxTR2HKV98cqF~f7vztUUMR2dz1LZq0WtTgFv9XELrJtiKdxgA8VbBupz8shHkrXE~4w2vXrZhIQPTWy7GrKtBTV6PWs3yybTUUSNzYn6~etCoT7hNhknHfngffmZrkjJirnNRdwei3f~VCxFujgMp2b3bBmcWSxldkxcE3dvmH4~cEEGvzbuVhBqxn~8V6us1BYH2ZXL2C2ITm5-I7uf89q~mNcj9T6flTCkhN9xxpo5ZGlBkVE5i~VsYZ6ZdLgEaohMT3Rekp9nDZIgXf3bU4lQX-2Q__",
  },
  {
    id: 3,
    mailbox: "example@gmail.com",
    memberName: "Alex",
    status: "Accepted",
    createdOn: "03.11.24, 11:00:00 AM",
    updatedOn: "12.12.24, 12:00:00 PM",
    logo: "https://s3-alpha-sig.figma.com/img/a9ce/dd10/015300270951c4b20c5f1ed3abad303c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V~nIcZ2bzzY7QBMTv6yn39MCxY5xbI~GmS6vkFHnqb6X7PWQlorsZ4mmw3VhUBLlAQCjJ9sanFCllpdcLJY6Jb388uvMsjLrRJT7awptLAh00T0tcu5I6L-GqJbcekR~YP7FhbQ6TbEQLUYaio9UbmCQj1cxhMKmppgEstSSkwPV3DiBr-O8gCNdlXLabvkKD28WrxjsCprbJFv6V5lkPKCtGTZqfvXE8QrN6f~oEzeT8lOL0Hk0q0xiEwLF4Kko5iP-glGRDuFiSlgFzphONc6Rs1oBsQprQUqgIDn78zMogftuA3AKHrKUDnyDmtvb8lt6SwkR77RA3HmfC~LjEg__",
  },
];

const InvitationStatusList = () => {
  const handleDelete = (id) => {
    console.log(`Deleting record with ID: ${id}`);
    // Add your delete logic here
  };

  return (
    <div
      className="invitation-status-table-container"
      style={{ marginBlockStart: "1.3rem" }}
    >
      <table className="invitation-status-table">
        <thead className="integration-header">
          <tr className="header-titles">
            <th className="header-title"></th>
            <th className="header-title integration-name-header">
              Mailbox Address
            </th>
            <th className="header-title created-header">Member Name</th>
            <th className="header-title integration-header">Status</th>
            <th className="header-title integration-header">Created</th>
            <th className="header-title integration-header">Modified</th>
            <th className="header-title integration-header"></th>
          </tr>
        </thead>
        <tbody>
          {invitationData.map((invitation) => (
            <tr key={invitation.id}>
              <td>
                <div className="integration-logo">
                  <img
                    src={invitation.logo}
                    alt="logo"
                    className="mailbox-logo"
                  />
                </div>
              </td>
              <td>
                <div className="mailbox-info">{invitation.mailbox}</div>
              </td>
              <td>{invitation.memberName}</td>
              <td
                style={{
                  color:
                    invitation.status === "Pending"
                      ? "orange"
                      : invitation.status === "Accepted"
                      ? "green"
                      : "red",
                }}
              >
                {invitation.status}
              </td>
              <td>{invitation.createdOn}</td>
              <td>{invitation.updatedOn}</td>
              <td>
                <Trash2
                  size={20}
                  color="#006fb9"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDelete(invitation.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvitationStatusList;
