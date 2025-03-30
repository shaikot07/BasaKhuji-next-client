"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { getRequestTentSpecific } from "@/services/Tenant";
import Image from "next/image";
import React, { useEffect, useState } from "react";


const ViewSubmittedRentalRequests = () => {
  const { user } = useUser();
  console.log(user, "this is user in view submitted rental request");

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  console.log("this is view ", data);

  useEffect(() => {
    if (!user?.userId) return; // Prevent fetching if userId is not available

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="bg-white p-8 rounded-md w-full">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="text-gray-600 font-semibold">All Rental Request</h2>
          </div>
         
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  {[
                    "House image",
                    "Status",
                    "Message",
                    ' ',
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
                {data?.map((req) => (
                  <tr key={req._id}>
                    {/* House Image */}
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

                    {/* Status */}
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
                        <span className="relative">{req.status}</span>
                      </span>
                    </td>

                    {/* Additional Message */}
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {req.additionalMessage}
                      </p>
                    </td>

                    {/* Show Payment Button and Landlord Contact for Approved Requests */}
                    {req.status === "approved" && (
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 font-semibold">
                          Landlord Contact:{" "} <br />
                          {req?.landlordPhoneNumber || "N/A"}
                        </p>
                        <Button className="mt-2 text-white px-4 py-2 rounded">
                          Proceed to Payment
                        </Button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSubmittedRentalRequests;
