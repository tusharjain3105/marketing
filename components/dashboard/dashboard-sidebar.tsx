"use client";

import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { useDesignStyle } from "@/providers/design-style-provider";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Mail,
  Users,
  Zap,
  Settings,
  Home,
  Target,
  Calendar,
  FileText,
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

export function DashboardSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();
  const { designStyle } = useDesignStyle();

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Campaigns", href: "/dashboard/campaigns", icon: Mail },
    { name: "Contacts", href: "/dashboard/contacts", icon: Users },
    { name: "Automation", href: "/dashboard/automation", icon: Zap },
    { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
    { name: "AI Chatbot", href: "/dashboard/chatbot", icon: MessageCircle },
    { name: "Lead Generation", href: "/dashboard/leads", icon: Target },
    { name: "Calendar", href: "/dashboard/calendar", icon: Calendar },
    { name: "Reports", href: "/dashboard/reports", icon: FileText },
  ];

  const bottomNavigation = [
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
    { name: "Help", href: "/dashboard/help", icon: HelpCircle },
  ];

  const getSidebarClass = () => {
    const baseClass = `relative flex flex-col h-full transition-all duration-300 ${
      isCollapsed ? "w-16" : "w-64"
    }`;

    switch (designStyle) {
      case "dashboard":
        return `dashboard-sidebar ${baseClass} glass-strong border-r border-border/50`;
      case "admin":
        return `admin-sidebar ${baseClass} bg-gray-900 dark:bg-gray-950 border-r border-gray-800 dark:border-gray-700`;
      case "minimal":
        return `minimal-sidebar ${baseClass} bg-background border-r border-border`;
      case "neon":
        return `neon-sidebar ${baseClass} glass-strong border-r border-border/50`;
      case "corporate":
        return `corporate-sidebar ${baseClass} bg-background border-r-2 border-border`;
      default:
        return `dashboard-sidebar ${baseClass} glass-strong border-r border-border/50`;
    }
  };

  return (
    <div className={getSidebarClass()}>
      {/* Logo */}
      <div className="flex justify-between items-center p-4 border-b border-border/50">
        {!isCollapsed && (
          <Link href="/dashboard" className="flex items-center space-x-2">
            <div className="flex justify-center items-center bg-primary rounded-lg w-8 h-8">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground text-xl">
              MarketingPro
            </span>
          </Link>
        )}

        {isCollapsed && (
          <Link href="/dashboard" className="flex justify-center items-center">
            <div className="flex justify-center items-center bg-primary rounded-lg w-8 h-8">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
          </Link>
        )}

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={isCollapsed ? "w-full justify-center" : "ml-auto"}
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                `${designStyle}-nav-item flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? "active bg-primary/20 text-primary glow"
                    : "text-foreground-secondary hover:text-foreground hover:bg-soft/50"
                }`,
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
      <div className="space-y-2 p-4 border-t border-border/50">
        {bottomNavigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                `${designStyle}-nav-item flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "active bg-primary/20 text-primary"
                    : "text-foreground-secondary hover:text-foreground hover:bg-soft/50"
                }`,
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
            <>
              <ThemeSwitcher
                trigger={
                  <button
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 text-foreground-secondary hover:text-foreground hover:bg-soft/50 w-full",
                      isCollapsed && "justify-center px-0",
                    )}
                  >
                    <Palette className="flex-shrink-0 w-4 h-4" />
                    <span className="font-medium">Toggle theme</span>
                  </button>
                }
              />
            </>
          ) : (
            <div className="flex justify-center">
              <ThemeSwitcher />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
