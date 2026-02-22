import prisma from "@/lib/prisma";
export const dynamic = "force-dynamic";

import {
    Home,
    Users,
    TrendingUp,
    Clock,
    ArrowUpRight,
    ArrowDownRight
} from "lucide-react";

async function getStats() {
    const propertyCount = await prisma.property.count();
    const leadCount = await prisma.lead.count();
    const featuredCount = await prisma.property.count({ where: { isFeatured: true } });

    return {
        propertyCount,
        leadCount,
        featuredCount,
    };
}

export default async function AdminDashboard() {
    const stats = await getStats();

    const statCards = [
        { name: "Total Properties", value: stats.propertyCount, icon: Home, trend: "+12%", up: true },
        { name: "Total Leads", value: stats.leadCount, icon: Users, trend: "+5%", up: true },
        { name: "Featured Listings", value: stats.featuredCount, icon: TrendingUp, trend: "0%", up: true },
        { name: "Average Response", value: "2.4h", icon: Clock, trend: "-15%", up: false },
    ];

    return (
        <div className="space-y-10">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-poppins font-bold text-white mb-2">Dashboard Overview</h1>
                    <p className="text-white/50">Welcome back, here's what's happening today.</p>
                </div>
                <div className="bg-brand-gold/10 text-brand-gold px-4 py-2 rounded-xl text-sm font-medium border border-brand-gold/20 flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
                    Live Platform Stats
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statCards.map((stat) => (
                    <div key={stat.name} className="glass p-6 rounded-[2rem] group hover:border-brand-gold/30 transition-all duration-500">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white/40 group-hover:text-brand-gold transition-colors">
                                <stat.icon size={24} />
                            </div>
                            <div className={`flex items-center gap-1 text-xs font-bold ${stat.up ? "text-green-400" : "text-red-400"}`}>
                                {stat.trend}
                                {stat.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                            </div>
                        </div>
                        <div>
                            <p className="text-white/40 text-sm font-medium mb-1">{stat.name}</p>
                            <h3 className="text-3xl font-poppins font-bold text-white tracking-tight">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 glass p-8 rounded-[2.5rem] min-h-[400px]">
                    <h3 className="text-xl font-poppins font-bold text-white mb-6">Recent Property Performance</h3>
                    <div className="flex items-center justify-center h-full text-white/20 italic">
                        Visual analytics charts will appear here...
                    </div>
                </div>
                <div className="glass p-8 rounded-[2.5rem]">
                    <h3 className="text-xl font-poppins font-bold text-white mb-6">Quick Actions</h3>
                    <div className="space-y-4">
                        <button className="w-full bg-white/5 hover:bg-white/10 text-white p-4 rounded-2xl border border-white/5 text-left flex items-center justify-between group transition-all">
                            <span>Generate Monthly Report</span>
                            <ArrowUpRight size={18} className="text-white/20 group-hover:text-brand-gold transition-colors" />
                        </button>
                        <button className="w-full bg-white/5 hover:bg-white/10 text-white p-4 rounded-2xl border border-white/5 text-left flex items-center justify-between group transition-all">
                            <span>Bulk Image Upload</span>
                            <ArrowUpRight size={18} className="text-white/20 group-hover:text-brand-gold transition-colors" />
                        </button>
                        <button className="w-full bg-white/5 hover:bg-white/10 text-white p-4 rounded-2xl border border-white/5 text-left flex items-center justify-between group transition-all">
                            <span>Manage Agent Permissions</span>
                            <ArrowUpRight size={18} className="text-white/20 group-hover:text-brand-gold transition-colors" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
