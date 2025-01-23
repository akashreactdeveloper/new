import React, { useEffect, useState } from "react";
import "./Accounts.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, setLoading } from "../../redux/slice/screenLoadingSlice";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import { useNavigate } from "react-router-dom";

export default function AccountsList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [accountData, setAccountData] = useState([]);
  const loading = useSelector(selectIsLoading);

  // Function to fetch accounts from the backend
  async function fetchAccounts() {
    dispatch(setLoading(true));
    try {
      const response = await fetch('http://localhost:8090/accounts');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      console.log(response);
      const data = await response.json();
      setAccountData(data);
    } catch (error) {
      console.error('Failed to fetch accounts:', error);
    } finally {
      dispatch(setLoading(false));
    }
  }

  // Fetch data on component mount
  useEffect(() => {
    fetchAccounts();
  }, []); // Empty dependency array to ensure this runs once on mount

  const handleRefresh = () => {
    fetchAccounts(); // Re-fetch accounts on refresh
  };

  if (loading) {
    return (
      <div>
        <LoadingAnimation />
      </div>
    );
  }

  return (
    <div className="account-table-container">
      <table className="accounts-table">
        <thead className="account-header">
          <tr className="header-titles">
            <th className="header-title account-name-header pl-14">ACCOUNT NAME</th>
            <th className="header-title created-header">CREATED</th>
            <th className="header-title created-header">MODIFIED</th>
            <th className="header-title action-header pr-40"></th>
          </tr>
        </thead>
        <tbody>
          {accountData.length > 0 ? (
            accountData.map((account, index) => (
              <tr key={account.account_id} className="account-row">
                <td className="account-name pl-14">{account.account_name}</td>
                <td className="created-date">
                  {new Date(account.created_at).toLocaleString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true
                  }).replace(',', '').replace('am', 'AM').replace('pm', 'PM')}
                </td>
                <td className="created-date">
                  {new Date(account.updated_at).toLocaleString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true
                  }).replace(',', '').replace('am', 'AM').replace('pm', 'PM')}
                </td>
                <td>
                  <div
                    onClick={() => navigate(`/accounts/update/${account.account_id}`)}
                    className="manage-link pr-40"
                    style={{ width: "max-content" }}
                  >
                    Manage account
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="no-accounts-message">
                No accounts available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
