import { AdminSecurityLogs } from "@/components/admin/admin-security-logs";
import { AdminSecuritySettings } from "@/components/admin/admin-security-settings";
import { AdminSecurityStats } from "@/components/admin/admin-security-stats";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Download, Filter } from "lucide-react";

export default function AdminSecurityPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-gray-900 dark:text-gray-100 text-3xl">
            Security Management
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Monitor security events, threats, and manage security settings
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 w-4 h-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 w-4 h-4" />
            Export Report
          </Button>
          <Button size="sm" variant="destructive">
            <AlertTriangle className="mr-2 w-4 h-4" />
            Security Scan
          </Button>
        </div>
      </div>

      {/* Security Stats */}
      <AdminSecurityStats />

      {/* Security Logs and Settings */}
      <div className="gap-6 grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <AdminSecurityLogs />
        </div>
        <div>
          <AdminSecuritySettings />
        </div>
      </div>
    </div>
  );
}
