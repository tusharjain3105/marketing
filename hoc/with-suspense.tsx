import type { FC, ReactNode } from "react";
import { Suspense } from "react";

export default function withSuspense<T extends Record<string, unknown>>(
  Component: FC<T>,
  fallback: ReactNode = "Loading...",
) {
  return function WithSuspense(props: T) {
    return (
      <Suspense fallback={fallback}>
        <Component {...props} />
      </Suspense>
    );
  };
}
