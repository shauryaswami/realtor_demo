"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils/cn";

const navLinks = [
    { name: "Buy", href: "/properties?type=buy" },
    { name: "Sell", href: "/sell" },
    { name: "Rent", href: "/properties?type=rent" },
    { name: "Projects", href: "/projects" },
    { name: "Agents", href: "/agents" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                isScrolled ? "bg-brand-blue/80 backdrop-blur-md py-3 shadow-lg" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center font-bold text-brand-blue text-xl">
                        R
                    </div>
                    <span className="font-poppins font-bold text-xl tracking-tight hidden sm:block">
                        REAL ESTATE <span className="text-brand-gold">INDIA</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-white/90 hover:text-brand-gold font-medium transition-colors text-sm"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button className="p-2 text-white/90 hover:text-brand-gold transition-colors">
                        <Search size={20} />
                    </button>
                    <Link
                        href="/contact"
                        className="hidden sm:flex items-center gap-2 bg-brand-gold hover:bg-brand-gold/90 text-brand-blue px-4 py-2 rounded-full font-semibold transition-all text-sm"
                    >
                        <Phone size={16} />
                        Contact
                    </Link>
                    <button
                        className="md:hidden text-white/90"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-brand-blue border-t border-white/10 p-6 md:hidden flex flex-col gap-4"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-white/90 hover:text-brand-gold font-medium text-lg"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="flex items-center justify-center gap-2 bg-brand-gold text-brand-blue px-4 py-3 rounded-xl font-bold mt-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <Phone size={18} />
                            Contact Us
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
