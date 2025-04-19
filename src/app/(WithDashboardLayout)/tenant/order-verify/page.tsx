// /* eslint-disable @typescript-eslint/no-explicit-any */




// "use client";

// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import { verifyPayment } from "@/services/pyment";

// const VerifyOrder = () => {
//   const searchParams = useSearchParams();
//   const orderId = searchParams.get("order_id");
//   console.log("Order ID from URL:", orderId);

//   const [isLoading, setIsLoading] = useState(true);
//   const [orderData, setOrderData] = useState<any>(null);
//   // const [message, setMessage] = useState("Verifying payment...");

//   useEffect(() => {
//     const fetchData = async () => {
//       if (!orderId || typeof orderId !== "string") {
//         // setMessage("Order ID not found in URL");
//         setIsLoading(false);
//         return;
//       }

//       try {
//         const response = await verifyPayment(orderId);
//         console.log("Response from verifyPayment:", response);

//         // Check if response and data structure are valid
//         if (response?.data?.length > 0) {
//           const data = response?.data?.[0];
//           setOrderData(data);
//           // setMessage(data?.sp_message || "Unknown status");
//           console.log("Order Data set:", data);
//         } else {
//           // setMessage("No order data found.");
//         }
//       } catch (error) {
//         console.error("Payment verification error:", error);
//         // setMessage("An error occurred during payment verification.");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [orderId]);

//   if (isLoading) {
//     return (
//       <div className="max-w-6xl mx-auto mt-8 text-center">
//         <span className="justify-center loading loading-spinner loading-lg"></span>
//       </div>
//     );
//   }

//   console.log("Order Data:", orderData);
//   // const isSuccess = orderData?.sp_message === "Order verified successfully"; // Update the success condition
// // Extract order status
//   // const isSuccess = orderData?.sp_code === "0000"; // Adjust based on actual success code
//   const isSuccess = orderData?.sp_message?.toLowerCase().includes("success");
//   const message = orderData?.sp_message || "Unknown status";
//   return (

//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
//       <div className="w-full max-w-2xl p-12 mx-4 text-center transition-all transform bg-white shadow-lg rounded-xl hover:shadow-xl">
//         {/* Status Icon */}
//         <div
//           className={`flex items-center justify-center w-24 h-24 mx-auto mb-8 rounded-full ${
//             isSuccess ? "bg-green-100" : "bg-red-100"
//           }`}
//         >
//           {isSuccess ? (
//             <svg
//               className="w-12 h-12 text-green-600"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M5 13l4 4L19 7"
//               />
//             </svg>
//           ) : (
//             <svg
//               className="w-12 h-12 text-red-600"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           )}
//         </div>

//         {/* Title */}
//         <h1
//           className={`mb-6 text-4xl font-extrabold ${
//             isSuccess ? "text-green-600" : "text-red-600"
//           }`}
//         >
//           {isSuccess ? "Payment Successful!" : "Payment Failed!"}
//         </h1>

//         <p className="mb-8 text-xl text-gray-700">
//           {isSuccess
//             ? "Thank you for your purchase."
//             : "Unfortunately, your payment could not be processed."}
//         </p>

//         {/* Message Block */}
//         <div
//           className={`p-6 mb-8 rounded-lg ${
//             isSuccess ? "bg-blue-50" : "bg-red-50"
//           }`}
//         >
//           <p
//             className={`text-lg font-medium ${
//               isSuccess ? "text-blue-700" : "text-red-700"
//             }`}
//           >
//             Order ID: {orderData ? orderData.customer_order_id : "Loading..."}
//           </p>
//           <p className="mt-2 text-gray-600">{message}</p>
//         </div>

//         {/* Button */}
//         <div className="mt-12">
//           <a
//             href="/tenant/dashboard/myRequest"
//             className="inline-block px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 bg-[#F2355F] hover:bg-black rounded-md"
//           >
//             Return to Dashboard
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerifyOrder;


















// -----------updated code with suspence and loading spinner------------------
"use client";

import { useEffect, useState, Suspense } from "react"; // Import Suspense
import { useSearchParams } from "next/navigation";
import { verifyPayment } from "@/services/pyment";

const VerifyOrder = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id");
  console.log("Order ID from URL:", orderId);

  const [isLoading, setIsLoading] = useState(true);
  const [orderData, setOrderData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!orderId || typeof orderId !== "string") {
        setIsLoading(false);
        return;
      }

      try {
        const response = await verifyPayment(orderId);
        console.log("Response from verifyPayment:", response);

        if (response?.data?.length > 0) {
          const data = response?.data?.[0];
          setOrderData(data);
          console.log("Order Data set:", data);
        } else {
          // Handle no order data found
        }
      } catch (error) {
        console.error("Payment verification error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [orderId]);

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto mt-8 text-center">
        <span className="justify-center loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  console.log("Order Data:", orderData);
  const isSuccess = orderData?.sp_message?.toLowerCase().includes("success");
  const message = orderData?.sp_message || "Unknown status";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="w-full max-w-2xl p-12 mx-4 text-center transition-all transform bg-white shadow-lg rounded-xl hover:shadow-xl">
        {/* Status Icon */}
        <div
          className={`flex items-center justify-center w-24 h-24 mx-auto mb-8 rounded-full ${
            isSuccess ? "bg-green-100" : "bg-red-100"
          }`}
        >
          {isSuccess ? (
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="w-12 h-12 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>

        {/* Title */}
        <h1
          className={`mb-6 text-4xl font-extrabold ${
            isSuccess ? "text-green-600" : "text-red-600"
          }`}
        >
          {isSuccess ? "Payment Successful!" : "Payment Failed!"}
        </h1>

        <p className="mb-8 text-xl text-gray-700">
          {isSuccess
            ? "Thank you for your purchase."
            : "Unfortunately, your payment could not be processed."}
        </p>

        {/* Message Block */}
        <div
          className={`p-6 mb-8 rounded-lg ${
            isSuccess ? "bg-blue-50" : "bg-red-50"
          }`}
        >
          <p
            className={`text-lg font-medium ${
              isSuccess ? "text-blue-700" : "text-red-700"
            }`}
          >
            Order ID: {orderData ? orderData.customer_order_id : "Loading..."}
          </p>
          <p className="mt-2 text-gray-600">{message}</p>
        </div>

        {/* Button */}
        <div className="mt-12">
          <a
            href="/tenant/dashboard/myRequest"
            className="inline-block px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 bg-[#F2355F] hover:bg-black rounded-md"
          >
            Return to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
};

// Wrap VerifyOrder component with Suspense
const VerifyOrderWithSuspense = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <VerifyOrder />
  </Suspense>
);

export default VerifyOrderWithSuspense;
