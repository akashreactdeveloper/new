import React from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import "../../Components/Accounts/Accounts.css";
import AccountsList from "../../Components/Accounts/AccountsList";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // Replacing useHistory with useNavigate
  return (
    <div style={{ height: "100vh" }}>
      <PageHeader header="Accounts" />
      <div className="accounts-create">
        <div
          className="create-account-button"
          onClick={() => {
            navigate("/accounts/create");
          }}
        >
          Create Account
        </div>
      </div>
      <div>
        <AccountsList />
      </div>
    </div>
  );
};

export default Home;
