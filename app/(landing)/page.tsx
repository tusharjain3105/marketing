import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  Globe,
  Mail,
  Rocket,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5 animated-gradient"></div>
        <div className="z-10 relative mx-auto px-4 container">
          <div className="space-y-8 mx-auto max-w-4xl text-center">
            <div className="space-y-4">
              <h1 className="font-bold text-foreground text-responsive-xl leading-tight">
                Transform Your Marketing with{" "}
                <span className="bg-clip-text bg-gradient-to-r from-primary via-primary-medium to-primary-strong text-transparent">
                  AI-Powered Automation
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-foreground-secondary text-responsive-md">
                Streamline your marketing campaigns, nurture leads
                automatically, and grow your business with our comprehensive
                marketing platform.
              </p>
            </div>

            <div className="flex sm:flex-row flex-col justify-center gap-4">
              <Button size="lg" className="glow" asChild>
                <Link href="/signup">
                  Start Free Trial
                  <Rocket className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/demo">
                  Watch Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 pt-8">
              <div className="flex items-center gap-2 text-foreground-secondary text-sm">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2 text-foreground-secondary text-sm">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2 text-foreground-secondary text-sm">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20">
        <div className="mx-auto px-4 container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-foreground text-responsive-lg">
              Everything you need to succeed
            </h2>
            <p className="text-foreground-secondary text-lg">
              Powerful tools designed to help you grow your business
            </p>
          </div>

          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
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
                <p className="text-foreground-secondary">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-soft/50 py-20">
        <div className="mx-auto px-4 container">
          <div className="p-8 lg:p-12 rounded-2xl glass">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-bold text-foreground text-responsive-lg">
                Trusted by thousands of businesses
              </h2>
              <p className="text-foreground-secondary text-lg">
                Join the companies already growing with MarketingPro
              </p>
            </div>

            <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4">
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
      <section className="py-20">
        <div className="mx-auto px-4 container">
          <div className="p-8 lg:p-12 rounded-2xl text-center glass">
            <div className="space-y-6 mx-auto max-w-2xl">
              <h2 className="font-bold text-foreground text-responsive-lg">
                Ready to transform your marketing?
              </h2>
              <p className="text-foreground-secondary text-lg">
                Join thousands of businesses already growing with MarketingPro.
                Start your free trial today.
              </p>
              <div className="flex sm:flex-row flex-col justify-center gap-4">
                <Button size="lg" className="glow" asChild>
                  <Link href="/signup">
                    Get Started Free
                    <Sparkles className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Talk to Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const features = [
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Create beautiful email campaigns with our drag-and-drop editor and advanced automation.",
  },
  {
    icon: Users,
    title: "Audience Management",
    description:
      "Segment your audience intelligently and deliver personalized experiences at scale.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Track performance with detailed analytics and make data-driven marketing decisions.",
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    description:
      "Set up automated workflows that nurture leads and convert them into customers.",
  },
  {
    icon: Target,
    title: "Lead Generation",
    description:
      "Capture more leads with optimized landing pages, forms, and lead magnets.",
  },
  {
    icon: Globe,
    title: "Multi-Channel Marketing",
    description:
      "Reach your audience across email, social media, SMS, and web with unified campaigns.",
  },
];

const stats = [
  { value: "10,000+", label: "Active Users" },
  { value: "50M+", label: "Emails Sent" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.9/5", label: "Customer Rating" },
];
