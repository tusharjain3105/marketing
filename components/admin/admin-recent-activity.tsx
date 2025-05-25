import {
  User,
  Building,
  CreditCard,
  Mail,
  Shield,
  AlertTriangle,
} from "lucide-react";

export function AdminRecentActivity() {
  const activities = [
    {
      id: 1,
      type: "user_registration",
      message: "New user registered: sarah.johnson@example.com",
      timestamp: "2 minutes ago",
      icon: User,
      iconColor: "text-blue-500",
    },
    {
      id: 2,
      type: "subscription",
      message: "Organization 'TechCorp' upgraded to Pro plan",
      timestamp: "15 minutes ago",
      icon: CreditCard,
      iconColor: "text-green-500",
    },
    {
      id: 3,
      type: "security",
      message: "Failed login attempt detected from IP 192.168.1.100",
      timestamp: "32 minutes ago",
      icon: Shield,
      iconColor: "text-red-500",
    },
    {
      id: 4,
      type: "organization",
      message: "New organization created: 'StartupXYZ'",
      timestamp: "1 hour ago",
      icon: Building,
      iconColor: "text-purple-500",
    },
    {
      id: 5,
      type: "email",
      message: "Bulk email campaign sent to 1,250 subscribers",
      timestamp: "2 hours ago",
      icon: Mail,
      iconColor: "text-indigo-500",
    },
    {
      id: 6,
      type: "system",
      message: "Database backup completed successfully",
      timestamp: "3 hours ago",
      icon: AlertTriangle,
      iconColor: "text-yellow-500",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
          Recent Activity
        </h3>
        <button className="font-medium text-blue-600 hover:text-blue-700 dark:hover:text-blue-300 dark:text-blue-400 text-sm">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-1">
              <activity.icon className={`w-5 h-5 ${activity.iconColor}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-gray-900 dark:text-gray-100 text-sm">
                {activity.message}
              </p>
              <p className="mt-1 text-gray-500 dark:text-gray-400 text-xs">
                {activity.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-gray-200 dark:border-gray-700 border-t">
        <button className="bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg w-full font-medium text-gray-700 dark:text-gray-300 text-sm transition-colors">
          Load More Activities
        </button>
      </div>
    </div>
  );
}
