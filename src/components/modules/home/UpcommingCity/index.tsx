"use client";
import Image from "next/image";
import React from "react";
import rangpur from "@/assets/rangpur.jpeg";
import bogura from "@/assets/bogura.png";
import rajshahi from "@/assets/rajshahi.png";
import NMContainer from "@/components/ui/core/NMContainer";

const UpCommingCity = () => {
  const cities = [
    { name: "Rangpur", listings: "1,230 Listing", image: rangpur },
    { name: "Bogra", listings: "1,140 Listing", image: bogura },
    { name: "Rajshahi", listings: "1,740 Listing", image: rajshahi },
    { name: "Bogra", listings: "1,140 Listing", image: bogura },
  ];
  return (
    <NMContainer>
      <section className="py-2 bg-pink-500 w-full  flex flex-col items-center justify-center">
        <div className="w-full flex justify-between items-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Popular Cities{" "}
            <span className="underline decoration-orange-500"> </span>
          </h2>
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition">
            Explore All ↗
          </button>
        </div>
        <div className="w-full flex flex-wrap bg-black  justify-between">
          {cities.map((city, index) => (
            // <div key={index} className="flex flex-col items-center p-4">
            //   <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden mx-auto">
            //     <Image
            //       src={city.image}
            //       alt={city.name}
            //       width={224}
            //       height={224}
            //       className="object-cover w-full h-full"
            //     />
            //   </div>
            //   <h3 className="text-lg font-semibold mt-3">{city.name}</h3>
            //   <p className="text-gray-600">{city.listings} Listing</p>
            // </div>

            <div key={index} className="flex flex-col items-center p-4">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mx-auto">
                <Image
                  src={city.image}
                  alt={city.name}
                  width={256} // Updated to match the new md:w-64 (256px)
                  height={256} // Updated to match the new md:h-64 (256px)
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold mt-3">{city.name}</h3>
              <p className="text-gray-600">{city.listings} Listing</p>
            </div>
          ))}
        </div>
      </section>
    </NMContainer>
  );
};

export default UpCommingCity;
