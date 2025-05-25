import { Database, HardDrive, Activity, Zap } from "lucide-react";

export function AdminDatabaseStats() {
  const stats = [
    {
      name: "Total Records",
      value: "2.4M",
      change: "+12%",
      changeType: "positive",
      icon: Database,
    },
    {
      name: "Storage Used",
      value: "45.2 GB",
      change: "+8%",
      changeType: "positive",
      icon: HardDrive,
    },
    {
      name: "Query Performance",
      value: "1.2ms",
      change: "-15%",
      changeType: "positive",
      icon: Activity,
    },
    {
      name: "Connections",
      value: "45/100",
      change: "+5%",
      changeType: "positive",
      icon: Zap,
    },
  ];

  return (
    <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="bg-white dark:bg-gray-800 shadow-sm p-6 border border-gray-200 dark:border-gray-700 rounded-lg"
        >
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <stat.icon className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1 ml-5 w-0">
              <dl>
                <dt className="font-medium text-gray-500 dark:text-gray-400 text-sm truncate">
                  {stat.name}
                </dt>
                <dd className="flex items-baseline">
                  <div className="font-semibold text-gray-900 dark:text-gray-100 text-2xl">
                    {stat.value}
                  </div>
                  <div
                    className={`ml-2 flex items-baseline text-sm font-semibold ${stat.changeType === "positive" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
                  >
                    {stat.change}
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
