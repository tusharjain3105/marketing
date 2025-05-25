export function AdminSecuritySettings() {
  const settings = [
    {
      name: "Two-Factor Authentication",
      enabled: true,
      description: "Require 2FA for admin accounts",
    },
    {
      name: "Password Policy",
      enabled: true,
      description: "Enforce strong password requirements",
    },
    {
      name: "Session Timeout",
      enabled: false,
      description: "Auto-logout after inactivity",
    },
    {
      name: "IP Whitelist",
      enabled: false,
      description: "Restrict access by IP address",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-gray-100 text-lg">
        Security Settings
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
    </div>
  );
}
