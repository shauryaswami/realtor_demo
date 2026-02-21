import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const files = formData.getAll("files") as File[];

        if (!files || files.length === 0) {
            return NextResponse.json({ error: "No files provided" }, { status: 400 });
        }

        const uploadDir = join(process.cwd(), "public", "images", "properties");

        // Ensure directory exists
        await mkdir(uploadDir, { recursive: true });

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
            const uniqueName = `${safeName}-${Date.now()}.${ext}`;
            const filePath = join(uploadDir, uniqueName);

            await writeFile(filePath, buffer);
            savedPaths.push(`/images/properties/${uniqueName}`);
        }

        return NextResponse.json({ paths: savedPaths });
    } catch (error) {
        console.error("Upload error:", error);
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
}
