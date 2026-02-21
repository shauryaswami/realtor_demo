import prisma from "@/lib/prisma";

export async function getProperties() {
    try {
        return await prisma.property.findMany({
            orderBy: { createdAt: "desc" },
        });
    } catch (error) {
        console.error("Error fetching properties:", error);
        return [];
    }
}

export async function getFeaturedProperties() {
    try {
        return await prisma.property.findMany({
            where: { isFeatured: true },
            orderBy: { createdAt: "desc" },
            take: 6,
        });
    } catch (error) {
        console.error("Error fetching featured properties:", error);
        return [];
    }
}

export async function getPropertyById(id: string) {
    try {
        return await prisma.property.findUnique({
            where: { id },
        });
    } catch (error) {
        console.error("Error fetching property by id:", error);
        return null;
    }
}
