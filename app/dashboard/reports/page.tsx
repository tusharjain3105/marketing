import { Button } from "@/components/ui/button";
import { BarChart3, Download, FileText, Filter } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-foreground text-3xl">Reports</h1>
          <p className="mt-2 text-foreground-secondary">
            Generate detailed reports and export your marketing data.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 w-4 h-4" />
            Filter
          </Button>
          <Button className="glow">
            <Download className="mr-2 w-4 h-4" />
            Export Report
          </Button>
        </div>
      </div>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 rounded-xl transition-all duration-300 glass hover:glow">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex justify-center items-center bg-primary/10 rounded-lg w-12 h-12">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                Campaign Performance
              </h3>
              <p className="text-foreground-secondary text-sm">
                Detailed analysis of email campaigns
              </p>
            </div>
          </div>
          <div className="space-y-2 mb-4">
            <div className="text-foreground-secondary text-sm">
              • Open rates and click-through rates
            </div>
            <div className="text-foreground-secondary text-sm">
              • Conversion tracking
            </div>
            <div className="text-foreground-secondary text-sm">
              • Revenue attribution
            </div>
          </div>
          <Button className="w-full" variant="outline">
            Generate Report
          </Button>
        </div>
      </div>

      <div className="p-6 rounded-xl glass">
        <h3 className="mb-6 font-semibold text-foreground text-lg">
          Recent Reports
        </h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-soft/30 p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center bg-primary/10 rounded-lg w-10 h-10">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">
                  November Campaign Performance
                </h4>
                <p className="text-foreground-secondary text-sm">
                  Monthly campaign analysis report
                </p>
                <span className="text-foreground-secondary text-xs">
                  Generated 2 days ago • 2.4 MB
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                View
              </Button>
              <Button variant="ghost" size="sm">
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
