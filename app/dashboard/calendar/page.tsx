import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Mail,
  Plus,
  Users,
  Video,
} from "lucide-react";

export default function CalendarPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-foreground text-3xl">Calendar</h1>
          <p className="mt-2 text-foreground-secondary">
            Schedule campaigns, events, and track important marketing dates.
          </p>
        </div>
        <Button className="glow">
          <Plus className="mr-2 w-4 h-4" />
          New Event
        </Button>
      </div>

      {/* Calendar Navigation */}
      <div className="flex justify-between items-center p-6 rounded-xl glass">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <h2 className="font-semibold text-foreground text-xl">
            December 2024
          </h2>
          <Button variant="ghost" size="sm">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Month
          </Button>
          <Button variant="ghost" size="sm">
            Week
          </Button>
          <Button variant="ghost" size="sm">
            Day
          </Button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="p-6 rounded-xl glass">
        <div className="gap-4 grid grid-cols-7 mb-4">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="py-2 font-medium text-foreground-secondary text-sm text-center"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="gap-4 grid grid-cols-7">
          {Array.from({ length: 35 }, (_, i) => {
            const day = i - 5 + 1;
            const isCurrentMonth = day > 0 && day <= 31;
            const hasEvent = [5, 12, 18, 24, 28].includes(day);

            return (
              <div
                key={i}
                className={`h-24 p-2 rounded-lg border transition-colors ${
                  isCurrentMonth
                    ? "bg-background/50 border-border/50 hover:bg-soft/30"
                    : "bg-soft/20 border-border/30"
                }`}
              >
                <div
                  className={`text-sm ${
                    isCurrentMonth
                      ? "text-foreground"
                      : "text-foreground-secondary"
                  }`}
                >
                  {isCurrentMonth ? day : ""}
                </div>
                {hasEvent && isCurrentMonth && (
                  <div className="mt-1">
                    <div className="bg-primary rounded-full w-2 h-2"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="p-6 rounded-xl glass">
        <h3 className="mb-6 font-semibold text-foreground text-lg">
          Upcoming Events
        </h3>
        <div className="space-y-4">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-soft/30 p-4 rounded-lg"
            >
              <div className="flex justify-center items-center bg-primary/10 rounded-lg w-12 h-12">
                <event.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-foreground">{event.title}</h4>
                <p className="text-foreground-secondary text-sm">
                  {event.description}
                </p>
                <div className="flex items-center gap-4 mt-1">
                  <span className="flex items-center gap-1 text-foreground-secondary text-xs">
                    <Clock className="w-3 h-3" />
                    {event.time}
                  </span>
                  <span className="text-foreground-secondary text-xs">
                    {event.date}
                  </span>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                View
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const upcomingEvents = [
  {
    title: "Black Friday Campaign Launch",
    description: "Launch holiday promotion campaign",
    date: "Dec 24, 2024",
    time: "9:00 AM",
    icon: Mail,
  },
  {
    title: "Monthly Newsletter",
    description: "Send monthly update to subscribers",
    date: "Dec 1, 2024",
    time: "10:00 AM",
    icon: Mail,
  },
  {
    title: "Product Webinar",
    description: "Live demo and Q&A session",
    date: "Dec 5, 2024",
    time: "2:00 PM",
    icon: Video,
  },
  {
    title: "Team Meeting",
    description: "Weekly marketing team sync",
    date: "Dec 2, 2024",
    time: "3:00 PM",
    icon: Users,
  },
];
