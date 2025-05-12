"use client";

import { cn } from "@/lib/utils";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Editor = ({
  value,
  onChange,
  className,
}: {
  value: string;
  onChange?: (value: string) => void;
  className?: string;
}) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    editable: !!onChange,
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: cn("min-h-[20rem] border p-2 md:p-4", className),
      },
    },
  });

  return <EditorContent editor={editor} />;
};

export default Editor;
