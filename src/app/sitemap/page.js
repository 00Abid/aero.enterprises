import React from 'react';
import Link from 'next/link';
import { ChevronRight, Package, Factory, Newspaper, Phone, ShieldCheck, Settings, Hammer, Zap, Truck } from "lucide-react";
import CTA from "../components/CTA";

// 1. --- Next.js SEO Metadata ---
export const metadata = {
    title: "Sitemap | Integrated Steel Supply & Fabrication Index | Aero Enterprises",
    description: "Complete navigation index for Aero Enterprises. Access our steel inventory, CNC fabrication services, machinery specs, and B2B industrial resources.",
    alternates: {
        canonical: 'https://www.aeroenterprises.shop/sitemap',
    },
};

const sitemapSections = [
    {
        title: "Steel Sourcing",
        description: "Mill-Certified HR, CR, SS, and GI Inventory (Unit II).",
        links: [
            { name: "Primary Steel Catalog", path: "/products" },
            { name: "Hot Rolled (HR) Sheets", path: "/products/hr-sheet-supplier-mumbai" },
            { name: "Cold Rolled (CR) Sheets", path: "/products/cr-sheet-supplier-mumbai" },
            { name: "Galvanized (GI) Sheets", path: "/products/gi-sheet-supplier-mumbai" },
            { name: "Stainless Steel Coils", path: "/products/ss-coil-supplier-mumbai" },
            { name: "Secondary Stock List", path: "/products#secondary" },
        ]
    },
    {
        title: "Fabrication Services",
        description: "Precision Manufacturing & Finishing (Unit I).",
        links: [
            { name: "Metal Stamping & Pressing", path: "/services/stamping" },
            { name: "CNC Multi-Axis Bending", path: "/services/bending" },
            { name: "Fiber Laser Cutting", path: "/services/laser-cutting" },
            { name: "Industrial Powder Coating", path: "/services/coating" },
            { name: "CNC Punching & Shearing", path: "/services/punching" },
            { name: "Certified Welding", path: "/services/welding" },
        ]
    },
    {
        title: "Technical Infrastructure",
        description: "Machinery Specs & Industrial Proof.",
        links: [
            { name: "Machinery Inventory", path: "/machinery" },
            { name: "Quality Control Protocol", path: "/quality" },
            { name: "Unit I: Production Center", path: "/contact#unit-1" },
            { name: "Unit II: Logistics Hub", path: "/contact#unit-2" },
            { name: "Digital Weighbridge Facility", path: "/about#infrastructure" },
        ]
    },
    {
        title: "Corporate & Compliance",
        description: "Legal, Trust, and B2B Governance.",
        links: [
            { name: "Our 36-Year Legacy", path: "/about" },
            { name: "Verified Client Reviews", path: "/testimonials" },
            { name: "Terms of Service (SLA)", path: "/terms" },
            { name: "Privacy Policy", path: "/privacy" },
            { name: "Contact Engineering Desk", path: "/contact" },
        ]
    }
];

export default function SitemapPage() {
    return (
        <main className="bg-white font-sans">
            {/* Title Section */}
            <div className='bg-slate-900 w-full h-[40vh] flex justify-center items-center text-center px-6 relative overflow-hidden'>
                <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
                <div className="max-w-4xl z-10">
                    <div className="mb-4 inline-flex items-center gap-2 bg-blue-600 px-4 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em]">
                        Index V2.0: Integrated Hub
                    </div>
                    <h1 className="text-4xl md:text-7xl text-white font-black uppercase tracking-tighter mb-4 leading-none">
                        Industrial <span className="text-blue-500 text-outline">Sitemap</span>
                    </h1>
                    <p className='text-blue-100 text-lg md:text-xl font-medium max-w-2xl mx-auto'>
                        The definitive navigation index for our vertically integrated sourcing and manufacturing operations.
                    </p>
                </div>
            </div>

            {/* Structured Sitemap Grid */}
            <div className="bg-slate-50 py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {sitemapSections.map((section, idx) => (
                            <div key={idx} className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 flex flex-col hover:shadow-2xl transition-all group">
                                <h2 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                                    {section.title}
                                </h2>
                                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-8 border-b border-gray-100 pb-4 leading-relaxed">
                                    {section.description}
                                </p>

                                <ul className="space-y-4">
                                    {section.links.map((item, i) => (
                                        <li key={i}>
                                            <Link
                                                href={item.path}
                                                className="text-gray-600 hover:text-blue-600 text-sm font-bold transition-colors flex items-center group/link"
                                            >
                                                <ChevronRight className="text-blue-600 mr-2 group-hover/link:translate-x-1 transition-transform shrink-0" size={14} />
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
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { icon: <Package />, label: "Inventory", path: "/products" },
                            { icon: <Settings />, label: "Machinery", path: "/machinery" },
                            { icon: <Zap />, label: "Services", path: "/services" },
                            { icon: <Truck />, label: "Logistics", path: "/contact" }
                        ].map((box, i) => (
                            <Link key={i} href={box.path} className="group bg-slate-900 rounded-[2.5rem] p-10 text-white text-center hover:bg-blue-600 transition-all shadow-xl">
                                <div className="mx-auto mb-6 w-14 h-14 flex items-center justify-center bg-white/10 rounded-2xl group-hover:bg-white group-hover:text-blue-600 transition-all">
                                    {React.cloneElement(box.icon, { size: 28 })}
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-tight">{box.label}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <CTA
                title="Can't Find a Technical Spec?"
                description="We manage a custom inventory of 100+ steel variations and a dedicated fabrication unit. Contact our engineering desk for tailored solutions."
                primaryButtonText="Technical Consultation"
                primaryButtonLink="/contact"
                secondaryButtonText="Call Sales Desk"
                secondaryButtonLink="tel:+918459121717"
            />
        </main>
    );
}