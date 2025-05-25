import { Button } from "@/components/ui/button";
import {
  DollarSign,
  Download,
  Eye,
  Filter,
  MousePointer,
  Users,
} from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-foreground text-3xl">
            Analytics & Reports
          </h1>
          <p className="mt-2 text-foreground-secondary">
            Track your marketing performance and gain insights into your
            campaigns.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 w-4 h-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 w-4 h-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {keyMetrics.map((metric, index) => (
          <div key={index} className="p-6 rounded-xl glass">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="flex justify-center items-center bg-primary/10 rounded-lg w-12 h-12">
                  <metric.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-foreground-secondary text-sm">
                    {metric.label}
                  </p>
                  <p className="font-bold text-foreground text-2xl">
                    {metric.value}
                  </p>
                </div>
              </div>
              <div
                className={`text-sm ${metric.change > 0 ? "text-green-500" : "text-red-500"}`}
              >
                {metric.change > 0 ? "+" : ""}
                {metric.change}%
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
        <div className="p-6 rounded-xl glass">
          <h3 className="mb-6 font-semibold text-foreground text-lg">
            Email Performance
          </h3>
          <div className="flex justify-center items-center bg-soft/30 rounded-lg h-64">
            <p className="text-foreground-secondary">
              Chart placeholder - Email performance over time
            </p>
          </div>
        </div>

        <div className="p-6 rounded-xl glass">
          <h3 className="mb-6 font-semibold text-foreground text-lg">
            Audience Growth
          </h3>
          <div className="flex justify-center items-center bg-soft/30 rounded-lg h-64">
            <p className="text-foreground-secondary">
              Chart placeholder - Subscriber growth
            </p>
          </div>
        </div>
      </div>

      {/* Campaign Performance */}
      <div className="p-6 rounded-xl glass">
        <h3 className="mb-6 font-semibold text-foreground text-lg">
          Top Performing Campaigns
        </h3>
        <div className="space-y-4">
          {topCampaigns.map((campaign, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-soft/30 p-4 rounded-lg"
            >
              <div>
                <h4 className="font-medium text-foreground">{campaign.name}</h4>
                <p className="text-foreground-secondary text-sm">
                  {campaign.type}
                </p>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="font-semibold text-foreground">
                    {campaign.sent}
                  </p>
                  <p className="text-foreground-secondary text-xs">Sent</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-foreground">
                    {campaign.openRate}%
                  </p>
                  <p className="text-foreground-secondary text-xs">Open Rate</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-foreground">
                    {campaign.clickRate}%
                  </p>
                  <p className="text-foreground-secondary text-xs">
                    Click Rate
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-foreground">
                    ${campaign.revenue}
                  </p>
                  <p className="text-foreground-secondary text-xs">Revenue</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const keyMetrics = [
  {
    label: "Total Revenue",
    value: "$24,580",
    change: 12.5,
    icon: DollarSign,
  },
  {
    label: "Email Opens",
    value: "45,230",
    change: 8.2,
    icon: Eye,
  },
  {
    label: "Click-through Rate",
    value: "3.8%",
    change: -2.1,
    icon: MousePointer,
  },
  {
    label: "New Subscribers",
    value: "1,234",
    change: 15.7,
    icon: Users,
  },
];

const topCampaigns = [
  {
    name: "Summer Sale 2024",
    type: "Promotional",
    sent: "12,450",
    openRate: 28.5,
    clickRate: 4.2,
    revenue: "8,450",
  },
  {
    name: "Product Launch",
    type: "Announcement",
    sent: "8,920",
    openRate: 32.1,
    clickRate: 6.8,
    revenue: "12,340",
  },
  {
    name: "Newsletter #47",
    type: "Newsletter",
    sent: "15,670",
    openRate: 19.8,
    clickRate: 2.4,
    revenue: "2,180",
  },
];
