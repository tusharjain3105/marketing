import { ClientAdminStats } from "@/components/dashboard/client-admin-stats";
import { ClientBillingOverview } from "@/components/dashboard/client-billing-overview";
import { ClientOrganizationSettings } from "@/components/dashboard/client-organization-settings";
import { ClientUserManagement } from "@/components/dashboard/client-user-management";
import { Button } from "@/components/ui/button";
import { CreditCard, Plus, Settings } from "lucide-react";

export default function ClientAdminPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-foreground text-3xl">
            Organization Admin
          </h1>
          <p className="mt-2 text-foreground-secondary">
            Manage your organization, users, and billing settings
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Settings className="mr-2 w-4 h-4" />
            Settings
          </Button>
          <Button variant="outline" size="sm">
            <CreditCard className="mr-2 w-4 h-4" />
            Billing
          </Button>
          <Button size="sm" className="glow">
            <Plus className="mr-2 w-4 h-4" />
            Invite User
          </Button>
        </div>
      </div>

      {/* Stats */}
      <ClientAdminStats />

      {/* Management Sections */}
      <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
        <ClientUserManagement />
        <ClientBillingOverview />
      </div>

      {/* Organization Settings */}
      <ClientOrganizationSettings />
    </div>
  );
}
