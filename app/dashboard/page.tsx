import { Button } from "@/components/ui/button";
import { DesignStyleIndicator } from "@/components/ui/design-style-indicator";
import { DesignStyleShowcase } from "@/components/ui/design-style-showcase";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Calendar,
  DollarSign,
  Download,
  Eye,
  Filter,
  Mail,
  Plus,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <DesignStyleIndicator />
      {/* Welcome Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-foreground text-3xl">
            Welcome back, John! 👋
          </h1>
          <p className="mt-2 text-foreground-secondary">
            Here's what's happening with your marketing campaigns today.
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
          <Button className="glow">
            <Plus className="mr-2 w-4 h-4" />
            New Campaign
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="p-6 rounded-xl transition-all duration-300 glass hover:glow"
          >
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
                className={`flex items-center gap-1 text-sm ${
                  metric.change > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {metric.change > 0 ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
                {Math.abs(metric.change)}%
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Analytics */}
      <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
        {/* Campaign Performance */}
        <div className="p-6 rounded-xl glass">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-foreground text-lg">
              Campaign Performance
            </h3>
            <Button variant="ghost" size="sm">
              <BarChart3 className="mr-2 w-4 h-4" />
              View Details
            </Button>
          </div>
          <div className="space-y-4">
            {campaigns.map((campaign, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-soft/30 p-4 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 rounded-full w-3 h-3" />
                  <div>
                    <p className="font-medium text-foreground">
                      {campaign.name}
                    </p>
                    <p className="text-foreground-secondary text-sm">
                      {campaign.type}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-foreground">
                    {campaign.openRate}%
                  </p>
                  <p className="text-foreground-secondary text-sm">Open Rate</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="p-6 rounded-xl glass">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-foreground text-lg">
              Recent Activity
            </h3>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex flex-shrink-0 justify-center items-center bg-primary/10 rounded-full w-8 h-8">
                  <activity.icon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-foreground text-sm">
                    {activity.description}
                  </p>
                  <p className="mt-1 text-foreground-secondary text-xs">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {quickActions.map((action, index) => (
          <Link key={index} href={action.href}>
            <div className="group p-6 rounded-xl transition-all duration-300 cursor-pointer glass hover:glow">
              <div className="flex items-center gap-4">
                <div className="flex justify-center items-center bg-primary/10 group-hover:bg-primary/20 rounded-lg w-12 h-12 transition-colors">
                  <action.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {action.title}
                  </h4>
                  <p className="text-foreground-secondary text-sm">
                    {action.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Upcoming Events */}
      <div className="p-6 rounded-xl glass">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-foreground text-lg">
            Upcoming Events
          </h3>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard/calendar">
              <Calendar className="mr-2 w-4 h-4" />
              View Calendar
            </Link>
          </Button>
        </div>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-soft/30 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/20 rounded-full w-2 h-2" />
                <p className="font-medium text-foreground">{event.title}</p>
              </div>
              <p className="mb-1 text-foreground-secondary text-sm">
                {event.description}
              </p>
              <p className="text-foreground-secondary text-xs">{event.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Design Style Showcase */}
      <DesignStyleShowcase />
    </div>
  );
}

const metrics = [
  {
    label: "Total Campaigns",
    value: "24",
    change: 12,
    icon: Mail,
  },
  {
    label: "Active Contacts",
    value: "8,549",
    change: 8,
    icon: Users,
  },
  {
    label: "Open Rate",
    value: "24.5%",
    change: 5,
    icon: Eye,
  },
  {
    label: "Revenue",
    value: "$12,450",
    change: 15,
    icon: DollarSign,
  },
];

const campaigns = [
  {
    name: "Summer Sale 2024",
    type: "Email Campaign",
    openRate: 28.5,
  },
  {
    name: "Product Launch",
    type: "Automation",
    openRate: 32.1,
  },
  {
    name: "Newsletter #47",
    type: "Email Campaign",
    openRate: 19.8,
  },
  {
    name: "Welcome Series",
    type: "Automation",
    openRate: 45.2,
  },
];

const activities = [
  {
    description: "New campaign 'Holiday Special' was created",
    time: "2 minutes ago",
    icon: Mail,
  },
  {
    description: "150 new contacts imported from CSV",
    time: "1 hour ago",
    icon: Users,
  },
  {
    description: "Automation 'Welcome Series' completed for 25 contacts",
    time: "3 hours ago",
    icon: TrendingUp,
  },
  {
    description: "Campaign 'Summer Sale' achieved 30% open rate",
    time: "5 hours ago",
    icon: BarChart3,
  },
];

const quickActions = [
  {
    title: "Create Campaign",
    description: "Start a new email marketing campaign",
    icon: Mail,
    href: "/dashboard/campaigns/new",
  },
  {
    title: "Import Contacts",
    description: "Add new contacts to your audience",
    icon: Users,
    href: "/dashboard/contacts/import",
  },
  {
    title: "View Analytics",
    description: "Check your campaign performance",
    icon: BarChart3,
    href: "/dashboard/analytics",
  },
];

const upcomingEvents = [
  {
    title: "Black Friday Campaign",
    description: "Launch date for holiday promotion",
    date: "Nov 24, 2024 at 9:00 AM",
  },
  {
    title: "Monthly Newsletter",
    description: "Send monthly update to subscribers",
    date: "Dec 1, 2024 at 10:00 AM",
  },
  {
    title: "Product Webinar",
    description: "Live demo and Q&A session",
    date: "Dec 5, 2024 at 2:00 PM",
  },
];
