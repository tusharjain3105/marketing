"use client";

import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Building,
  CreditCard,
  Settings,
  BarChart3,
  Mail,
  Shield,
  Database,
  Activity,
  HelpCircle,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Palette,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function AdminSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Organizations", href: "/admin/organizations", icon: Building },
    { name: "Subscriptions", href: "/admin/subscriptions", icon: CreditCard },
    { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
    { name: "Chat Management", href: "/admin/chat", icon: MessageCircle },
    { name: "System Health", href: "/admin/system", icon: Activity },
    { name: "Email Logs", href: "/admin/emails", icon: Mail },
    { name: "Security", href: "/admin/security", icon: Shield },
    { name: "Database", href: "/admin/database", icon: Database },
  ];

  const bottomNavigation = [
    { name: "Settings", href: "/admin/settings", icon: Settings },
    { name: "Help", href: "/admin/help", icon: HelpCircle },
  ];

  return (
    <div
      className={cn(
        "relative flex flex-col h-full transition-all duration-300 bg-gray-900 dark:bg-gray-950 border-r border-gray-800 dark:border-gray-700",
        isCollapsed ? "w-16" : "w-64",
      )}
    >
      {/* Logo */}
      <div className="flex justify-between items-center p-4 border-gray-800 dark:border-gray-700 border-b">
        {!isCollapsed && (
          <Link href="/admin" className="flex items-center space-x-2">
            <div className="flex justify-center items-center bg-blue-600 rounded-lg w-8 h-8">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-white text-xl">Admin Panel</span>
          </Link>
        )}

        {isCollapsed && (
          <Link href="/admin" className="flex justify-center items-center">
            <div className="flex justify-center items-center bg-blue-600 rounded-lg w-8 h-8">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
          </Link>
        )}

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn(
            "text-gray-400 hover:text-white hover:bg-gray-800",
            isCollapsed ? "w-full justify-center" : "ml-auto",
          )}
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group",
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-gray-800",
                isCollapsed && "justify-center px-0",
              )}
            >
              <item.icon className="flex-shrink-0 w-5 h-5" />
              {!isCollapsed && <span className="font-medium">{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Navigation */}
      <div className="space-y-1 p-4 border-gray-800 dark:border-gray-700 border-t">
        {bottomNavigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200",
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-gray-800",
                isCollapsed && "justify-center px-0",
              )}
            >
              <item.icon className="flex-shrink-0 w-5 h-5" />
              {!isCollapsed && <span className="font-medium">{item.name}</span>}
            </Link>
          );
        })}

        <div className="pt-4">
          {!isCollapsed ? (
            <ThemeSwitcher
              trigger={
                <button
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 text-gray-300 hover:text-white hover:bg-gray-800 w-full",
                    isCollapsed && "justify-center px-0",
                  )}
                >
                  <Palette className="flex-shrink-0 w-4 h-4" />
                  <span className="font-medium">Theme</span>
                </button>
              }
            />
          ) : (
            <div className="flex justify-center">
              <ThemeSwitcher
                trigger={
                  <button className="flex justify-center items-center hover:bg-gray-800 p-2 rounded-lg text-gray-300 hover:text-white transition-all duration-200">
                    <Palette className="w-4 h-4" />
                  </button>
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
