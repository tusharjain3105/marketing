import { Button } from "@/components/ui/button";
import {
  Users,
  Target,
  Heart,
  Globe,
  Rocket,
  Shield,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5 animated-gradient"></div>
        <div className="z-10 relative mx-auto px-4 container">
          <div className="space-y-8 mx-auto max-w-4xl text-center">
            <h1 className="font-bold text-foreground text-responsive-xl leading-tight">
              Empowering Businesses Through{" "}
              <span className="bg-clip-text bg-gradient-to-r from-primary via-primary-medium to-primary-strong text-transparent">
                Smart Marketing
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-foreground-secondary text-responsive-md">
              We believe every business deserves access to powerful marketing
              tools. Our mission is to democratize marketing technology and help
              companies of all sizes grow.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="mx-auto px-4 container">
          <div className="items-center gap-12 grid lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="font-bold text-foreground text-responsive-lg">
                Our Story
              </h2>
              <div className="space-y-4 text-foreground-secondary">
                <p>
                  Founded in 2020, MarketingPro was born from a simple
                  observation: small and medium businesses were struggling to
                  compete with enterprise-level marketing capabilities due to
                  complex, expensive tools.
                </p>
                <p>
                  Our founders, experienced marketers and technologists, set out
                  to create a platform that would level the playing field. We
                  wanted to build something that was powerful enough for
                  enterprises yet simple enough for small businesses to use
                  effectively.
                </p>
                <p>
                  Today, we serve over 10,000 businesses worldwide, from solo
                  entrepreneurs to Fortune 500 companies, helping them create
                  meaningful connections with their audiences and drive
                  sustainable growth.
                </p>
              </div>
            </div>
            <div className="p-8 rounded-2xl glass">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex justify-center items-center bg-primary/10 rounded-xl w-12 h-12">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-2xl">
                      2020
                    </div>
                    <div className="text-foreground-secondary text-sm">
                      Company Founded
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex justify-center items-center bg-primary/10 rounded-xl w-12 h-12">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-2xl">
                      10,000+
                    </div>
                    <div className="text-foreground-secondary text-sm">
                      Active Customers
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex justify-center items-center bg-primary/10 rounded-xl w-12 h-12">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-2xl">
                      50+
                    </div>
                    <div className="text-foreground-secondary text-sm">
                      Countries Served
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-soft/50 py-20">
        <div className="mx-auto px-4 container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-foreground text-responsive-lg">
              Our Mission & Values
            </h2>
            <p className="text-foreground-secondary text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="p-6 rounded-xl text-center glass">
                <div className="flex justify-center items-center bg-primary/10 mx-auto mb-4 rounded-xl w-16 h-16">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-3 font-semibold text-foreground text-lg">
                  {value.title}
                </h3>
                <p className="text-foreground-secondary text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="mx-auto px-4 container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-foreground text-responsive-lg">
              Meet Our Team
            </h2>
            <p className="text-foreground-secondary text-lg">
              The passionate people behind MarketingPro
            </p>
          </div>

          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl text-center transition-all duration-300 glass hover:glow"
              >
                <div className="bg-primary/10 mx-auto mb-4 rounded-full w-24 h-24"></div>
                <h3 className="mb-1 font-semibold text-foreground text-lg">
                  {member.name}
                </h3>
                <p className="mb-3 text-primary text-sm">{member.role}</p>
                <p className="text-foreground-secondary text-sm">
                  {member.bio}
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
                Our Impact
              </h2>
              <p className="text-foreground-secondary text-lg">
                Numbers that reflect our commitment to customer success
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
                Join Our Journey
              </h2>
              <p className="text-foreground-secondary text-lg">
                Be part of the marketing revolution. Start your free trial today
                and see why thousands of businesses trust MarketingPro.
              </p>
              <div className="flex sm:flex-row flex-col justify-center gap-4">
                <Button size="lg" className="glow" asChild>
                  <Link href="/signup">
                    Start Free Trial
                    <Rocket className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const values = [
  {
    icon: Target,
    title: "Customer-Centric",
    description:
      "Every decision we make is guided by what's best for our customers and their success.",
  },
  {
    icon: Heart,
    title: "Simplicity",
    description:
      "We believe powerful tools should be simple to use. Complexity is the enemy of adoption.",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description:
      "We protect your data like it's our own and maintain the highest security standards.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description:
      "We continuously evolve our platform to stay ahead of marketing trends and technology.",
  },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-Founder",
    bio: "Former VP of Marketing at TechCorp with 15+ years of experience in digital marketing and business growth.",
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-Founder",
    bio: "Ex-Google engineer with expertise in scalable systems and machine learning applications in marketing.",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Product",
    bio: "Product strategist with a passion for user experience and data-driven product development.",
  },
  {
    name: "David Kim",
    role: "Head of Engineering",
    bio: "Full-stack developer and team leader focused on building reliable, performant marketing tools.",
  },
  {
    name: "Lisa Thompson",
    role: "Head of Customer Success",
    bio: "Customer advocate ensuring our users achieve their marketing goals and maximize platform value.",
  },
  {
    name: "James Wilson",
    role: "Head of Sales",
    bio: "Sales leader helping businesses discover how MarketingPro can transform their marketing efforts.",
  },
];

const stats = [
  { value: "10,000+", label: "Active Customers" },
  { value: "50M+", label: "Emails Sent Monthly" },
  { value: "99.9%", label: "Platform Uptime" },
  { value: "4.9/5", label: "Customer Rating" },
];
