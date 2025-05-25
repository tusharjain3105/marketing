"use client";

import { Button } from "@/components/ui/button";
import { Check, Sparkles, Rocket, Crown, Building } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <>
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
            <div className="flex justify-center items-center gap-4">
              <span
                className={`text-sm ${!isYearly ? "text-foreground font-medium" : "text-foreground-secondary"}`}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isYearly ? "bg-primary" : "bg-border"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isYearly ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span
                className={`text-sm ${isYearly ? "text-foreground font-medium" : "text-foreground-secondary"}`}
              >
                Yearly
              </span>
              <span className="bg-primary/10 px-2 py-1 rounded-full font-medium text-primary text-xs">
                Save 20%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="mx-auto px-4 container">
          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl transition-all duration-300 ${
                  plan.popular
                    ? "ring-2 ring-primary glass-strong glow"
                    : "glass hover:glow"
                }`}
              >
                {plan.popular && (
                  <div className="top-0 left-1/2 absolute bg-primary px-4 py-1 rounded-full font-medium text-primary-foreground text-sm -translate-x-1/2 -translate-y-1/2 transform">
                    Most Popular
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Header */}
                  <div className="space-y-4 text-center">
                    <div className="flex justify-center items-center bg-primary/10 mx-auto rounded-xl w-16 h-16">
                      <plan.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-bold text-foreground text-xl">
                        {plan.name}
                      </h3>
                      <p className="text-foreground-secondary text-sm">
                        {plan.description}
                      </p>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="text-center">
                    <div className="flex justify-center items-baseline">
                      <span className="font-bold text-foreground text-4xl">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="ml-1 text-foreground-secondary">
                        /{isYearly ? "year" : "month"}
                      </span>
                    </div>
                    {isYearly && plan.monthlyPrice > 0 && (
                      <p className="mt-1 text-foreground-secondary text-sm">
                        ${plan.monthlyPrice}/month billed annually
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="flex-shrink-0 mt-0.5 w-4 h-4 text-primary" />
                        <span className="text-foreground-secondary text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={`w-full ${plan.popular ? "glow" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link href="/signup">{plan.cta}</Link>
                  </Button>
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
              Compare Features
            </h2>
            <p className="text-foreground-secondary text-lg">
              See what's included in each plan
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="p-8 rounded-2xl min-w-full glass">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="pb-4 font-semibold text-foreground text-left">
                      Features
                    </th>
                    {pricingPlans.map((plan) => (
                      <th
                        key={plan.name}
                        className="pb-4 font-semibold text-foreground text-center"
                      >
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="space-y-4">
                  {featureComparison.map((feature, index) => (
                    <tr key={index} className="border-b border-border/30">
                      <td className="py-4 font-medium text-foreground">
                        {feature.name}
                      </td>
                      {feature.plans.map((included, planIndex) => (
                        <td key={planIndex} className="py-4 text-center">
                          {typeof included === "boolean" ? (
                            included ? (
                              <Check className="mx-auto w-5 h-5 text-primary" />
                            ) : (
                              <span className="text-foreground-secondary">
                                —
                              </span>
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
                Join thousands of businesses already growing with MarketingPro.
                Start your free trial today.
              </p>
              <div className="flex sm:flex-row flex-col justify-center gap-4">
                <Button size="lg" className="glow" asChild>
                  <Link href="/signup">
                    Start Free Trial
                    <Rocket className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started",
    monthlyPrice: 0,
    yearlyPrice: 0,
    icon: Sparkles,
    popular: false,
    cta: "Get Started Free",
    features: [
      "Up to 1,000 contacts",
      "5,000 emails per month",
      "Basic email templates",
      "Email analytics",
      "24/7 email support",
    ],
  },
  {
    name: "Professional",
    description: "For growing businesses with advanced needs",
    monthlyPrice: 49,
    yearlyPrice: 39,
    icon: Rocket,
    popular: true,
    cta: "Start Free Trial",
    features: [
      "Up to 10,000 contacts",
      "50,000 emails per month",
      "Advanced email templates",
      "Marketing automation",
      "A/B testing",
      "Advanced analytics",
      "Phone & email support",
    ],
  },
  {
    name: "Business",
    description: "For established businesses scaling up",
    monthlyPrice: 99,
    yearlyPrice: 79,
    icon: Crown,
    popular: false,
    cta: "Start Free Trial",
    features: [
      "Up to 50,000 contacts",
      "500,000 emails per month",
      "Custom email templates",
      "Advanced automation",
      "Multivariate testing",
      "Custom reporting",
      "Priority support",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    monthlyPrice: 299,
    yearlyPrice: 239,
    icon: Building,
    popular: false,
    cta: "Contact Sales",
    features: [
      "Unlimited contacts",
      "Unlimited emails",
      "Custom integrations",
      "Dedicated account manager",
      "Custom onboarding",
      "SLA guarantee",
      "Advanced security",
      "Custom contracts",
    ],
  },
];

const featureComparison = [
  {
    name: "Contacts",
    plans: ["1,000", "10,000", "50,000", "Unlimited"],
  },
  {
    name: "Monthly Emails",
    plans: ["5,000", "50,000", "500,000", "Unlimited"],
  },
  {
    name: "Email Templates",
    plans: [true, true, true, true],
  },
  {
    name: "Marketing Automation",
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
    name: "API Access",
    plans: [false, false, true, true],
  },
  {
    name: "Priority Support",
    plans: [false, false, true, true],
  },
  {
    name: "Custom Integrations",
    plans: [false, false, false, true],
  },
  {
    name: "Dedicated Account Manager",
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
    question: "What happens if I exceed my plan limits?",
    answer:
      "We'll notify you when you're approaching your limits. You can upgrade your plan or purchase additional credits as needed.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 30-day money-back guarantee for all paid plans. Contact our support team for assistance.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time. Your account will remain active until the end of your current billing period.",
  },
];
