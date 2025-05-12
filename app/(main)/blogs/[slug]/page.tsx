import actions from "@/actions";
import BlogActions from "@/components/blog-actions";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import { BlogStatus, UserRole } from "@/prisma/generated/prisma";
import { connection } from "next/dist/server/request/connection";
import { Suspense } from "react";

const BlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  return (
    <>
      <Suspense>
        <BlogActions className="top-0 right-0 z-10 absolute" />
        <Blog slug={slug} />
      </Suspense>
    </>
  );
};

const Blog = async ({ slug }: { slug: string }) => {
  const [error, blog] = await actions.blog.getBySlug(slug);
  if (error) {
    return <div>{error.message}</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  if (blog.status !== BlogStatus.PUBLISHED) {
    const [, user] = await actions.auth.cachedProfile({});

    if (user?.role !== UserRole.ADMIN) {
      return (
        <div className="space-y-2 py-40 text-center">
          <h1 className="font-bold text-xl">Blog is not published</h1>
          <p className="text-gray-500 text-sm">
            This blog is currently unavailable
          </p>
        </div>
      );
    }
  }

  return (
    <Suspense>
      <Editor content={blog.content} />
    </Suspense>
  );
};

const Editor = async ({ content }: { content: string }) => {
  await connection();
  return (
    <SimpleEditor
      value={content}
      className="bg-transparent p-0 md:p-0 border-none"
    />
  );
};

export default BlogPage;
