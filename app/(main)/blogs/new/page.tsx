import actions from "@/actions";
import BlogForm from "@/components/blog-form";
import { UserRole } from "@/prisma/generated/prisma";
import { connection } from "next/dist/server/request/connection";
import { redirect } from "next/navigation";

const NewBlogPage = async () => {
  await connection();
  const [, user] = await actions.auth.cachedProfile({});
  if (user?.role !== UserRole.ADMIN) {
    redirect("/blogs");
  }

  return <BlogForm />;
};

export default NewBlogPage;
