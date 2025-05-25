import { Globe, Zap, Database, Mail } from "lucide-react";

export function AdminIntegrations() {
  const integrations = [
    { name: "Stripe", status: "connected", icon: Zap },
    { name: "SendGrid", status: "connected", icon: Mail },
    { name: "Analytics", status: "disconnected", icon: Database },
    { name: "Webhooks", status: "connected", icon: Globe },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-gray-100 text-lg">
        Integrations
      </h3>
      <div className="space-y-3">
        {integrations.map((integration) => (
          <div
            key={integration.name}
            className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <integration.icon className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                {integration.name}
              </span>
            </div>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${integration.status === "connected" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"}`}
            >
              {integration.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
