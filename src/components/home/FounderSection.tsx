"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function FounderSection() {
    return (
        <section className="py-24 px-6 bg-[#050816] relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                {/* Founder Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative w-full lg:w-1/2 aspect-[4/5] rounded-[3rem] overflow-hidden group"
                >
                    <Image
                        src="/images/founder/founder.jpg"
                        alt="Founder - Real Estate India"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-60" />

                    {/* Experience Badge */}
                    <div className="absolute bottom-10 left-10 glass p-6 rounded-3xl">
                        <p className="text-4xl font-bold font-poppins text-brand-gold">15+</p>
                        <p className="text-xs text-white/70 uppercase tracking-widest">Years of <br /> Excellence</p>
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 space-y-8"
                >
                    <div className="space-y-4">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm"
                        >
                            Meet Our Founder
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white leading-tight">
                            Crafting <span className="text-brand-gold">Legacies</span>, <br /> Not Just Deals.
                        </h2>
                    </div>

                    <div className="relative">
                        <Quote className="absolute -top-4 -left-6 text-brand-gold/20" size={64} />
                        <p className="text-xl text-white/80 italic font-poppins leading-relaxed relative z-10">
                            "With over 15 years of experience in Delhi NCR and Mumbai real estate, we help buyers and investors make confident, profitable decisions."
                        </p>
                    </div>

                    <p className="text-white/60 leading-relaxed max-w-lg">
                        Our mission is to bring transparency and professional rigor to the Indian real estate market. We don't just sell property; we partner with you to build your future, whether it's a first home or a strategic commercial investment.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 pt-4">
                        <Button variant="gold" size="lg">Consult with our Expert</Button>
                        <div className="flex flex-col">
                            <span className="text-white font-bold font-poppins text-lg">Vikram Malhotra</span>
                            <span className="text-brand-gold text-sm font-medium">Principal Consultant & Founder</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
