import React from 'react';
import { Linkedin, ShoppingBag, Mail, Phone, Factory, Warehouse, Newspaper } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    const companyLinks = [
        { name: 'About Aero Enterprises', path: '/about' },
        { name: 'Client Testimonials', path: '/testimonials' },
        { name: 'Contact Sales Desk', path: '/contact' },
        { name: 'Quality Assurance (MTC)', path: '/quality' },
    ];

    const productLinks = [
        { name: 'HR Sheet (Hot Rolled)', path: '/products/hr-sheet-supplier-mumbai' },
        { name: 'CR Sheet (Cold Rolled)', path: '/products/cr-sheet-supplier-mumbai' },
        { name: 'SS Coil (Stainless Steel)', path: '/products/stainless-steel-coil-supplier-mumbai' },
        { name: 'MS Chequered Plate', path: '/products/ms-chequered-plate-supplier-mumbai' },
        { name: 'GP & GI Sheets', path: '/products/gi-sheet-supplier-mumbai' },
    ];

    const resourcesLinks = [
        { name: 'Industrial Blog', path: '/blog' },
        { name: 'Full Site Index (Sitemap)', path: '/sitemap' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Privacy & Data Policy', path: '/privacy' },
        { name: 'Cookie Policy', path: '/cookiePolicy' },
    ];

    const renderLinks = (links) => (
        <ul className="space-y-3">
            {links.map((link, index) => (
                <li key={index}>
                    <Link href={link.path} className="text-black text-sm hover:text-white transition-colors flex items-center gap-2 group">
                        <span className="text-black font-bold group-hover:translate-x-1 transition-transform">›</span>
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    );

    return (
        <footer className="blue-metal text-white pt-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* 1. MASTER NAVIGATION GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">

                    {/* Brand Identity */}
                    <div className="flex flex-col">
                        <Link href="/">
                            <Image
                                src="/AE-logo.webp"
                                alt="Aero Enterprises Logo"
                                width={140} height={40}
                                className='mb-8 brightness-110 grayscale hover:grayscale-0 transition-all duration-500 w-auto'
                            />
                        </Link>
                        <p className="text-black text-sm leading-relaxed mb-8 font-medium">
                            <strong>Aero Enterprises</strong> is the 2026 benchmark for technical steel supply. Specializing in primary mill sourcing and precision processing for India's high-growth industrial sectors.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://linkedin.com/company/aero-enterprisess/" target='_blank' rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-blue-600 transition-all rounded-xl border border-white/5 shadow-lg">
                                <Linkedin className="w-5 h-5 text-black" />
                            </a>
                            <Link href="/blog" className="p-3 bg-white/5 hover:bg-blue-600 transition-all rounded-xl border border-white/5 shadow-lg">
                                <Newspaper className="w-5 h-5 text-black" />
                            </Link>
                        </div>
                    </div>

                    {/* Product Silo */}
                    <div>
                        <h3 className="text-black font-black text-xs uppercase tracking-[0.2em] mb-8 border-b-2 border-blue-600 w-fit pb-1">Inventory</h3>
                        {renderLinks(productLinks)}
                    </div>

                    {/* Company Silo */}
                    <div>
                        <h3 className="text-black font-black text-xs uppercase tracking-[0.2em] mb-8 border-b-2 border-blue-600 w-fit pb-1">The Legacy</h3>
                        {renderLinks(companyLinks)}
                    </div>

                    {/* Resources & Legal Silo */}
                    <div>
                        <h3 className="text-black font-black text-xs uppercase tracking-[0.2em] mb-8 border-b-2 border-blue-600 w-fit pb-1">Resources</h3>
                        {renderLinks(resourcesLinks)}
                    </div>
                </div>

                {/* 2. INFRASTRUCTURE MOAT: DUAL ADDRESSES */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 bg-black/20 p-10 rounded-[2.5rem] border border-white/5 shadow-inner">

                    {/* Facility 1 */}
                    <div className="flex gap-6 items-start">
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                            <Factory className="text-black w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-black text-black text-xs uppercase tracking-[0.2em] mb-3 ">Manufacturing Unit I</h4>
                            <address className="text-black text-sm not-italic leading-relaxed font-medium">
                                Survey No. 109 Richard Compound, Manchipada Road, <br />
                                Vasai Phata, Vasai East, Palghar - 401208, MH.
                            </address>
                        </div>
                    </div>

                    {/* Facility 2 */}
                    <div className="flex gap-6 items-start lg:border-l lg:border-white/10 lg:pl-10">
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                            <Warehouse className="text-black w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-black text-black text-xs uppercase tracking-[0.2em] mb-3 ">Logistics Godown</h4>
                            <address className="text-black text-sm not-italic leading-relaxed font-medium">
                                Gala No. 1, Khan Compound, near Gausiya Weight Kata, <br />
                                Dhumal Nagar, Vasai East, Palghar - 401208, MH.
                            </address>
                        </div>
                    </div>
                </div>

                {/* 3. FINAL COMPLIANCE & CONTACT BAR */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 py-10 border-t border-white/5 mb-8">
                    <div className="flex flex-wrap justify-center gap-10">
                        <div className="flex items-center gap-3 group">
                            <Phone className="text-black w-5 h-5 group-hover:rotate-12 transition-transform" />
                            <a href="tel:+918459121717" className="text-sm font-black tracking-tight text-black hover:text-blue-400 transition-colors">
                                +91 8459121717
                            </a>
                        </div>
                        <div className="flex items-center gap-3 group">
                            <Mail className="text-black w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                            <a href="mailto:aeroenterprises00@gmail.com" className="text-sm font-black tracking-tight text-black hover:text-blue-400 transition-colors">
                                aeroenterprises00@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* B2B Credibility Signal */}
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-black bg-white/5 px-6 py-2 rounded-full border border-white/5">
                        GSTIN: 27AGCPK5633K1Z9 | HSN: 7208, 7209, 7219
                    </div>
                </div>

                {/* Copyright Line */}
                <div className="text-center pb-12">
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-black">
                        © {new Date().getFullYear()} AERO ENTERPRISES. All Materials Supplied with Mill Test Certificates (MTC).
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;