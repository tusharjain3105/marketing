import { MessageCircle, Users, Clock, TrendingUp } from "lucide-react";

export function ChatbotAnalytics() {
  const metrics = [
    {
      label: "Total Conversations",
      value: "1,234",
      change: 15,
      icon: MessageCircle,
    },
    { label: "Unique Visitors", value: "892", change: 8, icon: Users },
    { label: "Avg Response Time", value: "2.3s", change: -12, icon: Clock },
    { label: "Resolution Rate", value: "87%", change: 5, icon: TrendingUp },
  ];

  return (
    <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="p-6 border border-border/50 rounded-lg glass-strong"
        >
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <metric.icon className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1 ml-5 w-0">
              <dl>
                <dt className="font-medium text-foreground-secondary text-sm truncate">
                  {metric.label}
                </dt>
                <dd className="flex items-baseline">
                  <div className="font-semibold text-foreground text-2xl">
                    {metric.value}
                  </div>
                  <div
                    className={`ml-2 flex items-baseline text-sm font-semibold ${metric.change >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
                  >
                    {metric.change >= 0 ? "+" : ""}
                    {metric.change}%
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
