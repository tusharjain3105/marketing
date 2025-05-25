import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { Check, Crown, Rocket, Sparkles, X, Zap } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
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
            <Link href="/pricing" className="font-medium text-primary">
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
              Simple, Transparent{" "}
              <span className="bg-clip-text bg-gradient-to-r from-primary via-primary-medium to-primary-strong text-transparent">
                Pricing
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-foreground-secondary text-responsive-md">
              Choose the perfect plan for your business. Start free and scale as
              you grow.
            </p>

            {/* Billing Toggle */}
            <div className="flex justify-center items-center space-x-4">
              <span className="text-foreground-secondary">Monthly</span>
              <div className="relative">
                <input
                  type="checkbox"
                  id="billing-toggle"
                  className="sr-only"
                />
                <label
                  htmlFor="billing-toggle"
                  className="flex items-center cursor-pointer"
                >
                  <div className="relative bg-muted rounded-full w-12 h-6">
                    <div className="top-0.5 left-0.5 absolute bg-primary rounded-full w-5 h-5 transition-transform duration-200"></div>
                  </div>
                </label>
              </div>
              <span className="text-foreground-secondary">
                Yearly
                <span className="bg-primary/10 ml-1 px-2 py-1 rounded-full text-primary text-xs">
                  Save 20%
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="mx-auto px-4 container">
          <div className="gap-8 grid lg:grid-cols-4 mx-auto max-w-7xl">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`glass rounded-2xl p-8 relative ${
                  plan.popular ? "ring-2 ring-primary glow" : ""
                } hover:glow transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="-top-4 left-1/2 absolute -translate-x-1/2 transform">
                    <div className="bg-primary px-4 py-1 rounded-full font-medium text-primary-foreground text-sm">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="space-y-6 text-center">
                  {/* Plan Icon */}
                  <div className="flex justify-center items-center bg-primary/10 mx-auto rounded-xl w-16 h-16">
                    <plan.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Plan Name */}
                  <div>
                    <h3 className="font-bold text-foreground text-xl">
                      {plan.name}
                    </h3>
                    <p className="mt-1 text-foreground-secondary text-sm">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="space-y-2">
                    <div className="font-bold text-foreground text-4xl">
                      {plan.price === 0 ? "Free" : `$${plan.price}`}
                      {plan.price > 0 && (
                        <span className="text-foreground-secondary text-lg">
                          /month
                        </span>
                      )}
                    </div>
                    {plan.yearlyPrice && (
                      <div className="text-foreground-secondary text-sm">
                        or ${plan.yearlyPrice}/year (save 20%)
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full ${plan.popular ? "glow" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <Link href="/signup">{plan.cta}</Link>
                  </Button>

                  {/* Features */}
                  <div className="space-y-3 text-left">
                    <div className="font-medium text-foreground text-sm">
                      What's included:
                    </div>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <Check className="flex-shrink-0 mt-0.5 mr-3 w-4 h-4 text-primary" />
                          <span className="text-foreground-secondary">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {plan.limitations && plan.limitations.length > 0 && (
                      <ul className="space-y-2 pt-2 border-t border-border">
                        {plan.limitations.map((limitation, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <X className="flex-shrink-0 mt-0.5 mr-3 w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">
                              {limitation}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="bg-soft/50 py-20">
        <div className="mx-auto px-4 container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-foreground text-responsive-lg">
              Compare Plans
            </h2>
            <p className="text-foreground-secondary text-lg">
              See what's included in each plan
            </p>
          </div>

          <div className="p-8 rounded-2xl overflow-x-auto glass">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 font-medium text-foreground text-left">
                    Features
                  </th>
                  {pricingPlans.map((plan, index) => (
                    <th
                      key={index}
                      className="py-4 min-w-32 font-medium text-foreground text-center"
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureComparison.map((feature, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-4 text-foreground-secondary">
                      {feature.name}
                    </td>
                    {feature.plans.map((included, planIndex) => (
                      <td key={planIndex} className="py-4 text-center">
                        {typeof included === "boolean" ? (
                          included ? (
                            <Check className="mx-auto w-5 h-5 text-primary" />
                          ) : (
                            <X className="mx-auto w-5 h-5 text-muted-foreground" />
                          )
                        ) : (
                          <span className="text-foreground-secondary text-sm">
                            {included}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="mx-auto px-4 container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-foreground text-responsive-lg">
              Frequently Asked Questions
            </h2>
            <p className="text-foreground-secondary text-lg">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-6 mx-auto max-w-3xl">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 rounded-xl glass">
                <h3 className="mb-2 font-semibold text-foreground text-lg">
                  {faq.question}
                </h3>
                <p className="text-foreground-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-soft/50 py-20">
        <div className="mx-auto px-4 container">
          <div className="p-8 lg:p-12 rounded-2xl text-center glass">
            <div className="space-y-6 mx-auto max-w-2xl">
              <h2 className="font-bold text-foreground text-responsive-lg">
                Ready to get started?
              </h2>
              <p className="text-foreground-secondary text-lg">
                Start your free trial today. No credit card required.
              </p>
              <div className="flex sm:flex-row flex-col justify-center gap-4">
                <Button size="lg" className="glow" asChild>
                  <Link href="/signup">Start Free Trial</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small teams",
    price: 0,
    yearlyPrice: null,
    icon: Sparkles,
    cta: "Get Started Free",
    popular: false,
    features: [
      "Up to 1,000 contacts",
      "5 email campaigns per month",
      "Basic templates",
      "Email support",
      "Basic analytics",
    ],
    limitations: [
      "No automation",
      "Limited integrations",
      "MarketingPro branding",
    ],
  },
  {
    name: "Professional",
    description: "For growing businesses",
    price: 29,
    yearlyPrice: 279,
    icon: Rocket,
    cta: "Start Free Trial",
    popular: true,
    features: [
      "Up to 10,000 contacts",
      "Unlimited email campaigns",
      "Premium templates",
      "Marketing automation",
      "Advanced analytics",
      "A/B testing",
      "Priority support",
      "Custom branding",
    ],
    limitations: [],
  },
  {
    name: "Business",
    description: "For established companies",
    price: 79,
    yearlyPrice: 759,
    icon: Crown,
    cta: "Start Free Trial",
    popular: false,
    features: [
      "Up to 50,000 contacts",
      "Everything in Professional",
      "Advanced segmentation",
      "Multi-user collaboration",
      "Custom integrations",
      "Phone support",
      "Dedicated account manager",
      "Advanced reporting",
    ],
    limitations: [],
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: 199,
    yearlyPrice: 1909,
    icon: Zap,
    cta: "Contact Sales",
    popular: false,
    features: [
      "Unlimited contacts",
      "Everything in Business",
      "White-label solution",
      "Custom development",
      "SLA guarantee",
      "24/7 phone support",
      "On-premise deployment",
      "Advanced security features",
    ],
    limitations: [],
  },
];

const featureComparison = [
  {
    name: "Contacts",
    plans: ["1,000", "10,000", "50,000", "Unlimited"],
  },
  {
    name: "Email Campaigns",
    plans: ["5/month", "Unlimited", "Unlimited", "Unlimited"],
  },
  {
    name: "Automation",
    plans: [false, true, true, true],
  },
  {
    name: "A/B Testing",
    plans: [false, true, true, true],
  },
  {
    name: "Advanced Analytics",
    plans: [false, true, true, true],
  },
  {
    name: "Custom Branding",
    plans: [false, true, true, true],
  },
  {
    name: "Priority Support",
    plans: [false, true, true, true],
  },
  {
    name: "Phone Support",
    plans: [false, false, true, true],
  },
  {
    name: "White-label",
    plans: [false, false, false, true],
  },
];

const faqs = [
  {
    question: "Can I change my plan at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes, we offer a 14-day free trial for all paid plans. No credit card required to start.",
  },
  {
    question: "What happens if I exceed my contact limit?",
    answer:
      "We'll notify you when you're approaching your limit. You can upgrade your plan or we'll temporarily pause your campaigns until you upgrade.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 30-day money-back guarantee for all paid plans. Contact our support team for assistance.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes, you can cancel your subscription at any time. Your account will remain active until the end of your current billing period.",
  },
  {
    question: "Do you offer discounts for nonprofits?",
    answer:
      "Yes, we offer special pricing for qualified nonprofit organizations. Contact our sales team for more information.",
  },
];
