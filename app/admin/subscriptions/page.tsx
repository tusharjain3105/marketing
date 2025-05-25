import { AdminSubscriptionsTable } from "@/components/admin/admin-subscriptions-table";
import { AdminSubscriptionsStats } from "@/components/admin/admin-subscriptions-stats";
import { Button } from "@/components/ui/button";
import { Plus, Download, Filter } from "lucide-react";

export default function AdminSubscriptionsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-gray-900 dark:text-gray-100 text-3xl">
            Subscription Management
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Manage and monitor all platform subscriptions and billing
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
            Manual Subscription
          </Button>
        </div>
      </div>

      {/* Stats */}
      <AdminSubscriptionsStats />

      {/* Subscriptions Table */}
      <AdminSubscriptionsTable />
    </div>
  );
}
