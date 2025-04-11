"use client";
import { useState } from "react";
import ProfileUpdatedFrom from "@/components/modules/dashboard/admin/profile/ProfileUpdatedFrom";
import { useUser } from "@/context/UserContext";
import Image from "next/image";
import avter from "../../../../assets/avater.jpg";
import { Button } from "@/components/ui/button";
import { Loader2, Pencil } from "lucide-react";

const ProfilePage = () => {
  const { user, isLoading} = useUser();
  const [open, setOpen] = useState(false); // modal open state


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
            src={user?.profileImg || avter}
            alt="profile image"
            priority
          />
        </div>
        <div className="text-center mt-2">
          <h2 className="font-semibold">Name: {user?.name}</h2>
          <p className="text-gray-500">Role: {user?.role}</p>
        </div>
        <div className="mt-2">
          <h2 className="text-md text-center">
            Email: <strong>{user?.email}</strong>
          </h2>
        </div>
        <div className="p-4 border-t mx-8 mt-2"></div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-lg w-full relative">
            <button
              onClick={() => setOpen(false)}
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
