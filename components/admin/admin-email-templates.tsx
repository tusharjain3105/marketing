import { Mail, Edit, Trash2 } from "lucide-react";

export function AdminEmailTemplates() {
  const templates = [
    { id: 1, name: "Welcome Email", usage: 245, lastModified: "2 days ago" },
    { id: 2, name: "Password Reset", usage: 89, lastModified: "1 week ago" },
    { id: 3, name: "Newsletter", usage: 156, lastModified: "3 days ago" },
    { id: 4, name: "Promotional", usage: 78, lastModified: "5 days ago" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-gray-100 text-lg">
        Email Templates
      </h3>
      <div className="space-y-3">
        {templates.map((template) => (
          <div
            key={template.id}
            className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                  {template.name}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  Used {template.usage} times
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-gray-400 hover:text-blue-600">
                <Edit className="w-4 h-4" />
              </button>
              <button className="text-gray-400 hover:text-red-600">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
