"use client";

import { Button } from "@/components/ui/button";
import {
  Bell,
  Search,
  User,
  Settings,
  LogOut,
  Shield,
  ChevronDown,
  AlertTriangle,
} from "lucide-react";
import { useState } from "react";

export function AdminHeader() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="flex justify-between items-center bg-white dark:bg-gray-800 shadow-sm px-6 py-4 border-gray-200 dark:border-gray-700 border-b">
      {/* Search */}
      <div className="flex flex-1 items-center max-w-md">
        <div className="relative w-full">
          <Search className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 -translate-y-1/2 transform" />
          <input
            type="text"
            placeholder="Search users, organizations, or logs..."
            className="bg-gray-50 dark:bg-gray-700 py-2 pr-4 pl-10 border border-gray-300 dark:border-gray-600 focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* System Status */}
        <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">
          <div className="bg-green-500 rounded-full w-2 h-2" />
          <span className="font-medium text-green-700 dark:text-green-300 text-sm">
            All Systems Operational
          </span>
        </div>

        {/* Notifications */}
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative text-gray-600 hover:text-gray-900 dark:hover:text-gray-100 dark:text-gray-300"
          >
            <Bell className="w-5 h-5" />
            <span className="-top-1 -right-1 absolute flex justify-center items-center bg-red-500 rounded-full w-3 h-3 text-white text-xs">
              2
            </span>
          </Button>

          {showNotifications && (
            <div className="right-0 z-50 absolute bg-white dark:bg-gray-800 shadow-xl mt-2 border border-gray-200 dark:border-gray-700 rounded-lg w-80">
              <div className="p-4 border-gray-200 dark:border-gray-700 border-b">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  Admin Notifications
                </h3>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {adminNotifications.map((notification, index) => (
                  <div
                    key={index}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700 p-4 border-gray-100 dark:border-gray-600 border-b transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-2">
                        {notification.type === "warning" ? (
                          <AlertTriangle className="w-4 h-4 text-yellow-500" />
                        ) : (
                          <Shield className="w-4 h-4 text-blue-500" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                          {notification.title}
                        </p>
                        <p className="mt-1 text-gray-600 dark:text-gray-400 text-xs">
                          {notification.message}
                        </p>
                        <p className="mt-1 text-gray-500 dark:text-gray-500 text-xs">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4">
                <Button variant="ghost" size="sm" className="w-full">
                  View All Notifications
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* User Menu */}
        <div className="relative">
          <Button
            variant="ghost"
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:hover:text-gray-100 dark:text-gray-300"
          >
            <div className="flex justify-center items-center bg-blue-600 rounded-full w-8 h-8">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                Super Admin
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                admin@company.com
              </p>
            </div>
            <ChevronDown className="w-4 h-4" />
          </Button>

          {showUserMenu && (
            <div className="right-0 z-50 absolute bg-white dark:bg-gray-800 shadow-xl mt-2 border border-gray-200 dark:border-gray-700 rounded-lg w-48">
              <div className="p-2">
                <div className="px-3 py-2 border-gray-200 dark:border-gray-700 border-b">
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    Super Admin
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    admin@company.com
                  </p>
                </div>
                <div className="py-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="justify-start w-full text-gray-700 hover:text-gray-900 dark:hover:text-gray-100 dark:text-gray-300"
                  >
                    <User className="mr-2 w-4 h-4" />
                    Profile
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="justify-start w-full text-gray-700 hover:text-gray-900 dark:hover:text-gray-100 dark:text-gray-300"
                  >
                    <Settings className="mr-2 w-4 h-4" />
                    Settings
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="justify-start w-full text-red-600 hover:text-red-700 dark:hover:text-red-300 dark:text-red-400"
                  >
                    <LogOut className="mr-2 w-4 h-4" />
                    Sign Out
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

const adminNotifications = [
  {
    title: "High CPU Usage Alert",
    message: "Server load has exceeded 85% for the past 10 minutes",
    time: "5 minutes ago",
    type: "warning",
  },
  {
    title: "New User Registration Spike",
    message: "50+ new users registered in the last hour",
    time: "1 hour ago",
    type: "info",
  },
];
