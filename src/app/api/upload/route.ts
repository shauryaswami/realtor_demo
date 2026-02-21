import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const files = formData.getAll("files") as File[];

        if (!files || files.length === 0) {
            return NextResponse.json({ error: "No files provided" }, { status: 400 });
        }

        const savedPaths: string[] = [];

        for (const file of files) {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);

            // Sanitize file name and make unique
            const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
            const safeName = file.name
                .replace(/\.[^.]+$/, "")
                .replace(/[^a-z0-9]/gi, "-")
                .toLowerCase()
                .slice(0, 40);
            const uniqueName = `property-${Date.now()}-${Math.floor(Math.random() * 1000)}.${ext}`;

            // Upload to Supabase Storage
            const { data, error } = await supabaseAdmin.storage
                .from("properties")
                .upload(uniqueName, buffer, {
                    contentType: file.type,
                    cacheControl: "3600",
                    upsert: false
                });

            if (error) {
                console.error("Supabase upload error:", error);
                throw error;
            }

            // Get public URL
            const { data: { publicUrl } } = supabaseAdmin.storage
                .from("properties")
                .getPublicUrl(uniqueName);

            savedPaths.push(publicUrl);
        }

        return NextResponse.json({ paths: savedPaths });
    } catch (error) {
        console.error("Upload error:", error);
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
}
