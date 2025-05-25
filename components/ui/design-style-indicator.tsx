"use client";

import { useDesignStyle } from "@/providers/design-style-provider";
import { Badge } from "@/components/ui/badge";

export function DesignStyleIndicator() {
  const { designStyle } = useDesignStyle();

  const getStyleLabel = () => {
    switch (designStyle) {
      case "dashboard":
        return "🎨 Modern";
      case "admin":
        return "⚡ Classic";
      case "minimal":
        return "🤍 Minimal";
      case "neon":
        return "🌈 Neon";
      case "corporate":
        return "💼 Corporate";
      default:
        return "🎨 Modern";
    }
  };

  return (
    <div className="top-4 right-4 z-50 fixed">
      <Badge variant="outline" className="glass">
        Design: {getStyleLabel()}
      </Badge>
    </div>
  );
}
