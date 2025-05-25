import { Button } from "@/components/ui/button";
import {
  Bell,
  CreditCard,
  Globe,
  Key,
  Palette,
  Shield,
  User,
  Users,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-foreground text-3xl">Settings</h1>
          <p className="mt-2 text-foreground-secondary">
            Manage your account preferences and system configuration.
          </p>
        </div>
      </div>

      <div className="gap-6 grid grid-cols-1 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="p-6 rounded-xl glass">
            <h3 className="mb-4 font-semibold text-foreground">Settings</h3>
            <nav className="space-y-2">
              {settingsNavigation.map((item, index) => (
                <button
                  key={index}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    index === 0
                      ? "bg-primary/20 text-primary"
                      : "text-foreground-secondary hover:text-foreground hover:bg-soft/30"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="space-y-6 lg:col-span-3">
          <div className="p-6 rounded-xl glass">
            <h3 className="mb-6 font-semibold text-foreground text-lg">
              Profile Information
            </h3>
            <div className="space-y-4">
              <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                <div>
                  <label className="block mb-2 font-medium text-foreground text-sm">
                    First Name
                  </label>
                  <input
                    type="text"
                    defaultValue="John"
                    className="bg-background/50 px-3 py-2 border focus:border-primary border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-full text-foreground"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium text-foreground text-sm">
                    Last Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Doe"
                    className="bg-background/50 px-3 py-2 border focus:border-primary border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-full text-foreground"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 font-medium text-foreground text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="john@example.com"
                  className="bg-background/50 px-3 py-2 border focus:border-primary border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-full text-foreground"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-foreground text-sm">
                  Company
                </label>
                <input
                  type="text"
                  defaultValue="Acme Corp"
                  className="bg-background/50 px-3 py-2 border focus:border-primary border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-full text-foreground"
                />
              </div>
              <Button className="glow">Save Changes</Button>
            </div>
          </div>

          <div className="p-6 rounded-xl glass">
            <h3 className="mb-6 font-semibold text-foreground text-lg">
              Notification Preferences
            </h3>
            <div className="space-y-4">
              {notificationSettings.map((setting, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-foreground">
                      {setting.title}
                    </h4>
                    <p className="text-foreground-secondary text-sm">
                      {setting.description}
                    </p>
                  </div>
                  <label className="inline-flex relative items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked={setting.enabled}
                      className="sr-only peer"
                    />
                    <div className="peer after:top-[2px] after:left-[2px] after:absolute after:bg-white peer-checked:bg-primary bg-border/50 peer-checked:after:border-white rounded-full after:rounded-full peer-focus:outline-none w-11 after:w-5 h-6 after:h-5 after:content-[''] after:transition-all peer-checked:after:translate-x-full"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-xl glass">
            <h3 className="mb-6 font-semibold text-foreground text-lg">
              Security
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-soft/30 p-4 rounded-lg">
                <div>
                  <h4 className="font-medium text-foreground">
                    Two-Factor Authentication
                  </h4>
                  <p className="text-foreground-secondary text-sm">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Enable
                </Button>
              </div>
              <div className="flex justify-between items-center bg-soft/30 p-4 rounded-lg">
                <div>
                  <h4 className="font-medium text-foreground">
                    Change Password
                  </h4>
                  <p className="text-foreground-secondary text-sm">
                    Update your account password
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Change
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const settingsNavigation = [
  { name: "Profile", icon: User },
  { name: "Notifications", icon: Bell },
  { name: "Security", icon: Shield },
  { name: "Billing", icon: CreditCard },
  { name: "Team", icon: Users },
  { name: "Integrations", icon: Globe },
  { name: "API Keys", icon: Key },
  { name: "Appearance", icon: Palette },
];

const notificationSettings = [
  {
    title: "Email Notifications",
    description: "Receive email updates about your campaigns",
    enabled: true,
  },
  {
    title: "Campaign Alerts",
    description: "Get notified when campaigns start or complete",
    enabled: true,
  },
  {
    title: "Weekly Reports",
    description: "Receive weekly performance summaries",
    enabled: false,
  },
  {
    title: "Security Alerts",
    description: "Important security and login notifications",
    enabled: true,
  },
];
