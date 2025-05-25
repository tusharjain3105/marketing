export function AdminChatSettings() {
  const settings = [
    {
      name: "Auto Response",
      enabled: true,
      description: "Enable automatic bot responses",
    },
    {
      name: "Human Handoff",
      enabled: true,
      description: "Transfer complex queries to humans",
    },
    {
      name: "File Uploads",
      enabled: true,
      description: "Allow users to upload files",
    },
    {
      name: "Analytics Tracking",
      enabled: false,
      description: "Track conversation analytics",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-gray-100 text-lg">
        Bot Settings
      </h3>

      <div className="space-y-4">
        {settings.map((setting) => (
          <div
            key={setting.name}
            className="flex justify-between items-center bg-gray-50 dark:bg-gray-900 p-3 rounded-lg"
          >
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                {setting.name}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                {setting.description}
              </p>
            </div>
            <div
              className={`w-12 h-6 rounded-full ${setting.enabled ? "bg-blue-600" : "bg-gray-300"} relative cursor-pointer`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${setting.enabled ? "translate-x-6" : "translate-x-0.5"}`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-3 mt-6">
        <div>
          <label className="block mb-2 text-gray-700 dark:text-gray-300 text-sm">
            Response Delay (seconds)
          </label>
          <input
            type="number"
            defaultValue="2"
            className="bg-gray-50 dark:bg-gray-900 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-gray-900 dark:text-gray-100"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-700 dark:text-gray-300 text-sm">
            Max File Size (MB)
          </label>
          <input
            type="number"
            defaultValue="10"
            className="bg-gray-50 dark:bg-gray-900 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
