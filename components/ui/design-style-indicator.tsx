"use client";

import { useDesignStyle } from "@/providers/design-style-provider";
import { Badge } from "@/components/ui/badge";

export function DesignStyleIndicator() {
  const { designStyle } = useDesignStyle();

  return (
    <div className="top-4 right-4 z-50 fixed">
      <Badge variant="outline" className="glass">
        Design: {designStyle === "dashboard" ? "🎨 Modern" : "⚡ Classic"}
      </Badge>
    </div>
  );
}
