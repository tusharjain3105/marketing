export function AdminAnalyticsCharts() {
  return (
    <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
      {/* User Growth Chart */}
      <div className="bg-white dark:bg-gray-800 shadow-sm p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-gray-100 text-lg">
          User Growth
        </h3>
        <div className="flex justify-center items-center bg-gray-50 dark:bg-gray-900 rounded-lg h-64">
          <p className="text-gray-500 dark:text-gray-400">
            User Growth Chart Placeholder
          </p>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white dark:bg-gray-800 shadow-sm p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-gray-100 text-lg">
          Revenue Trends
        </h3>
        <div className="flex justify-center items-center bg-gray-50 dark:bg-gray-900 rounded-lg h-64">
          <p className="text-gray-500 dark:text-gray-400">
            Revenue Chart Placeholder
          </p>
        </div>
      </div>

      {/* Campaign Performance */}
      <div className="bg-white dark:bg-gray-800 shadow-sm p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-gray-100 text-lg">
          Campaign Performance
        </h3>
        <div className="flex justify-center items-center bg-gray-50 dark:bg-gray-900 rounded-lg h-64">
          <p className="text-gray-500 dark:text-gray-400">
            Campaign Performance Chart Placeholder
          </p>
        </div>
      </div>

      {/* Geographic Distribution */}
      <div className="bg-white dark:bg-gray-800 shadow-sm p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-gray-100 text-lg">
          Geographic Distribution
        </h3>
        <div className="flex justify-center items-center bg-gray-50 dark:bg-gray-900 rounded-lg h-64">
          <p className="text-gray-500 dark:text-gray-400">
            Geographic Chart Placeholder
          </p>
        </div>
      </div>
    </div>
  );
}
