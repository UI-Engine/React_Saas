import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Upload, X, CheckCircle, AlertCircle } from "lucide-react";

export interface CustomFileUploadProps {
  onUpload?: (files: File[]) => void;
  className?: string;
  analytics?: {
    event: string;
    properties?: Record<string, any>;
  };
  accept?: string;
  multiple?: boolean;
  maxSizeMB?: number;
}

const CustomFileUpload: React.FC<CustomFileUploadProps> = ({
  onUpload,
  className,
  analytics,
  accept = "*",
  multiple = false,
  maxSizeMB = 10,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return;
    const arr = Array.from(fileList);
    const tooBig = arr.find((f) => f.size > maxSizeMB * 1024 * 1024);
    if (tooBig) {
      setError(`File ${tooBig.name} exceeds ${maxSizeMB}MB limit.`);
      setSuccess(false);
      return;
    }
    setFiles(arr);
    setError(null);
    setSuccess(true);
    if (onUpload) onUpload(arr);
    if (analytics) {
      try {
        console.log(
          "FileUpload Analytics Event:",
          analytics.event,
          analytics.properties
        );
      } catch (error) {
        console.error("Analytics error:", error);
      }
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  return (
    <div
      className={cn(
        "border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-all duration-200",
        dragActive ? "border-primary bg-primary/10" : "border-muted",
        className
      )}
      onDragOver={(e) => {
        e.preventDefault();
        setDragActive(true);
      }}
      onDragLeave={() => setDragActive(false)}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
    >
      <Upload className="h-8 w-8 mb-2 text-primary" />
      <p className="text-sm mb-2">
        Drag & drop files here or <span className="underline">browse</span>
      </p>
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept={accept}
        multiple={multiple}
        onChange={handleChange}
      />
      {files.length > 0 && (
        <div className="mt-2 w-full">
          <ul className="text-xs">
            {files.map((file) => (
              <li key={file.name} className="flex items-center gap-2">
                <span>{file.name}</span>
                <span className="text-muted-foreground">
                  ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {error && (
        <div className="mt-2 text-red-500 flex items-center gap-1 text-xs">
          <AlertCircle className="h-3 w-3" />
          {error}
        </div>
      )}
      {success && (
        <div className="mt-2 text-green-500 flex items-center gap-1 text-xs">
          <CheckCircle className="h-3 w-3" />
          Upload successful!
        </div>
      )}
    </div>
  );
};

export { CustomFileUpload };
