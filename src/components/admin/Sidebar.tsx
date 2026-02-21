"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils/cn";
import {
    LayoutDashboard,
    Home,
    Users,
    Settings,
    LogOut,
    PlusCircle,
    BarChart3
} from "lucide-react";

const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/admin" },
    { name: "Properties", icon: Home, href: "/admin/properties" },
    { name: "Leads", icon: Users, href: "/admin/leads" },
    { name: "Analytics", icon: BarChart3, href: "/admin/analytics" },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 glass border-r-0 rounded-r-[3rem] min-h-screen flex flex-col p-6 fixed left-0 top-0 z-40">
            <div className="mb-12 px-2">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-brand-gold rounded-lg flex items-center justify-center font-bold text-brand-blue transition-transform group-hover:scale-110">
                        R
                    </div>
                    <span className="text-white font-poppins font-bold tracking-tight text-lg">
                        Real Estate <span className="text-brand-gold">Admin</span>
                    </span>
                </Link>
            </div>

            <nav className="flex-1 space-y-2">
                <div className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-bold mb-4 ml-4">
                    Main Menu
                </div>
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group",
                                isActive
                                    ? "bg-brand-gold text-brand-blue shadow-[0_10px_20px_rgba(212,160,23,0.2)]"
                                    : "text-white/60 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <item.icon size={20} className={cn(isActive ? "text-brand-blue" : "group-hover:text-brand-gold transition-colors")} />
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    );
                })}

                <div className="pt-8 space-y-2">
                    <div className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-bold mb-4 ml-4">
                        Actions
                    </div>
                    <Link
                        href="/admin/properties/new"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-brand-gold hover:bg-brand-gold/10 transition-all border border-brand-gold/20"
                    >
                        <PlusCircle size={20} />
                        <span className="font-medium">Add Listing</span>
                    </Link>
                </div>
            </nav>

            <div className="pt-6 border-t border-white/10 mt-auto">
                <button
                    onClick={() => signOut({ callbackUrl: "/admin/login" })}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/40 hover:text-red-400 hover:bg-red-400/5 transition-all w-full text-left group"
                >
                    <LogOut size={20} className="group-hover:rotate-12 transition-transform" />
                    <span className="font-medium">Sign Out</span>
                </button>
            </div>
        </aside>
    );
}
