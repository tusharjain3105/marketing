import {
  Users,
  Building,
  CreditCard,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

export function AdminStatsCards() {
  const stats = [
    {
      name: "Total Users",
      value: "12,847",
      change: "+12%",
      changeType: "positive",
      icon: Users,
    },
    {
      name: "Organizations",
      value: "1,234",
      change: "+8%",
      changeType: "positive",
      icon: Building,
    },
    {
      name: "Active Subscriptions",
      value: "987",
      change: "+15%",
      changeType: "positive",
      icon: CreditCard,
    },
    {
      name: "Monthly Revenue",
      value: "$45,678",
      change: "+23%",
      changeType: "positive",
      icon: TrendingUp,
    },
    {
      name: "System Uptime",
      value: "99.9%",
      change: "0%",
      changeType: "neutral",
      icon: CheckCircle,
    },
    {
      name: "Open Issues",
      value: "23",
      change: "-5%",
      changeType: "positive",
      icon: AlertTriangle,
    },
  ];

  return (
    <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
                    className={`ml-2 flex items-baseline text-sm font-semibold ${
                      stat.changeType === "positive"
                        ? "text-green-600 dark:text-green-400"
                        : stat.changeType === "negative"
                          ? "text-red-600 dark:text-red-400"
                          : "text-gray-500 dark:text-gray-400"
                    }`}
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
