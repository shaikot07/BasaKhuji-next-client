"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TUser } from "@/types";
import { blockUser } from "@/services/Admin";
import { toast } from "sonner";

const UserManagementCart = ({ userData }: { userData: TUser[] }) => {
  const [users, setUsers] = useState(userData); // State to store users
  const [loading, setLoading] = useState<string | null>(null); // Store the user ID being updated

  // Handle Block/Unblock Action
  const handleBlockToggle = async (userId: string, isBlocked: boolean) => {
    try {
      await blockUser(userId); // No need to send true/false, backend toggles it
  
      // Update UI
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, isBlocked: !isBlocked } : user
        )
      );
  
      toast.success(`User ${isBlocked ? 'unblocked' : 'blocked'} successfully!`);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to update user status.");
    }
  };

  return (
    <div>
      <div className="w-full bg-white flex items-center justify-center min-h-full p-2">
        <div className="container max-w-6xl">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Table Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    User Management
                  </h2>
                  <p className="text-gray-500 mt-1">
                    Manage all user accounts here.
                  </p>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Department
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr
                      key={user._id}
                      className="hover:bg-gray-50 transition-colors duration-150"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <Image
                              src={user?.profileImg ?? "/default-avatar.png"}
                              width={40}
                              height={40}
                              className="rounded-full object-cover"
                              alt="user img"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {user.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{user.role}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Engineering</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            user.isBlocked
                              ? "bg-red-100 text-red-800" // Blocked styles
                              : "bg-green-100 text-green-800" // Active styles
                          }`}
                        >
                          {user.isBlocked ? "Blocked" : "Active"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Button
                          className={`mr-4 ${
                            user.isBlocked ? "bg-green-500" : "bg-black"
                          } text-white`}
                          onClick={() =>
                            handleBlockToggle(user._id, user.isBlocked)
                          }
                          disabled={loading === user._id} // Disable button while loading
                        >
                          {loading === user._id ? "Processing..." : user.isBlocked ? "Unblock" : "Block"}
                        </Button>
                        <Button>Update Role</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagementCart;
