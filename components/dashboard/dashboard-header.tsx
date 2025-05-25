"use client";

import { Button } from "@/components/ui/button";
import {
  Bell,
  Search,
  User,
  Settings,
  LogOut,
  Plus,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

export function DashboardHeader() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-border/50 glass-strong">
      {/* Search */}
      <div className="flex flex-1 items-center max-w-md">
        <div className="relative w-full">
          <Search className="top-1/2 left-3 absolute w-4 h-4 text-foreground-secondary -translate-y-1/2 transform" />
          <input
            type="text"
            placeholder="Search campaigns, contacts, or reports..."
            className="bg-background/50 py-2 pr-4 pl-10 border focus:border-primary border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-full text-foreground placeholder-foreground-secondary"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* Quick Actions */}
        <Button className="glow">
          <Plus className="mr-2 w-4 h-4" />
          New Campaign
        </Button>

        {/* Notifications */}
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative"
          >
            <Bell className="w-5 h-5" />
            <span className="-top-1 -right-1 absolute flex justify-center items-center bg-primary rounded-full w-3 h-3 text-primary-foreground text-xs">
              3
            </span>
          </Button>

          {showNotifications && (
            <div className="right-0 z-[100] absolute bg-background/95 shadow-xl backdrop-blur-md mt-2 border border-border/50 rounded-lg w-80">
              <div className="p-4 border-b border-border/50">
                <h3 className="font-semibold text-foreground">Notifications</h3>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {notifications.map((notification, index) => (
                  <div
                    key={index}
                    className="hover:bg-soft/30 p-4 border-b border-border/30 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 bg-primary/20 mt-2 rounded-full w-2 h-2" />
                      <div className="flex-1">
                        <p className="font-medium text-foreground text-sm">
                          {notification.title}
                        </p>
                        <p className="mt-1 text-foreground-secondary text-xs">
                          {notification.message}
                        </p>
                        <p className="mt-1 text-foreground-secondary text-xs">
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
            className="flex items-center gap-2"
          >
            <div className="flex justify-center items-center bg-primary/20 rounded-full w-8 h-8">
              <User className="w-4 h-4 text-primary" />
            </div>
            <span className="font-medium text-foreground">John Doe</span>
            <ChevronDown className="w-4 h-4 text-foreground-secondary" />
          </Button>

          {showUserMenu && (
            <div className="right-0 z-[100] absolute bg-background/95 shadow-xl backdrop-blur-md mt-2 border border-border/50 rounded-lg w-48">
              <div className="p-2">
                <div className="px-3 py-2 border-b border-border/30">
                  <p className="font-medium text-foreground">John Doe</p>
                  <p className="text-foreground-secondary text-sm">
                    john@example.com
                  </p>
                </div>
                <div className="py-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="justify-start w-full"
                  >
                    <User className="mr-2 w-4 h-4" />
                    Profile
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="justify-start w-full"
                  >
                    <Settings className="mr-2 w-4 h-4" />
                    Settings
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="justify-start w-full text-red-500 hover:text-red-600"
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

const notifications = [
  {
    title: "Campaign Performance Alert",
    message:
      "Your 'Summer Sale' campaign has exceeded the expected open rate by 25%",
    time: "2 minutes ago",
  },
  {
    title: "New Contact Added",
    message: "Sarah Johnson has been added to your 'Premium Leads' segment",
    time: "1 hour ago",
  },
  {
    title: "Automation Completed",
    message: "Welcome email sequence has been sent to 150 new subscribers",
    time: "3 hours ago",
  },
];
