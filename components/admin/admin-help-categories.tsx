import { Book, Code, Shield, Database } from "lucide-react";

export function AdminHelpCategories() {
  const categories = [
    {
      title: "Getting Started",
      icon: Book,
      articles: 12,
      description: "Basic setup and configuration",
    },
    {
      title: "API Documentation",
      icon: Code,
      articles: 25,
      description: "Developer resources and guides",
    },
    {
      title: "Security",
      icon: Shield,
      articles: 8,
      description: "Security best practices",
    },
    {
      title: "Database",
      icon: Database,
      articles: 15,
      description: "Database management guides",
    },
  ];

  return (
    <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {categories.map((category) => (
        <div
          key={category.title}
          className="bg-white dark:bg-gray-800 shadow-sm p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
        >
          <category.icon className="mb-3 w-8 h-8 text-blue-600" />
          <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
            {category.title}
          </h3>
          <p className="mb-3 text-gray-600 dark:text-gray-400 text-sm">
            {category.description}
          </p>
          <span className="text-blue-600 dark:text-blue-400 text-sm">
            {category.articles} articles
          </span>
        </div>
      ))}
    </div>
  );
}
