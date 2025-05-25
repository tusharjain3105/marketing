"use client";

import React, { Component, ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  showDetails?: boolean;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex justify-center items-center p-8">
          <div className="space-y-4 p-6 rounded-xl w-full max-w-md text-center glass">
            <div className="flex justify-center">
              <div className="flex justify-center items-center bg-destructive/10 rounded-full w-12 h-12">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-foreground text-lg">
                Something went wrong
              </h3>
              <p className="text-foreground-secondary text-sm">
                This component encountered an error and couldn't render
                properly.
              </p>

              {this.props.showDetails && this.state.error && (
                <details className="mt-3 text-left">
                  <summary className="text-foreground-secondary hover:text-foreground text-xs cursor-pointer">
                    Error Details
                  </summary>
                  <pre className="bg-muted mt-2 p-2 rounded max-h-24 overflow-auto text-xs">
                    {this.state.error.message}
                  </pre>
                </details>
              )}
            </div>

            <Button
              onClick={() =>
                this.setState({ hasError: false, error: undefined })
              }
              size="sm"
              className="w-full"
            >
              <RefreshCw className="mr-2 w-4 h-4" />
              Try Again
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook version for functional components
export function useErrorBoundary() {
  const [error, setError] = React.useState<Error | null>(null);

  const resetError = React.useCallback(() => {
    setError(null);
  }, []);

  const captureError = React.useCallback((error: Error) => {
    setError(error);
  }, []);

  React.useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  return { captureError, resetError };
}

// Wrapper component for easier usage
interface ErrorBoundaryWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

export function ErrorBoundaryWrapper({
  children,
  ...props
}: ErrorBoundaryWrapperProps) {
  return (
    <ErrorBoundary
      showDetails={process.env.NODE_ENV === "development"}
      {...props}
    >
      {children}
    </ErrorBoundary>
  );
}
