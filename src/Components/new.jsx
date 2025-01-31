import React from "react";

const InvitationStatusList = ({ selectedTab }) => {
  if (selectedTab !== "Invitation") {
    return null;
  }

  return (
    <div className="flex ml-8 space-x-10 my-6">
      <div className="bg-gray-100 px-10 py-6 flex flex-col items-center rounded-xl">
        <span className="font-bold text-lg">10</span>
        <span className="text-sm">Approved Invitations</span>
      </div>
      <div className="bg-gray-100 px-10 py-6 flex flex-col items-center rounded-xl">
        <span className="font-bold text-lg">10</span>
        <span className="text-sm">Pending Invitations</span>
      </div>
      <div className="bg-gray-100 px-10 py-6 flex flex-col items-center rounded-xl">
        <span className="font-bold text-lg">10</span>
        <span className="text-sm">Declined Invitations</span>
      </div>
    </div>
  );
};

export default InvitationStatusList;
