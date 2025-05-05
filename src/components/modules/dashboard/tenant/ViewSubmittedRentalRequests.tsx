// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { Button } from "@/components/ui/button";
// import { useUser } from "@/context/UserContext";
// import { createPyment } from "@/services/pyment";
// import { getRequestTentSpecific } from "@/services/Tenant";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { toast } from "sonner";

// const ViewSubmittedRentalRequests = () => {
//   const { user } = useUser();
//   console.log(user, "this is user in view submitted rental request");

//   const [data, setData] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   console.log("this is view ", data);

//   useEffect(() => {
//     if (!user?.userId) return; // Prevent fetching if userId is not available

//     const fetchData = async () => {
//       try {
//         const response = await getRequestTentSpecific(user.userId);

//         if (response.success === false) {
//           throw new Error(response.message);
//         }

//         setData(response.data);
//       } catch (error: any) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [user?.userId]);

// // -------------------------------------------

// const handlePayment = async (rentalHouse: string, rentAmount: number) => {
//   console.log(rentalHouse, rentAmount, "Rental House ID in handlePayment function");

//   const paymentData = {
//     email: user?.email,
//     rentalHouse: rentalHouse,
//     rentAmount: rentAmount, // Dynamically set rent amount
//   };
//   console.log(paymentData, "this is payment data");

//   try {
//     const res = await createPyment(paymentData); // Assuming createPayment is a function that handles payment processing
//     console.log("This is payment response:", res);

//     if (res?.status) { // Using `status` from the response instead of `success`
//       toast.success(res?.message || "Payment initiated successfully");
//     }

//     // Redirect to the payment checkout URL if available
//     const checkoutUrl = res?.data?.payment?.checkout_url;
//     if (checkoutUrl) {
//       setTimeout(() => {
//         window.location.href = checkoutUrl;
//       }, 1000);
//     } else {
//       console.warn("No checkout URL found in the response.");
//     }
//   } catch (error) {
//     console.error("Payment error:", error);
//     toast.error("Payment failed. Please try again.");
//   }
// };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <div className="bg-white p-8 rounded-md w-full">
//         <div className="flex items-center justify-between pb-6">
//           <div>
//             <h2 className="text-gray-600 font-semibold">All Rental Request</h2>
//           </div>

//         </div>
//         <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
//           <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
//             <table className="min-w-full leading-normal">
//               <thead>
//                 <tr>
//                   {[
//                     "House image",
//                     "Status",
//                     "Message",
//                     ' ',
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
//                 {data?.map((req) => (
//                   <tr key={req._id}>
//                     {/* House Image */}
//                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                       <Image
//                         src={
//                           req.rentalHouseId?.images?.[0] || "/placeholder.jpg"
//                         }
//                         alt="House Image"
//                         width={50}
//                         height={50}
//                         className="object-cover"
//                       />
//                     </td>

//                     {/* Status */}
//                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                       <span
//                         className={`relative inline-block px-3 py-1 font-semibold leading-tight ${
//                           req.status === "approved"
//                             ? "text-black bg-green-600"
//                             : req.status === "pending"
//                             ? "text-yellow-900 bg-yellow-200"
//                             : req.status === "rejected"
//                             ? "text-black bg-red-600"
//                             : "text-gray-900 bg-gray-200"
//                         }`}
//                       >
//                         <span className="relative">{req.status}</span>
//                       </span>
//                     </td>

//                     {/* Additional Message */}
//                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                       <p className="text-gray-900 whitespace-no-wrap">
//                         {req.additionalMessage}
//                       </p>
//                     </td>

//                     {/* Show Payment Button and Landlord Contact for Approved Requests */}
//                     {req.status === "approved" && (
//                       <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                         <p className="text-gray-900 font-semibold">
//                           Landlord Contact:{" "} <br />
//                           {req?.landlordPhoneNumber || "N/A"}
//                         </p>
//                         <Button onClick={()=>handlePayment(req.rentalHouseId._id, req.rentalHouseId.rentAmount)} className="mt-2 text-white px-4 py-2 rounded">
//                           Proceed to Payment
//                         </Button>
//                       </td>
//                     )}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewSubmittedRentalRequests;

// -----------with filter------------------

"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { createPyment } from "@/services/pyment";
import { getRequestTentSpecific } from "@/services/Tenant";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

