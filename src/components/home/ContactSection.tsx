"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactSection() {
    return (
        <section className="py-24 px-6 bg-brand-blue relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Info */}
                <div className="space-y-12">
                    <div className="space-y-4">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm"
                        >
                            Get in Touch
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white leading-tight">
                            Ready to Find Your <br /> <span className="text-brand-gold">Ideal Property?</span>
                        </h2>
                        <p className="text-white/60 leading-relaxed max-w-lg">
                            Contact our experts today for a free consultation. Whether you're looking to buy, sell or rent, we're here to help you every step of the way.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-center gap-6 group">
                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-blue transition-all">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Call Us</p>
                                <p className="text-white font-bold text-xl">+91 99999 99999</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group">
                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-blue transition-all">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Email Us</p>
                                <p className="text-white font-bold text-xl">hello@realestateindia.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group">
                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-blue transition-all">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Visit Us</p>
                                <p className="text-white font-bold text-xl">Gurgaon, Delhi NCR</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass p-10 md:p-12 rounded-[3.5rem] shadow-2xl space-y-8"
                >
                    <h3 className="text-2xl font-poppins font-bold text-white text-center">Free Consultation</h3>

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-brand-gold uppercase tracking-wider">Full Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-brand-gold uppercase tracking-wider">Phone</label>
                                <input
                                    type="tel"
                                    placeholder="+91 99999..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-brand-gold uppercase tracking-wider">Email</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-brand-gold uppercase tracking-wider">City of Interest</label>
                            <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-gold appearance-none">
                                <option className="bg-brand-blue">Delhi NCR</option>
                                <option className="bg-brand-blue">Mumbai</option>
                                <option className="bg-brand-blue">Bangalore</option>
                                <option className="bg-brand-blue">Hyderabad</option>
                            </select>
                        </div>

                        <Button variant="gold" size="xl" className="w-full gap-2">
                            <Send size={20} /> Submit Inquiry
                        </Button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
