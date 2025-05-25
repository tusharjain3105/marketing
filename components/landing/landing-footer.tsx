import { Button } from "@/components/ui/button";
import { Sparkles, Mail, Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export function LandingFooter() {
  return (
    <footer className="bg-soft/30 border-t border-border/50">
      <div className="mx-auto px-4 py-16 container">
        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex justify-center items-center bg-primary rounded-lg w-8 h-8">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground text-xl">
                MarketingPro
              </span>
            </Link>
            <p className="text-foreground-secondary text-sm">
              Empowering businesses with smart marketing automation tools. Grow
              your audience, increase conversions, and scale your success.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://twitter.com" target="_blank">
                  <Twitter className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://github.com" target="_blank">
                  <Github className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Product</h3>
            <div className="space-y-2">
              {productLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-foreground-secondary hover:text-foreground text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <div className="space-y-2">
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-foreground-secondary hover:text-foreground text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Legal</h3>
            <div className="space-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-foreground-secondary hover:text-foreground text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="items-center gap-8 grid md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-semibold text-foreground">
                Stay updated
              </h3>
              <p className="text-foreground-secondary text-sm">
                Get the latest marketing tips and product updates delivered to
                your inbox.
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-background px-4 py-2 border focus:border-primary border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"
              />
              <Button>
                <Mail className="mr-2 w-4 h-4" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex sm:flex-row flex-col justify-between items-center gap-4 mt-8 pt-8 border-t border-border/50">
          <p className="text-foreground-secondary text-sm">
            © 2024 MarketingPro. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/legal/privacy-policy"
              className="text-foreground-secondary hover:text-foreground text-sm transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/legal/terms-of-service"
              className="text-foreground-secondary hover:text-foreground text-sm transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/legal/security"
              className="text-foreground-secondary hover:text-foreground text-sm transition-colors"
            >
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const productLinks = [
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Integrations", href: "/integrations" },
  { name: "API", href: "/api" },
  { name: "Documentation", href: "/docs" },
];

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
  { name: "Press", href: "/press" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/legal/privacy-policy" },
  { name: "Terms of Service", href: "/legal/terms-of-service" },
  { name: "Security", href: "/legal/security" },
  { name: "GDPR", href: "/legal/gdpr" },
];