// Interface for the request data, assuming it has createdAt
interface RentalRequest {
  _id: string;
  rentalHouseId: {
    _id: string;
    images: string[];
    rentAmount: number;
  };
  status: string;
  additionalMessage: string;
  landlordPhoneNumber: string;
  createdAt: string; // Assuming createdAt exists
}

const ViewSubmittedRentalRequests = () => {
  const { user } = useUser();
  const [data, setData] = useState<RentalRequest[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all"); // 'all', 'new', 'old'
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [requestsPerPage] = useState<number>(5); // Items per page

  useEffect(() => {
    if (!user?.userId) return;

    const fetchData = async () => {
      try {
        const response = await getRequestTentSpecific(user.userId);
        if (response.success === false) {
          throw new Error(response.message);
        }
        setData(response.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user?.userId]);

  // Filter data by old or new requests based on filter
  const ONE_DAY_MS = 24 * 60 * 60 * 1000;

  const now = Date.now();
  
  const filteredData = data
    .filter((req) => {
      const time = new Date(req.createdAt).getTime();
  
      if (filter === "new") {
        return time >= now - ONE_DAY_MS;
      } else if (filter === "old") {
        return time < now - ONE_DAY_MS;
      }
  
      return true; // all
    })
    .sort((a, b) => {
      const timeA = new Date(a.createdAt).getTime();
      const timeB = new Date(b.createdAt).getTime();
  
      if (filter === "all") {
        return timeA - timeB; // ascending (oldest to newest)
      } else if (filter === "old") {
        return timeB - timeA; // descending (newest old first)
      } else if (filter === "new") {
        return timeB - timeA; // newest recent requests first
      }
  
      return 0;
    });
  // Pagination logic
  const indexOfLastRequest = currentPage * requestsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
  const currentRequests = filteredData.slice(
    indexOfFirstRequest,
    indexOfLastRequest
  );

  const handlePayment = async (rentalHouse: string, rentAmount: number) => {
    const paymentData = {
      email: user?.email,
      rentalHouse: rentalHouse,
      rentAmount: rentAmount,
    };

    try {
      const res = await createPyment(paymentData);
      if (res?.status) {
        toast.success(res?.message || "Payment initiated successfully");
      }

      const checkoutUrl = res?.data?.payment?.checkout_url;
      if (checkoutUrl) {
        setTimeout(() => {
          window.location.href = checkoutUrl;
        }, 1000);
      }
    } catch {
      toast.error("Payment failed. Please try again.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="bg-white p-8 rounded-md w-full">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="text-gray-600 font-semibold">All Rental Request</h2>
          </div>

          {/* Filter Dropdown */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
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
                  {["House image", "Status", "Message", " ", "Payment"].map(
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
                {currentRequests.length > 0 ? (
                  currentRequests.map((req) => (
                    <tr key={req._id}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <Image
                          src={
                            req.rentalHouseId?.images?.[0] || "/placeholder.jpg"
                          }
                          alt="House Image"
                          width={50}
                          height={50}
                          className="object-cover"
                        />
                      </td>

                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span
                          className={`relative inline-block px-3 py-1 font-semibold leading-tight ${
                            req.status === "approved"
                              ? "text-black bg-green-600"
                              : req.status === "pending"
                              ? "text-yellow-900 bg-yellow-200"
                              : req.status === "rejected"
                              ? "text-black bg-red-600"
                              : "text-gray-900 bg-gray-200"
                          }`}
                        >
                          {req.status}
                        </span>
                      </td>

                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {req.additionalMessage}
                        </p>
                      </td>

                      {req.status === "approved" && (
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 font-semibold">
                            Landlord Contact: {req.landlordPhoneNumber || "N/A"}
                          </p>
                          <Button
                            onClick={() =>
                              handlePayment(
                                req.rentalHouseId._id,
                                req.rentalHouseId.rentAmount
                              )
                            }
                            className="mt-2 text-white px-4 py-2 rounded"
                          >
                            Proceed to Payment
                          </Button>
                        </td>
                      )}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="text-center text-gray-500 py-6 bg-white border-b border-gray-200"
                    >
                      No data available for this page.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex justify-between">
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            Previous
          </Button>
          <span>Page {currentPage}</span>
          <Button onClick={() => setCurrentPage((prev) => prev + 1)}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ViewSubmittedRentalRequests;
