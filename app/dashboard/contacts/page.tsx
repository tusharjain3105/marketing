import { Button } from "@/components/ui/button";
import {
  Download,
  Edit,
  Filter,
  Mail,
  MapPin,
  MoreHorizontal,
  Phone,
  Plus,
  Search,
  Tag,
  TrendingUp,
  Upload,
  UserPlus,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function ContactsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-foreground text-3xl">Contacts</h1>
          <p className="mt-2 text-foreground-secondary">
            Manage your audience and organize contacts into segments.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" asChild>
            <Link href="/dashboard/contacts/import">
              <Upload className="mr-2 w-4 h-4" />
              Import
            </Link>
          </Button>
          <Button className="glow" asChild>
            <Link href="/dashboard/contacts/new">
              <UserPlus className="mr-2 w-4 h-4" />
              Add Contact
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="gap-6 grid grid-cols-1 md:grid-cols-4">
        {contactStats.map((stat, index) => (
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

      {/* Segments */}
      <div className="p-6 rounded-xl glass">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-foreground text-lg">Segments</h3>
          <Button variant="ghost" size="sm">
            <Plus className="mr-2 w-4 h-4" />
            New Segment
          </Button>
        </div>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="bg-soft/30 hover:bg-soft/50 p-4 rounded-lg transition-colors cursor-pointer"
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium text-foreground">{segment.name}</h4>
                <span className="font-medium text-primary text-sm">
                  {segment.count}
                </span>
              </div>
              <p className="text-foreground-secondary text-sm">
                {segment.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex items-center gap-4 p-6 rounded-xl glass">
        <div className="relative flex-1">
          <Search className="top-1/2 left-3 absolute w-4 h-4 text-foreground-secondary -translate-y-1/2 transform" />
          <input
            type="text"
            placeholder="Search contacts..."
            className="bg-background/50 py-2 pr-4 pl-10 border focus:border-primary border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-full text-foreground placeholder-foreground-secondary"
          />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="mr-2 w-4 h-4" />
          Filter
        </Button>
        <select className="bg-background/50 px-3 py-2 border border-border/50 rounded-lg text-foreground">
          <option>All Segments</option>
          <option>Premium Leads</option>
          <option>Newsletter Subscribers</option>
          <option>Trial Users</option>
          <option>Customers</option>
        </select>
        <Button variant="outline" size="sm">
          <Download className="mr-2 w-4 h-4" />
          Export
        </Button>
      </div>

      {/* Contacts List */}
      <div className="space-y-4">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="p-6 rounded-xl transition-all duration-300 glass hover:glow"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="flex justify-center items-center bg-primary/10 rounded-full w-12 h-12">
                  <span className="font-semibold text-primary">
                    {contact.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {contact.name}
                  </h3>
                  <div className="flex items-center gap-4 mt-1">
                    <div className="flex items-center gap-1 text-foreground-secondary text-sm">
                      <Mail className="w-3 h-3" />
                      {contact.email}
                    </div>
                    {contact.phone && (
                      <div className="flex items-center gap-1 text-foreground-secondary text-sm">
                        <Phone className="w-3 h-3" />
                        {contact.phone}
                      </div>
                    )}
                    {contact.location && (
                      <div className="flex items-center gap-1 text-foreground-secondary text-sm">
                        <MapPin className="w-3 h-3" />
                        {contact.location}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    {contact.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-primary/10 px-2 py-1 rounded-full font-medium text-primary text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="font-semibold text-foreground">
                    {contact.score}
                  </p>
                  <p className="text-foreground-secondary text-xs">
                    Lead Score
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-foreground">
                    {contact.lastActivity}
                  </p>
                  <p className="text-foreground-secondary text-xs">
                    Last Activity
                  </p>
                </div>
                <div className="text-center">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      contact.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : contact.status === "Inactive"
                          ? "bg-gray-100 text-gray-700"
                          : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {contact.status}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Mail className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Tag className="w-4 h-4" />
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
          Showing 1 to 10 of 8,549 contacts
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

const contactStats = [
  {
    label: "Total Contacts",
    value: "8,549",
    icon: Users,
  },
  {
    label: "Active Contacts",
    value: "7,234",
    icon: UserPlus,
  },
  {
    label: "Segments",
    value: "12",
    icon: Tag,
  },
  {
    label: "Avg. Lead Score",
    value: "72",
    icon: TrendingUp,
  },
];

const segments = [
  {
    name: "Premium Leads",
    count: "1,234",
    description: "High-value prospects with strong engagement",
  },
  {
    name: "Newsletter Subscribers",
    count: "5,678",
    description: "Users subscribed to weekly newsletter",
  },
  {
    name: "Trial Users",
    count: "892",
    description: "Currently in free trial period",
  },
  {
    name: "Customers",
    count: "456",
    description: "Active paying customers",
  },
  {
    name: "Inactive Users",
    count: "289",
    description: "No activity in the last 90 days",
  },
  {
    name: "VIP Customers",
    count: "67",
    description: "High-value enterprise customers",
  },
];

const contacts = [
  {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    tags: ["Premium Lead", "Enterprise"],
    score: 95,
    lastActivity: "2 hours ago",
    status: "Active",
  },
  {
    name: "Michael Chen",
    email: "michael.chen@techcorp.com",
    phone: "+1 (555) 987-6543",
    location: "San Francisco, CA",
    tags: ["Customer", "VIP"],
    score: 88,
    lastActivity: "1 day ago",
    status: "Active",
  },
  {
    name: "Emily Rodriguez",
    email: "emily.r@startup.io",
    phone: null,
    location: "Austin, TX",
    tags: ["Trial User", "Startup"],
    score: 72,
    lastActivity: "3 days ago",
    status: "Active",
  },
  {
    name: "David Kim",
    email: "david.kim@company.com",
    phone: "+1 (555) 456-7890",
    location: "Seattle, WA",
    tags: ["Newsletter"],
    score: 45,
    lastActivity: "1 week ago",
    status: "Inactive",
  },
  {
    name: "Lisa Thompson",
    email: "lisa.thompson@agency.com",
    phone: "+1 (555) 321-0987",
    location: "Chicago, IL",
    tags: ["Premium Lead", "Agency"],
    score: 82,
    lastActivity: "5 hours ago",
    status: "Active",
  },
];
