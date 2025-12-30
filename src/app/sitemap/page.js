import React from 'react';
import Link from 'next/link';
import { ChevronRight, Package, Factory, Newspaper, Phone, ShieldCheck, Box } from "lucide-react";
import CTA from "../components/CTA";

// 1. --- Next.js SEO Metadata ---
export const metadata = {
    title: "Sitemap | Industrial Steel Inventory & Resource Index | Aero Enterprises",
    description: "Access the complete index of Aero Enterprises. Browse our technical steel catalog, industry-specific solutions, and B2B manufacturing resources in one place.",
    alternates: {
        canonical: 'https://www.aeroenterprises.shop/sitemap',
    },
};

const sitemapSections = [
    {
        title: "Industrial Inventory",
        description: "Full range of Mill-Certified HR, CR, SS, and GI products.",
        links: [
            { name: "All Products Index", path: "/products" },
            { name: "Hot Rolled (HR) Sheets", path: "/products/hr-sheet-supplier-mumbai" },
            { name: "Cold Rolled (CR) Sheets", path: "/products/cr-sheet-supplier-mumbai" },
            { name: "Stainless Steel (SS) Coils", path: "/products/stainless-steel-coil-supplier-mumbai" },
            { name: "MS Chequered Plates", path: "/products/ms-chequered-plate-supplier-mumbai" },
            { name: "Galvanized (GI) Sheets", path: "/products/gi-sheet-supplier-mumbai" },
        ]
    },
    {
        title: "Industrial Verticals",
        description: "Specialized steel solutions for niche manufacturing sectors.",
        links: [
            { name: "Automotive Manufacturing", path: "/industries/automotive" },
            { name: "Construction & PEB", path: "/industries/construction" },
            { name: "HVAC & Ventilation", path: "/industries/hvac" },
            { name: "Pharmaceutical & Food", path: "/industries/medical" },
            { name: "Renewable Energy", path: "/industries/energy" },
        ]
    },
    {
        title: "Technical Resources",
        description: "Deep-dives into steel metallurgy and processing methods.",
        links: [
            { name: "Precision Machining Guide", path: "/blog/precision-machining-aerospace-industry" },
            { name: "CNC vs Traditional Methods", path: "/blog/cnc-machining-vs-traditional-methods" },
            { name: "Material Selection Matrix", path: "/blog/material-selection-guide" },
            { name: "Quality Control Standards", path: "/blog/quality-control-manufacturing" },
        ]
    },
    {
        title: "Corporate Identity",
        description: "Legal, legacy, and trust verification documents.",
        links: [
            { name: "Our 36-Year Legacy", path: "/about" },
            { name: "Customer Reviews", path: "/testimonials" },
            { name: "Terms of Service", path: "/terms" },
            { name: "Privacy & Data Policy", path: "/privacy" },
            { name: "Contact & Location", path: "/contact" },
        ]
    }
];

export default function SitemapPage() {
    return (
        <main className="bg-white font-sans">
            {/* Title Section */}
            <div className='blue-metal w-full h-[35vh] flex justify-center items-center text-center px-6'>
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-6xl text-white font-black uppercase tracking-tighter mb-4">
                        Industrial Sitemap
                    </h1>
                    <p className='text-blue-100 text-lg md:text-xl font-medium'>
                        The Definitive Navigation Index for Aero Enterprises.
                    </p>
                </div>
            </div>

            {/* Structured Sitemap Grid */}
            <div className="bg-gray-50 py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {sitemapSections.map((section, idx) => (
                            <div key={idx} className="dark-metal-card rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col hover:shadow-xl transition-all">
                                <h2 className="text-xl font-black text-white mb-2 uppercase tracking-tight">
                                    {section.title}
                                </h2>
                                <p className="text-[10px] font-bold text-white uppercase tracking-widest mb-6 border-b border-gray-100 pb-4">
                                    {section.description}
                                </p>

                                <ul className="space-y-4">
                                    {section.links.map((item, i) => (
                                        <li key={i}>
                                            <Link
                                                href={item.path}
                                                className="text-white hover:text-black text-sm font-medium transition-colors flex items-center group"
                                            >
                                                <ChevronRight className="text-white mr-2 group-hover:translate-x-1 transition-transform shrink-0" size={14} />
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Access: Topical Clusters */}
            <div className="bg-white py-24 px-6 border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-black text-black mb-12 uppercase tracking-tighter text-center">
                        Topical Clusters
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { icon: <Package />, label: "Inventory", path: "/products" },
                            { icon: <Factory />, label: "Industries", path: "/industries" },
                            { icon: <ShieldCheck />, label: "Compliance", path: "/terms" },
                            { icon: <Phone />, label: "Support", path: "/contact" }
                        ].map((box, i) => (
                            <Link key={i} href={box.path} className="group dark-metal-card rounded-4xl p-8 text-white text-center hover:scale-[1.03] transition-all shadow-xl">
                                <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center bg-white/10 rounded-xl group-hover:bg-black transition-colors">
                                    {React.cloneElement(box.icon, { size: 24 })}
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-tight">{box.label}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <CTA
                title="Can't Find a Specific Grade?"
                description="We stock 100+ variations of sheet metal. Contact our technical sales desk for a custom inventory check or MTC verification."
                primaryButtonText="Technical Consultation"
                primaryButtonLink="/contact"
                secondaryButtonText="Call Sales"
                secondaryButtonLink="tel:+918459121717"
            />
        </main>
    );
}