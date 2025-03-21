import SearchBar from "@/components/modules/allHome/SearchBar";
import { getAllHouse } from "@/services/Lanload";
import Image from "next/image";
import Link from "next/link";



type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const AllHousePage = async ({searchParams,}: {searchParams: SearchParams;}) => {
  const query = await searchParams;
  const allHouse = await getAllHouse(query);

  const allHouseData = allHouse?.data || [];
  console.log(allHouseData);

  return (
    <div className="max-w-[1600px] mx-auto px-4">
      <SearchBar />
      <div className="mt-10">
        {/* Check if allHouseData is empty and show a message */}
        {allHouseData.length === 0 ? (
          <div className="text-center text-red-500 font-bold mt-5 text-4xl">
            <p className="mt-8">Results not match, try again</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-purple-500">
            {allHouseData.map((item: any) => (
              <Link key={item._id} href={`/allHouse/${item._id}`}>
                <div className="overflow-hidden rounded-xl border bg-white text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl w-full">
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
                      <h3 className="text-lg font-bold duration-500 ease-in-out hover:text-green-600">
                        {item?.location}
                      </h3>
                    </div>
                    <div className="pb-6">
                      <h3 className="text-lg font-medium duration-500 ease-in-out hover:text-green-600 line-clamp-2">
                        {item?.description}
                      </h3>
                    </div>

                    <ul className="flex flex-wrap border-t border-b border-gray-200 py-6">
                      <li className="mr-4 flex items-center text-left">
                        <span className="mr-2 text-green-600 text-2xl">$</span>
                        <span className="text-sm">{item.rentAmount}</span>
                      </li>

                      <li className="mr-4 flex items-center text-left">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 h-5 w-5 text-green-600"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M22 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L4 19h1l.67-2h12.67l.66 2h1l.67-2H22v-5zm-4-2h-5V7h5v3zM6 7h5v3H6V7zm-2 5h16v3H4v-3z" />
                        </svg>
                        <span className="text-sm">{item.bedrooms} Beds</span>
                      </li>

                      <li className="mr-4 flex items-center text-left">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 h-5 w-5 text-green-600"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M21 10H7V7c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S5 4.794 5 7v3H3a1 1 0 0 0-1 1v2c0 2.606 1.674 4.823 4 5.65V22h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65v-2a1 1 0 0 0-1-1zm-1 3c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4v-1h16v1z" />
                        </svg>
                        <span className="text-sm">{item.bath ? `${item.bath} Baths` : "No Bath"}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllHousePage;


// test new  code 

// import { getAllHouse } from "@/services/Lanload";
// import Image from "next/image";
// import Link from "next/link";

// const AllHousePage = async ({ searchParams }: { searchParams: Record<string, string> }) => {
//   const allHouse = await getAllHouse(searchParams); // Fetch filtered/sorted data from API
//   const allHouseData = allHouse?.data || [];

//   return (
//     <div className="max-w-[1600px] mx-auto px-4">
//       {/* Search and Filter UI */}
    

//       {/* House Listing */}
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {allHouseData.map((item: any) => (
//           <Link key={item._id} href={`/allHouse/${item._id}`}>
//             <div className="overflow-hidden rounded-xl border bg-white shadow-md">
//               <Image
//                 src={item.images?.[0] || ""}
//                 alt="House Image"
//                 width={300}
//                 height={250}
//                 className="w-full h-[250px] object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-medium hover:text-green-600">
//                   {item.location}
//                 </h3>
//                 <p>${item.rentAmount} / month</p>
//                 <p>{item.bedrooms} Beds</p>
//                 <p>{item.bath ? `${item.bath} Baths` : "No Bath"}</p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllHousePage;
