import React from 'react';
import Link from 'next/link';
import { Truck, Hammer, Thermometer, Airplay, Hospital, Zap, CheckCircle2, Factory, Settings, ShieldCheck, Cpu } from 'lucide-react';
import CTA from "../components/CTA";
import Image from 'next/image';

// 1. --- Next.js SEO Metadata ---
export const metadata = {
    title: "Industries Served | Integrated Steel & Fabrication | Aero Enterprises",
    description: "Aero Enterprises provides vertically integrated supply and fabrication for Automotive, HVAC, Construction, and Electrical sectors. Certified quality for India's core industries.",
};

const industries = [
    {
        name: "Automotive & EV",
        icon: <Settings size={40} />,
        description: "Specialized in Deep Drawing Quality (DDQ) material supply and high-volume stamping for chassis and hardware parts.",
        features: ["Component Stamping", "Chassis Brackets", "EV Battery Enclosures", "DDQ Grade CR Sheets"]
    },
    {
        name: "HVAC & Ventilation",
        icon: <Thermometer size={40} />,
        description: "Delivering corrosion-resistant GI and SS solutions for industrial air handling units and complex ducting systems.",
        features: ["GI Enclosures", "Perforated Panels", "Fan Housings", "120-180 GSM Coating"]
    },
    {
        name: "Infrastructure & PEB",
        icon: <Hammer size={40} />,
        description: "Heavy-duty Hot Rolled (HR) plates and structural elements for pre-engineered buildings and warehouses.",
        features: ["IS 2062 Plates", "Base Plate Fabrication", "Heavy Shearing", "Structural Columns"]
    },
    {
        name: "Electrical & Control",
        icon: <Cpu size={40} />,
        description: "Precision-bent and powder-coated enclosures for control panels, server racks, and junction boxes.",
        features: ["CNC Bending", "Junction Boxes", "Powder Coated Shells", "±0.5mm Tolerance"]
    }
];

export default function IndustriesPage() {
    return (
        <main className="bg-white font-sans text-slate-900">
            {/* 1. HERO HEADER */}
            <div className='bg-slate-900 w-full h-[45vh] flex justify-center items-center text-center px-6 relative overflow-hidden'>
                <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
                <div className="relative z-10">
                    <div className="mb-4 inline-flex items-center gap-2 bg-blue-600 px-4 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em]">
                        Unit I & II Integrated Solutions
                    </div>
                    <h1 className="text-5xl md:text-8xl text-white font-black uppercase tracking-tighter leading-none mb-4">
                        Core <span className="text-blue-500 text-outline">Sectors</span>
                    </h1>
                    <p className='text-blue-100 text-lg md:text-xl font-medium max-w-2xl mx-auto'>
                        Optimizing the value chain for India&apos;s leading manufacturing clusters.
                    </p>
                </div>
            </div>

            {/* 2. THE INTEGRATED VALUE PROPOSITION */}
            <section className="py-24 px-6 bg-slate-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[500px] rounded-[3.5rem] overflow-hidden shadow-2xl">
                            <Image src="/press.webp" alt="Industrial Fabrication" fill className="object-cover" />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-tight">
                                One Partner. <br/><span className="text-blue-600 italic">Every Sector.</span>
                            </h2>
                            <p className="text-gray-600 text-lg font-medium leading-relaxed mb-10">
                                Aero Enterprises eliminates the gap between raw material sourcing and precision manufacturing. We serve Tier-1 OEMs by providing <strong>Mill-Certified Steel (Unit II)</strong> and <strong>Finished Components (Unit I)</strong> under one commercial agreement.
                            </p>
                            <div className="space-y-4">
                                {['Zero Middle-Man Logistics', 'Total Material Traceability', 'Consolidated Procurement Billing'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                        <ShieldCheck className="text-blue-600" size={24} />
                                        <span className="font-black uppercase text-xs tracking-widest">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. INDUSTRY LISTING GRID */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Sector Capabilities</h2>
                        <div className="h-2 w-24 bg-blue-600 mx-auto mt-6"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {industries.map((ind, i) => (
                            <div key={i} className="p-12 bg-slate-900 rounded-[3.5rem] text-white flex flex-col justify-between group hover:shadow-2xl transition-all">
                                <div>
                                    <div className="text-blue-500 mb-8 p-5 bg-white/5 rounded-3xl w-fit group-hover:rotate-12 transition-transform">
                                        {ind.icon}
                                    </div>
                                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 italic">{ind.name}</h3>
                                    <p className="text-blue-100/50 text-md font-medium leading-relaxed mb-10">
                                        {ind.description}
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-y-4 pt-10 border-t border-white/10">
                                    {ind.features.map((feat, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-400">
                                            <CheckCircle2 size={14} /> {feat}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            

            {/* 4. TECHNICAL TRUST SIGNALS */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
                    <div>
                        <div className="text-4xl font-black text-slate-900 mb-2 italic tracking-tighter">±0.1mm</div>
                        <p className="text-[10px] font-black uppercase text-blue-600 tracking-[0.2em]">Engineering Tolerance</p>
                    </div>
                    <div>
                        <div className="text-4xl font-black text-slate-900 mb-2 italic tracking-tighter">MTC</div>
                        <p className="text-[10px] font-black uppercase text-blue-600 tracking-[0.2em]">Mill Direct Traceability</p>
                    </div>
                    <div>
                        <div className="text-4xl font-black text-slate-900 mb-2 italic tracking-tighter">RAL</div>
                        <p className="text-[10px] font-black uppercase text-blue-600 tracking-[0.2em]">Powder Coating Palette</p>
                    </div>
                </div>
            </section>

            <CTA
                title="Consolidate Your Procurement"
                description="Whether you need raw HR/CR sheets or custom-bent industrial assemblies, Aero Enterprises delivers mill-certified quality directly to your assembly line."
                primaryButtonText="Request Direct RFQ"
                primaryButtonLink="/contact"
                secondaryButtonText="View Machinery"
                secondaryButtonLink="/machinery"
            />
        </main>
    );
}