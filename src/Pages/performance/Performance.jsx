import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import PageHeader from "../../Components/PageHeader/PageHeader";
import IntegrationList from "../../Components/Integrations/IntegrationList";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Performance = () => {
  const navigate = useNavigate();
  const accounts = [
    { value: "account1", label: "Account 1" },
    { value: "account2", label: "Account 2" },
    { value: "account3", label: "Account 3" },
  ];

  const data = [
    { emails: 100, drafts: 300 },
    { emails: 200, drafts: 1500 },
    { emails: 300, drafts: 1100 },
    { emails: 400, drafts: 1300 },
    { emails: 500, drafts: 1850 },
    { emails: 600, drafts: 2050 },
    { emails: 700, drafts: 2300 },
    { emails: 800, drafts: 2050 },
    { emails: 900, drafts: 2400 },
    { emails: 1000, drafts: 2500 },
    { emails: 1100, drafts: 2600 },
    { emails: 1200, drafts: 2800 }
  ];

  return (<>
    <div style={{ height: "100vh", width: "calc(100vw - 330px)" }} className="ml-80">
      <Sidebar />
      <PageHeader header="Performance" />
      <div className="flex justify-center ml-10  flex-col">
        <h1 className="mb-4"> Account name</h1>
        <select name="account" className="subscription-account-select mb-4 w-1/4">
          <option value="">Select your account name</option>
          {accounts.map((account) => (
            <option key={account.value} value={account.value}>
              {account.label}
            </option>
          ))}
        </select></div>
        <div className="flex justify-between mt-8 px-10">
            <div className="flex-cols">
              <h1 className="flex justify-center mb-4">Total email ingested</h1>
              <div className="font-bold outline outline-blue-600 h-16 w-80 flex items-center justify-center rounded-xl">
                1000
              </div>
            </div>
            <div className="flex-cols">
              <h1 className="flex justify-center mb-4">Total email ingested</h1>
              <div className="font-bold outline outline-blue-600 h-16 w-80 flex items-center justify-center rounded-xl">
                1000
              </div>
            </div>
            <div className="flex-cols">
              <h1 className="flex justify-center mb-4">Total email ingested</h1>
              <div className="font-bold outline outline-blue-600 h-16 w-80 flex items-center justify-center rounded-xl">
                1000
              </div>
            </div>
          </div>
        <div className="flex justify-center my-20 items-center border-b-2 border-gray-300">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
          <div className="mb-4">
            <h2 className="text-xl font-bold"></h2>
          </div>
          <div className="p-4">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="emails" label={{ value: 'Total emails ingested', position: 'bottom', offset: 0 }} />
                <YAxis label={{ value: 'Total drafts created', angle: -90, position: 'insideLeft', offset: 10 }} />
                <Tooltip />
                <Line type="monotone" dataKey="drafts" stroke="#2196F3" strokeWidth={2} dot={{ fill: '#2196F3', r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      </div>
    </>);
};

export default Performance;