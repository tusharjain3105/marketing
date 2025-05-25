import { CheckCircle, AlertTriangle, XCircle, Server } from "lucide-react";

export function AdminServerStatus() {
  const servers = [
    {
      name: "Web Server 1",
      status: "healthy",
      uptime: "99.9%",
      load: "45%",
      location: "US-East",
    },
    {
      name: "Web Server 2",
      status: "healthy",
      uptime: "99.8%",
      load: "52%",
      location: "US-West",
    },
    {
      name: "Database Server",
      status: "warning",
      uptime: "99.5%",
      load: "78%",
      location: "EU-Central",
    },
    {
      name: "Email Server",
      status: "healthy",
      uptime: "100%",
      load: "23%",
      location: "US-East",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "healthy":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case "error":
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Server className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "healthy":
        return "text-green-600 dark:text-green-400";
      case "warning":
        return "text-yellow-600 dark:text-yellow-400";
      case "error":
        return "text-red-600 dark:text-red-400";
      default:
        return "text-gray-600 dark:text-gray-400";
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-gray-100 text-lg">
        Server Status
      </h3>

      <div className="space-y-4">
        {servers.map((server) => (
          <div key={server.name} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              {getStatusIcon(server.status)}
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                  {server.name}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  {server.location} • Load: {server.load}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p
                className={`font-semibold text-sm ${getStatusColor(server.status)}`}
              >
                {server.uptime}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">Uptime</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-gray-200 dark:border-gray-700 border-t">
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-900 dark:text-gray-100 text-sm">
            Overall Status
          </span>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="font-semibold text-green-600 dark:text-green-400 text-sm">
              All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
