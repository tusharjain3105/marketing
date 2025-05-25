import { AdminDatabaseBackups } from "@/components/admin/admin-database-backups";
import { AdminDatabaseStats } from "@/components/admin/admin-database-stats";
import { AdminDatabaseTables } from "@/components/admin/admin-database-tables";
import { Button } from "@/components/ui/button";
import { Download, HardDrive, RefreshCw } from "lucide-react";

export default function AdminDatabasePage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-gray-900 dark:text-gray-100 text-3xl">
            Database Management
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Monitor database performance, manage tables, and handle backups
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <RefreshCw className="mr-2 w-4 h-4" />
            Refresh
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 w-4 h-4" />
            Export Schema
          </Button>
          <Button size="sm">
            <HardDrive className="mr-2 w-4 h-4" />
            Create Backup
          </Button>
        </div>
      </div>

      {/* Database Stats */}
      <AdminDatabaseStats />

      {/* Database Tables and Backups */}
      <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
        <AdminDatabaseTables />
        <AdminDatabaseBackups />
      </div>
    </div>
  );
}
