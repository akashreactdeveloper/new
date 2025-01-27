import React from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import "../../Components/Integrations/Integrations.css";

import { Pencil, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import IntegrationList from "../../Components/Integrations/IntegrationList";
import Sidebar from "../../Components/Sidebar/Sidebar";

const ManageIntegration = () => {
  const navigate = useNavigate(); // Replacing useHistory with useNavigate

  return (
    <div
      style={{ height: "100vh", width: "calc(100vw - 330px)" }}
      className="ml-80"
    >
      <Sidebar />
      <PageHeader header="Manage Integration" />
      <div className="">
        <h1 className="mb-4 mt-2 ml-2 flex">Integration name 1 <Pencil className="text-blue-800 ml-2" size={20} /></h1>
        <div className="flex-col space-y-5 items-center">
          <div className="bg-gray-100 flex justify-center h-40 items-center rounded-3xl">
            <div className="p-4 w-1/2">
              <label className="block text-lg font-semibold text-gray-700">
                Chrono(Time Tracking)
              </label>
              <select className="mt-1 h-12 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
            <div className="p-4 w-1/2">
              <label className="block text-lg font-semibold text-gray-700">
                Document Drafting
              </label>
              <select className="mt-1 h-12 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
          </div>
          <div className="bg-gray-100 flex justify-center pb-2 pt-4 rounded-3xl">
            <div className="p-4 w-1/2">
              <label className="block text-lg font-semibold text-gray-700">
                Knowledge Base
              </label>
              <select className="mt-1 h-12 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
            <div className="p-4 w-1/2">
              <label className="block text-lg font-semibold text-gray-700">
                Email sending
              </label>
              <select className="mt-1 h-12 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
              <div className="flex space-x-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mt-4">
                    Internal emails
                  </label>
                  <div className="mt-2">
                    <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                      <span className="ml-2">Allowed</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mt-4">
                    External emails
                  </label>
                  <div className="mt-2">
                    <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                      <span className="ml-2">Allowed</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <label className="inline-flex items-center pt-2">
        <input type="checkbox" className="form-checkbox" />
        <span className="ml-2 text-sm text-gray-700">
          Exclude company emails
        </span>
      </label>
      <div className="flex justify-center">
      <button className="mt-10 bg-blue-600 text-white py-2 px-24 rounded-lg">
        Save and Done
      </button>
      </div>
    </div>
  );
};

export default ManageIntegration;
