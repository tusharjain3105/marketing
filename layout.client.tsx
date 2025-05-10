"use client";
import { useRouter } from "next/navigation";

export let router: ReturnType<typeof useRouter>;
export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  router = useRouter();

  return <>{children}</>;
};
