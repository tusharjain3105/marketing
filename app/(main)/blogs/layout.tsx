import { Suspense } from "react";

const BlogsLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative m-2 md:mx-24 md:my-10">
      <Suspense>{children}</Suspense>
    </div>
  );
};

export default BlogsLayout;
