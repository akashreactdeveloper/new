import React, { useState } from "react";

const membersData = [
  {
    id: 1,
    mailbox: "example@gmail.com",
    status: true,
    createdOn: "03.11.24, 11:00:00 AM",
    modifiedOn: "12.12.24, 12:00:00 PM",
    logo: "https://images.freeimages.com/fic/images/icons/2795/office_2013_hd/2000/outlook.png?fmt=webp&h=350",
  },
  {
    id: 2,
    mailbox: "example@gmail.com",
    status: false,
    createdOn: "03.11.24, 11:00:00 AM",
    modifiedOn: "12.12.24, 12:00:00 PM",
    logo: "https://images.freeimages.com/fic/images/icons/2795/office_2013_hd/2000/outlook.png?fmt=webp&h=350",
  },
  {
    id: 3,
    mailbox: "example@gmail.com",
    status: true,
    createdOn: "03.11.24, 11:00:00 AM",
    modifiedOn: "12.12.24, 12:00:00 PM",
    logo: "https://images.freeimages.com/fic/images/icons/2795/office_2013_hd/2000/outlook.png?fmt=webp&h=350",
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
