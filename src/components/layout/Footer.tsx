import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#050816] text-white/80 pt-16 pb-8 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                {/* Brand Section */}
                <div className="space-y-6">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center font-bold text-brand-blue text-xl">
                            R
                        </div>
                        <span className="font-poppins font-bold text-xl tracking-tight text-white">
                            REAL ESTATE <span className="text-brand-gold">INDIA</span>
                        </span>
                    </Link>
                    <p className="text-sm leading-relaxed">
                        Your trusted local partner for premium real estate in India. Luxury homes, verified listings, and expert guidance for all your property needs.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-brand-gold transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-brand-gold transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-brand-gold transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-brand-gold transition-colors"><Linkedin size={20} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-poppins font-bold text-white mb-6">Quick Links</h4>
                    <ul className="space-y-4 text-sm">
                        <li><Link href="/properties?type=buy" className="hover:text-brand-gold transition-colors">Buy Property</Link></li>
                        <li><Link href="/properties?type=rent" className="hover:text-brand-gold transition-colors">Rent Property</Link></li>
                        <li><Link href="/sell" className="hover:text-brand-gold transition-colors">Sell Your Property</Link></li>
                        <li><Link href="/projects" className="hover:text-brand-gold transition-colors">New Projects</Link></li>
                        <li><Link href="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
                    </ul>
                </div>

                {/* Cities */}
                <div>
                    <h4 className="font-poppins font-bold text-white mb-6">Popular Cities</h4>
                    <ul className="space-y-4 text-sm">
                        <li><Link href="/properties?city=delhi" className="hover:text-brand-gold transition-colors">Delhi NCR</Link></li>
                        <li><Link href="/properties?city=mumbai" className="hover:text-brand-gold transition-colors">Mumbai</Link></li>
                        <li><Link href="/properties?city=gurgaon" className="hover:text-brand-gold transition-colors">Gurgaon</Link></li>
                        <li><Link href="/properties?city=bangalore" className="hover:text-brand-gold transition-colors">Bangalore</Link></li>
                        <li><Link href="/properties?city=hyderabad" className="hover:text-brand-gold transition-colors">Hyderabad</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="font-poppins font-bold text-white mb-6">Contact Us</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="text-brand-gold shrink-0" />
                            <span>123, Luxury Tower, MG Road, Gurgaon, Haryana - 122001</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={18} className="text-brand-gold shrink-0" />
                            <span>+91 99999 99999</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} className="text-brand-gold shrink-0" />
                            <span>info@realestateindia.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                <p>© 2026 Real Estate India. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
                    <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
                </div>
            </div>
        </footer>
    );
}
