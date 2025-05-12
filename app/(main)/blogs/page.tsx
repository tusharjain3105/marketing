import actions from "@/actions";
import BlogCard from "@/components/blog-card";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";
import { Suspense } from "react";
const BlogsPage = () => {
  return (
    <div>
      <h1 className="mb-4 font-bold text-2xl">Blogs</h1>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Suspense fallback={<div>Loading...</div>}>
          <BlogCards />
        </Suspense>
      </div>
    </div>
  );
};

const BlogCards = async () => {
  "use cache";
  cacheTag("blogs");
  const [error, blogs] = await actions.blog.list({});

  if (error) {
    return <div>{error.message}</div>;
  }

  if (blogs.length === 0) {
    return (
      <div className="col-span-full my-48 text-center">
        <h1 className="font-bold text-2xl">No blogs found</h1>
      </div>
    );
  }

  return blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />);
};
export default BlogsPage;
