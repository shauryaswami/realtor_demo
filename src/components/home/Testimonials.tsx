"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
    {
        name: "Rahul Mehta",
        role: "Home Owner, Gurgaon",
        content: "Very smooth property buying experience in Gurgaon. The team was extremely professional and handled all legal documentation with ease.",
        rating: 5
    },
    {
        name: "Sneha Kapoor",
        role: "Investor, Mumbai",
        content: "Professional and transparent agents. They helped me find a sea-view apartment in Worli that exceeded my expectations.",
        rating: 5
    },
    {
        name: "Amit Sharma",
        role: "CEO, Tech Firm",
        content: "Found our perfect office space in Bangalore through them. Their market knowledge is unparalleled in the Indian commercial sector.",
        rating: 5
    }
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 px-6 bg-[#050816] relative overflow-hidden">
            {/* Decorative Gold Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-4xl mx-auto relative z-10 text-center space-y-12">
                <div className="space-y-4">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm"
                    >
                        Client Stories
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white">
                        What Our <span className="text-brand-gold">Clients Say</span>
                    </h2>
                </div>

                <div className="relative h-[400px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotateY: -45 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="glass p-10 md:p-16 rounded-[3rem] shadow-2xl relative max-w-2xl"
                        >
                            <Quote className="absolute top-10 left-10 text-brand-gold/20" size={80} />

                            <div className="space-y-8 relative z-10">
                                <div className="flex justify-center gap-1">
                                    {[...Array(testimonials[index].rating)].map((_, i) => (
                                        <Star key={i} size={20} className="fill-brand-gold text-brand-gold" />
                                    ))}
                                </div>

                                <p className="text-xl md:text-2xl text-white font-medium leading-relaxed font-poppins">
                                    "{testimonials[index].content}"
                                </p>

                                <div>
                                    <h4 className="text-white font-bold text-lg">{testimonials[index].name}</h4>
                                    <p className="text-brand-gold font-medium uppercase tracking-widest text-xs mt-1">{testimonials[index].role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none md:-px-12">
                        <button
                            onClick={prev}
                            className="pointer-events-auto w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-blue transition-all"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={next}
                            className="pointer-events-auto w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-blue transition-all"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
