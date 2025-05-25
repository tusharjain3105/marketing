export function AdminCharts() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-gray-100 text-lg">
        Platform Analytics
      </h3>

      {/* User Growth Chart Placeholder */}
      <div className="space-y-4">
        <div>
          <h4 className="mb-2 font-medium text-gray-700 dark:text-gray-300 text-sm">
            User Growth (Last 30 Days)
          </h4>
          <div className="flex justify-center items-center bg-gray-50 dark:bg-gray-700 rounded-lg h-48">
            <div className="text-center">
              <div className="flex justify-center items-center bg-blue-100 dark:bg-blue-900/30 mx-auto mb-2 rounded-full w-12 h-12">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Chart visualization will be implemented here
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="mb-2 font-medium text-gray-700 dark:text-gray-300 text-sm">
            Revenue Trends
          </h4>
          <div className="flex justify-center items-center bg-gray-50 dark:bg-gray-700 rounded-lg h-48">
            <div className="text-center">
              <div className="flex justify-center items-center bg-green-100 dark:bg-green-900/30 mx-auto mb-2 rounded-full w-12 h-12">
                <svg
                  className="w-6 h-6 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Revenue chart will be implemented here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
