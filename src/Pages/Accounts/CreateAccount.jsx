import React from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import AccountForm from "./CreateAccountForm";

const CreateAccount = () => {
  return (
    <div style={{ height: "100vh" }}>
      <PageHeader header="My Details" />
      <AccountForm />
    </div>
  );
};

export default CreateAccount;
