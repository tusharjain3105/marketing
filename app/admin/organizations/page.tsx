import { AdminOrganizationsTable } from "@/components/admin/admin-organizations-table";
import { AdminOrganizationsStats } from "@/components/admin/admin-organizations-stats";
import { Button } from "@/components/ui/button";
import { Plus, Download, Filter } from "lucide-react";

export default function AdminOrganizationsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-gray-900 dark:text-gray-100 text-3xl">
            Organization Management
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Manage and monitor all platform organizations
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 w-4 h-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 w-4 h-4" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="mr-2 w-4 h-4" />
            Add Organization
          </Button>
        </div>
      </div>

      {/* Stats */}
      <AdminOrganizationsStats />

      {/* Organizations Table */}
      <AdminOrganizationsTable />
    </div>
  );
}
