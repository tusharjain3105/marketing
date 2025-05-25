import { AdminEmailLogs } from "@/components/admin/admin-email-logs";
import { AdminEmailStats } from "@/components/admin/admin-email-stats";
import { AdminEmailTemplates } from "@/components/admin/admin-email-templates";
import { Button } from "@/components/ui/button";
import { Download, Filter, Send } from "lucide-react";

export default function AdminEmailsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-gray-900 dark:text-gray-100 text-3xl">
            Email Management
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Monitor email delivery, logs, and manage templates
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 w-4 h-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 w-4 h-4" />
            Export Logs
          </Button>
          <Button size="sm">
            <Send className="mr-2 w-4 h-4" />
            Test Email
          </Button>
        </div>
      </div>

      {/* Email Stats */}
      <AdminEmailStats />

      {/* Email Logs and Templates */}
      <div className="gap-6 grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <AdminEmailLogs />
        </div>
        <div>
          <AdminEmailTemplates />
        </div>
      </div>
    </div>
  );
}
