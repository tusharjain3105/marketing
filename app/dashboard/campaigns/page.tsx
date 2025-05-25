import { Button } from "@/components/ui/button";
import {
  Copy,
  Edit,
  Eye,
  Filter,
  Mail,
  MoreHorizontal,
  Pause,
  Play,
  Plus,
  Search,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function CampaignsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-foreground text-3xl">Campaigns</h1>
          <p className="mt-2 text-foreground-secondary">
            Manage your email marketing campaigns and track their performance.
          </p>
        </div>
        <Button className="glow" asChild>
          <Link href="/dashboard/campaigns/new">
            <Plus className="mr-2 w-4 h-4" />
            New Campaign
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="gap-6 grid grid-cols-1 md:grid-cols-4">
        {campaignStats.map((stat, index) => (
          <div key={index} className="p-6 rounded-xl glass">
            <div className="flex items-center gap-3">
              <div className="flex justify-center items-center bg-primary/10 rounded-lg w-12 h-12">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-foreground-secondary text-sm">
                  {stat.label}
                </p>
                <p className="font-bold text-foreground text-2xl">
                  {stat.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters and Search */}
      <div className="flex items-center gap-4 p-6 rounded-xl glass">
        <div className="relative flex-1">
          <Search className="top-1/2 left-3 absolute w-4 h-4 text-foreground-secondary -translate-y-1/2 transform" />
          <input
            type="text"
            placeholder="Search campaigns..."
            className="bg-background/50 py-2 pr-4 pl-10 border focus:border-primary border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-full text-foreground placeholder-foreground-secondary"
          />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="mr-2 w-4 h-4" />
          Filter
        </Button>
        <select className="bg-background/50 px-3 py-2 border border-border/50 rounded-lg text-foreground">
          <option>All Status</option>
          <option>Active</option>
          <option>Draft</option>
          <option>Completed</option>
          <option>Paused</option>
        </select>
      </div>

      {/* Campaigns List */}
      <div className="space-y-4">
        {campaigns.map((campaign, index) => (
          <div
            key={index}
            className="p-6 rounded-xl transition-all duration-300 glass hover:glow"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="flex justify-center items-center bg-primary/10 rounded-lg w-12 h-12">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {campaign.name}
                  </h3>
                  <p className="text-foreground-secondary text-sm">
                    {campaign.subject}
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        campaign.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : campaign.status === "Draft"
                            ? "bg-gray-100 text-gray-700"
                            : campaign.status === "Completed"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {campaign.status}
                    </span>
                    <span className="text-foreground-secondary text-xs">
                      Created {campaign.created}
                    </span>
                  </div>
                </div>
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

                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    {campaign.status === "Active" ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center p-6 rounded-xl glass">
        <p className="text-foreground-secondary text-sm">
          Showing 1 to 10 of 24 campaigns
        </p>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-primary text-primary-foreground"
          >
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

const campaignStats = [
  {
    label: "Total Campaigns",
    value: "24",
    icon: Mail,
  },
  {
    label: "Active Campaigns",
    value: "8",
    icon: Play,
  },
  {
    label: "Total Sent",
    value: "125K",
    icon: Users,
  },
  {
    label: "Avg. Open Rate",
    value: "24.5%",
    icon: TrendingUp,
  },
];

const campaigns = [
  {
    name: "Summer Sale 2024",
    subject: "🌞 Don't miss our biggest summer sale!",
    status: "Active",
    created: "2 days ago",
    sent: "5,240",
    openRate: 28.5,
    clickRate: 4.2,
  },
  {
    name: "Product Launch Announcement",
    subject: "Introducing our revolutionary new product",
    status: "Completed",
    created: "1 week ago",
    sent: "12,450",
    openRate: 32.1,
    clickRate: 6.8,
  },
  {
    name: "Newsletter #47",
    subject: "Weekly insights and industry updates",
    status: "Active",
    created: "3 days ago",
    sent: "8,920",
    openRate: 19.8,
    clickRate: 2.4,
  },
  {
    name: "Welcome Series - Part 1",
    subject: "Welcome to MarketingPro! Let's get started",
    status: "Active",
    created: "1 week ago",
    sent: "2,150",
    openRate: 45.2,
    clickRate: 12.3,
  },
  {
    name: "Holiday Special Offer",
    subject: "Limited time: 50% off everything!",
    status: "Draft",
    created: "5 days ago",
    sent: "0",
    openRate: 0,
    clickRate: 0,
  },
];
