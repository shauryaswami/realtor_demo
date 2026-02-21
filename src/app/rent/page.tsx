import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PropertyCard from "@/components/home/PropertyCard";
import { getProperties } from "@/lib/api/properties";
import { Button } from "@/components/ui/Button";
import { Key, House, Building, Briefcase } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "@/components/ui/MotionClient"; // Helper for server components

export default async function RentPage() {
    const allProperties = await getProperties();
    // In a real app, we'd filter at the DB level, but for now we filter here
    const rentalProperties = allProperties.filter(p =>
        p.type === "Apartment" || p.type === "Villa"
    );

    return (
        <main className="min-h-screen bg-brand-blue pt-32 pb-24">
            <Navbar />

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                <MotionDiv
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm font-bold">
                        <Key size={16} /> Premium Rentals
                    </div>
                    <h1 className="text-5xl md:text-7xl font-poppins font-bold text-white leading-tight">
                        Find Your <br />
                        Next <span className="text-brand-gold italic">Space</span>
                    </h1>
                    <p className="text-lg text-white/60 leading-relaxed">
                        Explore curated rental options from luxury apartments to prime commercial spaces.
                        Flexible terms, verified owners, and seamless move-in support.
                    </p>
                    <div className="flex gap-4">
                        <Link href="/properties?type=Apartment"><Button variant="gold" size="xl">Browse Apartments</Button></Link>
                        <Link href="/properties?type=Office"><Button variant="outline" size="xl">Workspaces</Button></Link>
                    </div>
                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative h-[500px] rounded-[3rem] overflow-hidden"
                >
                    <Image
                        src="/images/bg/rent.jpg"
                        alt="Rent Property"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-brand-blue/40 to-transparent" />
                </MotionDiv>
            </div>

            {/* Categories */}
            <div className="max-w-7xl mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Residential", count: "850+ Listings", icon: <House size={40} />, color: "from-blue-500/20" },
                        { title: "Commercial", count: "320+ Listings", icon: <Briefcase size={40} />, color: "from-brand-gold/20" },
                        { title: "Luxury Villas", count: "120+ Listings", icon: <Building size={40} />, color: "from-purple-500/20" },
                    ].map((cat, i) => (
                        <MotionDiv
                            key={i}
                            whileHover={{ y: -10 }}
                            className={`glass p-10 rounded-[3rem] border border-white/5 bg-gradient-to-br ${cat.color} to-transparent text-center space-y-4`}
                        >
                            <div className="text-white flex justify-center">{cat.icon}</div>
                            <h3 className="text-2xl font-bold text-white">{cat.title}</h3>
                            <p className="text-white/40 font-medium">{cat.count}</p>
                        </MotionDiv>
                    ))}
                </div>
            </div>

            {/* Featured Rentals */}
            <div className="max-w-7xl mx-auto px-6 mb-32">
                <div className="flex justify-between items-end mb-16">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-poppins font-bold text-white">Trending Rentals</h2>
                        <p className="text-white/60">The most sought-after rental spaces this month.</p>
                    </div>
                    <Link href="/properties" className="text-brand-gold font-bold hover:underline mb-2">View All</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
                    {rentalProperties.map((property, i) => (
                        <MotionDiv
                            key={property.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <PropertyCard property={property} />
                        </MotionDiv>
                    ))}

                    {rentalProperties.length === 0 && (
                        <div className="col-span-full text-center py-20 text-white/30 italic">
                            No rental properties currently available. Check back soon!
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </main>
    );
}
