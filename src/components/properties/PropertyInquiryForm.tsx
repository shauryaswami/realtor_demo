"use client";

import { useState } from "react";
import { User, Mail, Phone, MessageSquare, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface PropertyInquiryFormProps {
    propertyId: string;
}

export default function PropertyInquiryForm({ propertyId }: PropertyInquiryFormProps) {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "I'm interested in this property...",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, propertyId }),
            });

            if (!res.ok) throw new Error("Failed to submit inquiry");

            setSubmitted(true);
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="bg-green-500/10 border border-green-500/20 rounded-3xl p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mx-auto">
                    <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-white">Inquiry Sent!</h3>
                <p className="text-white/60 text-sm">Thank you for your interest. Our property expert will contact you shortly.</p>
                <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    className="border-white/10 text-white/60"
                >
                    Send another inquiry
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white text-sm focus:border-brand-gold/50 outline-none"
                />
            </div>
            <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white text-sm focus:border-brand-gold/50 outline-none"
                />
            </div>
            <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white text-sm focus:border-brand-gold/50 outline-none"
                />
            </div>
            <div className="relative">
                <MessageSquare className="absolute left-4 top-4 text-white/30" size={18} />
                <textarea
                    rows={4}
                    required
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white text-sm focus:border-brand-gold/50 outline-none resize-none"
                />
            </div>

            {error && <p className="text-red-400 text-xs italic">{error}</p>}

            <Button
                type="submit"
                variant="gold"
                disabled={loading}
                className="w-full rounded-xl py-6 font-bold text-base mt-2 shadow-lg shadow-brand-gold/20 flex items-center justify-center gap-2"
            >
                {loading ? <Loader2 className="animate-spin" /> : "Schedule a Visit"}
            </Button>
        </form>
    );
}
