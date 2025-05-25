import { Button } from "@/components/ui/button";
import { Building, Globe, Mail, Phone, MapPin, Save } from "lucide-react";

export function ClientOrganizationSettings() {
  return (
    <div className="p-6 border border-border/50 rounded-lg glass-strong">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-foreground text-lg">
          Organization Settings
        </h3>
        <Button size="sm" className="glow">
          <Save className="mr-2 w-4 h-4" />
          Save Changes
        </Button>
      </div>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
        {/* Basic Information */}
        <div className="space-y-4">
          <h4 className="font-medium text-foreground">Basic Information</h4>

          <div>
            <label className="block mb-2 text-foreground-secondary text-sm">
              Organization Name
            </label>
            <div className="relative">
              <Building className="top-1/2 left-3 absolute w-4 h-4 text-foreground-secondary -translate-y-1/2 transform" />
              <input
                type="text"
                defaultValue="TechCorp Inc."
                className="bg-background/50 py-2 pr-4 pl-10 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-full text-foreground placeholder-foreground-secondary"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-foreground-secondary text-sm">
              Website
            </label>
            <div className="relative">
              <Globe className="top-1/2 left-3 absolute w-4 h-4 text-foreground-secondary -translate-y-1/2 transform" />
              <input
                type="url"
                defaultValue="https://techcorp.com"
                className="bg-background/50 py-2 pr-4 pl-10 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-full text-foreground placeholder-foreground-secondary"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-foreground-secondary text-sm">
              Contact Email
            </label>
            <div className="relative">
              <Mail className="top-1/2 left-3 absolute w-4 h-4 text-foreground-secondary -translate-y-1/2 transform" />
              <input
                type="email"
                defaultValue="contact@techcorp.com"
                className="bg-background/50 py-2 pr-4 pl-10 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-full text-foreground placeholder-foreground-secondary"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-foreground-secondary text-sm">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="top-1/2 left-3 absolute w-4 h-4 text-foreground-secondary -translate-y-1/2 transform" />
              <input
                type="tel"
                defaultValue="+1 (555) 123-4567"
                className="bg-background/50 py-2 pr-4 pl-10 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-full text-foreground placeholder-foreground-secondary"
              />
            </div>
          </div>
        </div>

        {/* Address & Preferences */}
        <div className="space-y-4">
          <h4 className="font-medium text-foreground">Address & Preferences</h4>

          <div>
            <label className="block mb-2 text-foreground-secondary text-sm">
              Address
            </label>
            <div className="relative">
              <MapPin className="top-3 left-3 absolute w-4 h-4 text-foreground-secondary" />
              <textarea
                defaultValue="123 Business Ave, Suite 100&#10;San Francisco, CA 94105&#10;United States"
                rows={3}
                className="bg-background/50 py-2 pr-4 pl-10 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-full text-foreground resize-none placeholder-foreground-secondary"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-foreground-secondary text-sm">
              Industry
            </label>
            <select className="bg-background/50 px-3 py-2 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-full text-foreground">
              <option>Technology</option>
              <option>Healthcare</option>
              <option>Finance</option>
              <option>Education</option>
              <option>Retail</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-foreground-secondary text-sm">
              Company Size
            </label>
            <select className="bg-background/50 px-3 py-2 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-full text-foreground">
              <option>1-10 employees</option>
              <option>11-50 employees</option>
              <option>51-200 employees</option>
              <option>201-500 employees</option>
              <option>500+ employees</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-foreground-secondary text-sm">
              Time Zone
            </label>
            <select className="bg-background/50 px-3 py-2 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-full text-foreground">
              <option>Pacific Time (PT)</option>
              <option>Mountain Time (MT)</option>
              <option>Central Time (CT)</option>
              <option>Eastern Time (ET)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border/50">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium text-foreground text-sm">Danger Zone</p>
            <p className="text-foreground-secondary text-xs">
              Permanently delete this organization and all its data
            </p>
          </div>
          <Button variant="destructive" size="sm">
            Delete Organization
          </Button>
        </div>
      </div>
    </div>
  );
}
