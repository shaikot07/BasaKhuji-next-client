// "use client";

// import { Button } from "@/components/ui/button";
// import { updateRentalRequest } from "@/services/Lanload";
// import { Request } from "@/types";
// import { useState } from "react";
// import { toast } from "sonner";

// // Make sure to accept an array of Request objects
// const RequestManagement = ({ request }: { request: Request[] }) => {
//   console.log("component request", request);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [selectedRequestId, setSelectedRequestId] = useState<string | null>(null);
//   const [phoneNumberValid, setPhoneNumberValid] = useState(false); // Track phone number validity

//   // Handle opening the modal
//   const handleOpenModal = (requestId: string) => {
//     setSelectedRequestId(requestId);
//     setIsModalOpen(true);
//   };

//   // Close modal & reset input
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setPhoneNumber("");
//     setSelectedRequestId(null);
//     setPhoneNumberValid(false); // Reset phone number validity
//   };

//   // Update phone number validity
//   const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setPhoneNumber(value);
//     setPhoneNumberValid(value.trim().length > 0); // Set validity based on non-empty phone number
//   };

//   // Submit form with requestId & phoneNumber
//   const handleSubmit = async () => {
//     if (!selectedRequestId) return;

//     const rentalRequestData = { landlordPhoneNumber: phoneNumber, status: "approved" };
//     try {
//       const res = await updateRentalRequest(rentalRequestData, selectedRequestId);

//       if (res.success) {
//         toast.success(res.message);
//         handleCloseModal();
//       } else {
//         toast.error(res.message);
//       }
//     } catch (err) {
//       console.error("Update Rental House Error:", err);
//       toast.error("Failed to update rental house.");
//     }
//   };

//   // Submit form with requestId for rejection
//   const handleSubmitReject = async () => {
//     if (!selectedRequestId) return;

//     const rentalRequestData = { status: "rejected" };
//     try {
//       const res = await updateRentalRequest(rentalRequestData, selectedRequestId);

//       if (res.success) {
//         toast.success(res.message);
//         handleCloseModal();
//       } else {
//         toast.error(res.message);
//       }
//     } catch (err) {
//       console.error("Update Rental House Error:", err);
//       toast.error("Failed to update rental house.");
//     }
//   };
//   return (


//     <>
//       <div className="bg-white p-8 rounded-md w-full">
//         <div className="flex items-center justify-between pb-6">
//           <div>
//             <h2 className="text-gray-600 font-semibold">All Rental Request</h2>
//           </div>
//           <div className="flex items-center">
//             <div className="lg:ml-40 ml-10 space-x-8">
//               {/* <Button>New Request</Button>  */}
//             </div>
//           </div>
//         </div>
//         <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
//           <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
//             <table className="min-w-full leading-normal">
//               <thead>
//                 <tr>
//                   {[
//                     "Request Id",
//                     "rentalDuration",
//                     "moveInDate",
//                     "Status",
//                     "Message",
//                   ].map((header) => (
//                     <th
//                       key={header}
//                       className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
//                     >
//                       {header}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {request?.map((req) => (
//                   <tr key={req._id}>
//                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                       <div className="flex items-center">
//                         <div className="ml-3">
//                           <p className="text-gray-900 whitespace-no-wrap">
//                             {req._id}
//                           </p>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                       <p className="text-gray-900 whitespace-no-wrap">
//                         {req.rentalDuration}
//                       </p>
//                     </td>
//                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                       <p className="text-gray-900 whitespace-no-wrap">
//                         {req?.moveInDate}
//                       </p>
//                     </td>
//                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                       <span
//                         onClick={
//                           req.status === "pending" ? () => handleOpenModal(req._id) : undefined
//                         } // Open modal on click if pending
//                         className={`relative inline-block px-3 py-1 font-semibold leading-tight cursor-pointer ${
//                           req.status === "approved"
//                             ? "text-black bg-green-600"
//                             : req.status === "pending"
//                             ? "text-yellow-900 bg-yellow-200"
//                             : req.status === "rejected"
//                             ? "text-black bg-red-600"
//                             : "text-gray-900 bg-gray-200"
//                         }`}
//                       >
//                         <span
//                           aria-hidden
//                           className="absolute inset-0 opacity-50 rounded-full"
//                         ></span>
//                         <span className="relative">{req.status}</span>
//                       </span>
//                     </td>
//                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                       <p className="text-gray-900 whitespace-no-wrap">
//                         {req.additionalMessage}
//                       </p>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             {/* Modal */}
//             {isModalOpen && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-white p-6 rounded-md shadow-lg w-96">
//               <h2 className="text-lg font-semibold mb-4">Enter Landlord Phone Number</h2>
//               <p className="text-sm text-gray-500 mb-2">Request ID: {selectedRequestId}</p>
//               <input
//                 type="text"
//                 placeholder="Enter Phone Number only for approved request"
//                 value={phoneNumber}
//                 onChange={handlePhoneNumberChange}
//                 className="w-full p-2 border rounded-md mb-4"
//               />
//               <div className="flex justify-end space-x-4">
//                 <Button onClick={handleCloseModal} className="bg-red-700">
//                   Cancel
//                 </Button>
//                 <Button onClick={handleSubmit} disabled={!phoneNumberValid}>
//                   Approve
//                 </Button>
//                 <Button onClick={handleSubmitReject}>Reject</Button>
//               </div>
//             </div>
//           </div>
//         )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default RequestManagement;


