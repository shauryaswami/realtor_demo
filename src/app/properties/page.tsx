import Navbar from "@/components/layout/Navbar";

export const dynamic = "force-dynamic";
import Footer from "@/components/layout/Footer";
import PropertyCard from "@/components/home/PropertyCard";
import { getProperties } from "@/lib/api/properties";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default async function PropertiesPage() {
    const properties = await getProperties();

    return (
        <main className="min-h-screen bg-brand-blue">
            <Navbar />

            <div className="pt-32 pb-24 px-6">
                <div className="max-w-7xl mx-auto space-y-12">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                        <div className="space-y-4">
                            <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm">Our Inventory</span>
                            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-white">
                                Explore <span className="text-brand-gold">Properties</span>
                            </h1>
                            <p className="text-white/50 max-w-xl">
                                Browse through our exclusive collection of premium apartments, villas, and commercial spaces across India's top cities.
                            </p>
                        </div>
                    </div>

                    {/* Filter Bar */}
                    <div className="glass p-6 rounded-[2.5rem] flex flex-wrap items-center gap-6">
                        <div className="flex-1 min-w-[200px] relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                            <input
                                type="text"
                                placeholder="Search by location, title..."
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white text-sm focus:border-brand-gold/50 outline-none"
                            />
                        </div>
                        <div className="flex items-center gap-4">
                            <Button variant="outline" className="rounded-xl border-white/10 text-xs">
                                <Filter size={14} className="mr-2" /> City
                            </Button>
                            <Button variant="outline" className="rounded-xl border-white/10 text-xs">
                                <SlidersHorizontal size={14} className="mr-2" /> All Filters
                            </Button>
                            <div className="text-white/30 text-sm hidden md:block">
                                Showing {properties.length} results
                            </div>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {properties.map((property) => (
                            <PropertyCard key={property.id} property={property} />
                        ))}

                        {properties.length === 0 && (
                            <div className="col-span-full py-20 text-center space-y-4">
                                <div className="text-white/20 italic text-xl">No properties found matching your criteria.</div>
                                <Button variant="gold" className="rounded-xl">Clear All Filters</Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
