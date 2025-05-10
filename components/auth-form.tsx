"use client";
import { sleep } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import actions from "@/actions";
import { router } from "@/layout.client";
const forgotPasswordSchema = z.object({
  email: z.string().email(),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const signupSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
});

const AuthForm = ({
  variant,
}: {
  variant: "login" | "register" | "forgot-password";
}) => {
  "use no memo";
  const [isPending, startTransition] = useTransition();
  const form = useForm({
    resolver: zodResolver(
      (variant === "login"
        ? loginSchema
        : variant === "register"
          ? signupSchema
          : forgotPasswordSchema) as z.ZodSchema,
    ),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: z.ZodSchema) =>
    startTransition(async () => {
      await sleep(1000);
      switch (variant) {
        case "login": {
          const parsedData = loginSchema.parse(data);
          const [error] = await actions.auth.login(parsedData);
          if (error) {
            toast.error(error.message);
            return;
          }
          toast.success("Logged in successfully");
          break;
        }

        case "register": {
          const parsedData = signupSchema.parse(data);
          const [error] = await actions.auth.register(parsedData);
          if (error) {
            toast.error(error.message);
            return;
          }
          toast.success("Account created successfully");
          break;
        }

        case "forgot-password": {
          const parsedData = forgotPasswordSchema.parse(data);
          console.log(parsedData);
          break;
        }
      }
      router.refresh();
    });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 bg-background/50 backdrop-blur-md p-4 py-10 border border-soft/50 md:rounded-xl rounded-t-3xl w-full md:w-sm text-black"
      >
        {variant === "register" && (
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Name"
                    {...field}
                    className="border-b border-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email"
                  className="border-b border-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {(variant === "login" || variant === "register") && (
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    {...field}
                    className="border-b border-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {variant === "login" && (
          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-primary-medium text-sm hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        )}

        {variant === "register" && (
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    {...field}
                    className="border-b border-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <SubmitButton variant={variant} isPending={isPending} />

        <AlternateLink variant={variant} />
      </form>
    </Form>
  );
};

const SubmitButton = ({
  variant,
  isPending,
}: {
  variant: "login" | "register" | "forgot-password";
  isPending: boolean;
}) => {
  switch (variant) {
    case "login":
      return (
        <Button type="submit" disabled={isPending}>
          {isPending ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Logging in...
            </>
          ) : (
            "Login"
          )}
        </Button>
      );
    case "register":
      return (
        <Button type="submit" disabled={isPending}>
          {isPending ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Registering...
            </>
          ) : (
            "Register"
          )}
        </Button>
      );
    case "forgot-password":
      return (
        <Button type="submit" disabled={isPending}>
          {isPending ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Forgot Password...
            </>
          ) : (
            "Forgot Password"
          )}
        </Button>
      );
  }
};

const AlternateLink = ({
  variant,
}: {
  variant: "login" | "register" | "forgot-password";
}) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <p>
        {variant === "login"
          ? "Don't have an account?"
          : variant === "forgot-password"
            ? "Remember your password?"
            : "Already have an account?"}
      </p>
      <Link
        className="text-primary-medium hover:underline"
        href={
          variant === "login"
            ? "/signup"
            : variant === "forgot-password"
              ? "/login"
              : "/login"
        }
      >
        {variant === "login"
          ? "Register"
          : variant === "forgot-password"
            ? "Login"
            : "Login"}
      </Link>
    </div>
  );
};

export default AuthForm;
