"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
    { name: "Delhi NCR", top: "28%", left: "40%", projects: "120+" },
    { name: "Mumbai", top: "58%", left: "20%", projects: "85+" },
    { name: "Bangalore", top: "82%", left: "44%", projects: "95+" },
    { name: "Hyderabad", top: "68%", left: "48%", projects: "70+" },
    { name: "Pune", top: "62%", left: "23%", projects: "50+" },
];

export default function AreasWeServe() {
    return (
        <section className="py-24 px-6 bg-brand-blue relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1">
                    <div className="space-y-4">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm"
                        >
                            Our Footprint
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white leading-tight">
                            Premium Presence <br /> Across <span className="text-brand-gold">Major Cities</span>
                        </h2>
                        <p className="text-white/60 leading-relaxed max-w-lg">
                            We focus on high-growth corridors and luxury precincts across India's top Tier-1 cities, ensuring our clients get access to the most exclusive developments.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {locations.map((loc, i) => (
                            <motion.div
                                key={loc.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-4 group cursor-pointer"
                            >
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-blue transition-all">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">{loc.name}</h4>
                                    <p className="text-brand-gold text-sm font-medium">{loc.projects} Projects</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Interactive Map Area (India Map) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 aspect-square relative bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden flex items-center justify-center order-1 lg:order-2 p-8"
                >
                    {/* SVG India Map */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        <svg
                            viewBox="0 0 1000 1000"
                            className="w-full h-full text-brand-gold/10 drop-shadow-[0_0_50px_rgba(212,160,23,0.2)]"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                className="transition-all duration-700 hover:text-brand-gold/20"
                                d="M355.9 45.5l0.5 0.7 0.5 0.8 0.7 0.6 0.7 0.2 0.9-0.4 1.3-1.5 0.8-0.4 1.7 0.1 0.4 1.4-0.6 1.9-0.8 1.8-0.2 2.8 1 2.7 2.7 4.9 0.3 1.3 0.2 2.7 0.5 1.2 1.1 1.6 0.3 0.6 1.8 6.7 0.6 1.2 1.2 1.1 1.3 0.5 6.6 1.2 1.7 0.7 2.5 1.9 1.5 2 1.1 0.6 1.3 0.4 1.1 0.5 0.8 0.8 0.2 0.3 0.5 1.1 0.3 0.8 0.1 0.9-0.1 0.8-0.3 0.8-2.1 2-2.8 1.3-2.2 1.5-0.3 3 1.4 4.3 0.5 2.2 0.2 2.3-0.3 6.7 0.5 2 0.7 1.2 2.7 2.5 0 0.1 1.4 1.4 0.8 0.5 0.9 0.4 0.9 0.4 0.6 0.4 0.7 0.3 0.8-0.1 0.7-0.1 3.2 0.1 2.3 0.5 2.3 0 1.1 0.9-1 3.2-1.4 1.6 0.2 1.7 0.5 1.3-1.7 0.4-0.2 0.7 1.3 0.5 1.1 0.3 1.6 2.1 2.7 4 1.5 1 0.2 1.3-1.3 2-1.3 0.8-0.5 1.4-1.2 1.4-0.9 1.1-1 0.2-0.8-1.7-1.7-0.5-1 2.1-1.5 0.9-0.6-0.1-0.7 0.1-0.9 0.3-0.8 0.4-0.6 0.4-0.3 0.8-0.3 2.1-0.5 0.6-0.2 0.1-0.8-0.2-0.4-0.1-0.3 0.1-0.8 0.4-0.4 0.1-0.9 0.5-1-0.3-0.8-0.8-0.8-0.8-2.4-2.1-0.5-1.1-0.5-1.8-0.1-0.5 0.2-0.6 0.2-0.6 0.1-0.6-0.4-0.6-0.7-0.3-0.6 0.3-0.8 1.1-0.5 0.4-0.5 0.3-1.2 0.3-4.1 0.1-1.2 0.3-0.7 0.3-0.1 0.7 0.8 1.8 1.2 1.7 0.1 0.4-0.1 0.2-0.2 0.2-0.2 0.3 0 0.4 0 0.2 0.1 0.1 0.7 3.2 0 0.7-0.2 0.7 0.1 0.4 0.3 0.1 0.2 0.1 1.1 0.6 0.6 0.9 0.5 1 2.8 3.9 0.9 0.7 1.2 0.8 0.4 0.3 0.3 0.7-0.1 0.7-0.6 1.4-0.2 0.7-0.2 1.4-0.2 0.7-0.8 1.2 0 0.5 0.7 0.9 0 0.3-0.1 0.3 0 0.3 0.1 0.3 0.4 0.4 0.2 0.6 0.2 0.3 0.2 0.1 0.3 0.1 0.5 0 1.1 1.1 0.7 0.9-0.2 0.4-0.5 0.6-2.8 2.3-0.1 0.8 1.1 0.7 0.8 0.8-0.1 1.1-0.4 1.3-0.2 1.3 0.1 0.6 0.1 0.3 0.2 0.2 1 0.5 0.3 0 0.7-0.2 0.8 0.1 0.4 0 0.7 0.2 1 0.5 0.6-1.1 0.6-0.8 0.8-0.6 0.8-1.3 1-1.4 0.6-1.3 0.2 0 1.6 0.8 0.7 0.8 0.6 0.7 0.4 0.8 0.5 0.7 0.9 0.7 0 0.6 0.4 0.4 0.3 0.7-0.4 0.8 0.1 0.4 0.7 0.1 0.3 0.5 0.3 0.8 0.1 0.7 0 0.6 0.5 0.8 1.4 1 0.2 0.6 0.3 0.5 0.1 0.3 0.2 1.2 0.2 0.4 0.4 0.1 0.5-0.1 0.4 0 0.5 0.1 0.4 0.2 0.1 0.2 0.1 0.1 0.1 0.2 0 0.2 0.3 0.4 0.4 0.5 0.5 0.5 0.5 0.2 0.6 0.2 0.3 0.1 0.4-0.1 1.2-0.7 0.5-0.1 1.2-0.1 1.4-0.4 0.7 0.1 2.1 0.5 0.5 0.2 0.3 0.5 0.5 1 0.7 0.7 0.3 0.2 0.2 0.1 0.4 0.3 2.1 0.9 0.7 0.5 0.4 0.9 0.5 0.7 0.9 0.3 0.5-0.1 0.9-0.5 0.5 0 0.3 0.3 0.8 1.2 0.9 0.5 0.2 0.3-0.8 1.3-0.2 0.2-0.2 0.1-0.3-0.1-0.3 0.1-0.1 0.1 0 0.5 0.3 0.4 0.4 0.4 0.2 0.4 0.1 0.6-0.1 0.5-0.3 0.5-0.3 0.6 1.1-0.2 1.1 0 2.1 0.7 2.9 1.6 1.4 0.6 1 0.6 0.5 0.1 0.6-0.1 0.4-0.1 0.5 0 0.6 0.2 2.8 1.6 0.9 0.7 0.3 0.4 0.6 1.1 0.3 0.5 0.5 0.4 2.4 1.1 2.3 0.6 0.9 0.5 0.6 0.9 0.2 0.5-0.2 0.5-0.2 0.1-2 0.6-0.5-0.1-0.3-0.6-0.3-0.4-0.4 0.3-0.5 0.6-0.4 0.4 0.3 0.9-0.5 0.9-1.8 1.4-0.4 0.4-0.9 1.4-0.3 0.3-1 0.7-0.8 0.8-0.3 0.2-0.6 0.2-1 0.1-0.5 0.2-0.2 0.6-0.4-0.1-0.3 0-0.3-0.3-0.3-0.2-0.2-0.2-0.3-0.1-0.4 0.1-0.7 0-0.6-0.3 0.3-0.3 0.3-0.2 0.2-0.2-0.3 0.1-0.5 0.2-0.8 0.2-0.9 0-0.3 0.1-0.2 0.7-1.1 0.2-0.1 0.5-0.3 0.2-0.1 0.1 0 0.3 0 0.1 0 0.1-0.1-0.1-0.1-0.1-0.1 0-0.1 0-0.2 0-0.3 0-0.2 0.3-0.3 0.3 0 0.1 0.1 0.1 0.3 0.2 0.3 0.4 0.1 0.4-0.1 0.3-0.4 0.3-0.4-0.1-0.3-0.1-0.3 0-0.2 0.4-0.1 0.2 0.1 0.1 0.3 0-0.3 0-0.2-0.1-0.1-0.1-1.4-0.3-0.6-0.3-0.9-0.2-1-0.4-2.9-0.3-1.1-0.3-1.9-1.2-2.8-1.9-5.1-2.2-5.1-3.5-0.9-0.8-0.1-0.1-0.1-0.1 0-0.3-0.1-0.3-0.8-0.3-0.3-0.5-0.3-0.6-0.1-0.5 0 0.1 0.4 0.3 0.3-0.5 0.1-0.4 0-0.3-0.6 0.2-0.8 0.1-0.7-0.1-0.3-0.6 0.6-1.2 0.2-0.1 0.9-0.1 0.2-0.1-0.1-0.2-0.3-0.2-0.4-0.1-0.3-0.1-0.1-0.3-0.1-0.2 0-0.1-0.2 0-0.2 0.1-0.2 0.1-0.4-0.2-0.2-0.2-0.2-0.2 0-0.4 0-0.3 0.2-0.3 0.2-0.1 0.4 0-0.2-0.3-0.1-0.2-0.3 0.1-0.2 0.2-0.4-0.2-0.1 0.2-0.2 0.3-0.4 0.1-0.4-0.1-0.1-0.4 0-0.4 0.2-0.4-0.4 0.3-0.4 0.1-0.2-0.1-0.2-0.3 0.2-0.6 0.4-0.7 0.6-0.6 0.6-0.3-0.2-0.3-0.1 0-0.3 0.2-0.2-0.1-0.2-0.1-0.3-0.5-0.1-0.3 0.1 0.6 0.1 0.5 0 0.4-0.4 0.3-0.6 0-0.2-0.5 0.2-1.3-0.2-1.5 0.1-0.8 0.6-0.3 1.2 0.4 0.6 0 0.1-0.6-0.2-0.1-0.3 0.1-0.2-0.1-0.1-0.4 0.1-0.2 0.6-0.1 0.4-0.3 0.6-0.1 0.3-0.1 0.1-0.2 0.5-0.7 0.8-0.9 0.5-0.4 1.1-0.4 0.5-1.2 0.4-0.5 0.3-0.1 1 0.1 0.3-0.1 0.6-0.5 0.3-0.1 0.4-0.1 1.5-1.2-0.4-0.2-0.8 0.3-0.4-0.1-0.7 0.8-0.7 0.4-0.7 0.1-1.1 0-0.6 0.1-0.3 0.3-0.4 0.9-0.3 0.4-0.4 0.2-0.9 0.3-0.5 0.2-0.4 0.3-0.4 0.2-1.1 0.2-0.7 0.5-0.6 0.3-0.5 0.4-2 2.5 0.3 0.1 0 0.3-0.1 0.2-0.2 0.2-0.4 0.3-0.3 0.1-0.3-0.1-0.4-0.1-1.9 0.1-1.4-0.2-0.7-0.2-0.4-0.4 0.2-0.6 0.2 0 0.3 0 0.2 0 0.1-0.1 0.1-0.4 0.1-0.1 0.2-0.2 0.2-0.1 0.3-0.1 0.4 0.2 0.3 0.4 0.4-0.5 0.4 0 0.5-0.2 0.1-0.6-0.6 0.3-0.6 0.1-0.1-0.1-0.3-0.2-0.5-0.4-0.3-0.6-0.1-0.6 0.1-0.7 0-0.6-0.3 0.3-0.3 0.3-0.2 0.2-0.2-0.3 0.1-0.5 0.2-0.8 0.2-0.9 0-0.3 0.1-0.2 0.7-1.1 0.2-0.1 0.5-0.3 0.2-0.1 0.1 0 0.3 0 0.1 0 0.1-0.1-0.1-0.1-0.1-0.1 0-0.1 0-0.2 0-0.3 0-0.2 0.3-0.3 0.3 0 0.1 0.1 0.1 0.3 0.2 0.3 0.4 0.1 0.4-0.1 0.3-0.4 0.3-0.4-0.1-0.3-0.1-0.3 0-0.2 0.4-0.1 0.2 0.1 0.1 0.3 0-0.3 0-0.2 0.9-0.6 1.4-0.3 3.4 0.1 2.8 0 2.3 0 0-4.4 0-3.4 0-2.5 0.7-1.4 1.5 0.1 0.4 0.7 0.2 1.8 0.5 10.9-6.9 10.9-6.8z"
                            />
                        </svg>

                        {/* Interactive Markers */}
                        <div className="absolute inset-0">
                            {locations.map((loc, i) => (
                                <motion.div
                                    key={loc.name}
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                                    style={{ top: loc.top, left: loc.left }}
                                    className="absolute"
                                >
                                    <div className="relative group">
                                        {/* Pulse Effect */}
                                        <div className="absolute -inset-4 bg-brand-gold/20 rounded-full animate-ping" />

                                        {/* Pin */}
                                        <div className="relative z-10 w-4 h-4 bg-brand-gold rounded-full border-2 border-brand-blue" />

                                        {/* Tooltip */}
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-brand-gold text-brand-blue font-bold px-3 py-1.5 rounded-lg text-xs">
                                            {loc.name}
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-brand-gold" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="absolute bottom-8 right-8 text-white/30 text-xs font-poppins uppercase tracking-widest text-right">
                        Interactive <br /> Presence Map
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
