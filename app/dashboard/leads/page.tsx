import { Button } from "@/components/ui/button";
import {
  Edit,
  Eye,
  Filter,
  MoreHorizontal,
  Plus,
  Search,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function LeadsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-foreground text-3xl">
            Lead Generation
          </h1>
          <p className="mt-2 text-foreground-secondary">
            Capture, qualify, and nurture leads to grow your business.
          </p>
        </div>
        <Button className="glow" asChild>
          <Link href="/dashboard/leads/new">
            <Plus className="mr-2 w-4 h-4" />
            New Lead Magnet
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="gap-6 grid grid-cols-1 md:grid-cols-4">
        {leadStats.map((stat, index) => (
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

      {/* Lead Magnets */}
      <div className="p-6 rounded-xl glass">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-foreground text-lg">
            Lead Magnets
          </h3>
          <Button variant="ghost" size="sm">
            View All
          </Button>
        </div>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
          {leadMagnets.map((magnet, index) => (
            <div
              key={index}
              className="bg-soft/30 hover:bg-soft/50 p-4 rounded-lg transition-colors"
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium text-foreground">{magnet.name}</h4>
                <span className="font-medium text-primary text-sm">
                  {magnet.conversions}
                </span>
              </div>
              <p className="mb-2 text-foreground-secondary text-sm">
                {magnet.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-foreground-secondary text-xs">
                  {magnet.views} views
                </span>
                <span className="font-medium text-primary text-xs">
                  {magnet.conversionRate}% CVR
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Leads */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-foreground text-lg">
            Recent Leads
          </h3>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="top-1/2 left-3 absolute w-4 h-4 text-foreground-secondary -translate-y-1/2 transform" />
              <input
                type="text"
                placeholder="Search leads..."
                className="bg-background/50 py-2 pr-4 pl-10 border focus:border-primary border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder-foreground-secondary"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 w-4 h-4" />
              Filter
            </Button>
          </div>
        </div>

        {leads.map((lead, index) => (
          <div
            key={index}
            className="p-6 rounded-xl transition-all duration-300 glass hover:glow"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="flex justify-center items-center bg-primary/10 rounded-full w-12 h-12">
                  <span className="font-semibold text-primary">
                    {lead.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {lead.name}
                  </h3>
                  <p className="text-foreground-secondary text-sm">
                    {lead.email}
                  </p>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-foreground-secondary text-xs">
                      Source: {lead.source}
                    </span>
                    <span className="text-foreground-secondary text-xs">
                      {lead.createdAt}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(lead.score / 20)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-foreground-secondary text-xs">
                    Score: {lead.score}
                  </p>
                </div>
                <div className="text-center">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      lead.status === "Hot"
                        ? "bg-red-100 text-red-700"
                        : lead.status === "Warm"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {lead.status}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
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

const leadStats = [
  {
    label: "Total Leads",
    value: "2,345",
    icon: Target,
  },
  {
    label: "This Month",
    value: "234",
    icon: TrendingUp,
  },
  {
    label: "Conversion Rate",
    value: "12.5%",
    icon: Users,
  },
  {
    label: "Avg. Score",
    value: "72",
    icon: Star,
  },
];

const leadMagnets = [
  {
    name: "Marketing Guide",
    description: "Complete guide to digital marketing",
    views: "1,234",
    conversions: "156",
    conversionRate: 12.6,
  },
  {
    name: "Email Templates",
    description: "50 proven email templates",
    views: "892",
    conversions: "89",
    conversionRate: 10.0,
  },
  {
    name: "Free Consultation",
    description: "30-minute strategy session",
    views: "567",
    conversions: "78",
    conversionRate: 13.8,
  },
];

const leads = [
  {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    source: "Marketing Guide",
    score: 85,
    status: "Hot",
    createdAt: "2 hours ago",
  },
  {
    name: "Michael Chen",
    email: "michael.chen@techcorp.com",
    source: "Free Consultation",
    score: 72,
    status: "Warm",
    createdAt: "1 day ago",
  },
  {
    name: "Emily Rodriguez",
    email: "emily.r@startup.io",
    source: "Email Templates",
    score: 45,
    status: "Cold",
    createdAt: "3 days ago",
  },
];
