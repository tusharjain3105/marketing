"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex justify-center items-center bg-gradient-to-br from-red-50 dark:from-red-950 to-red-100 dark:to-red-900 p-4 min-h-screen">
          {/* Critical error content */}
          <div className="w-full max-w-md">
            {/* Glass morphism container */}
            <div className="space-y-6 bg-white/80 dark:bg-black/80 shadow-2xl backdrop-blur-lg p-8 border border-red-200 dark:border-red-800 rounded-2xl text-center">
              {/* Error icon */}
              <div className="flex justify-center">
                <div className="flex justify-center items-center bg-red-100 dark:bg-red-900 rounded-full w-16 h-16">
                  <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
              </div>

              {/* Error message */}
              <div className="space-y-2">
                <h1 className="font-bold text-gray-900 dark:text-gray-100 text-2xl">
                  Critical Error
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  A critical error occurred that prevented the application from
                  loading properly.
                </p>
                {process.env.NODE_ENV === "development" && (
                  <details className="mt-4 text-left">
                    <summary className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 dark:text-gray-400 text-sm cursor-pointer">
                      Error Details (Development)
                    </summary>
                    <pre className="bg-gray-100 dark:bg-gray-800 mt-2 p-3 rounded-lg max-h-32 overflow-auto text-gray-800 dark:text-gray-200 text-xs">
                      {error.message}
                      {error.stack && `\n\n${error.stack}`}
                    </pre>
                  </details>
                )}
              </div>

              {/* Action button */}
              <button
                onClick={reset}
                className="flex justify-center items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-3 rounded-lg w-full font-medium text-white transition-colors duration-200"
              >
                <RefreshCw className="w-4 h-4" />
                Reload Application
              </button>

              {/* Help text */}
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                If this problem persists, please refresh your browser or contact
                support.
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
