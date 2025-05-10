import { cookies, headers } from "next/headers";
import { userAgent } from "next/server";
import type { ZodSchema } from "zod";
import config from "@/lib/config";
import { sign, verify } from "jsonwebtoken";
import { unstable_rethrow } from "next/navigation";

interface IUserPayload {
  id: string;
  email: string;
  name: string;
}

/**
 * Represents a function that takes arguments and returns a result
 */
type ActionCallback<Args, Result> = (args: Args) => Result;

/**
 * Represents a function that takes arguments with context, and returns a result
 */
type ActionCallbackWithContext<Args, Result, Context> = (
  args: Args,
  context: Context,
) => Result;

/**
 * Represents the result of an action, either success with data or error
 * Success case: [undefined, data]
 * Error case: [Error]
 */
type ActionResult<Result> = Promise<[undefined, Awaited<Result>] | [Error]>;

/**
 * Creates a handler function that wraps a callback with validation and error handling
 * @param callback - The function to execute
 * @param validationSchema - Optional Zod schema for input validation
 * @returns A function that handles validation and error handling
 */
export const createActionHandler = <Args, Result>(
  callback: ActionCallbackWithContext<Args, Result, Context>,
  validationSchema?: ZodSchema<Args>,
  { tag }: { tag?: string } = {},
): ActionCallback<Args, ActionResult<Result>> => {
  return async (args: Args): ActionResult<Result> => {
    if (tag) {
      console.log(`[Executing] ${tag}`);
    }

    try {
      // Validate input if schema is provided
      const validatedArgs = validationSchema
        ? validationSchema.parse(args)
        : args;

      // Execute the callback with validated arguments
      const result = await callback(validatedArgs, { ...context });

      return [undefined, result];
    } catch (error) {
      unstable_rethrow(error);
      return [error as Error];
    }
  };
};

const getHeaders = async () => Object.fromEntries((await headers()).entries());

const getHeader = async (name: string) => (await headers()).get(name);

const getCookies = async () => Object.fromEntries(await cookies());

const getCookie = async (name: string) => (await cookies()).get(name)?.value;

const getAuthToken = async () => {
  const token = await getCookie(config.auth.tokenName);
  if (!token) return null;
  return token.split(" ").slice(-1)[0];
};

const setCookie = async (
  ...args: Parameters<Awaited<ReturnType<typeof cookies>>["set"]>
) => {
  (await cookies()).set(...args);
};

const context = {
  getHeaders,
  getHeader,
  getCookies,
  getCookie,
  getHost: () => getHeader("host"),
  getUserAgent: async () => {
    const headerStore = await headers();
    const ua = userAgent({ headers: headerStore });
    return ua;
  },
  getAuthToken,
  generateAndSaveAuthToken: async (user: IUserPayload) => {
    const token = sign(
      { id: user.id, email: user.email, name: user.name },
      process.env.JWT_SECRET ?? "",
      {
        expiresIn: config.auth.tokenExpiration,
      },
    );

    await setCookie(config.auth.tokenName, token, {
      httpOnly: true,
      secure: config.auth.tokenSecure,
    });
  },
  setCookie,
  deleteCookie: async (
    ...args: Parameters<Awaited<ReturnType<typeof cookies>>["delete"]>
  ) => {
    (await cookies()).delete(...args);
  },
  getUser: async () => {
    const token = await getAuthToken();
    if (!token) return null;
    const payload = verify(token, process.env.JWT_SECRET ?? "") as IUserPayload;
    return payload;
  },
};

type Context = typeof context;
