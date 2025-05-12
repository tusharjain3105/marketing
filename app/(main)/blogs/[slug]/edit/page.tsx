import actions from "@/actions";
import BlogForm from "@/components/blog-form";
import { connection } from "next/dist/server/request/connection";
import { redirect } from "next/navigation";
import { UserRole } from "@/prisma/generated/prisma";

const EditBlogPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  await connection();
  const [, user] = await actions.auth.cachedProfile({});
  if (user?.role !== UserRole.ADMIN) {
    redirect("/blogs");
  }
  const { slug } = await params;
  const [, blog] = await actions.blog.getBySlug(slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return <BlogForm blog={blog} />;
};

export default EditBlogPage;
