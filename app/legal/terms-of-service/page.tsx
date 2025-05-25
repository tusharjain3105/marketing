import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import {
  Sparkles,
  FileText,
  Scale,
  AlertTriangle,
  Users,
  Shield,
} from "lucide-react";
import Link from "next/link";

export default function TermsOfServicePage() {
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
              <Scale className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-bold text-foreground text-responsive-xl leading-tight">
              Terms of Service
            </h1>
            <p className="mx-auto max-w-2xl text-foreground-secondary text-lg">
              These terms govern your use of MarketingPro and outline the rights
              and responsibilities of all users.
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
                  page.href === "/legal/terms-of-service"
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
              {/* Acceptance */}
              <div className="p-8 rounded-2xl glass">
                <h2 className="flex items-center gap-3 mb-6 font-bold text-foreground text-2xl">
                  <FileText className="w-6 h-6 text-primary" />
                  Acceptance of Terms
                </h2>
                <div className="space-y-4 text-foreground-secondary">
                  <p>
                    By accessing and using MarketingPro (&quot;the
                    Service&quot;), you accept and agree to be bound by the
                    terms and provision of this agreement. If you do not agree
                    to abide by the above, please do not use this service.
                  </p>
                  <p>
                    These Terms of Service (&quot;Terms&quot;) govern your use
                    of our marketing platform and services operated by
                    MarketingPro Inc. (&quot;us&quot;, &quot;we&quot;, or
                    &quot;our&quot;).
                  </p>
                </div>
              </div>

              {/* Service Description */}
              <div className="p-8 rounded-2xl glass">
                <h2 className="flex items-center gap-3 mb-6 font-bold text-foreground text-2xl">
                  <Users className="w-6 h-6 text-primary" />
                  Service Description
                </h2>
                <div className="space-y-4 text-foreground-secondary">
                  <p>
                    MarketingPro provides a comprehensive marketing automation
                    platform that includes:
                  </p>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li>Email marketing and campaign management tools</li>
                    <li>Customer relationship management (CRM) features</li>
                    <li>Analytics and reporting capabilities</li>
                    <li>Marketing automation workflows</li>
                    <li>Lead generation and management tools</li>
                    <li>Integration with third-party services</li>
                  </ul>
                  <p>
                    We reserve the right to modify, suspend, or discontinue any
                    part of the Service at any time with reasonable notice to
                    users.
                  </p>
                </div>
              </div>

              {/* User Accounts */}
              <div className="p-8 rounded-2xl glass">
                <h2 className="mb-6 font-bold text-foreground text-2xl">
                  User Accounts and Registration
                </h2>
                <div className="space-y-4 text-foreground-secondary">
                  <p>To use our Service, you must:</p>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li>Be at least 18 years old or have parental consent</li>
                    <li>
                      Provide accurate and complete registration information
                    </li>
                    <li>Maintain the security of your account credentials</li>
                    <li>
                      Accept responsibility for all activities under your
                      account
                    </li>
                    <li>Notify us immediately of any unauthorized use</li>
                  </ul>
                  <p>
                    You are responsible for maintaining the confidentiality of
                    your account and password. We cannot and will not be liable
                    for any loss or damage arising from your failure to comply
                    with this security obligation.
                  </p>
                </div>
              </div>

              {/* Acceptable Use */}
              <div className="p-8 rounded-2xl glass">
                <h2 className="flex items-center gap-3 mb-6 font-bold text-foreground text-2xl">
                  <Shield className="w-6 h-6 text-primary" />
                  Acceptable Use Policy
                </h2>
                <div className="space-y-6 text-foreground-secondary">
                  <div>
                    <h3 className="mb-3 font-semibold text-foreground text-lg">
                      You agree NOT to use the Service to:
                    </h3>
                    <ul className="space-y-1 ml-6 list-disc">
                      <li>
                        Send spam, unsolicited emails, or violate anti-spam laws
                      </li>
                      <li>Upload or transmit malicious code or viruses</li>
                      <li>Violate any applicable laws or regulations</li>
                      <li>Infringe on intellectual property rights</li>
                      <li>Harass, abuse, or harm other users</li>
                      <li>
                        Attempt to gain unauthorized access to our systems
                      </li>
                      <li>
                        Use the Service for illegal or fraudulent activities
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 font-semibold text-foreground text-lg">
                      Email Marketing Compliance:
                    </h3>
                    <ul className="space-y-1 ml-6 list-disc">
                      <li>
                        Obtain proper consent before sending marketing emails
                      </li>
                      <li>Include clear unsubscribe mechanisms</li>
                      <li>
                        Comply with CAN-SPAM, GDPR, and other applicable laws
                      </li>
                      <li>Maintain accurate sender information</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Payment Terms */}
              <div className="p-8 rounded-2xl glass">
                <h2 className="mb-6 font-bold text-foreground text-2xl">
                  Payment and Billing
                </h2>
                <div className="space-y-4 text-foreground-secondary">
                  <div>
                    <h3 className="mb-3 font-semibold text-foreground text-lg">
                      Subscription Plans:
                    </h3>
                    <ul className="space-y-1 ml-6 list-disc">
                      <li>
                        Fees are charged in advance on a monthly or annual basis
                      </li>
                      <li>
                        All fees are non-refundable except as required by law
                      </li>
                      <li>We may change pricing with 30 days advance notice</li>
                      <li>Taxes may apply based on your location</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 font-semibold text-foreground text-lg">
                      Payment Processing:
                    </h3>
                    <ul className="space-y-1 ml-6 list-disc">
                      <li>
                        Payments are processed by secure third-party providers
                      </li>
                      <li>You authorize us to charge your payment method</li>
                      <li>Failed payments may result in service suspension</li>
                      <li>
                        You are responsible for keeping payment information
                        current
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data and Privacy */}
              <div className="p-8 rounded-2xl glass">
                <h2 className="mb-6 font-bold text-foreground text-2xl">
                  Data Ownership and Privacy
                </h2>
                <div className="space-y-4 text-foreground-secondary">
                  <p>
                    You retain ownership of all data you upload to our Service.
                    We do not claim ownership of your content, customer lists,
                    or marketing materials.
                  </p>
                  <div>
                    <h3 className="mb-3 font-semibold text-foreground text-lg">
                      Our Responsibilities:
                    </h3>
                    <ul className="space-y-1 ml-6 list-disc">
                      <li>
                        Protect your data with industry-standard security
                        measures
                      </li>
                      <li>
                        Process data only as necessary to provide the Service
                      </li>
                      <li>Comply with applicable data protection laws</li>
                      <li>Provide data portability upon request</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-3 font-semibold text-foreground text-lg">
                      Your Responsibilities:
                    </h3>
                    <ul className="space-y-1 ml-6 list-disc">
                      <li>
                        Ensure you have rights to upload and use your data
                      </li>
                      <li>Comply with privacy laws regarding customer data</li>
                      <li>Maintain backups of important data</li>
                      <li>Respect the privacy rights of your contacts</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Limitations */}
              <div className="p-8 rounded-2xl glass">
                <h2 className="flex items-center gap-3 mb-6 font-bold text-foreground text-2xl">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  Limitations and Disclaimers
                </h2>
                <div className="space-y-4 text-foreground-secondary">
                  <div>
                    <h3 className="mb-3 font-semibold text-foreground text-lg">
                      Service Availability:
                    </h3>
                    <p>
                      While we strive for 99.9% uptime, we cannot guarantee
                      uninterrupted service. We may perform maintenance,
                      updates, or experience technical issues that temporarily
                      affect availability.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 font-semibold text-foreground text-lg">
                      Limitation of Liability:
                    </h3>
                    <p>
                      To the maximum extent permitted by law, MarketingPro shall
                      not be liable for any indirect, incidental, special,
                      consequential, or punitive damages, including loss of
                      profits, data, or business opportunities.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 font-semibold text-foreground text-lg">
                      Warranty Disclaimer:
                    </h3>
                    <p>
                      The Service is provided &quot;as is&quot; without
                      warranties of any kind, either express or implied,
                      including but not limited to merchantability, fitness for
                      a particular purpose, or non-infringement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Termination */}
              <div className="p-8 rounded-2xl glass">
                <h2 className="mb-6 font-bold text-foreground text-2xl">
                  Termination
                </h2>
                <div className="space-y-4 text-foreground-secondary">
                  <div>
                    <h3 className="mb-3 font-semibold text-foreground text-lg">
                      By You:
                    </h3>
                    <ul className="space-y-1 ml-6 list-disc">
                      <li>You may cancel your subscription at any time</li>
                      <li>
                        Cancellation takes effect at the end of your billing
                        period
                      </li>
                      <li>
                        You remain responsible for charges incurred before
                        cancellation
                      </li>
                      <li>You may export your data before termination</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 font-semibold text-foreground text-lg">
                      By Us:
                    </h3>
                    <ul className="space-y-1 ml-6 list-disc">
                      <li>
                        We may suspend or terminate accounts for Terms
                        violations
                      </li>
                      <li>
                        We may terminate with 30 days notice for business
                        reasons
                      </li>
                      <li>
                        Immediate termination may occur for serious violations
                      </li>
                      <li>
                        We will provide reasonable opportunity to export data
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Changes to Terms */}
              <div className="p-8 rounded-2xl glass">
                <h2 className="mb-6 font-bold text-foreground text-2xl">
                  Changes to Terms
                </h2>
                <div className="space-y-4 text-foreground-secondary">
                  <p>
                    We reserve the right to modify these Terms at any time. We
                    will notify users of material changes via email or through
                    the Service at least 30 days before the changes take effect.
                  </p>
                  <p>
                    Your continued use of the Service after changes become
                    effective constitutes acceptance of the new Terms. If you do
                    not agree to the changes, you must stop using the Service.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="p-8 rounded-2xl glass">
                <h2 className="mb-6 font-bold text-foreground text-2xl">
                  Contact Information
                </h2>
                <div className="space-y-4 text-foreground-secondary">
                  <p>
                    If you have any questions about these Terms of Service,
                    please contact us:
                  </p>
                  <div className="space-y-2">
                    <p>
                      <strong>Email:</strong> legal@marketingpro.com
                    </p>
                    <p>
                      <strong>Address:</strong> 123 Marketing Street, Suite 456,
                      San Francisco, CA 94105
                    </p>
                    <p>
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </p>
                  </div>
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
