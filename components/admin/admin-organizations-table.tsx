"use client";

import { Button } from "@/components/ui/button";
import { MoreHorizontal, Edit, Trash2, Users, CreditCard } from "lucide-react";
import { useState } from "react";

export function AdminOrganizationsTable() {
  const [showActions, setShowActions] = useState<number | null>(null);

  const organizations = [
    {
      id: 1,
      name: "TechCorp Inc.",
      owner: "John Doe",
      email: "john.doe@techcorp.com",
      plan: "Enterprise",
      users: 45,
      revenue: "$2,400",
      status: "Active",
      created: "Jan 15, 2024",
    },
    {
      id: 2,
      name: "StartupXYZ",
      owner: "Sarah Johnson",
      email: "sarah@startupxyz.com",
      plan: "Pro",
      users: 12,
      revenue: "$299",
      status: "Active",
      created: "Feb 3, 2024",
    },
    {
      id: 3,
      name: "BigCorp Ltd.",
      owner: "Mike Wilson",
      email: "mike@bigcorp.com",
      plan: "Business",
      users: 28,
      revenue: "$899",
      status: "Trial",
      created: "Dec 20, 2023",
    },
    {
      id: 4,
      name: "Creative Agency",
      owner: "Emily Davis",
      email: "emily@creativeagency.com",
      plan: "Pro",
      users: 8,
      revenue: "$299",
      status: "Active",
      created: "Mar 10, 2024",
    },
    {
      id: 5,
      name: "Tech Solutions",
      owner: "Alex Chen",
      email: "alex@techsolutions.io",
      plan: "Basic",
      users: 3,
      revenue: "$99",
      status: "Suspended",
      created: "Nov 5, 2023",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "Trial":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "Suspended":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case "Enterprise":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
      case "Pro":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "Business":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400";
      case "Basic":
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
                Organization
              </th>
              <th className="px-6 py-3 font-medium text-gray-500 dark:text-gray-400 text-xs text-left uppercase tracking-wider">
                Owner
              </th>
              <th className="px-6 py-3 font-medium text-gray-500 dark:text-gray-400 text-xs text-left uppercase tracking-wider">
                Plan
              </th>
              <th className="px-6 py-3 font-medium text-gray-500 dark:text-gray-400 text-xs text-left uppercase tracking-wider">
                Users
              </th>
              <th className="px-6 py-3 font-medium text-gray-500 dark:text-gray-400 text-xs text-left uppercase tracking-wider">
                Revenue
              </th>
              <th className="px-6 py-3 font-medium text-gray-500 dark:text-gray-400 text-xs text-left uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 font-medium text-gray-500 dark:text-gray-400 text-xs text-left uppercase tracking-wider">
                Created
              </th>
              <th className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {organizations.map((org) => (
              <tr
                key={org.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                      {org.name}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                      {org.owner}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                      {org.email}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPlanColor(
                      org.plan,
                    )}`}
                  >
                    {org.plan}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-100 text-sm whitespace-nowrap">
                  <div className="flex items-center">
                    <Users className="mr-1 w-4 h-4 text-gray-400" />
                    {org.users}
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-100 text-sm whitespace-nowrap">
                  <div className="flex items-center">
                    <CreditCard className="mr-1 w-4 h-4 text-gray-400" />
                    {org.revenue}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                      org.status,
                    )}`}
                  >
                    {org.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap">
                  {org.created}
                </td>
                <td className="px-6 py-4 font-medium text-sm text-right whitespace-nowrap">
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        setShowActions(showActions === org.id ? null : org.id)
                      }
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>

                    {showActions === org.id && (
                      <div className="right-0 z-10 absolute bg-white dark:bg-gray-800 shadow-lg mt-2 border border-gray-200 dark:border-gray-700 rounded-md w-48">
                        <div className="py-1">
                          <button className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 w-full text-gray-700 dark:text-gray-300 text-sm text-left">
                            <Edit className="mr-2 w-4 h-4" />
                            Edit Organization
                          </button>
                          <button className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 w-full text-gray-700 dark:text-gray-300 text-sm text-left">
                            <Users className="mr-2 w-4 h-4" />
                            Manage Users
                          </button>
                          <button className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 w-full text-gray-700 dark:text-gray-300 text-sm text-left">
                            <CreditCard className="mr-2 w-4 h-4" />
                            Billing Details
                          </button>
                          <button className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 w-full text-red-600 dark:text-red-400 text-sm text-left">
                            <Trash2 className="mr-2 w-4 h-4" />
                            Delete Organization
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
              <span className="font-medium">1,234</span> results
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
