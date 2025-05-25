import { AdminEmailSettings } from "@/components/admin/admin-email-settings";
import { AdminGeneralSettings } from "@/components/admin/admin-general-settings";
import { AdminIntegrations } from "@/components/admin/admin-integrations";
import { AdminSecurityConfig } from "@/components/admin/admin-security-config";
import { Button } from "@/components/ui/button";
import { RefreshCw, Save } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-gray-900 dark:text-gray-100 text-3xl">
            Platform Settings
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Configure platform settings, integrations, and preferences
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <RefreshCw className="mr-2 w-4 h-4" />
            Reset to Defaults
          </Button>
          <Button size="sm">
            <Save className="mr-2 w-4 h-4" />
            Save Changes
          </Button>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
        <AdminGeneralSettings />
        <AdminEmailSettings />
        <AdminSecurityConfig />
        <AdminIntegrations />
      </div>
    </div>
  );
}
