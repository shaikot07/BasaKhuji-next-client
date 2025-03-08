"use client";

import { Button } from "@/components/ui/button";
import { Request } from "@/types";
import { useState } from "react";

// Make sure to accept an array of Request objects
const RequestManagement = ({ request }: { request: Request[] }) => {
  console.log("component request", request);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  // Handle opening the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPhoneNumber(""); // Reset input field
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log("Landlord Phone Number:", phoneNumber);
    // You can add API logic here to save the phone number
    handleCloseModal();
  };

  return (
    // <div>
    //   <h2>Request List</h2>
    //   {request.map((req) => (
    //     <div key={req._id}>
    //       {/* Render request data here */}
    //       <h3>Request ID: {req._id}</h3>
    //       <p>Additional Message: {req.additionalMessage}</p>
    //       <p>Status: {req.status}</p>
    //       {/* Add more details as needed */}
    //     </div>
    //   ))}
    // </div>

    <>
      <div className="bg-white p-8 rounded-md w-full">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="text-gray-600 font-semibold">All Rental Request</h2>
          </div>
          <div className="flex items-center">
            <div className="lg:ml-40 ml-10 space-x-8">
              <Button>New Request</Button>
            </div>
          </div>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  {[
                    "Request Id",
                    "Tenant Id",
                    "Created At",
                    "Status",
                    "Message",
                  ].map((header) => (
                    <th
                      key={header}
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {request?.map((req) => (
                  <tr key={req._id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {req._id}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {req.tenantId}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {req.createdAt}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span
                        onClick={
                          req.status === "pending" ? (e) => handleOpenModal() : undefined
                        } // Open modal on click if pending
                        className={`relative inline-block px-3 py-1 font-semibold leading-tight cursor-pointer ${
                          req.status === "approved"
                            ? "text-black bg-green-600"
                            : req.status === "pending"
                            ? "text-yellow-900 bg-yellow-200"
                            : req.status === "rejected"
                            ? "text-black bg-red-600"
                            : "text-gray-900 bg-gray-200"
                        }`}
                      >
                        <span
                          aria-hidden
                          className="absolute inset-0 opacity-50 rounded-full"
                        ></span>
                        <span className="relative">{req.status}</span>
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {req.additionalMessage}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-md shadow-lg w-96">
                  <h2 className="text-lg font-semibold mb-4">
                    Enter Landlord Phone Number
                  </h2>
                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full p-2 border rounded-md mb-4"
                  />
                  <div className="flex justify-end space-x-4">
                    <Button
                      onClick={handleCloseModal}
                     
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleSubmit}
                     
                    >
                      Approved Request
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestManagement;
