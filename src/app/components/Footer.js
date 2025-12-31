import React from 'react';
import { Linkedin, Mail, Phone, Factory, Warehouse, Newspaper, Hammer, Zap, Settings, ShieldCheck } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    const companyLinks = [
        { name: 'Our Industrial Legacy', path: '/about' },
        { name: 'Infrastructure & Machinery', path: '/machinery' },
        { name: 'Sectors Served', path: '/industries' },
        { name: 'Verified Testimonials', path: '/testimonials' },
        { name: 'Contact Engineering Desk', path: '/contact' },
    ];

    const fabricationLinks = [
        { name: 'Precision Stamping', path: '/services/metal-stamping' },
        { name: 'CNC Multi-Axis Bending', path: '/services/cnc-bending' },
        { name: 'Fiber Laser Cutting', path: '/services/laser-cutting' },
        { name: 'Industrial Powder Coating', path: '/services/powder-coating' },
        { name: 'Certified Welding', path: '/services/welding' },
    ];

    const inventoryLinks = [
        { name: 'HR Sheets & Coils', path: '/products/hr-coil-supplier-mumbai' },
        { name: 'CR Sheets & Coils', path: '/products/cr-sheet-supplier-mumbai' },
        { name: 'Stainless Steel (SS)', path: '/products/stainless-steel-coil-supplier-mumbai' },
        { name: 'Pickled & Oiled (PO)', path: '/products/pickled-oiled-sheet-supplier-mumbai' },
        { name: 'Secondary Steel Stock', path: '/products#secondary' },
    ];

    const legalLinks = [
        { name: 'Industrial Blog', path: '/blog' },
        { name: 'Full Site Index (Sitemap)', path: '/sitemap' },
        { name: 'Terms of Service (SLA)', path: '/terms' },
        { name: 'Privacy & Data Policy', path: '/privacy' },
        { name: 'Cookie Policy', path: '/cookiepolicy' },
    ];

    const renderLinks = (links) => (
        <ul className="space-y-3">
            {links.map((link, index) => (
                <li key={index}>
                    <Link href={link.path} className="text-white/60 text-[11px] hover:text-blue-400 transition-all flex items-center gap-2 group font-black uppercase tracking-widest">
                        <span className="text-blue-600 font-black group-hover:translate-x-1 transition-transform">›</span>
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    );

    return (
        <footer className="bg-slate-900 text-white pt-24 border-t border-white/5 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* 1. MASTER NAVIGATION GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">

                    {/* Brand Identity */}
                    <div className="lg:col-span-2 flex flex-col pr-0 lg:pr-10">
                        <Link href="/">
                            <Image
                                src="/AE-logo.webp"
                                alt="Aero Enterprises Logo"
                                width={160} height={50}
                                className='mb-8 brightness-200 w-auto'
                            />
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed mb-8 font-medium italic">
                            <strong>Aero Enterprises</strong> is Mumbai’s integrated hub for Technical Steel Sourcing and Precision Fabrication. From raw JSW/TATA Mill Coils to finished engineering components for India's OEM sectors.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://linkedin.com/company/aero-enterprisess/" target='_blank' rel="noopener noreferrer" className="p-4 bg-white/5 hover:bg-blue-600 transition-all rounded-2xl border border-white/10 group shadow-xl">
                                <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                            </a>
                            <Link href="/blog" className="p-4 bg-white/5 hover:bg-blue-600 transition-all rounded-2xl border border-white/10 group shadow-xl">
                                <Newspaper className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Fabrication Silo */}
                    <div>
                        <h3 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8  flex items-center gap-2"><Hammer size={12} /> Fabrication</h3>
                        {renderLinks(fabricationLinks)}
                    </div>

                    {/* Inventory Silo */}
                    <div>
                        <h3 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8  flex items-center gap-2"><Settings size={12} /> Sourcing</h3>
                        {renderLinks(inventoryLinks)}
                    </div>

                    {/* Resources Silo */}
                    <div>
                        <h3 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8  flex items-center gap-2"><ShieldCheck size={12} /> Governance</h3>
                        {renderLinks(legalLinks)}
                    </div>
                </div>

                {/* 2. INFRASTRUCTURE MOAT: DUAL ADDRESSES */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 rounded-[3rem] overflow-hidden border border-white/10 mb-20 shadow-2xl">

                    {/* Facility 1: Production */}
                    <div className="p-10 md:p-12 hover:bg-white/5 transition-colors group">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="p-4 bg-blue-600 rounded-2xl shadow-lg shadow-blue-900/20 group-hover:rotate-12 transition-transform">
                                <Factory className="text-white w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-black text-white text-xs uppercase tracking-[0.2em] mb-4">Unit I: Manufacturing Hub</h4>
                                <address className="text-white/60 text-sm not-italic leading-relaxed font-bold uppercase tracking-tight">
                                    Survey No. 109 Richard Compound, Manchipada Road, <br className="hidden md:block" />
                                    Vasai Phata, Vasai East, Palghar - 401208.
                                </address>
                            </div>
                        </div>
                    </div>

                    {/* Facility 2: Logistics */}
                    <div className="p-10 md:p-12 hover:bg-white/5 transition-colors lg:border-l border-white/10 group">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="p-4 bg-slate-800 rounded-2xl shadow-lg group-hover:rotate-12 transition-transform">
                                <Warehouse className="text-white w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-black text-white text-xs uppercase tracking-[0.2em] mb-4">Unit II: Logistics Godown</h4>
                                <address className="text-white/60 text-sm not-italic leading-relaxed font-bold uppercase tracking-tight">
                                    Gala No. 1, Khan Compound, Near Gausiya Weight Kata, <br className="hidden md:block" />
                                    Dhumal Nagar, Vasai East - 401208.
                                </address>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. FINAL COMPLIANCE & CONTACT BAR */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 py-12 border-t border-white/5 mb-12">
                    <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12">
                        <div className="flex items-center gap-4 group">
                            <div className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-600 transition-all"><Phone size={18} /></div>
                            <a href="tel:+918459121717" className="text-md font-black tracking-tighter text-white hover:text-blue-400 transition-colors underline underline-offset-4 decoration-blue-600">
                                +91 8459121717
                            </a>
                        </div>
                        <div className="flex items-center gap-4 group">
                            <div className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-600 transition-all"><Mail size={18} /></div>
                            <a href="mailto:aeroenterprises00@gmail.com" className="text-sm font-bold text-white/70 hover:text-blue-400 transition-colors uppercase tracking-widest">
                                aeroenterprises00@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* B2B Credibility Signal */}
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 border border-white/10 px-8 py-3 rounded-full bg-black/20">
                        GSTIN: 27AGCPK5633K1Z9 | MSME REGISTERED
                    </div>
                </div>

                {/* Copyright Line */}
                <div className="text-center pb-12">
                    <p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/20">
                        © {new Date().getFullYear()} AERO ENTERPRISES. Integrated Steel Processing Hub. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;