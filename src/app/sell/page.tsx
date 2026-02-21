"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Building2, Calculator, TrendingUp, ShieldCheck, Camera, Globe } from "lucide-react";
import Image from "next/image";

export default function SellPage() {
    return (
        <main className="min-h-screen bg-brand-blue pt-32 pb-24">
            <Navbar />

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-8"
                >
                    <h1 className="text-5xl md:text-7xl font-poppins font-bold text-white leading-tight">
                        Sell Your Property <br />
                        at the <span className="text-brand-gold italic">Best Price</span>
                    </h1>
                    <p className="text-lg text-white/60 leading-relaxed">
                        List your property with India's most trusted luxury real estate network.
                        Get expert valuation, professional photography, and global exposure.
                    </p>
                    <div className="flex gap-4">
                        <Button variant="gold" size="xl">List Your Property</Button>
                        <Button variant="outline" size="xl">Get Free Valuation</Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative h-[600px] rounded-[3rem] overflow-hidden"
                >
                    <Image
                        src="/images/bg/sell.jpg"
                        alt="Sell Property"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/40 to-transparent" />
                </motion.div>
            </div>

            {/* Why Sell with Us */}
            <div className="max-w-7xl mx-auto px-6 mb-32">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl font-poppins font-bold text-white">Why Sell With Us?</h2>
                    <p className="text-white/60">We combine local expertise with corporate professionalism.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Expert Valuation", desc: "Data-driven pricing to ensure you get the maximum value.", icon: <Calculator size={32} /> },
                        { title: "High Visibility", desc: "Showcase your property to thousands of verified buyers.", icon: <Globe size={32} /> },
                        { title: "Secure Transactions", desc: "End-to-end legal support for a hassle-free experience.", icon: <ShieldCheck size={32} /> },
                        { title: "Professional Media", desc: "High-end photography and 3D walkthroughs for your listing.", icon: <Camera size={32} /> },
                        { title: "Market Insights", desc: "Stay ahead with real-time market trends and reports.", icon: <TrendingUp size={32} /> },
                        { title: "Premium Branding", desc: "Your property deserves the best-in-class presentation.", icon: <Building2 size={32} /> },
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-brand-gold/30 transition-all group"
                        >
                            <div className="text-brand-gold mb-6 group-hover:scale-110 transition-transform origin-left">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Valuation Form */}
            <div className="max-w-3xl mx-auto px-6">
                <div className="glass p-12 rounded-[3.5rem] shadow-2xl space-y-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 transform rotate-12 opacity-10">
                        <Calculator size={120} className="text-brand-gold" />
                    </div>

                    <div className="text-center space-y-2 relative">
                        <h3 className="text-3xl font-poppins font-bold text-white">Get Early Access</h3>
                        <p className="text-white/40">Enter details to get a free market evaluation.</p>
                    </div>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-brand-gold uppercase tracking-wider">Property Type</label>
                            <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-gold appearance-none">
                                <option className="bg-brand-blue">Residential Apartment</option>
                                <option className="bg-brand-blue">Independent House</option>
                                <option className="bg-brand-blue">Commercial Plot</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-brand-gold uppercase tracking-wider">Location</label>
                            <input type="text" placeholder="e.g. South Delhi" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <label className="text-xs font-bold text-brand-gold uppercase tracking-wider">Description</label>
                            <textarea rows={3} placeholder="Briefly describe your property..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                        </div>
                        <div className="md:col-span-2">
                            <Button variant="gold" size="xl" className="w-full">Submit for Evaluation</Button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </main>
    );
}
