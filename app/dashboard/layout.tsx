"use client";

import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { useDesignStyle } from "@/providers/design-style-provider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { designStyle } = useDesignStyle();

  const getLayoutClass = () => {
    switch (designStyle) {
      case "dashboard":
        return "dashboard-layout bg-gradient-to-br from-background via-soft/30 to-medium/20";
      case "admin":
        return "admin-layout bg-gray-50 dark:bg-gray-900";
      case "minimal":
        return "minimal-layout bg-background";
      case "neon":
        return "neon-layout";
      case "corporate":
        return "corporate-layout";
      default:
        return "dashboard-layout bg-gradient-to-br from-background via-soft/30 to-medium/20";
    }
  };

  return (
    <div className={`${getLayoutClass()} min-h-screen`}>
      {/* Animated background elements - only show for dashboard design style */}
      {designStyle === "dashboard" && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="-top-40 -right-40 absolute bg-primary/10 blur-3xl rounded-full w-80 h-80 animate-pulse" />
          <div className="-bottom-40 -left-40 absolute bg-primary/10 blur-3xl rounded-full w-80 h-80 animate-pulse delay-1000" />
          <div className="top-1/2 left-1/2 absolute bg-primary/5 blur-2xl rounded-full w-60 h-60 -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500 transform" />
        </div>
      )}

      {/* Neon background effects */}
      {designStyle === "neon" && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="-top-40 -right-40 absolute bg-primary/20 blur-3xl rounded-full w-80 h-80 animate-pulse" />
          <div className="-bottom-40 -left-40 absolute bg-accent/20 blur-3xl rounded-full w-80 h-80 animate-pulse delay-1000" />
          <div className="top-1/2 left-1/2 absolute bg-primary/10 blur-2xl rounded-full w-60 h-60 -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500 transform" />
        </div>
      )}

      <div className="flex h-screen">
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Main Content */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <DashboardHeader />
          <main className="flex-1 overflow-y-auto">
            <div className="p-6">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
