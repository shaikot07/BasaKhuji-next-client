"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { deleteRentalHouse, LanloadGetWonRentalHouse } from "@/services/Lanload";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const LanloadAllRentalHouse = () => {
  const { user } = useUser();

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user?.userId) return; // Prevent fetching if userId is not available

    const fetchData = async () => {
      try {
        const response = await LanloadGetWonRentalHouse(user.userId);

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
  }, [user?.userId]); // Fetch data when userId changes

  // deleted house


  const handleDelete = async (id: string) => {
    try {
      const res = await deleteRentalHouse(id);
  
      if (res.success) {
        toast.success("Rental house deleted successfully");
        // Optionally, redirect or update UI after delete
        // router.push("/user/landlord/rental-houses"); // Or refresh the list
      } else {
        toast.error(res.message);
      }
    } catch (err) {
      console.error("Error deleting rental house:", err);
      toast.error("Failed to delete rental house.");
    }
  };


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log(data);
  return (
    <div>
      <section className="flex flex-col items-center ">
        <h1 className="mt-10 text-4xl font-bold text-gray-800">New Listings</h1>
        <div className="mt-10 grid max-w-md grid-cols-1 gap-6 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-8">
          {data.map((item: any, ) => (
            <article
              key={item._id}
              className="mb-4 overflow-hidden rounded-xl border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl bg-white"
            >
              <div className="">
                <Image
                  src={item.images && item.images.length > 0 ? item.images[0] : ""}
                  alt="House Image"
                  width={300}
                  height={150}
                  className="w-full h-[250px] object-cover"
                />
              </div>

              <div className="p-4">
                <div className="pb-6">
                  <a
                    href="#"
                    className="text-lg hover:text-[#151515] font-medium duration-500 ease-in-out"
                  >
                    {item.location}
                  </a>
                </div>

                <ul className="box-border flex list-none items-center border-t border-b border-solid border-gray-200 px-0 py-6">
                  <li className="mr-4 flex items-center text-left">
                    <i className="mr-2 text-2xl text-[#151515]">
                      {/* <!-- uil:compress-arrows --> */}
                      $
                    </i>
                    <span className="text-base">{item.rentAmount}</span>
                  </li>

                  <li className="mr-4 flex items-center text-left">
                    <i className="mr-2 text-2xl text-[#151515]">
                      {/* <!-- ic:outline-king-bed --> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="h-5 w-5"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M22 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L4 19h1l.67-2h12.67l.66 2h1l.67-2H22v-5zm-4-2h-5V7h5v3zM6 7h5v3H6V7zm-2 5h16v3H4v-3z"
                        />
                      </svg>
                    </i>
                    <span className="text-base ">{item.bedrooms} Beds</span>
                  </li>

                  <li className="flex items-center text-left">
                    <i className="mr-2 text-2xl text-[#151515]">
                      {/* <!-- bx:bath --> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="h-5 w-5"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M21 10H7V7c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S5 4.794 5 7v3H3a1 1 0 0 0-1 1v2c0 2.606 1.674 4.823 4 5.65V22h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65v-2a1 1 0 0 0-1-1zm-1 3c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4v-1h16v1z"
                        />
                      </svg>
                    </i>
                    {item.bath ? `${item.bath} Baths` : "No Bath"}
                  </li>
                </ul>

                <ul className="m-0 flex list-none items-center justify-between px-0 pt-6 pb-0">
                  <li className="text-left">
                   <Button
                   onClick={() => handleDelete(item._id)}
                   >Deleted</Button>
                  </li>

                  <li className="text-left">
                    <Link href={`/landlord/dashboard/updatedRentalHouse/${item._id}`}>
                    
                  <Button>Edit</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LanloadAllRentalHouse;
