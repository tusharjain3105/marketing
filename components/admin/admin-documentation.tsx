import { Book, ExternalLink } from "lucide-react";

export function AdminDocumentation() {
  const docs = [
    {
      title: "Admin Panel Guide",
      description: "Complete guide to using the admin panel",
      url: "#",
    },
    {
      title: "API Reference",
      description: "Full API documentation and examples",
      url: "#",
    },
    {
      title: "Security Guidelines",
      description: "Best practices for platform security",
      url: "#",
    },
    {
      title: "Troubleshooting",
      description: "Common issues and solutions",
      url: "#",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-gray-100 text-lg">
        Documentation
      </h3>
      <div className="space-y-3">
        {docs.map((doc) => (
          <div
            key={doc.title}
            className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <Book className="w-4 h-4 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                  {doc.title}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  {doc.description}
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
}
