import { Button } from "@/components/ui/button";
import {
  Copy,
  Edit,
  Filter,
  MoreHorizontal,
  Pause,
  Play,
  Plus,
  Search,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function AutomationPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-foreground text-3xl">
            Marketing Automation
          </h1>
          <p className="mt-2 text-foreground-secondary">
            Create automated workflows to nurture leads and engage customers.
          </p>
        </div>
        <Button className="glow" asChild>
          <Link href="/dashboard/automation/new">
            <Plus className="mr-2 w-4 h-4" />
            New Automation
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="gap-6 grid grid-cols-1 md:grid-cols-4">
        {automationStats.map((stat, index) => (
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
            placeholder="Search automations..."
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
          <option>Paused</option>
        </select>
      </div>

      {/* Automations List */}
      <div className="space-y-4">
        {automations.map((automation, index) => (
          <div
            key={index}
            className="p-6 rounded-xl transition-all duration-300 glass hover:glow"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="flex justify-center items-center bg-primary/10 rounded-lg w-12 h-12">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {automation.name}
                  </h3>
                  <p className="text-foreground-secondary text-sm">
                    {automation.description}
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        automation.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : automation.status === "Draft"
                            ? "bg-gray-100 text-gray-700"
                            : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {automation.status}
                    </span>
                    <span className="text-foreground-secondary text-xs">
                      Created {automation.created}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="font-semibold text-foreground">
                    {automation.enrolled}
                  </p>
                  <p className="text-foreground-secondary text-xs">Enrolled</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-foreground">
                    {automation.completed}
                  </p>
                  <p className="text-foreground-secondary text-xs">Completed</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-foreground">
                    {automation.conversionRate}%
                  </p>
                  <p className="text-foreground-secondary text-xs">
                    Conversion
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    {automation.status === "Active" ? (
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
    </div>
  );
}

const automationStats = [
  {
    label: "Total Automations",
    value: "12",
    icon: Zap,
  },
  {
    label: "Active Workflows",
    value: "8",
    icon: Play,
  },
  {
    label: "Total Enrolled",
    value: "3,245",
    icon: Users,
  },
  {
    label: "Avg. Conversion",
    value: "18.5%",
    icon: TrendingUp,
  },
];

const automations = [
  {
    name: "Welcome Series",
    description: "5-email welcome sequence for new subscribers",
    status: "Active",
    created: "2 weeks ago",
    enrolled: "1,234",
    completed: "892",
    conversionRate: 24.5,
  },
  {
    name: "Abandoned Cart Recovery",
    description: "3-email sequence for cart abandonment",
    status: "Active",
    created: "1 month ago",
    enrolled: "567",
    completed: "234",
    conversionRate: 15.8,
  },
  {
    name: "Lead Nurturing Campaign",
    description: "Educational content for premium leads",
    status: "Active",
    created: "3 weeks ago",
    enrolled: "890",
    completed: "445",
    conversionRate: 32.1,
  },
  {
    name: "Re-engagement Campaign",
    description: "Win back inactive subscribers",
    status: "Paused",
    created: "1 week ago",
    enrolled: "234",
    completed: "89",
    conversionRate: 8.2,
  },
];
