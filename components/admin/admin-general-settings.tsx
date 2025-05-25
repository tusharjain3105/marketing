export function AdminGeneralSettings() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-gray-100 text-lg">
        General Settings
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block mb-2 text-gray-700 dark:text-gray-300 text-sm">
            Platform Name
          </label>
          <input
            type="text"
            defaultValue="Marketing SaaS"
            className="bg-gray-50 dark:bg-gray-900 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-gray-900 dark:text-gray-100"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-700 dark:text-gray-300 text-sm">
            Support Email
          </label>
          <input
            type="email"
            defaultValue="support@platform.com"
            className="bg-gray-50 dark:bg-gray-900 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-gray-900 dark:text-gray-100"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-700 dark:text-gray-300 text-sm">
            Max Users Per Organization
          </label>
          <input
            type="number"
            defaultValue="100"
            className="bg-gray-50 dark:bg-gray-900 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
