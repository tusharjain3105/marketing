"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-background via-soft to-medium p-4 min-h-screen">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="-top-40 -right-40 absolute bg-destructive/10 blur-3xl rounded-full w-80 h-80 animate-pulse" />
        <div className="-bottom-40 -left-40 absolute bg-destructive/10 blur-3xl rounded-full w-80 h-80 animate-pulse delay-1000" />
      </div>

      {/* Error content */}
      <div className="z-10 relative w-full max-w-md">
        {/* Glass morphism container */}
        <div className="space-y-6 p-8 rounded-2xl text-center glass">
          {/* Error icon */}
          <div className="flex justify-center">
            <div className="flex justify-center items-center bg-destructive/10 rounded-full w-16 h-16">
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>
          </div>

          {/* Error message */}
          <div className="space-y-2">
            <h1 className="font-bold text-foreground text-2xl">
              Something went wrong!
            </h1>
            <p className="text-foreground-secondary">
              We encountered an unexpected error. Don't worry, our team has been
              notified.
            </p>
            {process.env.NODE_ENV === "development" && (
              <details className="mt-4 text-left">
                <summary className="text-foreground-secondary hover:text-foreground text-sm cursor-pointer">
                  Error Details (Development)
                </summary>
                <pre className="bg-muted mt-2 p-3 rounded-lg max-h-32 overflow-auto text-xs">
                  {error.message}
                </pre>
              </details>
            )}
          </div>

          {/* Action buttons */}
          <div className="space-y-3">
            <Button onClick={reset} className="w-full" size="lg">
              <RefreshCw className="mr-2 w-4 h-4" />
              Try Again
            </Button>

            <div className="flex gap-2">
              <Button variant="outline" asChild className="flex-1" size="lg">
                <Link href="/">
                  <Home className="mr-2 w-4 h-4" />
                  Home
                </Link>
              </Button>

              <Button
                variant="outline"
                onClick={() => window.history.back()}
                className="flex-1"
                size="lg"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back
              </Button>
            </div>
          </div>

          {/* Help text */}
          <p className="text-foreground-secondary text-xs">
            If this problem persists, please{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
