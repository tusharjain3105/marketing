import { Users, Mail, BarChart3, CreditCard } from "lucide-react";

export function ClientAdminStats() {
  const stats = [
    {
      name: "Team Members",
      value: "12",
      change: "+2",
      changeType: "positive",
      icon: Users,
    },
    {
      name: "Active Campaigns",
      value: "8",
      change: "+3",
      changeType: "positive",
      icon: Mail,
    },
    {
      name: "Monthly Leads",
      value: "1,234",
      change: "+15%",
      changeType: "positive",
      icon: BarChart3,
    },
    {
      name: "Current Plan",
      value: "Pro",
      change: "Active",
      changeType: "neutral",
      icon: CreditCard,
    },
  ];

  return (
    <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="p-6 border border-border/50 rounded-lg glass-strong"
        >
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <stat.icon className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1 ml-5 w-0">
              <dl>
                <dt className="font-medium text-foreground-secondary text-sm truncate">
                  {stat.name}
                </dt>
                <dd className="flex items-baseline">
                  <div className="font-semibold text-foreground text-2xl">
                    {stat.value}
                  </div>
                  <div
                    className={`ml-2 flex items-baseline text-sm font-semibold ${
                      stat.changeType === "positive"
                        ? "text-green-600 dark:text-green-400"
                        : stat.changeType === "negative"
                          ? "text-red-600 dark:text-red-400"
                          : "text-foreground-secondary"
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
