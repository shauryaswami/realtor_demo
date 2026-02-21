import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";
import {
    Users,
    Mail,
    Phone,
    Calendar,
    ExternalLink,
    CheckCircle2,
    Clock
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

async function getLeads() {
    return await prisma.lead.findMany({
        include: {
            property: {
                select: { title: true }
            }
        },
        orderBy: { createdAt: "desc" },
    });
}

export default async function AdminLeadsPage() {
    const leads = await getLeads();

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-poppins font-bold text-white mb-2">Customer Leads</h1>
                <p className="text-white/50">Track and respond to property inquiries</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {leads.map((lead) => (
                    <div key={lead.id} className="glass p-6 rounded-[2rem] flex flex-col md:flex-row gap-6 hover:border-brand-gold/30 transition-all group">
                        <div className="flex-1 space-y-4">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold">
                                        <Users size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold">{lead.name}</h3>
                                        <div className="flex items-center gap-3 text-xs text-white/40 mt-0.5">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={12} />
                                                {new Date(lead.createdAt).toLocaleDateString()}
                                            </span>
                                            <span className={cn(
                                                "flex items-center gap-1",
                                                lead.status === "NEW" ? "text-brand-gold" : "text-green-500"
                                            )}>
                                                {lead.status === "NEW" ? <Clock size={12} /> : <CheckCircle2 size={12} />}
                                                {lead.status}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 text-white/60 text-sm bg-white/5 p-3 rounded-xl border border-white/5">
                                    <Mail size={16} className="text-white/30" />
                                    {lead.email}
                                </div>
                                <div className="flex items-center gap-3 text-white/60 text-sm bg-white/5 p-3 rounded-xl border border-white/5">
                                    <Phone size={16} className="text-white/30" />
                                    {lead.phone}
                                </div>
                            </div>

                            <div className="bg-white/5 p-4 rounded-xl border border-white/5 text-white/70 text-sm leading-relaxed italic">
                                "{lead.message}"
                            </div>
                        </div>

                        <div className="md:w-64 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-6 space-y-4">
                            <div>
                                <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold mb-2">Inquired For</p>
                                <div className="text-white font-medium text-sm flex items-center gap-2">
                                    <span className="text-brand-gold truncate max-w-[150px]">{lead.property?.title || "General Inquiry"}</span>
                                    <ExternalLink size={14} className="text-white/20" />
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <button className="flex-1 bg-brand-gold text-brand-blue font-bold py-2.5 rounded-xl text-xs hover:scale-[1.02] transition-transform">
                                    Respond
                                </button>
                                <button className="flex-1 bg-white/5 text-white py-2.5 rounded-xl text-xs hover:bg-white/10 transition-all border border-white/10">
                                    Dismiss
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {leads.length === 0 && (
                    <div className="glass p-20 rounded-[2.5rem] text-center">
                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-white/20 mx-auto mb-6">
                            <Users size={32} />
                        </div>
                        <h3 className="text-white font-bold text-xl mb-2">No Leads Yet</h3>
                        <p className="text-white/40 max-w-xs mx-auto text-sm">When customers inquire about your properties, they will appear here.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
