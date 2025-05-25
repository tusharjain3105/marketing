import { HardDrive, CheckCircle, Clock } from "lucide-react";

export function AdminDatabaseBackups() {
  const backups = [
    {
      id: 1,
      name: "Daily Backup",
      date: "2024-03-15",
      size: "45.2 GB",
      status: "completed",
    },
    {
      id: 2,
      name: "Weekly Backup",
      date: "2024-03-14",
      size: "44.8 GB",
      status: "completed",
    },
    {
      id: 3,
      name: "Monthly Backup",
      date: "2024-03-01",
      size: "42.1 GB",
      status: "completed",
    },
    {
      id: 4,
      name: "Auto Backup",
      date: "2024-03-15",
      size: "45.2 GB",
      status: "in-progress",
    },
  ];

  const getStatusIcon = (status: string) => {
    return status === "completed" ? (
      <CheckCircle className="w-4 h-4 text-green-500" />
    ) : (
      <Clock className="w-4 h-4 text-yellow-500" />
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-gray-100 text-lg">
        Recent Backups
      </h3>
      <div className="space-y-3">
        {backups.map((backup) => (
          <div
            key={backup.id}
            className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <HardDrive className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                  {backup.name}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  {backup.date} • {backup.size}
                </p>
              </div>
            </div>
            {getStatusIcon(backup.status)}
          </div>
        ))}
      </div>
    </div>
  );
}
