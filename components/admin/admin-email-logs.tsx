import { CheckCircle, XCircle, Clock, AlertTriangle } from "lucide-react";

export function AdminEmailLogs() {
  const logs = [
    {
      id: 1,
      recipient: "user@example.com",
      subject: "Welcome to our platform",
      status: "delivered",
      timestamp: "2024-03-15 14:30:25",
      campaign: "Welcome Series",
    },
    {
      id: 2,
      recipient: "customer@company.com",
      subject: "Your monthly report",
      status: "bounced",
      timestamp: "2024-03-15 14:28:15",
      campaign: "Monthly Reports",
    },
    {
      id: 3,
      recipient: "lead@startup.com",
      subject: "Special offer just for you",
      status: "pending",
      timestamp: "2024-03-15 14:25:10",
      campaign: "Promotional",
    },
    {
      id: 4,
      recipient: "admin@business.org",
      subject: "Security alert",
      status: "delivered",
      timestamp: "2024-03-15 14:20:05",
      campaign: "Security Alerts",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "bounced":
        return <XCircle className="w-4 h-4 text-red-500" />;
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-500" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "text-green-600 dark:text-green-400";
      case "bounced":
        return "text-red-600 dark:text-red-400";
      case "pending":
        return "text-yellow-600 dark:text-yellow-400";
      default:
        return "text-gray-600 dark:text-gray-400";
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-gray-100 text-lg">
        Email Delivery Logs
      </h3>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {logs.map((log) => (
          <div
            key={log.id}
            className="flex items-start gap-3 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg"
          >
            <div className="flex-shrink-0 mt-0.5">
              {getStatusIcon(log.status)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                {log.subject}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                To: {log.recipient}
              </p>
              <div className="flex justify-between items-center mt-1">
                <span className="text-gray-500 dark:text-gray-400 text-xs">
                  {log.campaign}
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-xs">
                  {log.timestamp}
                </span>
              </div>
            </div>
            <span
              className={`text-xs font-medium ${getStatusColor(log.status)}`}
            >
              {log.status}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-gray-200 dark:border-gray-700 border-t">
        <button className="font-medium text-blue-600 dark:text-blue-400 text-sm hover:underline">
          View All Email Logs
        </button>
      </div>
    </div>
  );
}
