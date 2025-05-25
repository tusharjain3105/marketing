"use client";

import { Button } from "@/components/ui/button";
import {
  MoreHorizontal,
  Edit,
  Trash2,
  CreditCard,
  RefreshCw,
} from "lucide-react";
import { useState } from "react";

export function AdminSubscriptionsTable() {
  const [showActions, setShowActions] = useState<number | null>(null);

  const subscriptions = [
    {
      id: 1,
      organization: "TechCorp Inc.",
      plan: "Enterprise",
      status: "Active",
      amount: "$2,400/year",
      nextBilling: "Jan 15, 2025",
      created: "Jan 15, 2024",
      paymentMethod: "•••• 4242",
    },
    {
      id: 2,
      organization: "StartupXYZ",
      plan: "Pro",
      status: "Active",
      amount: "$299/month",
      nextBilling: "Apr 3, 2024",
      created: "Feb 3, 2024",
      paymentMethod: "•••• 1234",
    },
    {
      id: 3,
      organization: "BigCorp Ltd.",
      plan: "Business",
      status: "Trial",
      amount: "$899/month",
      nextBilling: "Apr 20, 2024",
      created: "Mar 20, 2024",
      paymentMethod: "No card",
    },
    {
      id: 4,
      organization: "Creative Agency",
      plan: "Pro",
      status: "Past Due",
      amount: "$299/month",
      nextBilling: "Mar 10, 2024",
      created: "Mar 10, 2024",
      paymentMethod: "•••• 5678",
    },
    {
      id: 5,
      organization: "Tech Solutions",
      plan: "Basic",
      status: "Cancelled",
      amount: "$99/month",
      nextBilling: "N/A",
      created: "Nov 5, 2023",
      paymentMethod: "•••• 9876",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "Trial":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "Past Due":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "Cancelled":
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
                Plan
              </th>
              <th className="px-6 py-3 font-medium text-gray-500 dark:text-gray-400 text-xs text-left uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 font-medium text-gray-500 dark:text-gray-400 text-xs text-left uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 font-medium text-gray-500 dark:text-gray-400 text-xs text-left uppercase tracking-wider">
                Next Billing
              </th>
              <th className="px-6 py-3 font-medium text-gray-500 dark:text-gray-400 text-xs text-left uppercase tracking-wider">
                Payment Method
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
            {subscriptions.map((sub) => (
              <tr
                key={sub.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                    {sub.organization}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPlanColor(
                      sub.plan,
                    )}`}
                  >
                    {sub.plan}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                      sub.status,
                    )}`}
                  >
                    {sub.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-900 dark:text-gray-100 text-sm whitespace-nowrap">
                  {sub.amount}
                </td>
                <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap">
                  {sub.nextBilling}
                </td>
                <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap">
                  <div className="flex items-center">
                    <CreditCard className="mr-1 w-4 h-4 text-gray-400" />
                    {sub.paymentMethod}
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap">
                  {sub.created}
                </td>
                <td className="px-6 py-4 font-medium text-sm text-right whitespace-nowrap">
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        setShowActions(showActions === sub.id ? null : sub.id)
                      }
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>

                    {showActions === sub.id && (
                      <div className="right-0 z-10 absolute bg-white dark:bg-gray-800 shadow-lg mt-2 border border-gray-200 dark:border-gray-700 rounded-md w-48">
                        <div className="py-1">
                          <button className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 w-full text-gray-700 dark:text-gray-300 text-sm text-left">
                            <Edit className="mr-2 w-4 h-4" />
                            Edit Subscription
                          </button>
                          <button className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 w-full text-gray-700 dark:text-gray-300 text-sm text-left">
                            <RefreshCw className="mr-2 w-4 h-4" />
                            Change Plan
                          </button>
                          <button className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 w-full text-gray-700 dark:text-gray-300 text-sm text-left">
                            <CreditCard className="mr-2 w-4 h-4" />
                            Update Payment
                          </button>
                          <button className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 w-full text-red-600 dark:text-red-400 text-sm text-left">
                            <Trash2 className="mr-2 w-4 h-4" />
                            Cancel Subscription
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
              <span className="font-medium">987</span> results
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
