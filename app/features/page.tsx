import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import {
  BarChart3,
  Mail,
  Users,
  Zap,
  Shield,
  Rocket,
  Sparkles,
  Target,
  Globe,
  Smartphone,
  Calendar,
  MessageSquare,
  TrendingUp,
  Lock,
  Palette,
  Code,
} from "lucide-react";
import Link from "next/link";

export default function FeaturesPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Navigation */}
      <nav className="top-0 z-50 fixed border-b border-border/50 w-full glass">
        <div className="flex justify-between items-center mx-auto px-4 h-16 container">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex justify-center items-center bg-primary rounded-lg w-8 h-8">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground text-xl">
              MarketingPro
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="font-medium text-primary">
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-foreground-secondary hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-foreground-secondary hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-foreground-secondary hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeSwitcher />
            <Button variant="ghost" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5 animated-gradient"></div>
        <div className="z-10 relative mx-auto px-4 container">
          <div className="space-y-8 mx-auto max-w-4xl text-center">
            <h1 className="font-bold text-foreground text-responsive-xl leading-tight">
              Powerful Features for{" "}
              <span className="bg-clip-text bg-gradient-to-r from-primary via-primary-medium to-primary-strong text-transparent">
                Modern Marketing
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-foreground-secondary text-responsive-md">
              Everything you need to create, manage, and optimize your marketing
              campaigns in one comprehensive platform.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20">
        <div className="mx-auto px-4 container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-foreground text-responsive-lg">
              Core Features
            </h2>
            <p className="text-foreground-secondary text-lg">
              Essential tools to power your marketing success
            </p>
          </div>

          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl transition-all duration-300 glass hover:glow"
              >
                <div className="flex justify-center items-center bg-primary/10 group-hover:bg-primary/20 mb-6 rounded-xl w-16 h-16 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-3 font-semibold text-foreground text-xl">
                  {feature.title}
                </h3>
                <p className="mb-4 text-foreground-secondary">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <div className="bg-primary/20 mr-2 rounded-full w-1.5 h-1.5"></div>
                      <span className="text-foreground-secondary">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="bg-soft/50 py-20">
        <div className="mx-auto px-4 container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-foreground text-responsive-lg">
              Advanced Capabilities
            </h2>
            <p className="text-foreground-secondary text-lg">
              Professional tools for sophisticated marketing strategies
            </p>
          </div>

          <div className="gap-12 grid lg:grid-cols-2">
            {advancedFeatures.map((feature, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-shrink-0 justify-center items-center bg-primary/10 rounded-xl w-16 h-16">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground text-xl">
                    {feature.title}
                  </h3>
                  <p className="text-foreground-secondary">
                    {feature.description}
                  </p>
                  <div className="gap-2 grid grid-cols-1 sm:grid-cols-2">
                    {feature.capabilities.map((capability, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <div className="bg-primary mr-2 rounded-full w-1 h-1"></div>
                        <span className="text-foreground-secondary">
                          {capability}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20">
        <div className="mx-auto px-4 container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-foreground text-responsive-lg">
              Seamless Integrations
            </h2>
            <p className="text-foreground-secondary text-lg">
              Connect with your favorite tools and platforms
            </p>
          </div>

          <div className="p-8 rounded-2xl glass">
            <div className="gap-8 grid md:grid-cols-3">
              {integrationCategories.map((category, index) => (
                <div key={index} className="space-y-4 text-center">
                  <div className="flex justify-center items-center bg-primary/10 mx-auto rounded-xl w-16 h-16">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {category.title}
                  </h3>
                  <p className="text-foreground-secondary text-sm">
                    {category.description}
                  </p>
                  <div className="space-y-1">
                    {category.tools.map((tool, i) => (
                      <div
                        key={i}
                        className="text-foreground-secondary text-sm"
                      >
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="bg-soft/50 py-20">
        <div className="mx-auto px-4 container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-foreground text-responsive-lg">
              Security & Compliance
            </h2>
            <p className="text-foreground-secondary text-lg">
              Enterprise-grade security you can trust
            </p>
          </div>

          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl text-center glass">
                <div className="flex justify-center items-center bg-primary/10 mx-auto mb-4 rounded-xl w-12 h-12">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-foreground-secondary text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto px-4 container">
          <div className="p-8 lg:p-12 rounded-2xl text-center glass">
            <div className="space-y-6 mx-auto max-w-2xl">
              <h2 className="font-bold text-foreground text-responsive-lg">
                Ready to experience these features?
              </h2>
              <p className="text-foreground-secondary text-lg">
                Start your free trial today and see how our platform can
                transform your marketing.
              </p>
              <div className="flex sm:flex-row flex-col justify-center gap-4">
                <Button size="lg" className="glow" asChild>
                  <Link href="/signup">
                    Start Free Trial
                    <Rocket className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/demo">Watch Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const coreFeatures = [
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Create stunning email campaigns with our intuitive drag-and-drop editor.",
    highlights: [
      "Responsive email templates",
      "A/B testing capabilities",
      "Automated drip campaigns",
      "Personalization engine",
    ],
  },
  {
    icon: Users,
    title: "Audience Management",
    description: "Organize and segment your contacts for targeted marketing.",
    highlights: [
      "Smart segmentation",
      "Contact scoring",
      "Import/export tools",
      "Duplicate detection",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Track performance with detailed insights and actionable data.",
    highlights: [
      "Real-time dashboards",
      "Custom reports",
      "ROI tracking",
      "Conversion analytics",
    ],
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    description:
      "Set up automated workflows to nurture leads and engage customers.",
    highlights: [
      "Visual workflow builder",
      "Trigger-based actions",
      "Lead scoring",
      "Behavioral targeting",
    ],
  },
  {
    icon: Target,
    title: "Lead Generation",
    description: "Capture and convert more leads with powerful tools.",
    highlights: [
      "Landing page builder",
      "Pop-up forms",
      "Lead magnets",
      "Social media integration",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Optimization",
    description: "Ensure your campaigns look perfect on all devices.",
    highlights: [
      "Mobile-responsive design",
      "SMS marketing",
      "Push notifications",
      "Mobile analytics",
    ],
  },
];

const advancedFeatures = [
  {
    icon: TrendingUp,
    title: "Advanced Analytics",
    description:
      "Deep insights into customer behavior and campaign performance with machine learning-powered analytics.",
    capabilities: [
      "Predictive analytics",
      "Customer lifetime value",
      "Churn prediction",
      "Attribution modeling",
      "Cohort analysis",
      "Revenue tracking",
    ],
  },
  {
    icon: Globe,
    title: "Multi-Channel Marketing",
    description:
      "Reach your audience across email, social media, SMS, and web with unified campaigns.",
    capabilities: [
      "Cross-channel campaigns",
      "Social media scheduling",
      "SMS automation",
      "Web personalization",
      "Retargeting ads",
      "Omnichannel reporting",
    ],
  },
  {
    icon: Calendar,
    title: "Campaign Management",
    description:
      "Plan, execute, and optimize marketing campaigns with advanced project management tools.",
    capabilities: [
      "Campaign calendar",
      "Team collaboration",
      "Approval workflows",
      "Asset management",
      "Budget tracking",
      "Performance optimization",
    ],
  },
  {
    icon: MessageSquare,
    title: "Customer Communication",
    description:
      "Engage customers with personalized messaging across multiple touchpoints.",
    capabilities: [
      "Live chat integration",
      "Chatbot automation",
      "Help desk integration",
      "Customer surveys",
      "Feedback collection",
      "Support ticket tracking",
    ],
  },
];

const integrationCategories = [
  {
    icon: Code,
    title: "CRM & Sales",
    description: "Connect with your sales tools",
    tools: ["Salesforce", "HubSpot", "Pipedrive", "Zoho CRM", "Monday.com"],
  },
  {
    icon: Globe,
    title: "E-commerce",
    description: "Integrate with online stores",
    tools: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Stripe"],
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Track and measure performance",
    tools: [
      "Google Analytics",
      "Facebook Pixel",
      "Mixpanel",
      "Hotjar",
      "Segment",
    ],
  },
];

const securityFeatures = [
  {
    icon: Shield,
    title: "Data Protection",
    description: "Enterprise-grade security with end-to-end encryption",
  },
  {
    icon: Lock,
    title: "GDPR Compliant",
    description: "Full compliance with global privacy regulations",
  },
  {
    icon: Users,
    title: "Access Control",
    description: "Role-based permissions and user management",
  },
  {
    icon: Palette,
    title: "99.9% Uptime",
    description: "Reliable infrastructure with guaranteed availability",
  },
];
