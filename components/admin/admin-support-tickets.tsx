import { MessageCircle, Clock, CheckCircle, AlertTriangle } from "lucide-react";

export function AdminSupportTickets() {
  const tickets = [
    {
      id: 1,
      title: "Email delivery issues",
      status: "open",
      priority: "high",
      created: "2 hours ago",
    },
    {
      id: 2,
      title: "Database performance",
      status: "in-progress",
      priority: "medium",
      created: "1 day ago",
    },
    {
      id: 3,
      title: "User login problems",
      status: "resolved",
      priority: "low",
      created: "3 days ago",
    },
    {
      id: 4,
      title: "API rate limiting",
      status: "open",
      priority: "medium",
      created: "5 hours ago",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "resolved":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "in-progress":
        return <Clock className="w-4 h-4 text-yellow-500" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-600 dark:text-red-400";
      case "medium":
        return "text-yellow-600 dark:text-yellow-400";
      default:
        return "text-green-600 dark:text-green-400";
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-gray-100 text-lg">
        Support Tickets
      </h3>
      <div className="space-y-3">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg"
          >
            <div className="flex items-center gap-3">
              {getStatusIcon(ticket.status)}
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                  {ticket.title}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span
                    className={`text-xs font-medium ${getPriorityColor(ticket.priority)}`}
                  >
                    {ticket.priority}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs">
                    • {ticket.created}
                  </span>
                </div>
              </div>
            </div>
            <MessageCircle className="w-4 h-4 text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
}
