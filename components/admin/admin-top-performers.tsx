import { Mail, TrendingUp, Trophy } from "lucide-react";

export function AdminTopPerformers() {
  const topOrganizations = [
    { name: "TechCorp Inc.", revenue: "$24,500", growth: "+35%" },
    { name: "StartupXYZ", revenue: "$18,200", growth: "+28%" },
    { name: "BigCorp Ltd.", revenue: "$15,800", growth: "+22%" },
    { name: "Creative Agency", revenue: "$12,400", growth: "+18%" },
  ];

  const topCampaigns = [
    { name: "Summer Sale 2024", opens: "89.5%", clicks: "12.3%" },
    { name: "Product Launch", opens: "85.2%", clicks: "10.8%" },
    { name: "Newsletter Weekly", opens: "78.9%", clicks: "8.5%" },
    { name: "Black Friday", opens: "76.4%", clicks: "7.9%" },
  ];

  return (
    <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
      {/* Top Organizations */}
      <div className="bg-white dark:bg-gray-800 shadow-sm p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="w-5 h-5 text-yellow-600" />
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
            Top Organizations
          </h3>
        </div>
        <div className="space-y-3">
          {topOrganizations.map((org, index) => (
            <div key={org.name} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="flex justify-center items-center bg-blue-100 dark:bg-blue-900/30 rounded-full w-8 h-8">
                  <span className="font-semibold text-blue-600 dark:text-blue-400 text-sm">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                    {org.name}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">
                    Monthly Revenue: {org.revenue}
                  </p>
                </div>
              </div>
              <span className="font-semibold text-green-600 dark:text-green-400 text-sm">
                {org.growth}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Top Campaigns */}
      <div className="bg-white dark:bg-gray-800 shadow-sm p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
        <div className="flex items-center gap-2 mb-4">
          <Mail className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
            Top Campaigns
          </h3>
        </div>
        <div className="space-y-3">
          {topCampaigns.map((campaign, index) => (
            <div
              key={campaign.name}
              className="flex justify-between items-center"
            >
              <div className="flex items-center gap-3">
                <div className="flex justify-center items-center bg-green-100 dark:bg-green-900/30 rounded-full w-8 h-8">
                  <span className="font-semibold text-green-600 dark:text-green-400 text-sm">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                    {campaign.name}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">
                    Opens: {campaign.opens} • Clicks: {campaign.clicks}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Metrics */}
      <div className="lg:col-span-2 bg-white dark:bg-gray-800 shadow-sm p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-purple-600" />
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
            Platform Performance
          </h3>
        </div>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-4">
          <div className="text-center">
            <div className="font-bold text-gray-900 dark:text-gray-100 text-2xl">
              98.9%
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              Uptime
            </div>
          </div>
          <div className="text-center">
            <div className="font-bold text-gray-900 dark:text-gray-100 text-2xl">
              1.2s
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              Avg Response Time
            </div>
          </div>
          <div className="text-center">
            <div className="font-bold text-gray-900 dark:text-gray-100 text-2xl">
              99.2%
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              Email Delivery Rate
            </div>
          </div>
          <div className="text-center">
            <div className="font-bold text-gray-900 dark:text-gray-100 text-2xl">
              4.8/5
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              Customer Satisfaction
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
