// /* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// import { blockUser, updatedRole } from "@/services/Admin";
// import { toast } from "sonner";
// import { IUser } from "@/types";

// const UserManagementCart = ({ userData }: { userData: IUser[] }) => {
//   const [users, setUsers] = useState(userData); // State to store users
//   const [loading,setLoading ] = useState<string | null>(null); // Store the user ID being updated
//   const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
//   const [selectedUser, setSelectedUser] = useState<IUser | null>(null); // State for the selected user
//   const [newRole, setNewRole] = useState("tenant"); // New role for the selected user

//   // Handle Block/Unblock Action
//   const handleBlockToggle = async (userId: string, isBlocked: boolean) => {
//     try {
//       await blockUser(userId); // No need to send true/false, backend toggles it

//       // Update UI
//       setUsers((prevUsers) =>
//         prevUsers.map((user) =>
//           user._id === userId ? { ...user, isBlocked: !isBlocked } : user
//         )
//       );

//       toast.success(
//         `User ${isBlocked ? "unblocked" : "blocked"} successfully!`
//       );
//     } catch (error) {
//       console.error("Error:", error);
//       toast.error("Failed to update user status.");
//     }
//   };

//   // Handle Role Update
//   const handleRoleUpdate = async (userId: string, role: string) => {
//     try {
//       // setLoading(userId);
//       console.log('this is test updated roll',userId,role);
//       // const res = await updatedRole(userId, role);
//       const res = await updatedRole(role, userId);
//       if (res.success) {
//         toast.success(res.message);

//       } else {
//         toast.error(res.message);
//       }

//     } catch (err: any) {
//      console.log(err);
//       toast.error(err.message);
//     }
//   };

//   return (
//     <div>
//       <div className="w-full bg-white flex items-center justify-center min-h-full p-2">
//         <div className="container max-w-6xl">
//           <div className="bg-white rounded-xl shadow-md overflow-hidden">
//             {/* Table Header */}
//             <div className="p-6 border-b border-gray-200">
//               <div className="flex flex-col md:flex-row md:items-center md:justify-between">
//                 <div>
//                   <h2 className="text-xl font-bold text-gray-800">
//                     User Management
//                   </h2>
//                   <p className="text-gray-500 mt-1">
//                     Manage all user accounts here.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Table */}
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                       Name
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                       Role
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                       Department
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                       Status
//                     </th>
//                     <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {users.map((user) => (
//                     <tr
//                       key={user._id}
//                       className="hover:bg-gray-50 transition-colors duration-150"
//                     >
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex items-center">
//                           <div className="h-10 w-10 flex-shrink-0">
//                             <Image
//                               src={user?.profileImg ?? "/default-avatar.png"}
//                               width={40}
//                               height={40}
//                               className="rounded-full object-cover"
//                               alt="user img"
//                             />
//                           </div>
//                           <div className="ml-4">
//                             <div className="text-sm font-medium text-gray-900">
//                               {user.name}
//                             </div>
//                             <div className="text-sm text-gray-500">
//                               {user.email}
//                             </div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm text-gray-900">{user.role}</div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm text-gray-900">Engineering</div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span
//                           className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                             user.isBlocked
//                               ? "bg-red-100 text-red-800" // Blocked styles
//                               : "bg-green-100 text-green-800" // Active styles
//                           }`}
//                         >
//                           {user.isBlocked ? "Blocked" : "Active"}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                         <Button
//                           className={`mr-4 ${
//                             user.isBlocked ? "bg-green-500" : "bg-black"
//                           } text-white`}
//                           onClick={() =>
//                             handleBlockToggle(user._id, user.isBlocked)
//                           }
//                           disabled={loading === user._id} // Disable button while loading
//                         >
//                           {loading === user._id
//                             ? "Processing..."
//                             : user.isBlocked
//                             ? "Unblock"
//                             : "Block"}
//                         </Button>
//                         <Button
//                           onClick={() => {
//                             setSelectedUser(user);
//                             setNewRole(user.role);
//                             setIsModalOpen(true);
//                           }}
//                         >
//                           Update Role
//                         </Button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Modal for Updating Role */}
//       {isModalOpen && selectedUser && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
//             <h3 className="text-lg font-semibold mb-4">
//               Update Role for {selectedUser.name}
//             </h3>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Role
//               </label>
//               <select
//                 value={newRole}
//                 onChange={(e) => setNewRole(e.target.value)}
//                 className="mt-1 block w-full border border-gray-300 rounded-md"
//               >
//                 <option value="tenant">Tenant</option>
//                 <option value="admin">Admin</option>
//                 <option value=" landlord"> landlord</option>
//               </select>
//             </div>
//             <div className="flex justify-end">
//               <Button onClick={() => setIsModalOpen(false)} className="mr-2">
//                 Cancel
//               </Button>
//               <Button
//                 onClick={() => {
//                   handleRoleUpdate(selectedUser._id, newRole);
//                   setIsModalOpen(false);
//                 }}
//                 className="bg-blue-500 text-white"
//               >
//                 Update
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserManagementCart;

