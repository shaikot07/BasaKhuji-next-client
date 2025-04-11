
"use client";
import { useEffect, useState } from "react";
import ProfileUpdatedFrom from "@/components/modules/dashboard/admin/profile/ProfileUpdatedFrom";
import { useUser } from "@/context/UserContext";
import Image from "next/image";
import avter from "../../../../assets/avater.jpg";
import { Button } from "@/components/ui/button";
import { Loader2, Pencil } from "lucide-react";
import { IUser } from "@/types";

const ProfilePage = () => {
    const { user, isLoading } = useUser(); 
    const [updatedUser, setUpdatedUser] = useState<IUser | null>(null);
console.log("iam crunt singleuser from profile page ", updatedUser);
  const [open, setOpen] = useState(false); // modal open state


  // Fetch function moved outside useEffect
  const fetchData = async () => {
    try {
    //   const res = await fetch(`http://localhost:5000/api/users/${user?.userId}/singleUser`);
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users/${user?.userId}/singleUser`);
      const result = await res.json();
      setUpdatedUser(result.data); // Save the data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data when user changes
  useEffect(() => {
    if (user?.userId) {
      fetchData(); // Call the async function to fetch data
    }
  }, [user?.userId]); // Trigger on userId change

  // Handle modal close and refresh data
  const handleCloseModal = () => {
    setOpen(false);  // Close modal
    if (user?.userId) {
      fetchData();  // Refresh data after modal closes
    }
  };


    // Show loading spinner while data is being fetched
    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
            {/* Using a simple animated spinning loader from ShadCN */}
            <div className="animate-spin text-black">
              <Loader2 size={50} className="text-center" />
            </div>
          </div>
        );
      }

  return (
    <div>
      <h2>this is profile update page</h2>

      <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
        <div className="relative rounded-t-lg h-32 overflow-hidden bg-pink-900">
          <Button
            onClick={() => setOpen(true)}
            className="absolute top-2 right-2 flex items-center gap-2 rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-4 py-2"
          >
            <Pencil size={16} />
            Edit
          </Button>
        </div>
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <Image
            className="object-cover object-center h-32"
            src={updatedUser?.profileImg || avter}
            alt="profile image"
            priority
            width={128}
            height={128}
          />
        </div>
        <div className="text-center mt-2">
          <h2 className="font-semibold">Name: {updatedUser?.name}</h2>
          <p className="text-gray-500">Role: {updatedUser?.role}</p>
        </div>
        <div className="mt-2">
          <h2 className="text-md text-center">
            Email: <strong>{updatedUser?.email}</strong>
          </h2>
        </div>
        <div className="p-4 border-t mx-8 mt-2"></div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-lg w-full relative">
            <button
               onClick={handleCloseModal} 
              className="absolute top-2 right-2 text-black font-bold text-lg"
            >
              &times;
            </button>
            <ProfileUpdatedFrom user={user} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;