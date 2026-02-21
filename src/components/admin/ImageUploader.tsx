"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { UploadCloud, X, ImagePlus, Loader2 } from "lucide-react";

interface ImageUploaderProps {
    value: string; // comma-separated paths
    onChange: (value: string) => void;
}

export default function ImageUploader({ value, onChange }: ImageUploaderProps) {
    const [isDragging, setIsDragging] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const currentImages = value ? value.split(",").map((s) => s.trim()).filter(Boolean) : [];

    const uploadFiles = useCallback(async (files: FileList | File[]) => {
        const validFiles = Array.from(files).filter((f) => f.type.startsWith("image/"));
        if (validFiles.length === 0) return;

        setIsUploading(true);
        try {
            const formData = new FormData();
            validFiles.forEach((file) => formData.append("files", file));

            const res = await fetch("/api/upload", { method: "POST", body: formData });
            if (!res.ok) throw new Error("Upload failed");

            const { paths } = await res.json();
            const updated = [...currentImages, ...paths];
            onChange(updated.join(","));
        } catch (err) {
            console.error(err);
            alert("Image upload failed. Please try again.");
        } finally {
            setIsUploading(false);
        }
    }, [currentImages, onChange]);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files) uploadFiles(e.dataTransfer.files);
    }, [uploadFiles]);

    const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(true); };
    const handleDragLeave = () => setIsDragging(false);

    const removeImage = (idx: number) => {
        const updated = currentImages.filter((_, i) => i !== idx);
        onChange(updated.join(","));
    };

    return (
        <div className="space-y-4">
            {/* Drop Zone */}
            <div
                onClick={() => !isUploading && inputRef.current?.click()}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`
                    relative flex flex-col items-center justify-center gap-3
                    border-2 border-dashed rounded-2xl p-8 cursor-pointer
                    transition-all duration-300
                    ${isDragging
                        ? "border-brand-gold bg-brand-gold/10 scale-[1.01]"
                        : "border-white/20 hover:border-brand-gold/50 hover:bg-white/5"
                    }
                    ${isUploading ? "pointer-events-none opacity-70" : ""}
                `}
            >
                <input
                    ref={inputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={(e) => e.target.files && uploadFiles(e.target.files)}
                />
                {isUploading ? (
                    <Loader2 className="animate-spin text-brand-gold" size={36} />
                ) : (
                    <UploadCloud
                        size={36}
                        className={`transition-colors ${isDragging ? "text-brand-gold" : "text-white/30"}`}
                    />
                )}
                <div className="text-center">
                    <p className={`font-semibold transition-colors ${isDragging ? "text-brand-gold" : "text-white/60"}`}>
                        {isUploading
                            ? "Uploading..."
                            : isDragging
                                ? "Drop to upload"
                                : "Drag & drop images here"
                        }
                    </p>
                    {!isUploading && (
                        <p className="text-white/30 text-sm mt-1">
                            or <span className="text-brand-gold underline underline-offset-2">click to browse</span> from your device
                        </p>
                    )}
                </div>
                <p className="text-white/20 text-xs">JPG, PNG, WEBP · Multiple files supported</p>
            </div>

            {/* Preview Grid */}
            {currentImages.length > 0 && (
                <div className="grid grid-cols-3 gap-3">
                    {currentImages.map((src, idx) => (
                        <div key={idx} className="relative group rounded-xl overflow-hidden aspect-video bg-white/5 border border-white/10">
                            <Image
                                src={src}
                                alt={`Property image ${idx + 1}`}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors" />
                            <button
                                type="button"
                                onClick={() => removeImage(idx)}
                                className="absolute top-2 right-2 p-1.5 rounded-full bg-red-500/80 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500"
                            >
                                <X size={14} />
                            </button>
                            {idx === 0 && (
                                <span className="absolute bottom-2 left-2 text-[10px] font-bold bg-brand-gold text-brand-blue px-2 py-0.5 rounded-full">
                                    COVER
                                </span>
                            )}
                        </div>
                    ))}

                    {/* Add more button */}
                    <button
                        type="button"
                        onClick={() => inputRef.current?.click()}
                        className="aspect-video rounded-xl border-2 border-dashed border-white/20 hover:border-brand-gold/50 text-white/30 hover:text-brand-gold transition-all flex flex-col items-center justify-center gap-1"
                    >
                        <ImagePlus size={20} />
                        <span className="text-xs font-medium">Add More</span>
                    </button>
                </div>
            )}
        </div>
    );
}
