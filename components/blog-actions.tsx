import actions from "@/actions";
import { UserRole } from "@/prisma/generated/prisma";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import LinkLoader from "./LinkLoader";
import EditBlogButton from "./edit-blog-button";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const BlogActions = async ({ className }: { className?: string }) => {
  const [, user] = await actions.auth.cachedProfile({});
  if (!user) {
    return null;
  }

  return (
    user.role === UserRole.ADMIN && (
      <div className={cn("flex justify-between items-center gap-2", className)}>
        <EditBlogButton />
        <Link href="/blogs/new">
          <Button>
            <PlusIcon className="w-4 h-4" />
            New <LinkLoader />
          </Button>
        </Link>
      </div>
    )
  );
};

export default BlogActions;
