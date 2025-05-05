

// "use client";
// import { useEffect, useState } from "react";
// import ProfileUpdatedFrom from "@/components/modules/dashboard/admin/profile/ProfileUpdatedFrom";
// import { useUser } from "@/context/UserContext";
// import Image from "next/image";
// import avter from "../../../../assets/avater.jpg";
// import { Button } from "@/components/ui/button";
// import { Loader2, Pencil } from "lucide-react";
// import { IUser } from "@/types";
// import { useCallback } from "react";

// const ProfilePage = () => {
//     const { user, isLoading } = useUser(); 
//     const [updatedUser, setUpdatedUser] = useState<IUser | null>(null);
// console.log("iam crunt singleuser from profile page ", updatedUser);
//   const [open, setOpen] = useState(false); // modal open state


//   // Fetch function wrapped in useCallback
//   const fetchData = useCallback(async () => {
//     try {
//     //   const res = await fetch(`http://localhost:5000/api/users/${user?.userId}/singleUser`);
//       const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users/${user?.userId}/singleUser`);
//       const result = await res.json();
//       setUpdatedUser(result.data); // Save the data
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }, [user?.userId]);

//   // Fetch data when user changes
//   useEffect(() => {
//     if (user?.userId) {
//       fetchData(); // Call the async function to fetch data
//     }
//   }, [user?.userId, fetchData]); // Include fetchData in dependencies

//   // Handle modal close and refresh data
//   const handleCloseModal = () => {
//     setOpen(false);  // Close modal
//     if (user?.userId) {
//       fetchData();  // Refresh data after modal closes
//     }
//   };


//     // Show loading spinner while data is being fetched
//     if (isLoading) {
//         return (
//             <div className="flex justify-center items-center min-h-screen">
//             {/* Using a simple animated spinning loader from ShadCN */}
//             <div className="animate-spin text-black">
//               <Loader2 size={50} className="text-center" />
//             </div>
//           </div>
//         );
//       }

//   return (
//     <div>
//       {/* <h2>this is profile update page</h2> */}

//       <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
//         <div className="relative rounded-t-lg h-32 overflow-hidden bg-pink-900">
//           <Button
//             onClick={() => setOpen(true)}
//             className="absolute top-2 right-2 flex items-center gap-2 rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-4 py-2"
//           >
//             <Pencil size={16} />
//             Edit
//           </Button>
//         </div>
//         <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
//           <Image
//             className="object-cover object-center h-32"
//             src={updatedUser?.profileImg || avter}
//             alt="profile image"
//             priority
//             width={128}
//             height={128}
//           />
//         </div>
//         <div className="text-center mt-2">
//           <h2 className="font-semibold">Name: {updatedUser?.name}</h2>
//           <p className="text-gray-500">Role: {updatedUser?.role}</p>
//         </div>
//         <div className="mt-2">
//           <h2 className="text-md text-center">
//             Email: <strong>{updatedUser?.email}</strong>
//           </h2>
//         </div>
//         <div className="p-4 border-t mx-8 mt-2"></div>
//       </div>

//       {/* Modal */}
//       {open && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-xl max-w-lg w-full relative">
//             <button
//                onClick={handleCloseModal} 
//               className="absolute top-2 right-2 text-black font-bold text-lg"
//             >
//               &times;
//             </button>
//             <ProfileUpdatedFrom user={user} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfilePage;


// new page design 



/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Loader2, Pencil } from "lucide-react";
import { useUser } from "@/context/UserContext";
import ProfileUpdatedForm from "@/components/modules/dashboard/admin/profile/ProfileUpdatedFrom";
import { Button } from "@/components/ui/button";
import { IUser } from "@/types";
import avter from "../../../../assets/avater.jpg";

const ProfilePage = () => {
  const { user, isLoading } = useUser();
  const [updatedUser, setUpdatedUser] = useState<IUser | null>(null);
  const [open, setOpen] = useState(false);

  const fetchData = useCallback(async () => {
    if (!user?.userId) return;
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/users/${user.userId}/singleUser`
      );
      const result = await res.json();
      setUpdatedUser(result.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }, [user?.userId]);

  useEffect(() => {
    if (user?.userId) fetchData();
  }, [user?.userId, fetchData]);

  const handleCloseModal = () => {
    setOpen(false);
    if (user?.userId) fetchData();
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="animate-spin text-black" size={50} />
      </div>
    );
  }

  return (
    <div>
      <main className="profile-page">
        {/* Header background section */}
        <section className="relative block h-[500px]">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span className="w-full h-full absolute opacity-50 bg-black"></span>
          </div>
          <div className="top-auto bottom-0 left-0 right-0 w-full absolute overflow-hidden h-[70px]">
            <svg
              className="absolute bottom-0"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 2560 100"
            >
              <polygon
                className="fill-current text-white"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>

        {/* Profile Card */}
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 flex justify-center">
                    <div className="relative -mt-24 ">
                      <Image
                        alt="Profile image"
                        src={updatedUser?.profileImg || avter}
                        width={170}
                        height={170}
                        className="rounded-full shadow-xl object-cover h-[170px] w-[170px]"
                      />
                      <div className="py-6  mt-32 sm:mt-0">
                      <Button
                        onClick={() => setOpen(true)}
                        className="bg-[#FF6725] text-white hover:bg-black rounded-full px-4 py-2 text-sm font-semibold shadow-md"
                      >
                        <Pencil size={16} className="mr-2" />
                        Edit Profile
                      </Button>
                    </div>
                    </div>
                  </div>
                 
                </div>

                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold text-[#FF6725] mb-2">
                   Name: {updatedUser?.name || "N/A"}
                  </h3>
                  <p className="text-sm text-blueGray-400 font-bold uppercase">
                   Roll: {updatedUser?.role || "Role Unknown"}
                  </p>
                  <p className="text-sm text-blueGray-600 mt-2">
                    Email: {updatedUser?.email}
                  </p>
                </div>

                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        This is your profile. You can update your information
                        using the edit button above.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal for editing profile */}
        {open && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center">
            <div className="bg-white p-6 rounded-xl max-w-lg w-full relative shadow-lg">
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 text-black text-xl font-bold"
              >
                &times;
              </button>
              <ProfileUpdatedForm user={user} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProfilePage;
