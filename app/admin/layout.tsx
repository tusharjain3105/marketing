"use client";

import { AdminHeader } from "@/components/admin/admin-header";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { useDesignStyle } from "@/providers/design-style-provider";

export default function AdminLayout({
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
        return "admin-layout bg-gray-50 dark:bg-gray-900";
    }
  };

  return (
    <div className={`${getLayoutClass()} min-h-screen`}>
      <div className="flex h-screen">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main Content */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <AdminHeader />
          <main className="flex-1 bg-gray-50 dark:bg-gray-900 overflow-y-auto">
            <div className="p-6">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
