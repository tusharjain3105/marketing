"use client";

import actions from "@/actions";
import { router } from "@/layout.client";
import { Loader2 } from "lucide-react";
import { startTransition, useLayoutEffect } from "react";
import { toast } from "sonner";

const UnsubscribePage = () => {
  useLayoutEffect(() => {
    startTransition(async () => {
      const token = new URL(location.href).searchParams.get("token");
      if (token) {
        const [, result] = await actions.user.unsubscribeToNewsletterUsingToken(
          { token },
        );

        if (result) {
          toast.success(result.message);
        }
      }
      router.replace("/");
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-4 h-screen">
      <Loader2 className="animate-spin" />
      <div>Unsubscribing...</div>
    </div>
  );
};
export default UnsubscribePage;
