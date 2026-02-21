import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/auth";

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    try {
        const property = await prisma.property.findUnique({
            where: { id },
        });

        if (!property) {
            return NextResponse.json({ error: "Property not found" }, { status: 404 });
        }

        return NextResponse.json(property);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch property" }, { status: 500 });
    }
}

export async function PUT(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const session = await auth();

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const body = await req.json();
        const property = await prisma.property.update({
            where: { id },
            data: body,
        });

        return NextResponse.json(property);
    } catch (error) {
        return NextResponse.json({ error: "Failed to update property" }, { status: 500 });
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const session = await auth();

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        await prisma.property.delete({
            where: { id },
        });

        return NextResponse.json({ message: "Property deleted" });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete property" }, { status: 500 });
    }
}
