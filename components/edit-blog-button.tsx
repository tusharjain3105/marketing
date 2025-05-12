"use client";
import { Button } from "@/components/ui/button";
import { PencilIcon } from "lucide-react";
import { useParams } from "next/navigation";
import LinkLoader from "./LinkLoader";
import Link from "next/link";

const EditBlogButton = () => {
  const { slug } = useParams();
  return (
    slug && (
      <Link href={`/blogs/${slug}/edit`}>
        <Button>
          <PencilIcon className="w-4 h-4" />
          Edit <LinkLoader />
        </Button>
      </Link>
    )
  );
};
export default EditBlogButton;
