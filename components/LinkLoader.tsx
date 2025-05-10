"use client";

import { Loader2 } from "lucide-react";
import { useLinkStatus } from "next/link";

const LinkLoader = ({ children }: { children?: React.ReactNode }) => {
  const { pending } = useLinkStatus();

  return pending && (children || <Loader2 className="size-4 animate-spin" />);
};
export default LinkLoader;
