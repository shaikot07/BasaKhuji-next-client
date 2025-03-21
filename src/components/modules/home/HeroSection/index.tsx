"use client";
// import { Button } from "@/components/ui/button";
// import styles from "./HeroSection.module.css";
import Image from "next/image";
// import cupImg from "@/assets/cup-with-headphone.png";
import NMContainer from "@/components/ui/core/NMContainer";
import { useEffect, useState } from "react";
import b1 from "@/assets/b2.jpg";
import b2 from "@/assets/bn-2.jpg";
import b3 from "@/assets/bn3.jpg";
// ------for search and filter---
// import { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import { Search } from "lucide-react";

const images = [b1, b2, b3];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);
  // -------------------for search and filter
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // State for user inputs
  const [searchTerm, setSearchTerm] = useState("");
  const [bedrooms, setBedrooms] = useState("all");
  const [rentAmount, setRentAmount] = useState("all");

  // Function to update query params and fetch data
  const handleSearchQuery = (query: string, value: string | number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all") {
      params.delete(query); // Remove param if it's set to "all"
    } else {
      params.set(query, value.toString());
    }
    // router.push(`${pathname}?${params.toString()}`, { scroll: false });
    router.push(`/allHouse?${params.toString()}`);
  };

  return (
    <NMContainer>
      <div className="relative w-full h-[600px] overflow-hidden mt-6 rounded-3xl">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Slide ${index}`}
            layout="fill"
            objectFit="cover"
            className={`absolute transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold">
            Find the Right Home for Your Family
          </h1>
          <p className="mt-6">
            We’ve more than 100 house, place & plot.
          </p>
          <div className="mt-12 flex gap-2 bg-[#FFFFFF] p-6 rounded-lg">
            <div className="flex flex-wrap gap-6 justify-between text-black">
              {/* Bedroom Filter */}
              <div className="relative w-full sm:w-auto">
                <select
                  value={bedrooms}
                  onChange={(e) => {
                    setBedrooms(e.target.value);
                    handleSearchQuery("bedrooms", e.target.value);
                  }}
                  className="w-full sm:w-64 px-4 py-2  "
                >
                  <option value="all">All Bedrooms</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              {/* Rent Filter */}
              <div className="relative w-full sm:w-auto">
                <select
                  value={rentAmount}
                  onChange={(e) => {
                    setRentAmount(e.target.value);
                    handleSearchQuery("rentAmount", e.target.value); // ✅ Fix: Send correct rentAmount
                  }}
                  className="w-full sm:w-64 px-4 py-2  focus:outline-none focus:ring-1"
                >
                  <option value="all">Sort By Amount</option>
                  <option value="200">Rent: 200</option>
                  <option value="300">Rent: 300</option>
                </select>
              </div>

              {/* Search Input */}
              <div className="relative w-full sm:w-[420px]">
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-sm border border-white"
                  placeholder="Search By Location"
                />
                <button
                  type="button"
                  onClick={() => handleSearchQuery("searchTerm", searchTerm)}
                  className="absolute top-0 right-0 p-2.5 text-white bg-[#080808] rounded-sm"
                >
                  <Search />
                </button>
              </div>

              {/* Reset Button */}
              {/* <Button
                onClick={() => {
                  router.push(`${pathname}`, { scroll: false });
                }}
              >
                Reset
              </Button> */}
            </div>
            {/* <button className="p-2 bg-orange-500 text-white rounded">Search Now</button> */}
          </div>
        </div>
      </div>
    </NMContainer>
  );
};

export default HeroSection;
