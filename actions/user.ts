"use server";

import prisma from "@/prisma";
import { createAction } from "./action-handler";
import { z } from "zod";
import { sign, verify } from "jsonwebtoken";

export const subscribeToNewsletter = createAction(async (_, { getUser }) => {
  const user = await getUser();

  if (!user) {
    throw new Error("User not found");
  }

  const existing = await prisma.newsletter.findUnique({
    where: {
      email: user.email,
    },
  });

  if (existing?.active) {
    throw new Error("Already subscribed to newsletter");
  } else if (existing) {
    await prisma.newsletter.update({
      where: {
        email: user.email,
      },
      data: {
        active: true,
      },
    });
  } else {
    await prisma.newsletter.create({
      data: {
        email: user.email,
      },
    });
  }

  return {
    success: true,
    message: "Subscribed to newsletter",
  };
});

export const unsubscribeToNewsletter = createAction(async (_, { getUser }) => {
  const user = await getUser();

  if (!user) {
    throw new Error("User not found");
  }

  await prisma.newsletter.update({
    where: {
      email: user.email,
    },
    data: {
      active: false,
    },
  });

  return {
    success: true,
    message: "Unsubscribed from newsletter",
  };
});

export const createUnsubscribeLink = createAction(
  async ({ email }) => {
    const newsletter = await prisma.newsletter.findUnique({
      where: {
        email,
        active: true,
      },
    });

    if (!newsletter) {
      throw new Error("Newsletter not subscribed");
    }

    const token = sign({ email }, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    });

    return {
      success: true,
      unsubscribeLink: `${process.env.NEXT_PUBLIC_SITE_URL}/unsubscribe?token=${token}`,
    };
  },
  z.object({ email: z.string().email().toLowerCase() }),
);

export const unsubscribeToNewsletterUsingToken = createAction(
  async ({ token }) => {
    const payload = verify(token, process.env.JWT_SECRET as string);
    if (payload) {
      const { email } = payload as { email: string };
      await prisma.newsletter.update({
        where: {
          email,
        },
        data: {
          active: false,
        },
      });
    }

    return { success: true, message: "Newsletter unsubscribed" };
  },
  z.object({
    token: z.string(),
  }),
);
