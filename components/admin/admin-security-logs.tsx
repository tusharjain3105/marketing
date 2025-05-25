import { AlertTriangle, Eye, Shield } from "lucide-react";

export function AdminSecurityLogs() {
  const logs = [
    {
      id: 1,
      event: "Failed login attempt",
      severity: "warning",
      ip: "192.168.1.100",
      timestamp: "2024-03-15 14:30:25",
    },
    {
      id: 2,
      event: "Successful admin login",
      severity: "info",
      ip: "10.0.0.1",
      timestamp: "2024-03-15 14:25:10",
    },
    {
      id: 3,
      event: "Password reset requested",
      severity: "info",
      ip: "203.0.113.1",
      timestamp: "2024-03-15 14:20:05",
    },
    {
      id: 4,
      event: "Suspicious activity detected",
      severity: "high",
      ip: "198.51.100.1",
      timestamp: "2024-03-15 14:15:00",
    },
  ];

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "high":
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case "warning":
        return <Shield className="w-4 h-4 text-yellow-500" />;
      default:
        return <Eye className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-gray-100 text-lg">
        Security Events
      </h3>
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {logs.map((log) => (
          <div
            key={log.id}
            className="flex items-start gap-3 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg"
          >
            <div className="flex-shrink-0 mt-0.5">
              {getSeverityIcon(log.severity)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                {log.event}
              </p>
              <div className="flex justify-between items-center mt-1">
                <span className="text-gray-500 dark:text-gray-400 text-xs">
                  IP: {log.ip}
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-xs">
                  {log.timestamp}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
