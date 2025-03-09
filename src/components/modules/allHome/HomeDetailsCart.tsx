"use client";

import Image from "next/image";
import { useState } from "react";

const HomeDetailsCart = ({ homeData }: { homeData: any }) => {
  console.log("log from cart", homeData);

  // State for the selected image
  const [selectedImage, setSelectedImage] = useState(homeData?.images?.[0] || "");

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Product Images */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <Image
            width={300}
            height={300}
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto rounded-lg shadow-md mb-4"
            />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {homeData?.images?.map((img: string, index: number) => (
                <Image
                width={100}
                height={100}
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
            <h2 className="text-3xl font-bold mb-2">{homeData?.title || "No Title"}</h2>
            <p className="text-gray-600 mb-4">Location: {homeData?.location || "Unknown"}</p>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">${homeData?.price || "N/A"}</span>
            </div>

            <p className="text-gray-700 mb-6">{homeData?.description || "No description available."}</p>

            <div className="flex space-x-4 mb-6">
              <button className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Add to Wishlist
              </button>
              <button className="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500">
                Contact Owner
              </button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {homeData?.features?.length > 0 ? (
                  homeData.features.map((feature: string, index: number) => (
                    <li key={index}>{feature}</li>
                  ))
                ) : (
                  <li>No features listed</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDetailsCart;
