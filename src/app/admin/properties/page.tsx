import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
    Plus,
    Search,
    Filter,
    Edit2,
    Trash2,
    ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils/cn";
import DeletePropertyButton from "@/components/admin/DeletePropertyButton";

async function getProperties() {
    return await prisma.property.findMany({
        orderBy: { createdAt: "desc" },
    });
}

export default async function AdminPropertiesPage() {
    const properties = await getProperties();

    return (
        <div className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-poppins font-bold text-white mb-2">Properties</h1>
                    <p className="text-white/50">Manage your real estate inventory</p>
                </div>
                <Link href="/admin/properties/new">
                    <Button variant="gold" className="rounded-xl flex items-center gap-2">
                        <Plus size={18} />
                        Add New Property
                    </Button>
                </Link>
            </div>

            <div className="glass overflow-hidden rounded-[2rem]">
                <div className="p-6 border-b border-white/10 flex flex-col md:flex-row justify-between gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                        <input
                            type="text"
                            placeholder="Search properties..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-12 pr-4 text-white text-sm focus:border-brand-gold/50 outline-none"
                        />
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" className="text-xs border-white/10 rounded-xl px-4">
                            <Filter size={14} className="mr-2" /> Filter
                        </Button>
                        <div className="text-white/30 text-sm flex items-center px-2">
                            {properties.length} Listings Total
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-white/5 text-white/40 text-xs uppercase tracking-widest font-bold">
                            <tr>
                                <th className="px-6 py-4">Property</th>
                                <th className="px-6 py-4">Location</th>
                                <th className="px-6 py-4">Price</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Type</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {properties.map((property) => (
                                <tr key={property.id} className="hover:bg-white/[0.02] transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 relative rounded-lg overflow-hidden flex-shrink-0 border border-white/10">
                                                <Image
                                                    src={property.images.split(',')[0] || "/images/placeholder.jpg"}
                                                    alt={property.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <div className="text-white font-medium text-sm group-hover:text-brand-gold transition-colors">
                                                    {property.title}
                                                </div>
                                                <div className="text-white/30 text-xs mt-0.5 capitalize">{property.type} • {property.bhk}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-white/60 text-sm">
                                        {property.location}, {property.city}
                                    </td>
                                    <td className="px-6 py-4 text-white font-poppins text-sm font-bold">
                                        {property.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={cn(
                                            "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                                            property.status === "AVAILABLE" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                                        )}>
                                            {property.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-white/40 text-sm">
                                        {property.isFeatured && (
                                            <span className="text-brand-gold bg-brand-gold/5 border border-brand-gold/20 px-2 py-0.5 rounded text-[10px] font-bold">FEA</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <Link href={`/properties/${property.id}`} target="_blank" className="p-2 text-white/30 hover:text-white transition-colors">
                                                <ExternalLink size={16} />
                                            </Link>
                                            <Link href={`/admin/properties/${property.id}`} className="p-2 text-white/30 hover:text-brand-gold transition-colors">
                                                <Edit2 size={16} />
                                            </Link>
                                            <DeletePropertyButton propertyId={property.id} propertyTitle={property.title} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {properties.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="px-6 py-20 text-center text-white/20 italic">
                                        No properties found. Start by adding your first listing!
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
