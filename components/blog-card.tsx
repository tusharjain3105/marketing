import type actions from "@/actions";
import type { NonUndefined } from "@/lib/types";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  blog: NonUndefined<Awaited<ReturnType<typeof actions.blog.list>>[1]>[number];
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <article className="group relative bg-card shadow hover:shadow-lg border rounded-lg overflow-hidden text-card-foreground transition-all">
        {/* Image Container */}
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src={blog.thumbnail || "/placeholder-image.jpg"}
            alt={blog.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Title */}
          <h2 className="mb-2 font-semibold text-xl line-clamp-2 tracking-tight">
            {blog.title}
          </h2>

          {/* Description */}
          <p className="mb-4 text-muted-foreground text-sm line-clamp-2">
            {blog.description}
          </p>

          {/* Footer */}
          <div className="flex justify-between items-center">
            {/* Author Info */}
            <div className="flex items-center gap-2">
              {blog.author?.avatar?.url && (
                <div className="relative rounded-full w-8 h-8 overflow-hidden">
                  <Image
                    src={blog.author.avatar.url}
                    alt={blog.author.name || "Author"}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col">
                <span className="font-medium text-sm">
                  {blog.author?.name || "Anonymous"}
                </span>
                <span className="text-muted-foreground text-xs">
                  {formatDistanceToNow(new Date(blog.createdAt), {
                    addSuffix: true,
                  })}
                </span>
              </div>
            </div>

            {/* Read Time */}
            {/* {blog.readTime && (
              <span className="text-muted-foreground text-xs">
                {blog.readTime} min read
              </span>
            )} */}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
