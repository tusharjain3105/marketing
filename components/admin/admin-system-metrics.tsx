import { Cpu, HardDrive, Activity, Zap } from "lucide-react";

export function AdminSystemMetrics() {
  const metrics = [
    {
      name: "CPU Usage",
      value: "45%",
      status: "healthy",
      icon: Cpu,
    },
    {
      name: "Memory Usage",
      value: "68%",
      status: "warning",
      icon: Activity,
    },
    {
      name: "Disk Space",
      value: "42%",
      status: "healthy",
      icon: HardDrive,
    },
    {
      name: "Network I/O",
      value: "1.2 GB/s",
      status: "healthy",
      icon: Zap,
    },
  ];

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
    <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <div
          key={metric.name}
          className="bg-white dark:bg-gray-800 shadow-sm p-6 border border-gray-200 dark:border-gray-700 rounded-lg"
        >
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <metric.icon className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1 ml-5 w-0">
              <dl>
                <dt className="font-medium text-gray-500 dark:text-gray-400 text-sm truncate">
                  {metric.name}
                </dt>
                <dd className="flex items-baseline">
                  <div className="font-semibold text-gray-900 dark:text-gray-100 text-2xl">
                    {metric.value}
                  </div>
                  <div
                    className={`ml-2 flex items-baseline text-sm font-semibold ${getStatusColor(metric.status)}`}
                  >
                    {metric.status}
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
