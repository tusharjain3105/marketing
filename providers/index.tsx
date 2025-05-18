"use client";
import { Toaster } from "@/components/ui/sonner";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Toaster richColors closeButton expand position="top-right" />
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
