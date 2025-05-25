import { Table, BarChart3, Users, Mail } from "lucide-react";

export function AdminDatabaseTables() {
  const tables = [
    { name: "users", records: "12,847", size: "2.4 GB", icon: Users },
    { name: "campaigns", records: "3,456", size: "890 MB", icon: Mail },
    { name: "analytics", records: "45,230", size: "12.1 GB", icon: BarChart3 },
    { name: "sessions", records: "8,920", size: "1.2 GB", icon: Table },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-gray-100 text-lg">
        Database Tables
      </h3>
      <div className="space-y-3">
        {tables.map((table) => (
          <div
            key={table.name}
            className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <table.icon className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                  {table.name}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  {table.records} records
                </p>
              </div>
            </div>
            <span className="font-medium text-gray-600 dark:text-gray-300 text-sm">
              {table.size}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
