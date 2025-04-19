/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { blockUser, updatedRole } from "@/services/Admin";
import { toast } from "sonner";
import { IUser } from "@/types";

const UserManagementCart = ({ userData }: { userData: IUser[] }) => {
  const [users, setUsers] = useState(userData); // State to store users
  const [loading,setLoading ] = useState<string | null>(null); // Store the user ID being updated
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null); // State for the selected user
  const [newRole, setNewRole] = useState("tenant"); // New role for the selected user

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

      toast.success(
        `User ${isBlocked ? "unblocked" : "blocked"} successfully!`
      );
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to update user status.");
    }
  };

  // Handle Role Update
  const handleRoleUpdate = async (userId: string, role: string) => {
    try {
      // setLoading(userId);
      console.log('this is test updated roll',userId,role);
      // const res = await updatedRole(userId, role);
      const res = await updatedRole(role, userId);
      if (res.success) {
        toast.success(res.message);
       
      } else {
        toast.error(res.message);
      }
        
    } catch (err: any) {
     console.log(err);
      toast.error(err.message);
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
                          {loading === user._id
                            ? "Processing..."
                            : user.isBlocked
                            ? "Unblock"
                            : "Block"}
                        </Button>
                        <Button
                          onClick={() => {
                            setSelectedUser(user);
                            setNewRole(user.role);
                            setIsModalOpen(true);
                          }}
                        >
                          Update Role
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for Updating Role */}
      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">
              Update Role for {selectedUser.name}
            </h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <select
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md"
              >
                <option value="tenant">Tenant</option>
                <option value="admin">Admin</option>
                <option value=" landlord"> landlord</option>
              </select>
            </div>
            <div className="flex justify-end">
              <Button onClick={() => setIsModalOpen(false)} className="mr-2">
                Cancel
              </Button>
              <Button
                onClick={() => {
                  handleRoleUpdate(selectedUser._id, newRole);
                  setIsModalOpen(false);
                }}
                className="bg-blue-500 text-white"
              >
                Update
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagementCart;
