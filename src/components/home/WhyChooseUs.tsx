"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Heart, MessageCircle, FileCheck, Users } from "lucide-react";

const features = [
    {
        icon: <ShieldCheck className="text-brand-gold" size={32} />,
        title: "15+ Years Experience",
        description: "Deep-rooted expertise in South Delhi, Gurgaon, and Mumbai luxury markets."
    },
    {
        icon: <Users className="text-brand-gold" size={32} />,
        title: "500+ Happy Families",
        description: "Helping families find their dream homes with transparency and trust."
    },
    {
        icon: <FileCheck className="text-brand-gold" size={32} />,
        title: "Verified Documentation",
        description: "Zero-hassle legal verification and transparent documentation process."
    },
    {
        icon: <Zap className="text-brand-gold" size={32} />,
        title: "Transparent Pricing",
        description: "Clear communication with no hidden costs or surprise commissions."
    },
    {
        icon: <MessageCircle className="text-brand-gold" size={32} />,
        title: "24/7 WhatsApp Support",
        description: "Instant access to our dedicated property advisors anytime, anywhere."
    },
    {
        icon: <Heart className="text-brand-gold" size={32} />,
        title: "Local Trust",
        description: "Personalized service that combines corporate professionalism with local care."
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 px-6 bg-brand-blue relative overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center space-y-4 mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm"
                    >
                        Why Choose Us
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-poppins font-bold text-white"
                    >
                        The Local Advantage with <br /> <span className="text-brand-gold">Corporate Standards</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass p-8 rounded-3xl group"
                        >
                            <div className="mb-6 p-4 bg-brand-gold/10 rounded-2xl w-fit group-hover:bg-brand-gold group-hover:text-brand-blue transition-colors duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold font-poppins text-white mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