// =======================width filter and pageniton-----===================
"use client";

import { Button } from "@/components/ui/button";
import { updateRentalRequest } from "@/services/Lanload";
import { Request } from "@/types";
import { useState, useMemo } from "react";
import { toast } from "sonner";

const RequestManagement = ({ request }: { request: Request[] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedRequestId, setSelectedRequestId] = useState<string | null>(null);
  const [phoneNumberValid, setPhoneNumberValid] = useState(false);

  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const requestsPerPage = 5;

  const handleOpenModal = (requestId: string) => {
    setSelectedRequestId(requestId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPhoneNumber("");
    setSelectedRequestId(null);
    setPhoneNumberValid(false);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);
    setPhoneNumberValid(value.trim().length > 0);
  };

  const handleSubmit = async () => {
    if (!selectedRequestId) return;
    const rentalRequestData = { landlordPhoneNumber: phoneNumber, status: "approved" };
    try {
      const res = await updateRentalRequest(rentalRequestData, selectedRequestId);
      if (res.success) {
        toast.success(res.message);
        handleCloseModal();
      } else {
        toast.error(res.message);
      }
    } catch (err) {
      console.error("Update Rental House Error:", err);
      toast.error("Failed to update rental house.");
    }
  };

  const handleSubmitReject = async () => {
    if (!selectedRequestId) return;
    const rentalRequestData = { status: "rejected" };
    try {
      const res = await updateRentalRequest(rentalRequestData, selectedRequestId);
      if (res.success) {
        toast.success(res.message);
        handleCloseModal();
      } else {
        toast.error(res.message);
      }
    } catch (err) {
      console.error("Update Rental House Error:", err);
      toast.error("Failed to update rental house.");
    }
  };

  // Filtered and sorted requests
  const filteredRequests = useMemo(() => {
    const sorted = [...request];
    if (filter === "new") {
      sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if (filter === "old") {
      sorted.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    }
    return sorted;
  }, [request, filter]);

  // Paginated requests
  const paginatedRequests = useMemo(() => {
    const startIndex = (currentPage - 1) * requestsPerPage;
    return filteredRequests.slice(startIndex, startIndex + requestsPerPage);
  }, [filteredRequests, currentPage]);

  return (
    <>
      <div className="bg-white p-8 rounded-md w-full">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="text-gray-600 font-semibold">All Rental Request</h2>
          </div>

          <select
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              setCurrentPage(1); // reset page when filter changes
            }}
            className="px-4 py-2 border rounded-md"
          >
            <option value="all">All</option>
            <option value="new">New</option>
            <option value="old">Old</option>
          </select>
        </div>

        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  {["Request Id", "rentalDuration", "moveInDate", "Status", "Message"].map(
                    (header) => (
                      <th
                        key={header}
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {paginatedRequests.map((req) => (
                  <tr key={req._id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{req._id}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{req.rentalDuration}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{req.moveInDate}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span
                        onClick={
                          req.status === "pending" ? () => handleOpenModal(req._id) : undefined
                        }
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
                        <span className="absolute inset-0 opacity-50 rounded-full" />
                        <span className="relative">{req.status}</span>
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{req.additionalMessage}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="mt-4 flex justify-between px-5 py-2 bg-gray-50">
              <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
                Previous
              </Button>
              <span>Page {currentPage}</span>
              <Button
                onClick={() => {
                  const maxPages = Math.ceil(filteredRequests.length / requestsPerPage);
                  if (currentPage < maxPages) setCurrentPage((prev) => prev + 1);
                }}
              >
                Next
              </Button>
            </div>

            {/* Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white p-6 rounded-md shadow-lg w-96">
                  <h2 className="text-lg font-semibold mb-4">Enter Landlord Phone Number</h2>
                  <p className="text-sm text-gray-500 mb-2">Request ID: {selectedRequestId}</p>
                  <input
                    type="text"
                    placeholder="Enter Phone Number only for approved request"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    className="w-full p-2 border rounded-md mb-4"
                  />
                  <div className="flex justify-end space-x-4">
                    <Button onClick={handleCloseModal} className="bg-red-700">
                      Cancel
                    </Button>
                    <Button onClick={handleSubmit} disabled={!phoneNumberValid}>
                      Approve
                    </Button>
                    <Button onClick={handleSubmitReject}>Reject</Button>
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
