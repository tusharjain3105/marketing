"use server";
import config from "@/lib/config";
import prisma from "@/prisma";
import { compareSync, hashSync } from "bcryptjs";
import { redirect } from "next/navigation";
import { z } from "zod";
import { createAction } from "./action-handler";
import { cache } from "react";
export const register = createAction(
  async (args) => {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email: args.email,
      },
      select: {
        id: true,
      },
    });

    if (existingUser) {
      throw new Error("User already exists");
    }

    const user = await prisma.user.create({
      data: {
        name: args.name,
        email: args.email,
        password: hashSync(args.password, 10),
      },
    });

    return {
      success: true,
      message: "User created successfully",
      user: user,
    };
  },
  z.object({
    name: z.string().min(1),
    email: z.string().email().toLowerCase(),
    password: z.string().min(8),
  }),
);

export const login = createAction(
  async ({ email, password }, { generateAndSaveAuthToken }) => {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        verificationMethod: true,
        password: true,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordValid = compareSync(password, user.password ?? "");

    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }

    await generateAndSaveAuthToken({
      id: user.id,
      name: user.name,
      email: user.email,
    });

    redirect("/");
  },
  z.object({
    email: z.string().email().toLowerCase(),
    password: z.string().min(8),
  }),
);

export const profile = createAction(
  async (_, { getUser }) => {
    const user = await getUser();
    if (!user) {
      return null;
    }

    const syncedUser = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });

    return syncedUser;
  },
  undefined,
  {
    tag: "/profile",
  },
);

export const cachedProfile = cache(profile);

export const logout = createAction(async (_, { deleteCookie }) => {
  await deleteCookie(config.auth.tokenName);
});
