import { Button } from "@/components/ui/button";
import { Calendar, CreditCard, TrendingUp } from "lucide-react";

export function ClientBillingOverview() {
  return (
    <div className="p-6 border border-border/50 rounded-lg glass-strong">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-foreground text-lg">
          Billing Overview
        </h3>
        <Button size="sm" variant="outline">
          <CreditCard className="mr-2 w-4 h-4" />
          Manage Billing
        </Button>
      </div>

      <div className="space-y-4">
        {/* Current Plan */}
        <div className="bg-background/50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-foreground text-sm">
              Current Plan
            </span>
            <span className="inline-flex bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full font-semibold text-blue-800 dark:text-blue-400 text-xs">
              Pro
            </span>
          </div>
          <p className="text-foreground-secondary text-xs">
            $299/month • Up to 50 team members
          </p>
        </div>

        {/* Next Billing */}
        <div className="bg-background/50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4 text-foreground-secondary" />
            <span className="font-medium text-foreground text-sm">
              Next Billing
            </span>
          </div>
          <p className="text-foreground-secondary text-xs">
            April 15, 2024 • $299.00
          </p>
        </div>

        {/* Usage */}
        <div className="bg-background/50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-foreground-secondary" />
            <span className="font-medium text-foreground text-sm">
              Usage This Month
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-foreground-secondary">Team Members</span>
              <span className="text-foreground">12 / 50</span>
            </div>
            <div className="bg-border/50 rounded-full h-2">
              <div className="bg-primary rounded-full w-1/4 h-2"></div>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-foreground-secondary">Email Campaigns</span>
              <span className="text-foreground">8 / 100</span>
            </div>
            <div className="bg-border/50 rounded-full h-2">
              <div className="bg-primary rounded-full w-1/12 h-2"></div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-background/50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <CreditCard className="w-4 h-4 text-foreground-secondary" />
            <span className="font-medium text-foreground text-sm">
              Payment Method
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-foreground-secondary text-xs">
              •••• •••• •••• 4242
            </span>
            <Button variant="ghost" size="sm">
              Update
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-border/50">
        <Button variant="ghost" size="sm" className="w-full">
          View Billing History
        </Button>
      </div>
    </div>
  );
}
