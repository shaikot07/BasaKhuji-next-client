// "use client";

// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { useState } from "react";

// const HomeDetailsCart = ({ homeData }: { homeData: any }) => {
//   console.log("log from cart", homeData);

//   // State for the selected image
//   const [selectedImage, setSelectedImage] = useState(homeData?.images?.[0] || "");

//   return (
//     <div className="bg-gray-100">
//       <div className="container mx-auto px-4 py-8">
//         <div className="flex flex-wrap -mx-4">
//           {/* Product Images */}
//           <div className="w-full md:w-1/2 px-4 mb-8">
//             <Image
//             width={400}
//             height={200}
//               src={selectedImage}
//               alt="Selected"
//               className=" rounded-lg shadow-md mb-4 w-[500px] h-[500px] border"
//             />
//             <div className="flex gap-4 py-4 justify-center overflow-x-auto">
//               {homeData?.images?.map((img: string, index: number) => (
//                 <Image
//                 width={300}
//                 height={200}
//                   key={index}
//                   src={img}
//                   alt={`Thumbnail ${index + 1}`}
//                   className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
//                   onClick={() => setSelectedImage(img)}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Home Details */}
//           <div className="w-full md:w-1/2 px-4">
//             {/* <h2 className="text-3xl font-bold mb-2">{homeData?.title || "No Title"}</h2> */}
//             {/* <p className="text-gray-600 mb-4"></p> */}
//             <div className="pb-6">
//                 <h3  className="text-lg font-medium duration-500 ease-in-out hover:text-green-600">
//                 Location: {homeData?.location || "Unknown"}
//                 </h3>
//               </div>
//             <div className="mb-4">
//               <span className="text-2xl font-bold mr-2">${homeData?.rentAmount || "N/A"}</span>
//             </div>

//             <p className="text-gray-700 mb-6">{homeData?.description || "No description available."}</p>
//             <div className="p-4">

//               <ul className="flex flex-wrap border-t border-b border-gray-200 py-6">
//                 <li className="mr-4 flex items-center text-left">
//                   <span className="mr-2 text-green-600 text-2xl">$</span>
//                   <span className="text-sm">{homeData?.rentAmount}</span>
//                 </li>

//                 <li className="mr-4 flex items-center text-left">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M22 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L4 19h1l.67-2h12.67l.66 2h1l.67-2H22v-5zm-4-2h-5V7h5v3zM6 7h5v3H6V7zm-2 5h16v3H4v-3z" />
//                   </svg>
//                   <span className="text-sm">{homeData?.bedrooms} Beds</span>
//                 </li>

//                 <li className="flex items-center text-left">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M21 10H7V7c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S5 4.794 5 7v3H3a1 1 0 0 0-1 1v2c0 2.606 1.674 4.823 4 5.65V22h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65v-2a1 1 0 0 0-1-1zm-1 3c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4v-1h16v1z" />
//                   </svg>
//                   <span className="text-sm">{homeData?.bath ? `${homeData.bath} Baths` : "No Bath"}</span>
//                 </li>
//               </ul>

//             </div>

//             <div className="flex space-x-4 mb-6">
//               <Button>Request Rental</Button>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold mb-2">Amenities:  {homeData?.amenities}</h3>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeDetailsCart;

