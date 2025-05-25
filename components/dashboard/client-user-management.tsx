"use client";

import { Button } from "@/components/ui/button";
import { MoreHorizontal, Edit, Trash2, Shield, UserPlus } from "lucide-react";
import { useState } from "react";

export function ClientUserManagement() {
  const [showActions, setShowActions] = useState<number | null>(null);

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@company.com",
      role: "Owner",
      status: "Active",
      lastActive: "2 hours ago",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@company.com",
      role: "Admin",
      status: "Active",
      lastActive: "1 day ago",
    },
    {
      id: 3,
      name: "Mike Wilson",
      email: "mike@company.com",
      role: "Manager",
      status: "Active",
      lastActive: "30 minutes ago",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@company.com",
      role: "Editor",
      status: "Inactive",
      lastActive: "1 week ago",
    },
  ];

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
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  return (
    <div className="p-6 border border-border/50 rounded-lg glass-strong">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-foreground text-lg">Team Members</h3>
        <Button size="sm" className="glow">
          <UserPlus className="mr-2 w-4 h-4" />
          Invite User
        </Button>
      </div>

      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex justify-between items-center bg-background/50 p-3 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className="flex justify-center items-center bg-primary/20 rounded-full w-10 h-10">
                <span className="font-medium text-primary text-sm">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">
                  {user.name}
                </p>
                <p className="text-foreground-secondary text-xs">
                  {user.email}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span
                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleColor(
                  user.role,
                )}`}
              >
                {user.role}
              </span>

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
                  <div className="right-0 z-10 absolute bg-background/95 shadow-lg backdrop-blur-md mt-2 border border-border/50 rounded-md w-48">
                    <div className="py-1">
                      <button className="flex items-center hover:bg-soft/50 px-4 py-2 w-full text-foreground text-sm text-left">
                        <Edit className="mr-2 w-4 h-4" />
                        Edit User
                      </button>
                      <button className="flex items-center hover:bg-soft/50 px-4 py-2 w-full text-foreground text-sm text-left">
                        <Shield className="mr-2 w-4 h-4" />
                        Change Role
                      </button>
                      <button className="flex items-center hover:bg-soft/50 px-4 py-2 w-full text-red-600 dark:text-red-400 text-sm text-left">
                        <Trash2 className="mr-2 w-4 h-4" />
                        Remove User
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border/50">
        <Button variant="ghost" size="sm" className="w-full">
          View All Team Members
        </Button>
      </div>
    </div>
  );
}
