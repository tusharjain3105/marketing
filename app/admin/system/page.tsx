import { AdminServerStatus } from "@/components/admin/admin-server-status";
import { AdminSystemLogs } from "@/components/admin/admin-system-logs";
import { AdminSystemMetrics } from "@/components/admin/admin-system-metrics";
import { Button } from "@/components/ui/button";
import { RefreshCw, Download, Settings } from "lucide-react";

export default function AdminSystemPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-gray-900 dark:text-gray-100 text-3xl">
            System Health
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Monitor system performance and server health
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <RefreshCw className="mr-2 w-4 h-4" />
            Refresh
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 w-4 h-4" />
            Export Logs
          </Button>
          <Button size="sm">
            <Settings className="mr-2 w-4 h-4" />
            Configure Alerts
          </Button>
        </div>
      </div>

      {/* System Metrics */}
      <AdminSystemMetrics />

      {/* Server Status and Logs */}
      <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
        <AdminServerStatus />
        <AdminSystemLogs />
      </div>
    </div>
  );
}
