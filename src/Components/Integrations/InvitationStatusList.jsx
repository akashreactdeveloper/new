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
    logo: "https://images.freeimages.com/fic/images/icons/2795/office_2013_hd/2000/outlook.png?fmt=webp&h=350",
  },
  {
    id: 2,
    mailbox: "example@gmail.com",
    memberName: "Alex",
    status: "Declined",
    createdOn: "03.11.24, 11:00:00 AM",
    updatedOn: "12.12.24, 12:00:00 PM",
    logo: "https://images.freeimages.com/fic/images/icons/2795/office_2013_hd/2000/outlook.png?fmt=webp&h=350",
  },
  {
    id: 3,
    mailbox: "example@gmail.com",
    memberName: "Alex",
    status: "Accepted",
    createdOn: "03.11.24, 11:00:00 AM",
    updatedOn: "12.12.24, 12:00:00 PM",
    logo: "https://images.freeimages.com/fic/images/icons/2795/office_2013_hd/2000/outlook.png?fmt=webp&h=350",
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
              <td className="flex justify-start">
                <div
                  className="rounded-2xl text-black px-4 py-1 flex justify-center"
                  style={{
                    backgroundColor:
                      invitation.status === "Pending"
                        ? "#F2CC8F"
                        : invitation.status === "Accepted"
                        ? "#81B29A"
                        : "#E07A5F",
                  }}
                >
                  {invitation.status}
                </div>
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
