"use client";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeSwitch({
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className={cn(
        "relative bg-primary-soft rounded-full h-6 aspect-[2.2]",
        className,
      )}
      {...props}
      onClick={(e) => {
        setTheme(theme === "dark" ? "light" : "dark");
        props.onClick?.(e);
      }}
    >
      <div className="relative w-full h-full">
        <div className="top-1/2 left-0 dark:left-full absolute place-items-center grid bg-primary-strong rounded-full h-[102%] aspect-square text-primary-ghost dark:text-foreground dark:rotate-360 transition-all -translate-y-1/2 dark:-translate-x-full duration-500 ease-in-out">
          <Sun className="top-1/2 left-1/2 absolute dark:opacity-0 w-4 h-4 -translate-x-1/2 -translate-y-1/2" />
          <Moon className="top-1/2 left-1/2 absolute opacity-0 dark:opacity-100 w-4 h-4 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </button>
  );
}
