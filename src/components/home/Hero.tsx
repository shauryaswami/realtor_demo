"use client";

import { useState, useEffect } from "react";
import { Search, MapPin, IndianRupee, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const citiesList = ["Delhi", "Gurugram", "Noida", "Mumbai", "Bangalore", "Hyderabad"];
const budgetsList = ["All Budgets", "Under ₹1 Cr", "₹1 Cr - ₹3 Cr", "₹3 Cr - ₹5 Cr", "₹5 Cr+"];
const typesList = ["Apartment", "Villa", "Plot", "Office"];

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

export default function Hero({ properties }: { properties: PropertyData[] }) {
    const router = useRouter();
    const [city, setCity] = useState("Delhi");
    const [budget, setBudget] = useState("All Budgets");
    const [type, setType] = useState("Apartment");
    const [bhk, setBhk] = useState("3 BHK");
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const displayProperties = properties.length > 0 ? properties : [];

    useEffect(() => {
        if (displayProperties.length === 0) return;
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % displayProperties.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [displayProperties]);

    const handleSearch = () => {
        const params = new URLSearchParams({
            city,
            budget,
            type,
            bhk
        });
        router.push(`/properties?${params.toString()}`);
    };

    return (
        <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
            <div className="absolute inset-0 bg-brand-blue -z-10" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-5xl md:text-7xl font-poppins font-bold leading-tight"
                        >
                            Find Your <span className="text-brand-gold italic">Dream</span> <br />
                            Property in India
                        </motion.h1>
                        <p className="text-lg text-white/60 max-w-lg font-inter">
                            Trusted Local Experts • Verified Listings • Buy • Sell • Rent.
                            Discover premium real estate across top Indian cities.
                        </p>
                    </div>

                    {/* Search Bar - Glassmorphism */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="glass p-6 md:p-8 rounded-[2.5rem] shadow-2xl space-y-6 max-w-2xl"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* City */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-xs font-bold text-brand-gold uppercase tracking-wider">
                                    <MapPin size={14} /> City
                                </label>
                                <select
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold appearance-none text-white"
                                >
                                    {citiesList.map(c => <option key={c} value={c} className="bg-brand-blue">{c}</option>)}
                                </select>
                            </div>

                            {/* Budget */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-xs font-bold text-brand-gold uppercase tracking-wider">
                                    <IndianRupee size={14} /> Budget
                                </label>
                                <select
                                    value={budget}
                                    onChange={(e) => setBudget(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold appearance-none text-white"
                                >
                                    {budgetsList.map(b => <option key={b} value={b} className="bg-brand-blue">{b}</option>)}
                                </select>
                            </div>

                            {/* Property Type */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-xs font-bold text-brand-gold uppercase tracking-wider">
                                    <Home size={14} /> Property Type
                                </label>
                                <select
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold appearance-none text-white"
                                >
                                    {typesList.map(t => <option key={t} value={t} className="bg-brand-blue">{t}</option>)}
                                </select>
                            </div>

                            {/* BHK */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-xs font-bold text-brand-gold uppercase tracking-wider">
                                    <Home size={14} /> BHK
                                </label>
                                <select
                                    value={bhk}
                                    onChange={(e) => setBhk(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold appearance-none text-white"
                                >
                                    <option value="1 BHK" className="bg-brand-blue">1 BHK</option>
                                    <option value="2 BHK" className="bg-brand-blue">2 BHK</option>
                                    <option value="3 BHK" className="bg-brand-blue">3 BHK</option>
                                    <option value="4 BHK+" className="bg-brand-blue">4 BHK+</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-2">
                            <Button variant="gold" size="xl" className="w-full gap-2" onClick={handleSearch}>
                                <Search size={20} /> Search Properties
                            </Button>
                        </div>
                    </motion.div>

                    {/* Social Proof */}
                    <div className="flex items-center gap-8 pt-4 border-t border-white/10">
                        <div>
                            <p className="text-2xl font-bold font-poppins text-white">15+</p>
                            <p className="text-xs text-white/50 uppercase tracking-widest leading-tight">Years <br /> Experience</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold font-poppins text-white">2k+</p>
                            <p className="text-xs text-white/50 uppercase tracking-widest leading-tight">Happy <br /> Families</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold font-poppins text-white">500+</p>
                            <p className="text-xs text-white/50 uppercase tracking-widest leading-tight">Verified <br /> Listings</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Content - Dynamic Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative h-[650px] w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
                        {displayProperties.length > 0 && (
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 1 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={displayProperties[currentImageIndex].images.split(',')[0]}
                                        alt={displayProperties[currentImageIndex].title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-transparent to-transparent" />

                                    {/* Image Info Overlay */}
                                    <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl border border-white/10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex justify-between items-end">
                                            <div className="space-y-1">
                                                <p className="text-brand-gold text-xs font-bold uppercase tracking-widest">
                                                    {displayProperties[currentImageIndex].location}
                                                </p>
                                                <h3 className="text-xl font-bold text-white truncate max-w-[200px]">
                                                    {displayProperties[currentImageIndex].title}
                                                </h3>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-brand-gold font-bold">{displayProperties[currentImageIndex].price}</p>
                                                <Link href={`/properties/${displayProperties[currentImageIndex].id}`}>
                                                    <Button variant="ghost" size="sm" className="p-0 h-auto hover:bg-transparent text-white/60 hover:text-white flex items-center gap-1">
                                                        View Details <ArrowRight size={14} />
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        )}
                    </div>

                    {/* Floating Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-blue/50 rounded-full blur-3xl" />
                </motion.div>
            </div>
        </section>
    );
}
