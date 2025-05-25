import { AdminStatsCards } from "@/components/admin/admin-stats-cards";
import { AdminCharts } from "@/components/admin/admin-charts";
import { AdminRecentActivity } from "@/components/admin/admin-recent-activity";
import { AdminSystemHealth } from "@/components/admin/admin-system-health";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-bold text-gray-900 dark:text-gray-100 text-3xl">
          Admin Dashboard
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Monitor and manage your platform from here
        </p>
      </div>

      {/* Stats Cards */}
      <AdminStatsCards />

      {/* Charts and System Health */}
      <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
        <AdminCharts />
        <AdminSystemHealth />
      </div>

      {/* Recent Activity */}
      <AdminRecentActivity />
    </div>
  );
}