"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { addRentalRequest } from "@/services/Tenant";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const HomeDetailsCart = ({ homeData }: { homeData: any }) => {
  console.log("log from cart", homeData);
  const { user } = useUser();
  console.log("log in from details", user);
  const [selectedImage, setSelectedImage] = useState(
    homeData?.images?.[0] || ""
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [rentalRequest, setRentalRequest] = useState({
  //   moveInDate: "",
  //   rentalDuration: "",
  //   additionalMessage: "",
  // });

  // add rental request
  const onSubmit = async (data) => {
    if (!homeData?._id) {
      toast.error("Missing home ID");
      return;
    }
    try {
      const requestData = {
        rentalHouseId: homeData._id,
        tenantId: user?.userId,
        moveInDate: data.moveInDate,
        rentalDuration: data.rentalDuration,
        additionalMessage: data.additionalMessage,
      };

      const res = await addRentalRequest(requestData);

      if (res.success) {
        toast.success(res.message);
        reset();
        setIsModalOpen(false);
      } else {
        toast.error(res.message);
      }
    } catch (err) {
      console.error("Rental Request Error:", err);
      toast.error("Failed to submit rental request.");
    }
  };
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Product Images */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <Image
              width={400}
              height={200}
              src={selectedImage}
              alt="Selected"
              className="rounded-lg shadow-md mb-4 w-[500px] h-[500px] border"
            />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {homeData?.images?.map((img: string, index: number) => (
                <Image
                  width={300}
                  height={200}
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Home Details */}
          <div className="w-full md:w-1/2 px-4">
            <div className="pb-6">
           
              <div className="pb-6">
                <h3  className="text-lg font-medium duration-500 ease-in-out hover:text-green-600">
                Location: {homeData?.location || "Unknown"}
                </h3>
              </div>

            </div>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">
                ${homeData?.rentAmount || "N/A"}
              </span>
            </div>

            <p className="text-gray-700 mb-6">
              {homeData?.description || "No description available."}
            </p>
            <div className="p-4">
              
              <ul className="flex flex-wrap border-t border-b border-gray-200 py-6">
                <li className="mr-4 flex items-center text-left">
                  <span className="mr-2 text-green-600 text-2xl">$</span>
                  <span className="text-sm">{homeData.rentAmount}</span>
                </li>

                <li className="mr-4 flex items-center text-left">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L4 19h1l.67-2h12.67l.66 2h1l.67-2H22v-5zm-4-2h-5V7h5v3zM6 7h5v3H6V7zm-2 5h16v3H4v-3z" />
                  </svg>
                  <span className="text-sm">{homeData.bedrooms} Beds</span>
                </li>

                <li className="flex items-center text-left">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 10H7V7c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S5 4.794 5 7v3H3a1 1 0 0 0-1 1v2c0 2.606 1.674 4.823 4 5.65V22h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65v-2a1 1 0 0 0-1-1zm-1 3c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4v-1h16v1z" />
                  </svg>
                  <span className="text-sm">{homeData.bath ? `${homeData.bath} Baths` : "No Bath"}</span>
                </li>
              </ul>

              
            </div>
            <div className="flex space-x-4 mb-6">
              <Button onClick={() => setIsModalOpen(true)}>
                Request Rental
              </Button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Amenities: {homeData?.amenities}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Rental Request Modal */}
      {/* Rental Request Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Rental Request</h2>
            <p className="text-sm text-gray-600 mb-4">House ID: <span className="font-semibold">{homeData?._id || "N/A"}</span></p>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="block mb-2">
                Move-in Date:
                <input
                  type="date"
                  className="w-full border p-2 rounded mt-1"
                  {...register("moveInDate", { required: "Move-in date is required" })}
                />
                {errors.moveInDate && <p className="text-red-500 text-sm">{errors.moveInDate.message as string}</p>}
              </label>

              <label className="block mb-2">
                Rental Duration:
                <input
                  type="text"
                  className="w-full border p-2 rounded mt-1"
                  placeholder="e.g., 6 months"
                  {...register("rentalDuration", { required: "Rental duration is required" })}
                />
                {errors.rentalDuration && <p className="text-red-500 text-sm">{errors.rentalDuration.message as string}</p>}
              </label>

              <label className="block mb-4">
                Additional Message:
                <textarea
                  className="w-full border p-2 rounded mt-1"
                  placeholder="Enter any specific requirements..."
                  {...register("additionalMessage")}
                />
              </label>

              <div className="flex justify-end">
                <Button className="mr-2" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                <Button type="submit">Submit Request</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeDetailsCart;
