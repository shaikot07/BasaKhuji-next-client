import NMContainer from "@/components/ui/core/NMContainer";
import { getAllHouse } from "@/services/Lanload";
import Image from "next/image";

const AllHousePage = async () => {
  const allHouse = await getAllHouse();
  console.log("user data  data", allHouse);
  const allHouseData = allHouse?.data || [];

  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="mt-10 grid max-w-md grid-cols-1 gap-6 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-2xl md:grid-cols-2 md:px-10 lg:grid-cols-4 lg:gap-4 bg-purple-500">
        {allHouseData.map((item: any) => (
          <article
            key={item._id}
            className="mb-4 overflow-hidden rounded-xl border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl bg-white w-[350px]"
          >
            <div className="">
              <Image
                src={
                  item.images && item.images.length > 0 ? item.images[0] : ""
                }
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
                  className="text-lg hover:text-green-600 font-medium duration-500 ease-in-out"
                >
                  238 Baton Rouge, LA 70809, USA
                </a>
              </div>

              <ul className="box-border flex list-none items-center border-t border-b border-solid border-gray-200 px-0 py-6">
                <li className="mr-4 flex items-center text-left">
                  <i className="mr-2 text-2xl text-green-600">
                    {/* <!-- uil:compress-arrows --> */}$
                  </i>
                  <span className="text-sm">{item.rentAmount}</span>
                </li>

                <li className="mr-4 flex items-center text-left">
                  <i className="mr-2 text-2xl text-green-600">
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
                  <span className="text-sm">{item.bedrooms} Beds</span>
                </li>

                <li className="flex items-center text-left">
                  <i className="mr-2 text-2xl text-green-600">
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
                  <span className="text-sm text-gray-400">Price</span>
                  <p className="m-0 text-base font-medium">$5000</p>
                </li>

                <li className="text-left">
                  <span className="text-sm text-gray-400">Rating</span>
                  <ul className="m-0 flex items-center p-0 font-medium">
                    <li className="inline text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </li>
                    <li className="inline text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </li>
                    <li className="inline text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </li>
                    <li className="inline text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </li>
                    <li className="inline text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                    </li>
                    <li className="ml-2 inline text-base">5.0(30)</li>
                  </ul>
                </li>
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default AllHousePage;
