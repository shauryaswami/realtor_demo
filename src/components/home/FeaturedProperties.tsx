"use client";

import { motion } from "framer-motion";
import PropertyCard from "./PropertyCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PropertyData {
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
}

export default function FeaturedProperties({ properties }: { properties: PropertyData[] }) {
    return (
        <section className="py-24 px-6 bg-[#050816]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                    <div className="space-y-4">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm"
                        >
                            Exclusive Collection
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-poppins font-bold text-white"
                        >
                            Featured <span className="text-brand-gold">Properties</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Link href="/properties">
                            <Button variant="outline" size="lg" className="group gap-2">
                                View All Properties
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {properties.map((property, index) => (
                        <motion.div
                            key={property.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <PropertyCard property={property} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
