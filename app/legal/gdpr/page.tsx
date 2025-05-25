import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import {
  Sparkles,
  Shield,
  Users,
  FileText,
  Download,
  Trash2,
} from "lucide-react";
import Link from "next/link";

export default function GDPRPage() {
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
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 opacity-5 animated-gradient"></div>
        <div className="z-10 relative mx-auto px-4 container">
          <div className="space-y-6 mx-auto max-w-4xl text-center">
            <div className="flex justify-center items-center bg-primary/10 mx-auto rounded-xl w-16 h-16">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-bold text-foreground text-responsive-xl leading-tight">
              GDPR Compliance
            </h1>
            <p className="mx-auto max-w-2xl text-foreground-secondary text-lg">
              We are fully compliant with the General Data Protection Regulation
              (GDPR) and respect your privacy rights.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Navigation */}
      <section className="py-8 border-b border-border">
        <div className="mx-auto px-4 container">
          <div className="flex flex-wrap justify-center gap-4">
            {legalPages.map((page, index) => (
              <Link
                key={index}
                href={page.href}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  page.href === "/legal/gdpr"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground-secondary hover:text-foreground hover:bg-muted/80"
                }`}
              >
                {page.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20">
        <div className="mx-auto px-4 container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-foreground text-responsive-lg">
              Your GDPR Rights
            </h2>
            <p className="text-foreground-secondary text-lg">
              Under GDPR, you have specific rights regarding your personal data
            </p>
          </div>

          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
            {gdprRights.map((right, index) => (
              <div key={index} className="p-8 rounded-xl glass">
                <div className="flex justify-center items-center bg-primary/10 mb-6 rounded-xl w-16 h-16">
                  <right.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-3 font-semibold text-foreground text-xl">
                  {right.title}
                </h3>
                <p className="mb-4 text-foreground-secondary">
                  {right.description}
                </p>
                <div className="space-y-2">
                  {right.details.map((detail, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <div className="bg-primary/20 mr-2 rounded-full w-1.5 h-1.5"></div>
                      <span className="text-foreground-secondary">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Comply */}
      <section className="bg-soft/50 py-20">
        <div className="mx-auto px-4 container">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-12">
              <div className="p-8 rounded-2xl glass">
                <h2 className="flex items-center gap-3 mb-6 font-bold text-foreground text-2xl">
                  <Shield className="w-6 h-6 text-primary" />
                  How We Ensure GDPR Compliance
                </h2>
                <div className="space-y-6 text-foreground-secondary">
                  <div>
                    <h3 className="mb-3 font-semibold text-foreground text-lg">
                      Data Processing Principles
                    </h3>
                    <ul className="space-y-2 ml-6 list-disc">
                      <li>
                        <strong>Lawfulness:</strong> We process data only when
                        we have a legal basis
                      </li>
                      <li>
                        <strong>Purpose Limitation:</strong> Data is collected
                        for specific, legitimate purposes
                      </li>
                      <li>
                        <strong>Data Minimization:</strong> We collect only
                        necessary data
                      </li>
                      <li>
                        <strong>Accuracy:</strong> We keep data accurate and up
                        to date
                      </li>
                      <li>
                        <strong>Storage Limitation:</strong> Data is kept only
                        as long as necessary
                      </li>
                      <li>
                        <strong>Security:</strong> Appropriate security measures
                        protect your data
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 font-semibold text-foreground text-lg">
                      Legal Basis for Processing
                    </h3>
                    <p>We process your personal data based on:</p>
                    <ul className="space-y-1 mt-2 ml-6 list-disc">
                      <li>Contract performance (to provide our services)</li>
                      <li>Legitimate interests (to improve our services)</li>
                      <li>Consent (for marketing communications)</li>
                      <li>Legal obligations (for compliance requirements)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl glass">
                <h2 className="flex items-center gap-3 mb-6 font-bold text-foreground text-2xl">
                  <Users className="w-6 h-6 text-primary" />
                  Data Subject Rights
                </h2>
                <div className="space-y-4 text-foreground-secondary">
                  <p>
                    As a data subject under GDPR, you have the right to exercise
                    the following rights regarding your personal data:
                  </p>
                  <div className="gap-6 grid md:grid-cols-2">
                    <div>
                      <h4 className="mb-2 font-medium text-foreground">
                        Access & Portability
                      </h4>
                      <ul className="space-y-1 ml-4 text-sm list-disc">
                        <li>Request access to your personal data</li>
                        <li>Receive data in a portable format</li>
                        <li>Transfer data to another service</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium text-foreground">
                        Correction & Deletion
                      </h4>
                      <ul className="space-y-1 ml-4 text-sm list-disc">
                        <li>Correct inaccurate information</li>
                        <li>Request deletion of your data</li>
                        <li>Restrict processing activities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl glass">
                <h2 className="flex items-center gap-3 mb-6 font-bold text-foreground text-2xl">
                  <FileText className="w-6 h-6 text-primary" />
                  Data Processing Activities
                </h2>
                <div className="space-y-4 text-foreground-secondary">
                  <p>We process personal data for the following purposes:</p>
                  <div className="gap-6 grid md:grid-cols-2">
                    <div>
                      <h4 className="mb-2 font-medium text-foreground">
                        Service Provision
                      </h4>
                      <ul className="space-y-1 ml-4 text-sm list-disc">
                        <li>Account management and authentication</li>
                        <li>Email campaign delivery and tracking</li>
                        <li>Customer support and communication</li>
                        <li>Billing and payment processing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium text-foreground">
                        Service Improvement
                      </h4>
                      <ul className="space-y-1 ml-4 text-sm list-disc">
                        <li>Analytics and usage statistics</li>
                        <li>Product development and testing</li>
                        <li>Security monitoring and fraud prevention</li>
                        <li>Marketing and promotional activities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exercise Your Rights */}
      <section className="py-20">
        <div className="mx-auto px-4 container">
          <div className="p-8 lg:p-12 rounded-2xl text-center glass">
            <div className="space-y-6 mx-auto max-w-2xl">
              <h2 className="font-bold text-foreground text-responsive-lg">
                Exercise Your GDPR Rights
              </h2>
              <p className="text-foreground-secondary text-lg">
                You can exercise your GDPR rights at any time. We will respond
                to your request within 30 days.
              </p>
              <div className="flex sm:flex-row flex-col justify-center gap-4">
                <Button size="lg" className="glow" asChild>
                  <Link href="/contact">Submit GDPR Request</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/legal/privacy-policy">View Privacy Policy</Link>
                </Button>
              </div>
              <div className="pt-4 text-foreground-secondary text-sm">
                <p>
                  For GDPR-related inquiries, contact our Data Protection
                  Officer at{" "}
                  <a
                    href="mailto:dpo@marketingpro.com"
                    className="text-primary hover:underline"
                  >
                    dpo@marketingpro.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const legalPages = [
  { title: "Privacy Policy", href: "/legal/privacy-policy" },
  { title: "Terms of Service", href: "/legal/terms-of-service" },
  { title: "Security", href: "/legal/security" },
  { title: "GDPR", href: "/legal/gdpr" },
];

const gdprRights = [
  {
    icon: FileText,
    title: "Right to Access",
    description:
      "Request access to your personal data and information about how we process it.",
    details: [
      "View all data we hold about you",
      "Understand how your data is used",
      "Receive data in a readable format",
      "Free of charge for reasonable requests",
    ],
  },
  {
    icon: Users,
    title: "Right to Rectification",
    description:
      "Request correction of inaccurate or incomplete personal data.",
    details: [
      "Correct factual errors",
      "Update outdated information",
      "Complete incomplete data",
      "Immediate correction when possible",
    ],
  },
  {
    icon: Trash2,
    title: "Right to Erasure",
    description:
      "Request deletion of your personal data under certain circumstances.",
    details: [
      "Delete unnecessary data",
      "Remove data processed unlawfully",
      "Withdraw consent for processing",
      "Account closure and data removal",
    ],
  },
  {
    icon: Shield,
    title: "Right to Restrict",
    description: "Request restriction of processing your personal data.",
    details: [
      "Limit how we use your data",
      "Pause processing activities",
      "Maintain data without processing",
      "Temporary or permanent restrictions",
    ],
  },
  {
    icon: Download,
    title: "Right to Portability",
    description:
      "Receive your personal data in a portable format or transfer it to another service.",
    details: [
      "Export your data",
      "Machine-readable format",
      "Transfer to other services",
      "Structured data delivery",
    ],
  },
  {
    icon: FileText,
    title: "Right to Object",
    description:
      "Object to processing of your personal data for certain purposes.",
    details: [
      "Object to marketing communications",
      "Stop automated decision-making",
      "Opt-out of profiling",
      "Withdraw consent anytime",
    ],
  },
];
