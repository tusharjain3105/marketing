"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ImageUploadProps {
  onImageUpload?: (file: File) => void;
  onChange?: (url: string) => void;
  value?: string;
  className?: string;
  maxSize?: number; // in bytes
  accept?: string;
}

const ImageUpload = ({
  onImageUpload,
  onChange,
  value,
  className,
  maxSize = 5 * 1024 * 1024, // 5MB default
  accept = "image/*",
}: ImageUploadProps) => {
  const [preview, setPreview] = useState<string | null>(value || null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Update preview when value changes
  useEffect(() => {
    if (value) {
      setPreview(value);
    }
  }, [value]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setError(null);

    if (!file) return;

    // Check file size
    if (file.size > maxSize) {
      setError(`File size should be less than ${maxSize / (1024 * 1024)}MB`);
      return;
    }

    // Check file type
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file");
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      setPreview(result);
      onChange?.(result);
    };
    reader.readAsDataURL(file);

    // Call the callback if provided
    onImageUpload?.(file);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const file = e.dataTransfer.files?.[0];
    if (file) {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      if (fileInputRef.current) {
        fileInputRef.current.files = dataTransfer.files;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        handleFileChange({ target: { files: dataTransfer.files } } as any);
      }
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreview(null);
    onChange?.("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div
      className={cn(
        "relative w-full h-48 border-2 border-dashed border-border rounded-lg transition-colors",
        "hover:border-primary/50 hover:bg-primary/5",
        "flex flex-col items-center justify-center gap-2 cursor-pointer",
        className,
      )}
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
      />

      {preview ? (
        <div className="relative w-full h-full">
          <Image
            src={preview}
            alt="Preview"
            fill
            className="rounded-lg object-contain"
          />
          <div className="absolute inset-0 flex justify-center items-center gap-2 bg-black/40 opacity-0 hover:opacity-100 rounded-lg transition-opacity">
            <p className="text-white text-sm">Click to change image</p>
            <button
              onClick={handleRemove}
              className="bg-destructive/80 hover:bg-destructive px-2 py-1 rounded text-white text-xs"
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-center items-center bg-primary/10 rounded-full w-12 h-12">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <p className="text-muted-foreground text-sm">
            Click or drag image here
          </p>
          <p className="text-muted-foreground text-xs">
            Max size: {maxSize / (1024 * 1024)}MB
          </p>
        </>
      )}

      {error && (
        <p className="bottom-2 absolute text-destructive text-xs">{error}</p>
      )}
    </div>
  );
};

export default ImageUpload;
