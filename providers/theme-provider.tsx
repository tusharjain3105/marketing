"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { createContext, useContext, useEffect, useState } from "react";

export type ColorScheme =
  | "default"
  | "blue"
  | "green"
  | "purple"
  | "rose"
  | "orange";

interface ThemeContextType {
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
  theme: string | undefined;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

interface AdvancedThemeProviderProps extends ThemeProviderProps {
  children: React.ReactNode;
}

export function AdvancedThemeProvider({
  children,
  ...props
}: AdvancedThemeProviderProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("default");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load saved color scheme from localStorage
    const savedScheme = localStorage.getItem("color-scheme") as ColorScheme;
    if (
      savedScheme &&
      ["default", "blue", "green", "purple", "rose", "orange"].includes(
        savedScheme,
      )
    ) {
      setColorScheme(savedScheme);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      // Apply color scheme to document
      const root = document.documentElement;

      // Remove all color scheme classes
      root.classList.remove(
        "default",
        "blue",
        "green",
        "purple",
        "rose",
        "orange",
      );

      // Add current color scheme class
      if (colorScheme !== "default") {
        root.classList.add(colorScheme);
      }

      // Save to localStorage
      localStorage.setItem("color-scheme", colorScheme);
    }
  }, [colorScheme, mounted]);

  const handleColorSchemeChange = (scheme: ColorScheme) => {
    setColorScheme(scheme);
  };

  if (!mounted) {
    return null;
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
      themes={[
        "light",
        "dark",
        "blue-light",
        "blue-dark",
        "green-light",
        "green-dark",
        "purple-light",
        "purple-dark",
        "rose-light",
        "rose-dark",
        "orange-light",
        "orange-dark",
      ]}
      {...props}
    >
      <ThemeContext.Provider
        value={{
          colorScheme,
          setColorScheme: handleColorSchemeChange,
          theme: undefined,
          setTheme: () => {},
        }}
      >
        {children}
      </ThemeContext.Provider>
    </NextThemesProvider>
  );
}

// Theme configuration
export const themeConfig = {
  colorSchemes: [
    { name: "default", label: "Amber", color: "oklch(0.7 0.15 70)" },
    { name: "blue", label: "Blue", color: "oklch(0.6 0.2 240)" },
    { name: "green", label: "Green", color: "oklch(0.6 0.2 140)" },
    { name: "purple", label: "Purple", color: "oklch(0.6 0.2 280)" },
    { name: "rose", label: "Rose", color: "oklch(0.6 0.2 350)" },
    { name: "orange", label: "Orange", color: "oklch(0.6 0.2 40)" },
  ] as const,

  modes: [
    { name: "light", label: "Light", icon: "☀️" },
    { name: "dark", label: "Dark", icon: "🌙" },
    { name: "system", label: "System", icon: "💻" },
  ] as const,
};
