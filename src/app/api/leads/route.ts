import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/auth";

export async function GET() {
    const session = await auth();

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const leads = await prisma.lead.findMany({
            include: {
                property: {
                    select: { title: true }
                }
            },
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(leads);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const lead = await prisma.lead.create({
            data: {
                name: body.name,
                email: body.email,
                phone: body.phone,
                message: body.message,
                propertyId: body.propertyId,
            },
        });

        return NextResponse.json(lead);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to submit lead" }, { status: 500 });
    }
}
