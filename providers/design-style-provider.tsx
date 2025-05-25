"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { DesignStyle, DesignStyleConfig } from "@/lib/types";

interface DesignStyleContextType {
  designStyle: DesignStyle;
  setDesignStyle: (style: DesignStyle) => void;
}

const DesignStyleContext = createContext<DesignStyleContextType | undefined>(
  undefined,
);

export function useDesignStyle() {
  const context = useContext(DesignStyleContext);
  if (context === undefined) {
    throw new Error("useDesignStyle must be used within a DesignStyleProvider");
  }
  return context;
}

interface DesignStyleProviderProps {
  children: React.ReactNode;
}

export function DesignStyleProvider({ children }: DesignStyleProviderProps) {
  const [designStyle, setDesignStyle] = useState<DesignStyle>("dashboard");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load saved design style from localStorage
    const savedStyle = localStorage.getItem("design-style") as DesignStyle;
    if (
      savedStyle &&
      ["dashboard", "admin", "minimal", "neon", "corporate"].includes(
        savedStyle,
      )
    ) {
      setDesignStyle(savedStyle);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      // Apply design style to document
      const root = document.documentElement;

      // Remove all design style classes
      root.classList.remove(
        "design-dashboard",
        "design-admin",
        "design-minimal",
        "design-neon",
        "design-corporate",
      );

      // Add current design style class
      root.classList.add(`design-${designStyle}`);

      // Save to localStorage
      localStorage.setItem("design-style", designStyle);
    }
  }, [designStyle, mounted]);

  const handleDesignStyleChange = (style: DesignStyle) => {
    setDesignStyle(style);
  };

  if (!mounted) {
    return null;
  }

  return (
    <DesignStyleContext.Provider
      value={{
        designStyle,
        setDesignStyle: handleDesignStyleChange,
      }}
    >
      {children}
    </DesignStyleContext.Provider>
  );
}

// Design style configuration
export const designStyleConfig: DesignStyleConfig[] = [
  {
    name: "dashboard",
    label: "Modern Dashboard",
    description: "Glass morphism with gradients and soft colors",
    preview: "🎨",
  },
  {
    name: "admin",
    label: "Classic Admin",
    description: "Traditional dark theme with solid backgrounds",
    preview: "⚡",
  },
  {
    name: "minimal",
    label: "Minimal Clean",
    description: "Ultra-clean design with lots of whitespace",
    preview: "🤍",
  },
  {
    name: "neon",
    label: "Neon Cyber",
    description: "Futuristic neon colors with dark backgrounds",
    preview: "🌈",
  },
  {
    name: "corporate",
    label: "Corporate Pro",
    description: "Professional business theme with subtle accents",
    preview: "💼",
  },
] as const;
