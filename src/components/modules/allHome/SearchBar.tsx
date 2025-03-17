// "use client";

// import { Search } from "lucide-react";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import React from "react";

// const SearchBar = () => {

//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   const handleSearchQuery = (query: string, value: string | number) => {
//     const params = new URLSearchParams(searchParams.toString());

//     params.set(query, value.toString());

//     router.push(`${pathname}?${params.toString()}`, {
//       scroll: false,
//     });
//   };

//   return (
//     <div className="">
//       <div className="max-w-6xl mx-auto pt-4 ">
//         {/* Search, Filter, and Sort Options */}
//         <div className="flex flex-wrap gap-6  justify-between ">
//           {/* Filter Dropdown */}
//           <div className="relative w-full sm:w-auto">
//             <select className="w-full sm:w-64 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1">
//               <option value="all">Number of bedrooms</option>
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4</option>
//               <option value="5">5</option>
//             </select>
//           </div>

//           {/* Sort Dropdown */}
//           <div className="relative w-full sm:w-auto">
//             <select
//               // value={sortOption}
//               // onChange={(e) => handleSortChange(e.target.value)}
//               className="w-full sm:w-64 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1"
//             >
//               <option value="all">sort by price</option>
//               <option value="asc">Price: Low to High</option>
//               <option value="desc">Price: High to Low</option>
//             </select>
//           </div>

//           {/* in-Stock filter buttom */}
//           {/* <div className="relative w-full sm:w-auto">
//               <button
//                 // onClick={() => handleFilterInStock("inStock")}
//                 className="w-full sm:w-48 px-4 py-2 text-[#080808] border-1 border-[#080808] rounded-md shadow-sm   focus:outline-none focus:ring-1"
//               >
//                 In Stock
//               </button>
//             </div> */}

//           {/* search input */}
//           <div className="relative w-full sm:w-[420px]">
//             <input
//               type="search"
//               id="search-dropdown"
//               // value={searchTerm || ""}
//               // onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-sm border-s-gray-50 border-s-2 border border-gray-300"
//               placeholder="Search By Location"
//               required
//             />
//             <button
//               type="button"
//               // onClick={handleSearchClick} // Debugging: ensure `searchTerm` is correct
//               className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-[#080808] rounded-sm border border-[#080808] hover:bg-[#F2355F]"
//             >
//               <Search />
//               <span className="sr-only">Search</span>
//             </button>
//           </div>
//         </div>
//         {/* <button
//             onClick={resetFilters}
//             className="w-full sm:w-48 mt-1 px-4 py-2 text-[#F2355F] border-1 border-[#080808] rounded-md shadow-sm   focus:ring-1"
//           >
//             Reset
//           </button> */}
//       </div>
//       <div></div>
//     </div>
//   );
// };

// export default SearchBar;

"use client";

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // State to track user input
  const [searchTerm, setSearchTerm] = useState("");
  const [bedrooms, setBedrooms] = useState("all");
  const [sortOption, setSortOption] = useState("all");

  // Function to update query params
  const handleSearchQuery = (query: string, value: string | number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(query, value.toString()); // Update query param
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="max-w-6xl mx-auto pt-4">
      <div className="flex flex-wrap gap-6 justify-between">
        {/* Filter Dropdown */}
        <div className="relative w-full sm:w-auto">
          <select
            value={bedrooms}
            onChange={(e) => {
              setBedrooms(e.target.value);
              handleSearchQuery("bedrooms", e.target.value);
            }}
            className="w-full sm:w-64 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1"
          >
            <option value="all">Number of bedrooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        {/* Sort Dropdown */}
        <div className="relative w-full sm:w-auto">
          <select
            value={sortOption}
            onChange={(e) => {
              setSortOption(e.target.value);
              handleSearchQuery("sort", "rentAmount"); // Sorting by rentAmount
              handleSearchQuery("order", e.target.value); // asc or desc
            }}
            className="w-full sm:w-64 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1"
          >
            <option value="all">Sort by rent</option>
            <option value="asc">Rent: Low to High</option>
            <option value="desc">Rent: High to Low</option>
          </select>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-[420px]">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300"
            placeholder="Search By Location"
            required
          />
          <button
            type="button"
            onClick={() => handleSearchQuery("location", searchTerm)}
            className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-[#080808] rounded-sm border border-[#080808] hover:bg-[#F2355F]"
          >
            <Search />
            <span className="sr-only">Search</span>
          </button>
        </div>
        <Button
          onClick={() => {
            router.push(`${pathname}`, {
              scroll: false,
            });
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
