import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getPropertyById } from "@/lib/api/properties";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
    BedDouble,
    Bath,
    Square,
    MapPin,
    IndianRupee,
    CheckCircle2,
    Calendar,
    Phone,
    Mail,
    User,
    MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/Button";

import PropertyInquiryForm from "@/components/properties/PropertyInquiryForm";

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const property = await getPropertyById(id);

    if (!property) {
        notFound();
    }

    const images = property.images.split(',');
    const features = property.features.split(',');

    return (
        <main className="min-h-screen bg-brand-blue">
            <Navbar />

            <div className="pt-32 pb-24 px-6">
                <div className="max-w-7xl mx-auto space-y-12">
                    {/* Media Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px]">
                        <div className="md:col-span-3 relative rounded-[3rem] overflow-hidden border border-white/10 group">
                            <Image
                                src={images[0]}
                                alt={property.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                        </div>
                        <div className="hidden md:flex flex-col gap-4">
                            {images.slice(1, 4).map((img, i) => (
                                <div key={i} className="flex-1 relative rounded-3xl overflow-hidden border border-white/10 group">
                                    <Image
                                        src={img}
                                        alt={`${property.title} ${i + 2}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            ))}
                            {images.length < 3 && Array(3 - images.slice(1, 4).length).fill(0).map((_, i) => (
                                <div key={`placeholder-${i}`} className="flex-1 bg-white/5 rounded-3xl border border-white/10 border-dashed flex items-center justify-center text-white/10">
                                    < Square size={24} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Details */}
                        <div className="lg:col-span-2 space-y-10">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-brand-gold/20">
                                        {property.status}
                                    </span>
                                    <span className="text-white/40 text-sm font-medium">Added on {new Date(property.createdAt).toLocaleDateString()}</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-poppins font-bold text-white leading-tight">
                                    {property.title}
                                </h1>
                                <p className="flex items-center gap-2 text-white/60 text-lg">
                                    <MapPin className="text-brand-gold" size={20} />
                                    {property.location}, {property.city}
                                </p>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="glass p-6 rounded-3xl border border-white/10 flex flex-col items-center gap-2">
                                    <div className="w-10 h-10 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold">
                                        <BedDouble size={20} />
                                    </div>
                                    <span className="text-white font-bold">{property.bedrooms || property.bhk}</span>
                                    <span className="text-white/30 text-[10px] uppercase font-bold tracking-wider">Bedrooms</span>
                                </div>
                                <div className="glass p-6 rounded-3xl border border-white/10 flex flex-col items-center gap-2">
                                    <div className="w-10 h-10 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold">
                                        <Bath size={20} />
                                    </div>
                                    <span className="text-white font-bold">{property.bathrooms || "N/A"}</span>
                                    <span className="text-white/30 text-[10px] uppercase font-bold tracking-wider">Bathrooms</span>
                                </div>
                                <div className="glass p-6 rounded-3xl border border-white/10 flex flex-col items-center gap-2">
                                    <div className="w-10 h-10 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold">
                                        <Square size={20} />
                                    </div>
                                    <span className="text-white font-bold text-center">{property.area || "N/A"}</span>
                                    <span className="text-white/30 text-[10px] uppercase font-bold tracking-wider">Total Area</span>
                                </div>
                                <div className="glass p-6 rounded-3xl border border-white/10 flex flex-col items-center gap-2">
                                    <div className="w-10 h-10 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold">
                                        <IndianRupee size={20} />
                                    </div>
                                    <span className="text-white font-bold">{property.price}</span>
                                    <span className="text-white/30 text-[10px] uppercase font-bold tracking-wider">Asking Price</span>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-poppins font-bold text-white">Property Overview</h3>
                                <p className="text-white/70 leading-relaxed text-lg whitespace-pre-line">
                                    {property.description}
                                </p>
                            </div>

                            {/* Features */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-poppins font-bold text-white">Amenities & Features</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                    {features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 text-white/60">
                                            <div className="w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center text-green-500">
                                                <CheckCircle2 size={14} />
                                            </div>
                                            <span className="text-sm font-medium">{feature.trim()}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar: Lead Form */}
                        <div className="space-y-8">
                            <div className="glass p-8 rounded-[2.5rem] border border-white/10 sticky top-32">
                                <h3 className="text-xl font-poppins font-bold text-white mb-2">Interested?</h3>
                                <p className="text-white/40 text-sm mb-6">Send an inquiry and our property expert will contact you within 24 hours.</p>

                                <PropertyInquiryForm propertyId={property.id} />

                                <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10">
                                            <Image src="/images/founder.jpg" alt="Agent" width={48} height={48} className="object-cover" />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-sm">Swami Healing</p>
                                            <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Certified Premium Agent</p>
                                        </div>
                                    </div>
                                    <Button variant="outline" className="w-full rounded-xl border-white/10 text-white/60 hover:text-white">
                                        Chat on WhatsApp
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
