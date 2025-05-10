"use client";
import actions from "@/actions";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Input } from "./ui/input";

const SubscribeForm = ({ className }: { className?: string }) => {
  return (
    <div className={cn("space-y-4", className)}>
      <h3 className="font-semibold text-foreground text-sm">
        Subscribe to our newsletter
      </h3>
      <p className="text-foreground-secondary text-sm">
        Get the latest updates and news directly in your inbox.
      </p>
      <form
        className="flex gap-2"
        onSubmit={async (e) => {
          e.preventDefault();
          const [error, result] = await actions.user.subscribeToNewsletter({
            email: (e.target as HTMLFormElement).email.value,
          });

          if (error) {
            toast.error(error.message);
            return;
          }

          toast.success(result.message);
        }}
      >
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="flex-1 bg-soft/50 px-3 py-2 border border-soft rounded-md focus:outline-none focus:ring-2 focus:ring-primary-soft text-sm"
        />
        <button
          type="submit"
          className="bg-primary hover:bg-primary-medium text-foreground-inverted px-4 py-2 rounded-md font-medium text-sm transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;
