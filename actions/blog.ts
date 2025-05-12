"use server";

import prisma from "@/prisma";
import { z } from "zod";
import { createAction } from "./action-handler";
import { BlogStatus } from "@/prisma/generated/prisma";
import { redirect } from "next/navigation";
import { revalidatePath, revalidateTag } from "next/cache";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";

export const create = createAction(
  async (
    {
      title,
      slug,
      description,
      content,
      tags,
      thumbnail: thumbnailUrl,
      status,
    },
    { getUser },
  ) => {
    const user = await getUser();
    if (!user) {
      throw new Error("You are not authorized to create a blog");
    }

    const existingBlog = await prisma.blog.findUnique({
      where: {
        slug,
      },
    });

    if (existingBlog) {
      throw new Error(`Blog "${slug}" already exists`);
    }

    const thumbnail = await prisma.media.create({
      data: {
        url: thumbnailUrl,
        type: "IMAGE",
      },
    });

    const blog = await prisma.blog.create({
      data: {
        title,
        description,
        content,
        tags,
        thumbnailId: thumbnail.id,
        authorId: user.id,
        slug,
        status,
      },
    });

    revalidatePath(`blogs`);
    redirect(`/blogs/${blog.slug}`);
  },
  z.object({
    title: z.string().min(1),
    slug: z.string().min(1),
    description: z.string().min(1),
    content: z.string().min(1),
    thumbnail: z.string().min(1),
    tags: z.array(z.string()).min(1).default([]),
    status: z.nativeEnum(BlogStatus),
  }),
);

export const update = createAction(
  async (
    {
      id,
      title,
      description,
      content,
      tags,
      thumbnail: thumbnailUrl,
      status,
      slug,
    },
    { getUser },
  ) => {
    const user = await getUser();
    if (!user) {
      throw new Error("You are not authorized to update a blog");
    }

    const currentBlog = await prisma.blog.findUnique({
      where: {
        id,
      },
      select: {
        slug: true,
      },
    });

    if (!currentBlog) {
      throw new Error("Blog does not exist");
    }

    if (currentBlog?.slug !== slug) {
      revalidateTag(`blog-${currentBlog.slug}`);
    }

    // Update the blog
    const updatedBlog = await prisma.blog.update({
      where: {
        id,
      },
      data: {
        title,
        slug,
        description,
        content,
        tags,
        status,
      },
    });

    // Update the thumbnail if it exists
    if (thumbnailUrl) {
      if (updatedBlog.thumbnailId) {
        await prisma.media.update({
          where: {
            id: updatedBlog.thumbnailId,
          },
          data: {
            url: thumbnailUrl,
          },
        });
      } else {
        const thumbnail = await prisma.media.create({
          data: {
            url: thumbnailUrl,
            type: "IMAGE",
          },
        });
        await prisma.blog.update({
          where: {
            id,
          },
          data: {
            thumbnailId: thumbnail.id,
          },
        });
      }
    }

    revalidateTag(`blog-${slug}`);
    revalidateTag(`blogs`);
    redirect(`/blogs/${slug}`);
  },
  z.object({
    id: z.string().min(1),
    title: z.string().min(1).optional(),
    slug: z.string().min(1).optional(),
    description: z.string().min(1).optional(),
    content: z.string().min(1).optional(),
    thumbnail: z.string().min(1).optional(),
    tags: z.array(z.string()).min(1).default([]).optional(),
    status: z.nativeEnum(BlogStatus).optional(),
  }),
);

export const list = createAction(
  async ({ status, page = 1, limit = 12 }) => {
    "use cache";
    cacheTag("blogs");
    const blogs = await prisma.blog.findMany({
      where: {
        status: {
          in: status,
        },
      },
      include: {
        thumbnail: {
          select: {
            url: true,
          },
        },
        author: {
          select: {
            name: true,
            avatar: {
              select: {
                url: true,
              },
            },
          },
        },
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    });

    return blogs.map((blog) => ({
      ...blog,
      thumbnail: blog.thumbnail?.url,
    }));
  },
  z.object({
    status: z.array(z.nativeEnum(BlogStatus)).default([BlogStatus.PUBLISHED]),
    page: z.number().min(1).default(1),
    limit: z.number().min(1).max(100).default(12),
  }),
);

export const getBySlug = createAction(async (slug) => {
  "use cache";
  cacheTag(`blog-${slug}`);
  const blog = await prisma.blog.findUnique({
    where: {
      slug,
    },
    include: {
      thumbnail: {
        select: {
          url: true,
        },
      },
      author: {
        select: {
          name: true,
          avatar: {
            select: {
              url: true,
            },
          },
        },
      },
    },
    omit: {
      content: false,
    },
  });

  return blog;
}, z.string());
