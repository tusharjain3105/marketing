"use client";

import { slugify } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, X } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ImageUpload from "./image-upload";
import blogContent from "./tiptap-templates/simple/data/blog-content.json";
import { SimpleEditor } from "./tiptap-templates/simple/simple-editor";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { uploadFiles } from "@/lib/uploadthing";
import actions from "@/actions";
import type { Blog } from "@/prisma/generated/prisma";
import { BlogStatus } from "@/prisma/generated/prisma";
import { toast } from "sonner";

const blogSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().min(1),
  content: z.string().min(1),
  tags: z.array(z.string()).optional(),
  thumbnail: z.string().optional(),
  thumbnailFile: z.custom<File>(),
  status: z.nativeEnum(BlogStatus),
});

const BlogForm = ({
  blog,
}: {
  blog?: Blog & { thumbnail: { url: string } | null };
}) => {
  "use no memo";
  const form = useForm<z.infer<typeof blogSchema>>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: blog?.title ?? "",
      slug: blog?.slug ?? "",
      description: blog?.description ?? "",
      content: blog?.content ?? "",
      tags: blog?.tags ?? [],
      status: blog?.status ?? BlogStatus.DRAFT,
      thumbnail: blog?.thumbnail?.url ?? "",
    },
  });

  const { title } = form.watch();

  useEffect(() => {
    form.setValue("slug", slugify(title));
  }, [form, title]);

  const onSubmit = async (data: z.infer<typeof blogSchema>) => {
    try {
      const file = data.thumbnailFile;
      const res =
        file &&
        (await uploadFiles("imageUploader", {
          files: [file],
        }));
      const thumbnail = res?.[0].ufsUrl;

      const [error] = await (blog?.id
        ? actions.blog.update({
            id: blog.id,
            title: data.title,
            slug: data.slug,
            description: data.description,
            content: data.content,
            thumbnail,
            tags: data.tags,
            status: data.status,
          })
        : actions.blog.create({
            title: data.title,
            slug: data.slug,
            description: data.description,
            content: data.content,
            thumbnail,
            tags: data.tags,
            status: data.status,
          }));

      if (error) {
        toast.error(error.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit, (data) => console.log(data))}>
        <div className="gap-8 grid grid-cols-[2fr_1fr]">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <SimpleEditor
                    value={field.value || blogContent}
                    onChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="thumbnail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <ImageUpload
                      onImageUpload={(file) => {
                        form.setValue("thumbnailFile", file);
                      }}
                      onChange={field.onChange}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter slug" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter tags"
                      defaultValue={field.value?.join(", ")}
                      onBlur={(e) => {
                        const oldValues = field.value ?? [];
                        const newValues = e.target.value
                          .split(", ")
                          .map((p) => p.trim());
                        const values = new Set(
                          [...oldValues, ...newValues].filter(Boolean),
                        );
                        field.onChange(Array.from(values));
                        e.target.value = "";
                      }}
                    />
                  </FormControl>
                  <div className="flex flex-wrap gap-2">
                    {field.value?.map((tag, index) => (
                      <Badge
                        key={index}
                        className="cursor-pointer"
                        onClick={() => {
                          field.onChange(field.value?.filter((t) => t !== tag));
                        }}
                      >
                        {tag} <X className="size-4" />
                      </Badge>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full capitalize">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.values(BlogStatus).map((status) => (
                          <SelectItem
                            key={status}
                            value={status}
                            className="capitalize"
                          >
                            {status.toLowerCase()}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="my-4"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Saving...
                </>
              ) : (
                "Save"
              )}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default BlogForm;
