import { Button } from "@/components/ui/button";
import {
  Book,
  ExternalLink,
  FileText,
  HelpCircle,
  Mail,
  MessageSquare,
  Phone,
  Search,
  Video,
} from "lucide-react";
import Link from "next/link";

export default function HelpPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-foreground text-3xl">Help & Support</h1>
          <p className="mt-2 text-foreground-secondary">
            Find answers, get help, and learn how to make the most of
            MarketingPro.
          </p>
        </div>
        <Button className="glow">
          <MessageSquare className="mr-2 w-4 h-4" />
          Contact Support
        </Button>
      </div>

      <div className="relative">
        <Search className="top-1/2 left-4 absolute w-5 h-5 text-foreground-secondary -translate-y-1/2 transform" />
        <input
          type="text"
          placeholder="Search help articles..."
          className="bg-background/50 py-4 pr-4 pl-12 border focus:border-primary border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 w-full text-foreground text-lg placeholder-foreground-secondary"
        />
      </div>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {helpCategories.map((category, index) => (
          <div
            key={index}
            className="p-6 rounded-xl transition-all duration-300 glass hover:glow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex justify-center items-center bg-primary/10 rounded-lg w-12 h-12">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  {category.title}
                </h3>
                <p className="text-foreground-secondary text-sm">
                  {category.description}
                </p>
              </div>
            </div>
            <div className="space-y-2">
              {category.articles.map((article, i) => (
                <Link
                  key={i}
                  href="#"
                  className="block text-foreground-secondary hover:text-primary text-sm transition-colors"
                >
                  • {article}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
        <div className="p-6 rounded-xl glass">
          <h3 className="mb-6 font-semibold text-foreground text-lg">
            Popular Articles
          </h3>
          <div className="space-y-4">
            {popularArticles.map((article, index) => (
              <Link
                key={index}
                href="#"
                className="flex items-center gap-4 bg-soft/30 hover:bg-soft/50 p-4 rounded-lg transition-colors"
              >
                <div className="flex justify-center items-center bg-primary/10 rounded-lg w-10 h-10">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">
                    {article.title}
                  </h4>
                  <p className="text-foreground-secondary text-sm">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-foreground-secondary text-xs">
                      {article.readTime}
                    </span>
                    <span className="text-foreground-secondary text-xs">
                      {article.views} views
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-foreground-secondary" />
              </Link>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-xl glass">
          <h3 className="mb-6 font-semibold text-foreground text-lg">
            Contact Support
          </h3>
          <div className="space-y-4">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-soft/30 p-4 rounded-lg"
              >
                <div className="flex justify-center items-center bg-primary/10 rounded-lg w-12 h-12">
                  <option.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">
                    {option.title}
                  </h4>
                  <p className="text-foreground-secondary text-sm">
                    {option.description}
                  </p>
                  <p className="text-foreground-secondary text-sm">
                    {option.availability}
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  {option.action}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl glass">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-foreground text-lg">
            Video Tutorials
          </h3>
          <Button variant="ghost" size="sm">
            View All
          </Button>
        </div>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
          {videoTutorials.map((video, index) => (
            <div
              key={index}
              className="bg-soft/30 hover:bg-soft/50 rounded-lg overflow-hidden transition-colors"
            >
              <div className="flex justify-center items-center bg-primary/10 aspect-video">
                <Video className="w-8 h-8 text-primary" />
              </div>
              <div className="p-4">
                <h4 className="mb-1 font-medium text-foreground">
                  {video.title}
                </h4>
                <p className="mb-2 text-foreground-secondary text-sm">
                  {video.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-foreground-secondary text-xs">
                    {video.duration}
                  </span>
                  <Button variant="ghost" size="sm">
                    Watch
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const helpCategories = [
  {
    title: "Getting Started",
    description: "Learn the basics",
    icon: Book,
    articles: [
      "Setting up your account",
      "Creating your first campaign",
      "Importing contacts",
      "Understanding the dashboard",
    ],
  },
  {
    title: "Campaigns",
    description: "Email marketing help",
    icon: Mail,
    articles: [
      "Creating email campaigns",
      "Using email templates",
      "A/B testing campaigns",
      "Scheduling campaigns",
    ],
  },
  {
    title: "Automation",
    description: "Workflow automation",
    icon: HelpCircle,
    articles: [
      "Setting up automations",
      "Trigger conditions",
      "Email sequences",
      "Lead scoring",
    ],
  },
];

const popularArticles = [
  {
    title: "How to improve email deliverability",
    description: "Best practices for ensuring your emails reach the inbox",
    readTime: "5 min read",
    views: "2.1k",
  },
  {
    title: "Creating effective email templates",
    description: "Design tips for high-converting email campaigns",
    readTime: "8 min read",
    views: "1.8k",
  },
  {
    title: "Understanding email analytics",
    description: "How to interpret your campaign performance data",
    readTime: "6 min read",
    views: "1.5k",
  },
];

const supportOptions = [
  {
    title: "Live Chat",
    description: "Get instant help from our support team",
    availability: "Available 24/7",
    action: "Start Chat",
    icon: MessageSquare,
  },
  {
    title: "Email Support",
    description: "Send us a detailed message",
    availability: "Response within 24 hours",
    action: "Send Email",
    icon: Mail,
  },
  {
    title: "Phone Support",
    description: "Speak directly with our experts",
    availability: "Mon-Fri, 9AM-6PM PST",
    action: "Call Now",
    icon: Phone,
  },
];

const videoTutorials = [
  {
    title: "Getting Started with MarketingPro",
    description: "Complete walkthrough of the platform",
    duration: "12:34",
  },
  {
    title: "Creating Your First Campaign",
    description: "Step-by-step campaign creation guide",
    duration: "8:45",
  },
  {
    title: "Advanced Automation Workflows",
    description: "Build complex marketing automations",
    duration: "15:22",
  },
];
