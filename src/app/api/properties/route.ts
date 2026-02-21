import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/auth";

export async function GET() {
    try {
        const properties = await prisma.property.findMany({
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(properties);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch properties" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    const session = await auth();

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const body = await req.json();
        const property = await prisma.property.create({
            data: {
                title: body.title,
                description: body.description,
                price: body.price,
                location: body.location,
                city: body.city,
                type: body.type,
                bhk: body.bhk,
                bedrooms: body.bedrooms,
                bathrooms: body.bathrooms,
                area: body.area,
                images: body.images,
                features: body.features,
                isFeatured: body.isFeatured,
                status: body.status,
            },
        });

        return NextResponse.json(property);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to create property" }, { status: 500 });
    }
}
