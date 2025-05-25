import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Users,
  HelpCircle,
  Building,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
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
            <Link href="/contact" className="font-medium text-primary">
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
              Get in{" "}
              <span className="bg-clip-text bg-gradient-to-r from-primary via-primary-medium to-primary-strong text-transparent">
                Touch
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-foreground-secondary text-responsive-md">
              Have questions? Need help? Want to learn more about how
              MarketingPro can help your business grow? We would love to hear
              from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="mx-auto px-4 container">
          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="p-6 rounded-xl text-center glass">
                <div className="flex justify-center items-center bg-primary/10 mx-auto mb-4 rounded-xl w-16 h-16">
                  <method.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground text-lg">
                  {method.title}
                </h3>
                <p className="mb-3 text-foreground-secondary text-sm">
                  {method.description}
                </p>
                <div className="font-medium text-primary text-sm">
                  {method.contact}
                </div>
              </div>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="gap-12 grid lg:grid-cols-2">
            {/* Contact Form */}
            <div className="p-8 rounded-2xl glass">
              <div className="mb-6">
                <h2 className="mb-2 font-bold text-foreground text-2xl">
                  Send us a message
                </h2>
                <p className="text-foreground-secondary">
                  Fill out the form below and we will get back to you within 24
                  hours.
                </p>
              </div>

              <form className="space-y-6">
                <div className="gap-4 grid md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block mb-2 font-medium text-foreground text-sm"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="bg-background px-4 py-3 border focus:border-primary border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-full text-foreground"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block mb-2 font-medium text-foreground text-sm"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="bg-background px-4 py-3 border focus:border-primary border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-full text-foreground"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 font-medium text-foreground text-sm"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="bg-background px-4 py-3 border focus:border-primary border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-full text-foreground"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block mb-2 font-medium text-foreground text-sm"
                  >
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="bg-background px-4 py-3 border focus:border-primary border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-full text-foreground"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 font-medium text-foreground text-sm"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="bg-background px-4 py-3 border focus:border-primary border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-full text-foreground"
                  >
                    <option value="">Select a subject</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 font-medium text-foreground text-sm"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="bg-background px-4 py-3 border focus:border-primary border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-full text-foreground"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full glow">
                  <Send className="mr-2 w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Company Info */}
            <div className="space-y-8">
              {/* Office Information */}
              <div className="p-8 rounded-2xl glass">
                <h3 className="mb-6 font-bold text-foreground text-xl">
                  Our Office
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-shrink-0 justify-center items-center bg-primary/10 rounded-lg w-10 h-10">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Address</div>
                      <div className="text-foreground-secondary text-sm">
                        123 Marketing Street
                        <br />
                        Suite 456
                        <br />
                        San Francisco, CA 94105
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex flex-shrink-0 justify-center items-center bg-primary/10 rounded-lg w-10 h-10">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">
                        Business Hours
                      </div>
                      <div className="text-foreground-secondary text-sm">
                        Monday - Friday: 9:00 AM - 6:00 PM PST
                        <br />
                        Saturday - Sunday: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Information */}
              <div className="p-8 rounded-2xl glass">
                <h3 className="mb-6 font-bold text-foreground text-xl">
                  Need Help?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex justify-center items-center bg-primary/10 rounded-lg w-10 h-10">
                      <HelpCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <Link
                        href="/help"
                        className="font-medium text-primary hover:underline"
                      >
                        Help Center
                      </Link>
                      <div className="text-foreground-secondary text-sm">
                        Find answers to common questions
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex justify-center items-center bg-primary/10 rounded-lg w-10 h-10">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">
                        Live Chat
                      </div>
                      <div className="text-foreground-secondary text-sm">
                        Available 24/7 for urgent issues
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex justify-center items-center bg-primary/10 rounded-lg w-10 h-10">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <Link
                        href="/community"
                        className="font-medium text-primary hover:underline"
                      >
                        Community Forum
                      </Link>
                      <div className="text-foreground-secondary text-sm">
                        Connect with other users
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-soft/50 py-20">
        <div className="mx-auto px-4 container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-foreground text-responsive-lg">
              Frequently Asked Questions
            </h2>
            <p className="text-foreground-secondary text-lg">
              Quick answers to common questions
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
    </div>
  );
}

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email anytime",
    contact: "hello@marketingpro.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 9am to 6pm PST",
    contact: "+1 (555) 123-4567",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Available 24/7 for support",
    contact: "Start a conversation",
  },
  {
    icon: Building,
    title: "Visit Us",
    description: "Come say hello at our office",
    contact: "San Francisco, CA",
  },
];

const faqs = [
  {
    question: "How quickly will I receive a response?",
    answer:
      "We typically respond to all inquiries within 24 hours during business days. For urgent technical issues, our live chat support is available 24/7.",
  },
  {
    question: "Do you offer phone support?",
    answer:
      "Yes, phone support is available for Business and Enterprise plan customers. Starter and Professional plan users can access email and live chat support.",
  },
  {
    question: "Can I schedule a demo?",
    answer:
      "Absolutely! We offer personalized demos for potential customers. Contact our sales team to schedule a demo that fits your schedule.",
  },
  {
    question: "Do you provide training for new users?",
    answer:
      "Yes, we offer comprehensive onboarding and training sessions for all new customers. Our customer success team will help you get started.",
  },
  {
    question: "What if I need custom integrations?",
    answer:
      "Our Enterprise plan includes custom integration support. Contact our sales team to discuss your specific integration needs.",
  },
];
