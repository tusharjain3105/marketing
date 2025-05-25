"use client";

import { Button } from "@/components/ui/button";
import { MoreHorizontal, Edit, Trash2, Shield, Ban } from "lucide-react";
import { useState } from "react";

export function AdminUsersTable() {
  const [showActions, setShowActions] = useState<number | null>(null);

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Owner",
      organization: "TechCorp Inc.",
      status: "Active",
      lastLogin: "2 hours ago",
      joinDate: "Jan 15, 2024",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@startup.com",
      role: "Admin",
      organization: "StartupXYZ",
      status: "Active",
      lastLogin: "1 day ago",
      joinDate: "Feb 3, 2024",
    },
    {
      id: 3,
      name: "Mike Wilson",
      email: "mike.w@company.org",
      role: "Manager",
      organization: "BigCorp Ltd.",
      status: "Inactive",
      lastLogin: "1 week ago",
      joinDate: "Dec 20, 2023",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@agency.com",
      role: "Editor",
      organization: "Creative Agency",
      status: "Active",
      lastLogin: "30 minutes ago",
      joinDate: "Mar 10, 2024",
    },
    {
      id: 5,
      name: "Alex Chen",
      email: "alex.chen@tech.io",
      role: "Viewer",
      organization: "Tech Solutions",
      status: "Suspended",
      lastLogin: "2 weeks ago",
      joinDate: "Nov 5, 2023",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "Inactive":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
      case "Suspended":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Owner":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
      case "Admin":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "Manager":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400";
      case "Editor":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "Viewer":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="divide-y divide-gray-200 dark:divide-gray-700 min-w-full">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th className="px-6 py-3 font-medium text-gray-500 dark:text-gray-400 text-xs text-left uppercase tracking-wider">
                User
              </th>
              <th className="px-6 py-3 font-medium text-gray-500 dark:text-gray-400 text-xs text-left uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 font-medium text-gray-500 dark:text-gray-400 text-xs text-left uppercase tracking-wider">
                Organization
              </th>
              <th className="px-6 py-3 font-medium text-gray-500 dark:text-gray-400 text-xs text-left uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 font-medium text-gray-500 dark:text-gray-400 text-xs text-left uppercase tracking-wider">
                Last Login
              </th>
              <th className="px-6 py-3 font-medium text-gray-500 dark:text-gray-400 text-xs text-left uppercase tracking-wider">
                Join Date
              </th>
              <th className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                      {user.name}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                      {user.email}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleColor(
                      user.role,
                    )}`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-100 text-sm whitespace-nowrap">
                  {user.organization}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                      user.status,
                    )}`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap">
                  {user.lastLogin}
                </td>
                <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap">
                  {user.joinDate}
                </td>
                <td className="px-6 py-4 font-medium text-sm text-right whitespace-nowrap">
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        setShowActions(showActions === user.id ? null : user.id)
                      }
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>

                    {showActions === user.id && (
                      <div className="right-0 z-10 absolute bg-white dark:bg-gray-800 shadow-lg mt-2 border border-gray-200 dark:border-gray-700 rounded-md w-48">
                        <div className="py-1">
                          <button className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 w-full text-gray-700 dark:text-gray-300 text-sm text-left">
                            <Edit className="mr-2 w-4 h-4" />
                            Edit User
                          </button>
                          <button className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 w-full text-gray-700 dark:text-gray-300 text-sm text-left">
                            <Shield className="mr-2 w-4 h-4" />
                            Change Role
                          </button>
                          <button className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 w-full text-gray-700 dark:text-gray-300 text-sm text-left">
                            <Ban className="mr-2 w-4 h-4" />
                            Suspend User
                          </button>
                          <button className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 w-full text-red-600 dark:text-red-400 text-sm text-left">
                            <Trash2 className="mr-2 w-4 h-4" />
                            Delete User
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="bg-white dark:bg-gray-800 px-4 sm:px-6 py-3 border-gray-200 dark:border-gray-700 border-t">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">5</span> of{" "}
              <span className="font-medium">12,847</span> results
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
