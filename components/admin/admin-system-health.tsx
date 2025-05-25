import { CheckCircle, AlertTriangle, XCircle, Activity } from "lucide-react";

export function AdminSystemHealth() {
  const systemMetrics = [
    {
      name: "API Response Time",
      value: "145ms",
      status: "healthy",
      target: "< 200ms",
    },
    {
      name: "Database Connections",
      value: "45/100",
      status: "healthy",
      target: "< 80",
    },
    {
      name: "Memory Usage",
      value: "68%",
      status: "warning",
      target: "< 80%",
    },
    {
      name: "Disk Space",
      value: "42%",
      status: "healthy",
      target: "< 85%",
    },
    {
      name: "Email Queue",
      value: "12",
      status: "healthy",
      target: "< 100",
    },
    {
      name: "Background Jobs",
      value: "3 running",
      status: "healthy",
      target: "Normal",
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
        return <Activity className="w-5 h-5 text-gray-500" />;
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
        System Health
      </h3>

      <div className="space-y-4">
        {systemMetrics.map((metric) => (
          <div key={metric.name} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              {getStatusIcon(metric.status)}
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                  {metric.name}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  Target: {metric.target}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p
                className={`font-semibold text-sm ${getStatusColor(metric.status)}`}
              >
                {metric.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-gray-200 dark:border-gray-700 border-t">
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-900 dark:text-gray-100 text-sm">
            Overall System Status
          </span>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="font-semibold text-green-600 dark:text-green-400 text-sm">
              Operational
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
