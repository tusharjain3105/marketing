import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { Sparkles, Shield, Lock, Server, Eye, Award } from "lucide-react";
import Link from "next/link";

export default function SecurityPage() {
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
              Security & Compliance
            </h1>
            <p className="mx-auto max-w-2xl text-foreground-secondary text-lg">
              Your data security is our top priority. Learn about our
              comprehensive security measures and compliance standards.
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
                  page.href === "/legal/security"
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

      {/* Security Features */}
      <section className="py-20">
        <div className="mx-auto px-4 container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-foreground text-responsive-lg">
              Enterprise-Grade Security
            </h2>
            <p className="text-foreground-secondary text-lg">
              Comprehensive protection for your data and privacy
            </p>
          </div>

          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="p-8 rounded-xl glass">
                <div className="flex justify-center items-center bg-primary/10 mb-6 rounded-xl w-16 h-16">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-3 font-semibold text-foreground text-xl">
                  {feature.title}
                </h3>
                <p className="mb-4 text-foreground-secondary">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <div className="bg-primary/20 mr-2 rounded-full w-1.5 h-1.5"></div>
                      <span className="text-foreground-secondary">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="bg-soft/50 py-20">
        <div className="mx-auto px-4 container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-foreground text-responsive-lg">
              Compliance & Certifications
            </h2>
            <p className="text-foreground-secondary text-lg">
              We meet the highest industry standards for security and privacy
            </p>
          </div>

          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="p-6 rounded-xl text-center glass">
                <div className="flex justify-center items-center bg-primary/10 mx-auto mb-4 rounded-xl w-16 h-16">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground text-lg">
                  {standard.name}
                </h3>
                <p className="text-foreground-secondary text-sm">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-20">
        <div className="mx-auto px-4 container">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-12">
              <div className="p-8 rounded-2xl glass">
                <h2 className="flex items-center gap-3 mb-6 font-bold text-foreground text-2xl">
                  <Lock className="w-6 h-6 text-primary" />
                  Data Protection
                </h2>
                <div className="space-y-4 text-foreground-secondary">
                  <p>
                    We implement multiple layers of security to protect your
                    data at rest and in transit. All data is encrypted using
                    industry-standard AES-256 encryption.
                  </p>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li>End-to-end encryption for all data transmission</li>
                    <li>Encrypted storage with regular security audits</li>
                    <li>Multi-factor authentication for all accounts</li>
                    <li>
                      Regular penetration testing and vulnerability assessments
                    </li>
                    <li>24/7 security monitoring and incident response</li>
                  </ul>
                </div>
              </div>

              <div className="p-8 rounded-2xl glass">
                <h2 className="flex items-center gap-3 mb-6 font-bold text-foreground text-2xl">
                  <Server className="w-6 h-6 text-primary" />
                  Infrastructure Security
                </h2>
                <div className="space-y-4 text-foreground-secondary">
                  <p>
                    Our infrastructure is hosted on secure, SOC 2 compliant
                    cloud providers with redundant systems and automatic
                    failover capabilities.
                  </p>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li>Secure cloud infrastructure with 99.9% uptime SLA</li>
                    <li>Automated backups with point-in-time recovery</li>
                    <li>Network segmentation and firewall protection</li>
                    <li>DDoS protection and traffic monitoring</li>
                    <li>Regular security patches and updates</li>
                  </ul>
                </div>
              </div>

              <div className="p-8 rounded-2xl glass">
                <h2 className="flex items-center gap-3 mb-6 font-bold text-foreground text-2xl">
                  <Eye className="w-6 h-6 text-primary" />
                  Access Controls
                </h2>
                <div className="space-y-4 text-foreground-secondary">
                  <p>
                    We maintain strict access controls and follow the principle
                    of least privilege to ensure only authorized personnel can
                    access your data.
                  </p>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li>Role-based access control (RBAC) for all users</li>
                    <li>
                      Multi-factor authentication required for all accounts
                    </li>
                    <li>Regular access reviews and deprovisioning</li>
                    <li>Audit logs for all system access and changes</li>
                    <li>Background checks for all employees</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-soft/50 py-20">
        <div className="mx-auto px-4 container">
          <div className="p-8 lg:p-12 rounded-2xl text-center glass">
            <div className="space-y-6 mx-auto max-w-2xl">
              <h2 className="font-bold text-foreground text-responsive-lg">
                Questions About Security?
              </h2>
              <p className="text-foreground-secondary text-lg">
                Our security team is here to answer any questions about our
                security practices and compliance.
              </p>
              <div className="flex sm:flex-row flex-col justify-center gap-4">
                <Button size="lg" className="glow" asChild>
                  <Link href="/contact">Contact Security Team</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/legal/privacy-policy">View Privacy Policy</Link>
                </Button>
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

const securityFeatures = [
  {
    icon: Lock,
    title: "Data Encryption",
    description:
      "All data is protected with enterprise-grade encryption both at rest and in transit.",
    details: [
      "AES-256 encryption",
      "TLS 1.3 for data in transit",
      "Encrypted database storage",
      "Key rotation policies",
    ],
  },
  {
    icon: Shield,
    title: "Access Control",
    description:
      "Strict access controls ensure only authorized users can access your data.",
    details: [
      "Multi-factor authentication",
      "Role-based permissions",
      "Session management",
      "Regular access audits",
    ],
  },
  {
    icon: Server,
    title: "Infrastructure",
    description:
      "Secure, monitored infrastructure with redundancy and disaster recovery.",
    details: [
      "SOC 2 compliant hosting",
      "24/7 monitoring",
      "Automated backups",
      "DDoS protection",
    ],
  },
  {
    icon: Eye,
    title: "Monitoring",
    description:
      "Continuous monitoring and logging of all system activities and access.",
    details: [
      "Real-time threat detection",
      "Audit logging",
      "Incident response",
      "Security analytics",
    ],
  },
  {
    icon: Award,
    title: "Compliance",
    description:
      "We meet industry standards and regulatory requirements for data protection.",
    details: [
      "GDPR compliant",
      "SOC 2 Type II",
      "ISO 27001 aligned",
      "Regular audits",
    ],
  },
  {
    icon: Shield,
    title: "Privacy",
    description:
      "Your privacy is protected with comprehensive data handling policies.",
    details: [
      "Data minimization",
      "Purpose limitation",
      "Retention policies",
      "Right to deletion",
    ],
  },
];

const complianceStandards = [
  {
    name: "GDPR",
    description: "Full compliance with European data protection regulations",
  },
  {
    name: "SOC 2 Type II",
    description: "Audited security controls and operational effectiveness",
  },
  {
    name: "ISO 27001",
    description: "Information security management system standards",
  },
  {
    name: "CAN-SPAM",
    description: "Compliance with email marketing regulations",
  },
];