// with filter and  pagination

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";


import { blockUser, updatedRole } from "@/services/Admin";
import { toast } from "sonner";
import { IUser } from "@/types";

const ITEMS_PER_PAGE = 5;

const UserManagementCart = ({ userData }: { userData: IUser[] }) => {
  const [users, setUsers] = useState(userData);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>(userData);
  const [filter, setFilter] = useState<"all" | "new" | "old">("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
  const [newRole, setNewRole] = useState("tenant");

  // Filter logic
  useEffect(() => {
    const now = new Date();
    let filtered = [...users];

    if (filter === "new") {
      filtered = users.filter((user) => {
        const createdDate = new Date(user.createdAt || "");
        const diffDays =
          (now.getTime() - createdDate.getTime()) / (1000 * 3600 * 24);
        return diffDays <= 7; // new = within 7 days
      });
    } else if (filter === "old") {
      filtered = users.filter((user) => {
        const createdDate = new Date(user.createdAt || "");
        const diffDays =
          (now.getTime() - createdDate.getTime()) / (1000 * 3600 * 24);
        return diffDays > 7;
      });
    }

    setFilteredUsers(filtered);
    setCurrentPage(1); // reset to first page
  }, [filter, users]);

  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleBlockToggle = async (userId: string, isBlocked: boolean) => {
    try {
      setLoading(userId);
      await blockUser(userId);
      setUsers((prev) =>
        prev.map((user) =>
          user._id === userId ? { ...user, isBlocked: !isBlocked } : user
        )
      );
      toast.success(
        `User ${isBlocked ? "unblocked" : "blocked"} successfully!`
      );
    } catch {
      toast.error("Failed to update user status.");
    } finally {
      setLoading(null);
    }
  };

  const handleRoleUpdate = async (userId: string, role: string) => {
    try {
      const res = await updatedRole(role, userId);
      if (res.success) toast.success(res.message);
      else toast.error(res.message);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">User Management</h2>
        <select
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value as "all" | "new" | "old");
            setCurrentPage(1); // reset page when filter changes
          }}
          className="px-4 py-2 border rounded-md"
        >
          <option value="all">All</option>
          <option value="new">New</option>
          <option value="old">Old</option>
        </select>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 text-sm font-medium text-gray-600 uppercase">
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Role</th>
              <th className="px-6 py-3 text-left">Department</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {paginatedUsers.map((user) => (
              <tr key={user._id}>
                <td className="px-6 py-4 flex items-center gap-2">
                  <Image
                    src={user.profileImg || "/default-avatar.png"}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                    alt="user"
                  />
                  <div>
                    <div className="font-semibold">{user.name}</div>
                    <div className="text-gray-500 text-xs">{user.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">Engineering</td>
                <td className="px-6 py-4">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      user.isBlocked
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {user.isBlocked ? "Blocked" : "Active"}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <Button
                    className={`mr-2 ${
                      user.isBlocked ? "bg-green-600" : "bg-red-600"
                    } text-white`}
                    onClick={() => handleBlockToggle(user._id, user.isBlocked)}
                    disabled={loading === user._id}
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

        {/* Pagination */}
        <div className="mt-6 flex justify-between px-5 py-2 ">
          <Button  className={`bg-black text-white hover:bg-black ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`} 
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span className="text-sm text-gray-600 self-center">
            Page {currentPage} of {totalPages}
          </span>
          <Button
          
            onClick={() => {
              if (currentPage < totalPages) {
                setCurrentPage((prev) => prev + 1);
              }
            }}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>

      {/* Role Update Modal */}
      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">
              Update Role for {selectedUser.name}
            </h3>
            <select
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
              className="w-full border rounded-md p-2 mb-4"
            >
              <option value="tenant">Tenant</option>
              <option value="admin">Admin</option>
              <option value="landlord">Landlord</option>
            </select>
            <div className="flex justify-end gap-2">
              <Button onClick={() => setIsModalOpen(false)} variant="outline">
                Cancel
              </Button>
              <Button
                className="bg-blue-600 text-white"
                onClick={() => {
                  handleRoleUpdate(selectedUser._id, newRole);
                  setIsModalOpen(false);
                }}
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
