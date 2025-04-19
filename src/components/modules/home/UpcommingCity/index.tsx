"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import rangpur from "@/assets/rangpur.jpeg";
import bogura from "@/assets/bogura.png";
import rajshahi from "@/assets/rajshahi.png";
import NMContainer from "@/components/ui/core/NMContainer";
import { Button } from "@/components/ui/button";

const UpCommingCity = () => {
  const cities = [
    { name: "Rangpur", listings: "1,230 Listing", image: rangpur },
    { name: "Bogra", listings: "1,140 Listing", image: bogura },
    { name: "Rajshahi", listings: "1,740 Listing", image: rajshahi },
    { name: "Bogra", listings: "1,140 Listing", image: bogura },
  ];
  return (
    <NMContainer>
      <section className="py-12  w-full  flex flex-col items-center justify-center mt-16">
        <div className="w-full flex justify-between items-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Up comming Cities{" "}
            <span className="underline decoration-orange-500"> </span>
          </h2>
          <Link href="/allHouse">
            <Button className="px-6 border rounded-lg transition bg-orange-500 hover:bg-orange-600 py-3 text-white font-bold ">
              Explore All ↗
            </Button>
          </Link>
        </div>
        <div className="w-full flex flex-wrap justify-between mt-16">
          {cities.map((city, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 text-center animate-fade-up"
            >
              {/* Image Wrapper */}
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto relative cursor-pointer group">
                {/* Image */}
                <Image
                  src={city.image}
                  alt={city.name}
                  width={100}
                  height={100}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />

                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

                {/* Clickable Overlay */}
                <div className="absolute inset-0 z-10"></div>
              </div>

              {/* City Name */}

              <h3 className="text-lg font-semibold mt-4">{city.name}</h3>

              {/* Listings Count (Optional) */}
              {/* <p className="text-gray-600">{city.listings} Listing</p> */}
            </div>
          ))}
        </div>
      </section>
    </NMContainer>
  );
};

export default UpCommingCity;
