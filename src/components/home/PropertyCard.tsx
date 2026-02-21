"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { BedDouble, Bath, Square, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface PropertyProps {
    property: {
        id: string;
        title: string;
        location: string;
        price: string;
        images: string;
        bedrooms: string | null;
        bathrooms: string | null;
        area: string | null;
        type: string;
        city: string;
    };
}

export default function PropertyCard({ property }: PropertyProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const displayImage = property.images?.split(',')[0] || "/images/placeholder.jpg";

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative h-[480px] w-full group overflow-hidden rounded-3xl bg-white/5 border border-white/10"
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                }}
                className="absolute inset-0 p-4 flex flex-col"
            >
                {/* Image Container */}
                <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6">
                    <Image
                        src={displayImage}
                        alt={property.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                        <span className="bg-brand-gold text-brand-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            {property.type}
                        </span>
                    </div>
                    <div className="absolute top-4 right-4">
                        <button className="bg-white/10 backdrop-blur-md p-2 rounded-full text-white hover:bg-brand-gold hover:text-brand-blue transition-colors">
                            <ArrowUpRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-poppins font-bold text-xl text-white group-hover:text-brand-gold transition-colors truncate max-w-[70%]">
                            {property.title}
                        </h3>
                        <span className="text-xl font-bold text-brand-gold">{property.price}</span>
                    </div>

                    <p className="flex items-center gap-1 text-white/50 text-sm mb-6">
                        <MapPin size={14} className="text-brand-gold" />
                        {property.location}
                    </p>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                        <div className="flex flex-col items-center gap-1 text-white/70">
                            <BedDouble size={18} className="text-brand-gold" />
                            <span className="text-[10px] uppercase font-bold tracking-tighter">{property.bedrooms || "N/A"} Beds</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-white/70">
                            <Bath size={18} className="text-brand-gold" />
                            <span className="text-[10px] uppercase font-bold tracking-tighter">{property.bathrooms || "N/A"} Baths</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-white/70">
                            <Square size={18} className="text-brand-gold" />
                            <span className="text-[10px] uppercase font-bold tracking-tighter">{property.area || "N/A"}</span>
                        </div>
                    </div>

                    <Link
                        href={`/properties/${property.id}`}
                        className="mt-6 w-full text-center py-3 rounded-xl border border-brand-gold/30 text-brand-gold font-bold text-sm hover:bg-brand-gold hover:text-brand-blue transition-all"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
