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
    if (savedStyle && ["dashboard", "admin"].includes(savedStyle)) {
      setDesignStyle(savedStyle);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      // Apply design style to document
      const root = document.documentElement;

      // Remove all design style classes
      root.classList.remove("design-dashboard", "design-admin");

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
] as const;
