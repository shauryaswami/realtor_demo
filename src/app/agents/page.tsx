"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, Award, MapPin, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AgentsPage() {
    const agents = [
        { name: "Vikram Malhotra", role: "Principal Partner", city: "Gurgaon", exp: "15 Yrs", image: "/images/founder/founder.jpg" },
        { name: "Priya Sharma", role: "Sr. Luxury Consultant", city: "South Delhi", exp: "8 Yrs", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" },
        { name: "Rahul Khanna", role: "Commercial specialist", city: "Mumbai", exp: "10 Yrs", image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=80&w=200" },
        { name: "Ananya Iyer", role: "Residential Head", city: "Bangalore", exp: "6 Yrs", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200" },
    ];

    return (
        <main className="min-h-screen bg-brand-blue pt-32 pb-24">
            <Navbar />

            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 mb-24 text-center space-y-6">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-poppins font-bold text-white"
                >
                    Our Expert <span className="text-brand-gold italic">Agents</span>
                </motion.h1>
                <p className="text-lg text-white/50 max-w-2xl mx-auto">
                    Connect with the most experienced real estate professionals in India.
                    Unmatched expertise in luxury, residential, and commercial sectors.
                </p>

                {/* Local Search for Agents */}
                <div className="max-w-xl mx-auto relative pt-8">
                    <Search className="absolute left-6 top-1/2 translate-y-2 text-white/30" size={20} />
                    <input
                        type="text"
                        placeholder="Search by name or city..."
                        className="w-full bg-white/5 border border-white/10 rounded-full px-16 py-5 text-white focus:outline-none focus:ring-2 focus:ring-brand-gold"
                    />
                </div>
            </div>

            {/* Agents Grid */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {agents.map((agent, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group"
                    >
                        <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 border border-white/5 group-hover:border-brand-gold/30 transition-all">
                            <Image src={agent.image} alt={agent.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent opacity-60" />

                            <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                                <Link href="#" className="flex-1 bg-brand-gold text-brand-blue py-3 rounded-2xl flex justify-center hover:scale-105 transition-all">
                                    <Phone size={18} />
                                </Link>
                                <Link href="#" className="flex-1 bg-white/10 backdrop-blur-md text-white py-3 rounded-2xl flex justify-center hover:scale-105 transition-all">
                                    <Mail size={18} />
                                </Link>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-brand-gold transition-colors">{agent.name}</h3>
                                    <p className="text-white/40 text-xs font-medium uppercase tracking-wider">{agent.role}</p>
                                </div>
                                <div className="flex items-center gap-1 bg-brand-gold/10 text-brand-gold px-2 py-1 rounded-lg text-[10px] font-bold">
                                    <Award size={12} /> {agent.exp}
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-white/30 text-xs">
                                <MapPin size={12} className="text-brand-gold" /> {agent.city}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Join the Team */}
            <div className="max-w-7xl mx-auto px-6 mt-32">
                <div className="glass p-16 rounded-[4rem] text-center space-y-8 relative overflow-hidden border border-brand-gold/10">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/5 via-transparent to-brand-gold/5 pointer-events-none" />
                    <h2 className="text-4xl font-poppins font-bold text-white relative z-10">Want to join our Team?</h2>
                    <p className="text-white/50 max-w-xl mx-auto relative z-10">We are always looking for passionate individuals who understand the luxury real estate landscape in India.</p>
                    <div className="relative z-10">
                        <Link href="/contact"><button className="bg-white text-brand-blue px-12 py-4 rounded-full font-bold hover:bg-brand-gold hover:text-brand-blue transition-all">Contact Us</button></Link>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
