import PropertyForm from "@/components/admin/PropertyForm";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function EditPropertyPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const property = await prisma.property.findUnique({
        where: { id }
    });

    if (!property) {
        notFound();
    }

    return (
        <div className="space-y-10">
            <div>
                <h1 className="text-3xl font-poppins font-bold text-white mb-2">Edit Property</h1>
                <p className="text-white/50">Update the details for 36: {property.title}</p>
            </div>

            <div className="glass p-8 rounded-[2.5rem] border border-white/10">
                <PropertyForm initialData={property} />
            </div>
        </div>
    );
}
