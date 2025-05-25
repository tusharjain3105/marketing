"use client";
import { Toaster } from "@/components/ui/sonner";
import { AdvancedThemeProvider } from "@/providers/theme-provider";
import { DesignStyleProvider } from "@/providers/design-style-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <AdvancedThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange={false}
      >
        <DesignStyleProvider>
          <Toaster richColors closeButton expand position="top-right" />
          {children}
        </DesignStyleProvider>
      </AdvancedThemeProvider>
    </QueryClientProvider>
  );
}
