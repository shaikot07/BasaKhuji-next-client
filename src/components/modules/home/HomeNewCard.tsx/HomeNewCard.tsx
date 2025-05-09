"use client";
import { Button } from "@/components/ui/button";
import { getAllHouse } from "@/services/Lanload";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react"; // using a spinner icon from lucide-react
import NMContainer from "@/components/ui/core/NMContainer";

const HomeNewCard = () => {
  const [allHouseData, setAllHouseData] = useState([]);
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allHouse = await getAllHouse();
        setAllHouseData(allHouse?.data || []);
      } catch (error) {
        console.error("Failed to fetch house data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <NMContainer>
    <div className="max-w-[1600px] mx-auto px-4 py-10">
      <div className="w-full flex justify-between items-center px-6 ">
        <h2 className="text-4xl font-semibold text-black mb-4">
          New Listing{" "}
          <span className="underline decoration-orange-500"> </span>
        </h2>
        <Link href="/allHouse">
          <Button className="px-6 border rounded-lg transition bg-orange-500 hover:bg-orange-600 py-3 text-white font-bold ">
            Explore All ↗
          </Button>
        </Link>
      </div>

      {/* Spinner */}
      {loading ? (
        <div className="flex justify-center items-center mt-24">
          <Loader2 className="h-10 w-10 animate-spin text-orange-500" />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-16">
          {allHouseData.slice(0, 4).map((item: any) => (
            <Link key={item._id} href={`/allHouse/${item._id}`}>
              <div className="overflow-hidden rounded-xl border bg-white h-[550px] text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl w-full ">
                <div>
                  <Image
                    src={item.images?.length ? item.images[0] : ""}
                    alt="House Image"
                    width={300}
                    height={250}
                    className="w-full h-[250px] object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="pb-6">
                    <h3 className="text-lg font-bold duration-500 ease-in-out hover:text-[#EA580C]">
                      {item?.location}
                    </h3>
                  </div>
                  <div className="pb-6">
                    <h3 className="text-lg font-medium duration-500 ease-in-out hover:text-[#EA580C] line-clamp-2">
                      {item?.description}
                    </h3>
                  </div>
                  <ul className="flex flex-wrap border-t border-b border-gray-200 py-6">
                    <li className="mr-4 flex items-center text-left">
                      <span className="mr-2 text-[#FF6725] text-2xl">$</span>
                      <span className="text-sm">{item.rentAmount}</span>
                    </li>
                    <li className="mr-4 flex items-center text-left">
                      {/* Bed icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-5 w-5 text-[#FF6725]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M22 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L4 19h1l.67-2h12.67l.66 2h1l.67-2H22v-5zm-4-2h-5V7h5v3zM6 7h5v3H6V7zm-2 5h16v3H4v-3z" />
                      </svg>
                      <span className="text-sm">{item.bedrooms} Beds</span>
                    </li>
                    <li className="mr-4 flex items-center text-left">
                      {/* Bath icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-5 w-5 text-[#FF6725]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M21 10H7V7c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S5 4.794 5 7v3H3a1 1 0 0 0-1 1v2c0 2.606 1.674 4.823 4 5.65V22h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65v-2a1 1 0 0 0-1-1zm-1 3c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4v-1h16v1z" />
                      </svg>
                      <span className="text-sm">
                        {item.bath ? `${item.bath} Baths` : "No Bath"}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
    </NMContainer>
  );
};

export default HomeNewCard;
