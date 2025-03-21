

"use client";

import {  useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const SearchBar = () => {
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
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };



// Handle key press event for Enter
const handleKeyDown = (event: React.KeyboardEvent) => {
  if (event.key === 'Enter') {
    handleSearchQuery("searchTerm", searchTerm);
  }
};



  return (
    <div className="max-w-6xl mx-auto pt-4">
      <div className="flex flex-wrap gap-6 justify-between">
        {/* Bedroom Filter */}
        <div className="relative w-full sm:w-auto">
          <select
            value={bedrooms}
            onChange={(e) => {
              setBedrooms(e.target.value);
              handleSearchQuery("bedrooms", e.target.value);
            }}
            className="w-full sm:w-64 px-4 py-2 border rounded-md shadow-sm "
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
            className="w-full sm:w-64 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1"
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
            onKeyDown={handleKeyDown} // Add this to listen for the Enter key
            className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300"
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
        <Button
          onClick={() => {
            router.push(`${pathname}`, { scroll: false });
          }}
        >
          Reset
        </Button>
      </div>

      {/* Display Loading or Results */}
    </div>
  );
};

export default SearchBar;
