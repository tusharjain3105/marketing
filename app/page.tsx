import { Button } from "@/components/ui/button";
import {
  ColorSchemePicker,
  ThemeSwitcher,
} from "@/components/ui/theme-switcher";
import {
  ArrowRight,
  BarChart3,
  Mail,
  Rocket,
  Shield,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Navigation */}
      <nav className="top-0 z-50 fixed border-b border-border/50 w-full glass">
        <div className="flex justify-between items-center mx-auto px-4 h-16 container">
          <div className="flex items-center space-x-2">
            <div className="flex justify-center items-center bg-primary rounded-lg w-8 h-8">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground text-xl">
              MarketingPro
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/features"
              className="text-foreground-secondary hover:text-foreground transition-colors"
            >
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
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10 animated-gradient"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="-top-40 -right-40 float absolute bg-primary/20 blur-3xl rounded-full w-80 h-80" />
          <div className="-bottom-40 -left-40 float-delayed absolute bg-primary/20 blur-3xl rounded-full w-80 h-80" />
          <div className="top-1/2 left-1/2 float absolute bg-primary/10 blur-2xl rounded-full w-60 h-60 -translate-x-1/2 -translate-y-1/2 transform" />
        </div>

        <div className="z-10 relative mx-auto px-4 container">
          <div className="space-y-8 mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm glass">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-foreground-secondary">
                Introducing the future of marketing
              </span>
            </div>

            {/* Main heading */}
            <h1 className="font-bold text-foreground text-responsive-xl leading-tight">
              Transform Your Marketing with{" "}
              <span className="bg-clip-text bg-gradient-to-r from-primary via-primary-medium to-primary-strong text-transparent">
                AI-Powered
              </span>{" "}
              Automation
            </h1>

            {/* Subtitle */}
            <p className="mx-auto max-w-2xl text-foreground-secondary text-responsive-md">
              Create stunning campaigns, manage your audience, and grow your
              business with our comprehensive marketing platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
              <Button size="lg" className="glow" asChild>
                <Link href="/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/demo">Watch Demo</Link>
              </Button>
            </div>

            {/* Social proof */}
            <div className="pt-8">
              <p className="mb-4 text-foreground-secondary text-sm">
                Trusted by 10,000+ businesses worldwide
              </p>
              <div className="flex justify-center items-center gap-8 opacity-60">
                {/* Logo placeholders */}
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="bg-foreground/10 rounded w-20 h-8"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-soft/50 py-20">
        <div className="mx-auto px-4 container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 font-bold text-foreground text-responsive-lg">
              Everything you need to succeed
            </h2>
            <p className="text-foreground-secondary text-lg">
              Powerful tools designed to help you create, manage, and optimize
              your marketing campaigns.
            </p>
          </div>

          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl transition-all duration-300 glass hover:glow"
              >
                <div className="flex justify-center items-center bg-primary/10 group-hover:bg-primary/20 mb-4 rounded-lg w-12 h-12 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground text-xl">
                  {feature.title}
                </h3>
                <p className="text-foreground-secondary">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="mx-auto px-4 container">
          <div className="p-8 lg:p-12 rounded-2xl glass">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-bold text-foreground text-responsive-lg">
                Proven Results
              </h2>
              <p className="text-foreground-secondary text-lg">
                See how our platform drives real business growth
              </p>
            </div>

            <div className="gap-8 grid md:grid-cols-3">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 font-bold text-primary text-4xl lg:text-5xl">
                    {stat.value}
                  </div>
                  <div className="text-foreground-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-soft/50 py-20">
        <div className="mx-auto px-4 container">
          <div className="p-8 lg:p-12 rounded-2xl text-center glass">
            <div className="space-y-6 mx-auto max-w-2xl">
              <h2 className="font-bold text-foreground text-responsive-lg">
                Ready to transform your marketing?
              </h2>
              <p className="text-foreground-secondary text-lg">
                Join thousands of businesses already using our platform to grow
                their audience and increase revenue.
              </p>
              <div className="flex sm:flex-row flex-col justify-center gap-4">
                <Button size="lg" className="glow" asChild>
                  <Link href="/signup">
                    Start Your Free Trial
                    <Rocket className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Talk to Sales</Link>
                </Button>
              </div>
              <div className="pt-4">
                <ColorSchemePicker />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="mx-auto px-4 container">
          <div className="gap-8 grid md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex justify-center items-center bg-primary rounded-lg w-8 h-8">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-foreground text-xl">
                  MarketingPro
                </span>
              </div>
              <p className="text-foreground-secondary">
                The complete marketing platform for modern businesses.
              </p>
            </div>

            {footerLinks.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-semibold text-foreground">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-foreground-secondary hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-border text-foreground-secondary text-center">
            <p>&copy; 2024 MarketingPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: Mail,
    title: "Email Campaigns",
    description:
      "Create beautiful, responsive email campaigns with our drag-and-drop editor.",
  },
  {
    icon: Users,
    title: "Audience Management",
    description:
      "Segment and manage your audience with powerful targeting tools.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Track performance with detailed analytics and actionable insights.",
  },
  {
    icon: Zap,
    title: "Automation",
    description:
      "Set up automated workflows to nurture leads and engage customers.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Enterprise-grade security with GDPR and CCPA compliance built-in.",
  },
  {
    icon: Rocket,
    title: "Fast Performance",
    description: "Lightning-fast platform built for scale and reliability.",
  },
];

const stats = [
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "10M+", label: "Emails Delivered" },
  { value: "500%", label: "Average ROI Increase" },
];

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Integrations", href: "/integrations" },
      { label: "API", href: "/api" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/legal/privacy-policy" },
      { label: "Terms", href: "/legal/terms-of-service" },
      { label: "Security", href: "/legal/security" },
      { label: "GDPR", href: "/legal/gdpr" },
    ],
  },
];
