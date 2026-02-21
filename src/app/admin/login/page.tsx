"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { KeyRound, Mail, AlertCircle } from "lucide-react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const result = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (result?.error) {
                setError("Invalid email or password");
            } else {
                router.push("/admin");
                router.refresh();
            }
        } catch (err) {
            setError("An unexpected error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-brand-blue flex items-center justify-center px-6">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px]" />
            </div>

            <div className="w-full max-w-md relative z-10">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-gold/10 rounded-2xl border border-brand-gold/20 mb-6">
                        <KeyRound className="text-brand-gold" size={32} />
                    </div>
                    <h1 className="text-3xl font-poppins font-bold text-white mb-2">Admin Login</h1>
                    <p className="text-white/60">Manage your premium real estate platform</p>
                </div>

                <form onSubmit={handleSubmit} className="glass p-8 rounded-[2rem] space-y-6">
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-xl flex items-center gap-3 text-sm">
                            <AlertCircle size={18} />
                            {error}
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="text-white/70 text-sm font-medium ml-1">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 outline-none transition-all"
                                placeholder="admin@realtor.in"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-white/70 text-sm font-medium ml-1">Password</label>
                        <div className="relative">
                            <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 outline-none transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        variant="gold"
                        className="w-full py-4 rounded-xl text-lg font-bold"
                        disabled={isLoading}
                    >
                        {isLoading ? "Authenticating..." : "Sign In"}
                    </Button>

                    <div className="text-center pt-2">
                        <p className="text-white/40 text-xs">
                            Securely encrypted admin access. Authorized personnel only.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
