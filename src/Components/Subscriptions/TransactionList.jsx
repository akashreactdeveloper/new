import React, { useState } from "react";
import "../Integrations/Integrations.css";

const transactionData = [
  {
    invoiceId: "#23456",
    billingDate: "11.11.2024",
    billingPlan: "Standard",
    billingAccount: "Account 1",
    status: "Paid",
  },
  {
    invoiceId: "#23456",
    billingDate: "11.11.2024",
    billingPlan: "Standard",
    billingAccount: "Account 2",
    status: "Paid",
  },
  {
    invoiceId: "#23456",
    billingDate: "11.11.2024",
    billingPlan: "Standard",
    billingAccount: "Account 3",
    status: "Not Paid",
  },
  {
    invoiceId: "#23456",
    billingDate: "11.11.2024",
    billingPlan: "Standard",
    billingAccount: "Account 4",
    status: "Not Paid",
  },
];

const TransactionList = () => {
  const [data, setData] = useState(transactionData); // Manage transaction data state

  return (
    <div className="transaction-table-container">
      {/* Integration Table */}
      <table className="transaction-table">
        <thead className="transaction-header">
          <tr className="header-titles">
            <th className="header-title">Invoice ID</th>
            <th className="header-title">Billing Date</th>
            <th className="header-title">Billing Plan</th>
            <th className="header-title">Billing Account</th>
            <th className="header-title">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((transaction, i) => (
            <tr key={i} className="transaction-row">
              <td className="transaction-item">{transaction.invoiceId}</td>
              <td className="transaction-item">{transaction.billingDate}</td>
              <td className="transaction-item">{transaction.billingPlan}</td>
              <td className="transaction-item">{transaction.billingAccount}</td>
              <td className="transaction-item">
                <span
                  className="transaction-status"
                  style={{
                    padding: "5px 20px",
                    borderRadius: "30px",
                    backgroundColor:
                      transaction.status === "Paid" ? "#d4f7d4" : "#f7d4d4",
                    color:
                      transaction.status === "Paid" ? "#008000" : "#d9534f",
                  }}
                >
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
