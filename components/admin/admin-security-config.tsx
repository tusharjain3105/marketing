export function AdminSecurityConfig() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-gray-100 text-lg">
        Security Configuration
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block mb-2 text-gray-700 dark:text-gray-300 text-sm">
            Session Timeout (minutes)
          </label>
          <input
            type="number"
            defaultValue="30"
            className="bg-gray-50 dark:bg-gray-900 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-gray-900 dark:text-gray-100"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-700 dark:text-gray-300 text-sm">
            Max Login Attempts
          </label>
          <input
            type="number"
            defaultValue="5"
            className="bg-gray-50 dark:bg-gray-900 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-gray-900 dark:text-gray-100"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-700 dark:text-gray-300 text-sm">
            Password Min Length
          </label>
          <input
            type="number"
            defaultValue="8"
            className="bg-gray-50 dark:bg-gray-900 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
