"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  themeConfig,
  useTheme,
  type ColorScheme,
} from "@/providers/theme-provider";
import { Check, Monitor, Moon, Palette, Sun } from "lucide-react";
import { useTheme as useNextTheme } from "next-themes";

export function ThemeSwitcher() {
  const { theme, setTheme } = useNextTheme();
  const { colorScheme, setColorScheme } = useTheme();

  const getModeIcon = (mode: string) => {
    switch (mode) {
      case "light":
        return <Sun className="w-4 h-4" />;
      case "dark":
        return <Moon className="w-4 h-4" />;
      default:
        return <Monitor className="w-4 h-4" />;
    }
  };

  const getCurrentModeIcon = () => {
    return getModeIcon(theme || "system");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="px-0 w-9 h-9">
          <Palette className="w-4 h-4" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* Theme Mode Selector */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <div className="flex items-center gap-2">
              {getCurrentModeIcon()}
              <span>Theme Mode</span>
            </div>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            {themeConfig.modes.map((mode) => (
              <DropdownMenuItem
                key={mode.name}
                onClick={() => setTheme(mode.name)}
                className="flex justify-between items-center"
              >
                <div className="flex items-center gap-2">
                  {getModeIcon(mode.name)}
                  <span>{mode.label}</span>
                </div>
                {theme === mode.name && <Check className="w-4 h-4" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        <DropdownMenuSeparator />

        {/* Color Scheme Selector */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <div className="flex items-center gap-2">
              <div
                className="border border-border rounded-full w-4 h-4"
                style={{
                  backgroundColor: themeConfig.colorSchemes.find(
                    (s) => s.name === colorScheme,
                  )?.color,
                }}
              />
              <span>Color Scheme</span>
            </div>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            {themeConfig.colorSchemes.map((scheme) => (
              <DropdownMenuItem
                key={scheme.name}
                onClick={() => setColorScheme(scheme.name as ColorScheme)}
                className="flex justify-between items-center"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="border border-border rounded-full w-4 h-4"
                    style={{ backgroundColor: scheme.color }}
                  />
                  <span>{scheme.label}</span>
                </div>
                {colorScheme === scheme.name && <Check className="w-4 h-4" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function SimpleThemeSwitcher() {
  const { theme, setTheme } = useNextTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="px-0 w-9 h-9"
    >
      <Sun className="w-4 h-4 rotate-0 dark:-rotate-90 scale-100 dark:scale-0 transition-all" />
      <Moon className="absolute w-4 h-4 rotate-90 dark:rotate-0 scale-0 dark:scale-100 transition-all" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export function ColorSchemePicker() {
  const { colorScheme, setColorScheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <span className="font-medium text-sm">Colors:</span>
      <div className="flex gap-1">
        {themeConfig.colorSchemes.map((scheme) => (
          <button
            key={scheme.name}
            onClick={() => setColorScheme(scheme.name as ColorScheme)}
            className={`h-6 w-6 rounded-full border-2 transition-all hover:scale-110 ${
              colorScheme === scheme.name
                ? "border-foreground shadow-lg"
                : "border-border hover:border-foreground/50"
            }`}
            style={{ backgroundColor: scheme.color }}
            title={scheme.label}
          />
        ))}
      </div>
    </div>
  );
}
