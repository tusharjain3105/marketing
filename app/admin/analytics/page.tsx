import { AdminAnalyticsStats } from "@/components/admin/admin-analytics-stats";
import { AdminAnalyticsCharts } from "@/components/admin/admin-analytics-charts";
import { AdminTopPerformers } from "@/components/admin/admin-top-performers";
import { Button } from "@/components/ui/button";
import { Download, Calendar, Filter } from "lucide-react";

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-gray-900 dark:text-gray-100 text-3xl">
            Platform Analytics
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Comprehensive analytics and insights across the platform
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 w-4 h-4" />
            Last 30 Days
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 w-4 h-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 w-4 h-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Stats */}
      <AdminAnalyticsStats />

      {/* Charts */}
      <AdminAnalyticsCharts />

      {/* Top Performers */}
      <AdminTopPerformers />
    </div>
  );
}
