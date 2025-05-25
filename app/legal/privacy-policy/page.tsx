import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { Sparkles, Shield, Eye, Lock, Users, FileText } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="mx-auto max-w-2xl text-foreground-secondary text-lg">
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your information.
            </p>
            <div className="text-foreground-secondary text-sm">
              Last updated: December 15, 2024
            </div>
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
                  page.href === "/legal/privacy-policy"
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

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto px-4 container">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-12 dark:prose-invert max-w-none prose prose-lg">
              {/* Overview */}
              <div className="p-8 rounded-2xl glass">
                <h2 className="flex items-center gap-3 mb-6 font-bold text-foreground text-2xl">
                  <Eye className="w-6 h-6 text-primary" />
                  Overview
                </h2>
                <div className="space-y-4 text-foreground-secondary">
                  <p>
                    At MarketingPro, we are committed to protecting your privacy
                    and ensuring the security of your personal information. This
                    Privacy Policy explains how we collect, use, disclose, and
                    safeguard your information when you use our marketing
                    platform and services.
                  </p>
                  <p>
                    By using our services, you agree to the collection and use
                    of information in accordance with this policy. We will not
                    use or share your information with anyone except as
                    described in this Privacy Policy.
                  </p>
                </div>
              </div>

              {/* Information We Collect */}
              <div className="p-8 rounded-2xl glass">
                <h2 className="flex items-center gap-3 mb-6 font-bold text-foreground text-2xl">
                  <FileText className="w-6 h-6 text-primary" />
                  Information We Collect
                </h2>
                <div className="space-y-6 text-foreground-secondary">
                  <div>
                    <h3 className="mb-3 font-semibold text-foreground text-lg">
                      Personal Information
                    </h3>
                    <p>We may collect the following personal information:</p>
                    <ul className="space-y-1 mt-2 ml-6 list-disc">
                      <li>
                        Name and contact information (email address, phone
                        number)
                      </li>
                      <li>Company information and job title</li>
                      <li>Billing and payment information</li>
                      <li>Account credentials and preferences</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 font-semibold text-foreground text-lg">
                      Usage Information
                    </h3>
                    <p>
                      We automatically collect information about how you use our
                      services:
                    </p>
                    <ul className="space-y-1 mt-2 ml-6 list-disc">
                      <li>Log data and analytics</li>
                      <li>Device information and IP address</li>
                      <li>Browser type and version</li>
                      <li>Pages visited and time spent on our platform</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 font-semibold text-foreground text-lg">
                      Marketing Data
                    </h3>
                    <p>
                      When you use our platform to manage your marketing
                      campaigns:
                    </p>
                    <ul className="space-y-1 mt-2 ml-6 list-disc">
                      <li>Contact lists and customer data you upload</li>
                      <li>Email campaign content and performance metrics</li>
                      <li>Website tracking and analytics data</li>
                      <li>Integration data from connected services</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="p-8 rounded-2xl glass">
                <h2 className="flex items-center gap-3 mb-6 font-bold text-foreground text-2xl">
                  <Users className="w-6 h-6 text-primary" />
                  How We Use Your Information
                </h2>
                <div className="space-y-4 text-foreground-secondary">
                  <p>We use the collected information for various purposes:</p>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li>
                      To provide and maintain our marketing platform services
                    </li>
                    <li>To process transactions and manage your account</li>
                    <li>
                      To send you technical notices, updates, and support
                      messages
                    </li>
                    <li>
                      To respond to your comments, questions, and customer
                      service requests
                    </li>
                    <li>To analyze usage patterns and improve our services</li>
                    <li>
                      To detect, prevent, and address technical issues and
                      security threats
                    </li>
                    <li>
                      To comply with legal obligations and protect our rights
                    </li>
                  </ul>
                </div>
              </div>

              {/* Data Security */}
              <div className="p-8 rounded-2xl glass">
                <h2 className="flex items-center gap-3 mb-6 font-bold text-foreground text-2xl">
                  <Lock className="w-6 h-6 text-primary" />
                  Data Security
                </h2>
                <div className="space-y-4 text-foreground-secondary">
                  <p>
                    We implement appropriate technical and organizational
                    security measures to protect your personal information
                    against unauthorized access, alteration, disclosure, or
                    destruction.
                  </p>
                  <div>
                    <h3 className="mb-3 font-semibold text-foreground text-lg">
                      Security Measures Include:
                    </h3>
                    <ul className="space-y-1 ml-6 list-disc">
                      <li>End-to-end encryption for data transmission</li>
                      <li>Secure data storage with regular backups</li>
                      <li>Multi-factor authentication for account access</li>
                      <li>Regular security audits and penetration testing</li>
                      <li>Employee training on data protection practices</li>
                      <li>Compliance with industry security standards</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Sharing */}
              <div className="p-8 rounded-2xl glass">
                <h2 className="mb-6 font-bold text-foreground text-2xl">
                  Information Sharing
                </h2>
                <div className="space-y-4 text-foreground-secondary">
                  <p>
                    We do not sell, trade, or otherwise transfer your personal
                    information to third parties except in the following
                    circumstances:
                  </p>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li>
                      <strong>Service Providers:</strong> We may share
                      information with trusted third-party service providers who
                      assist us in operating our platform
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> We may disclose
                      information when required by law or to protect our rights
                      and safety
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> In the event of a
                      merger, acquisition, or sale of assets, your information
                      may be transferred
                    </li>
                    <li>
                      <strong>Consent:</strong> We may share information with
                      your explicit consent for specific purposes
                    </li>
                  </ul>
                </div>
              </div>

              {/* Your Rights */}
              <div className="p-8 rounded-2xl glass">
                <h2 className="mb-6 font-bold text-foreground text-2xl">
                  Your Privacy Rights
                </h2>
                <div className="space-y-4 text-foreground-secondary">
                  <p>
                    Depending on your location, you may have the following
                    rights regarding your personal information:
                  </p>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li>
                      <strong>Access:</strong> Request access to your personal
                      information we hold
                    </li>
                    <li>
                      <strong>Correction:</strong> Request correction of
                      inaccurate or incomplete information
                    </li>
                    <li>
                      <strong>Deletion:</strong> Request deletion of your
                      personal information
                    </li>
                    <li>
                      <strong>Portability:</strong> Request a copy of your data
                      in a portable format
                    </li>
                    <li>
                      <strong>Restriction:</strong> Request restriction of
                      processing your information
                    </li>
                    <li>
                      <strong>Objection:</strong> Object to processing of your
                      information for certain purposes
                    </li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, please contact us at
                    privacy@marketingpro.com. We will respond to your request
                    within 30 days.
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div className="p-8 rounded-2xl glass">
                <h2 className="mb-6 font-bold text-foreground text-2xl">
                  Cookies and Tracking
                </h2>
                <div className="space-y-4 text-foreground-secondary">
                  <p>
                    We use cookies and similar tracking technologies to enhance
                    your experience on our platform. Cookies are small data
                    files stored on your device that help us remember your
                    preferences and improve our services.
                  </p>
                  <div>
                    <h3 className="mb-3 font-semibold text-foreground text-lg">
                      Types of Cookies We Use:
                    </h3>
                    <ul className="space-y-1 ml-6 list-disc">
                      <li>
                        <strong>Essential Cookies:</strong> Required for the
                        platform to function properly
                      </li>
                      <li>
                        <strong>Analytics Cookies:</strong> Help us understand
                        how you use our services
                      </li>
                      <li>
                        <strong>Preference Cookies:</strong> Remember your
                        settings and preferences
                      </li>
                      <li>
                        <strong>Marketing Cookies:</strong> Used to deliver
                        relevant advertisements
                      </li>
                    </ul>
                  </div>
                  <p>
                    You can control cookie settings through your browser
                    preferences. However, disabling certain cookies may affect
                    the functionality of our platform.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="p-8 rounded-2xl glass">
                <h2 className="mb-6 font-bold text-foreground text-2xl">
                  Contact Us
                </h2>
                <div className="space-y-4 text-foreground-secondary">
                  <p>
                    If you have any questions about this Privacy Policy or our
                    data practices, please contact us:
                  </p>
                  <div className="space-y-2">
                    <p>
                      <strong>Email:</strong> privacy@marketingpro.com
                    </p>
                    <p>
                      <strong>Address:</strong> 123 Marketing Street, Suite 456,
                      San Francisco, CA 94105
                    </p>
                    <p>
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </p>
                  </div>
                  <p>
                    We will make every effort to resolve any privacy concerns
                    you may have.
                  </p>
                </div>
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
