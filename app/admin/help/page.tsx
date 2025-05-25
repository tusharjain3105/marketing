import { AdminDocumentation } from "@/components/admin/admin-documentation";
import { AdminHelpCategories } from "@/components/admin/admin-help-categories";
import { AdminSupportTickets } from "@/components/admin/admin-support-tickets";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, MessageCircle } from "lucide-react";

export default function AdminHelpPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-gray-900 dark:text-gray-100 text-3xl">
            Help & Documentation
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Access documentation, guides, and support resources
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <ExternalLink className="mr-2 w-4 h-4" />
            API Docs
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 w-4 h-4" />
            Download Guide
          </Button>
          <Button size="sm">
            <MessageCircle className="mr-2 w-4 h-4" />
            Contact Support
          </Button>
        </div>
      </div>

      {/* Help Categories */}
      <AdminHelpCategories />

      {/* Documentation and Support */}
      <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
        <AdminDocumentation />
        <AdminSupportTickets />
      </div>
    </div>
  );
}
