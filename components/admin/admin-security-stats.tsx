import { Shield, AlertTriangle, Lock, Eye } from "lucide-react";

export function AdminSecurityStats() {
  const stats = [
    {
      name: "Security Incidents",
      value: "3",
      change: "-50%",
      changeType: "positive",
      icon: AlertTriangle,
    },
    {
      name: "Failed Logins",
      value: "127",
      change: "+12%",
      changeType: "negative",
      icon: Lock,
    },
    {
      name: "Active Sessions",
      value: "1,234",
      change: "+8%",
      changeType: "positive",
      icon: Eye,
    },
    {
      name: "Security Score",
      value: "98%",
      change: "+2%",
      changeType: "positive",
      icon: Shield,
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
