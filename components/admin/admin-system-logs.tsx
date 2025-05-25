import { AlertTriangle, Info, CheckCircle, XCircle } from "lucide-react";

export function AdminSystemLogs() {
  const logs = [
    {
      id: 1,
      level: "info",
      message: "User authentication successful",
      timestamp: "2024-03-15 14:30:25",
      source: "auth-service",
    },
    {
      id: 2,
      level: "warning",
      message: "High memory usage detected on server-2",
      timestamp: "2024-03-15 14:28:15",
      source: "monitoring",
    },
    {
      id: 3,
      level: "error",
      message: "Database connection timeout",
      timestamp: "2024-03-15 14:25:10",
      source: "database",
    },
    {
      id: 4,
      level: "info",
      message: "Email campaign sent successfully",
      timestamp: "2024-03-15 14:20:05",
      source: "email-service",
    },
    {
      id: 5,
      level: "success",
      message: "Backup completed successfully",
      timestamp: "2024-03-15 14:15:00",
      source: "backup-service",
    },
  ];

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "error":
        return <XCircle className="w-4 h-4 text-red-500" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case "success":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "info":
      default:
        return <Info className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-gray-100 text-lg">
        System Logs
      </h3>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {logs.map((log) => (
          <div
            key={log.id}
            className="flex items-start gap-3 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg"
          >
            <div className="flex-shrink-0 mt-0.5">
              {getLevelIcon(log.level)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                {log.message}
              </p>
              <div className="flex justify-between items-center mt-1">
                <span className="text-gray-500 dark:text-gray-400 text-xs">
                  {log.source}
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-xs">
                  {log.timestamp}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-gray-200 dark:border-gray-700 border-t">
        <div className="flex justify-between items-center">
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Showing latest 5 entries
          </span>
          <button className="font-medium text-blue-600 dark:text-blue-400 text-sm hover:underline">
            View All Logs
          </button>
        </div>
      </div>
    </div>
  );
}
