"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { HardHat, Compass, Layers, Milestone } from "lucide-react";
import Image from "next/image";

export default function ProjectsPage() {
    const projects = [
        { name: "The Gold Crest", dev: "Luxury Developers", location: "Sector 42, Gurgaon", image: "/images/properties/prop-1.jpg", status: "Nearing Completion" },
        { name: "Azure Heights", dev: "Skyline Group", location: "Bandra West, Mumbai", image: "/images/properties/prop-3.jpg", status: "Booking Open" },
        { name: "Emerald Woods", dev: "Green Spaces", location: "Whitefield, Bangalore", image: "/images/properties/prop-4.jpg", status: "Under Construction" },
    ];

    return (
        <main className="min-h-screen bg-brand-blue pt-32 pb-24">
            <Navbar />

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 mb-32">
                <div className="relative h-[400px] md:h-[500px] rounded-[3.5rem] overflow-hidden group">
                    <Image
                        src="/images/bg/projects.jpg"
                        alt="New Projects"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/20 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-12 md:p-20 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-4 max-w-2xl"
                        >
                            <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-sm">New Launches 2026</span>
                            <h1 className="text-4xl md:text-7xl font-poppins font-bold text-white leading-tight">
                                Architectural <br /> <span className="text-brand-gold italic">Masterpieces</span>
                            </h1>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Project Status Filters */}
            <div className="max-w-7xl mx-auto px-6 mb-24 flex flex-wrap gap-4 justify-center">
                {["All Projects", "Ongoing", "Completed", "New Launch", "Plot Developments"].map((filter, i) => (
                    <button key={i} className={`px-8 py-3 rounded-full text-sm font-bold border transition-all ${i === 0 ? "bg-brand-gold text-brand-blue border-brand-gold" : "bg-white/5 text-white/40 border-white/10 hover:border-white/30"}`}>
                        {filter}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="max-w-7xl mx-auto px-6 mb-32 grid grid-cols-1 md:grid-cols-3 gap-12">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group cursor-pointer"
                    >
                        <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8">
                            <Image src={project.image} alt={project.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute top-6 left-6">
                                <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-4 py-2 rounded-full text-xs font-bold">
                                    {project.status}
                                </span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <p className="text-brand-gold text-[10px] uppercase font-bold tracking-[0.2em]">{project.dev}</p>
                            <h3 className="text-2xl font-poppins font-bold text-white group-hover:text-brand-gold transition-colors">{project.name}</h3>
                            <p className="text-white/40 text-sm flex items-center gap-2">
                                <Compass size={14} className="text-brand-gold" /> {project.location}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-6 mb-32 grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                    { title: "Design", icon: <Layers /> },
                    { title: "Planning", icon: <Milestone /> },
                    { title: "Development", icon: <HardHat /> },
                    { title: "Handover", icon: <Milestone /> },
                ].map((s, i) => (
                    <div key={i} className="glass p-8 rounded-3xl text-center space-y-4 border border-white/5">
                        <div className="text-brand-gold flex justify-center">{s.icon}</div>
                        <h4 className="text-white font-bold">{s.title}</h4>
                    </div>
                ))}
            </div>

            <Footer />
        </main>
    );
}
