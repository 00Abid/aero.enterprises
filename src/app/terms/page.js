import React from 'react';
import Link from 'next/link';
import { FileText, Scale, AlertCircle, CheckCircle, ShieldAlert, Gavel, Hammer, Paintbrush, Truck, Zap  } from 'lucide-react';
import CTA from '../components/CTA';

export const metadata = {
    title: "Terms of Service | Industrial Supply & Fabrication Agreement | Aero Enterprises",
    description: "Official commercial terms governing steel supply, CNC fabrication, stamping, and powder coating at Aero Enterprises. Standard B2B compliance for Mumbai industrial sectors.",
    alternates: {
        canonical: 'https://www.aeroenterprises.shop/terms',
    },
};

const highlights = [
    {
        icon: <Gavel className="w-8 h-8" />,
        title: "B2B Compliance",
        content: "Standardized industrial supply agreements compliant with Maharashtra commercial laws."
    },
    {
        icon: <Scale className="w-8 h-8" />,
        title: "HSN Transparency",
        content: "Strict adherence to HSN 7208, 7209, and 7219 for transparent GST billing."
    },
    {
        icon: <ShieldAlert className="w-8 h-8" />,
        title: "MTC Accountability",
        content: "Verified Mill Test Certificates (MTC) provided to ensure chemical & mechanical accuracy."
    },
    {
        icon: <CheckCircle className="w-8 h-8" />,
        title: "Fabrication Standards",
        content: "Processing strictly following IS 2062, ASTM, and client-specific engineering tolerances."
    }
];

export default function TermsPage() {
    return (
        <main className="bg-white font-sans text-slate-900">
            {/* 1. HERO HEADER: THE CORPORATE ANCHOR */}
            <div className='bg-slate-900 w-full h-[40vh] flex justify-center items-center text-center px-6 relative overflow-hidden'>
                <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
                <div className="relative z-10">
                    <div className="mb-4 inline-flex items-center gap-2 bg-blue-600 px-4 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em]">
                        Industrial Supply & Service SLA
                    </div>
                    <h1 className="text-4xl md:text-7xl text-white font-black uppercase tracking-tighter leading-none mb-4">
                        Commercial <span className="text-blue-500 text-outline">Terms</span>
                    </h1>
                    <p className='text-blue-100 text-lg md:text-xl font-medium max-w-2xl mx-auto italic'>
                        Governing the Integrated Synergy of Sourcing and Manufacturing.
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-24">
                {/* 2. PREAMBLE: UPDATED FOR MANUFACTURING */}
                <div className="mb-20 p-10 bg-slate-50 rounded-[3rem] border border-gray-100 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 -mr-16 -mt-16 rounded-full"></div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-6">Last Updated: {new Date().getFullYear()} V2.0</p>
                    <p className="text-slate-700 leading-relaxed mb-8 font-medium text-lg">
                        These Terms of Service ("Terms") govern the professional relationship between **Aero Enterprises** and its clients across our two specialized units (Vasai Phata Production & Dhumal Nagar Logistics). By placing an order for mill-certified stock or precision fabrication, you agree to these standardized industrial conditions.
                    </p>
                    <div className="w-24 h-2 bg-blue-600 rounded-full"></div>
                </div>

                {/* 3. KEY HIGHLIGHTS GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {highlights.map((item, index) => (
                        <div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border-t-4 border-t-slate-900 flex flex-col items-center text-center">
                            <div className="text-blue-600 mb-6">{item.icon}</div>
                            <h3 className="text-xs font-black mb-3 uppercase tracking-widest text-slate-900">{item.title}</h3>
                            <p className="text-[11px] leading-relaxed font-bold text-gray-500">{item.content}</p>
                        </div>
                    ))}
                </div>

                {/* 4. DETAILED CLAUSES: THE "WALL OF PROTECTION" */}
                <div className="space-y-12">

                    {/* CLAUSE 1: INTEGRATED SERVICES */}
                    <section className='bg-slate-900 p-12 rounded-[3.5rem] text-white shadow-2xl'>
                        <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter flex items-center gap-4">
                            <span className="text-blue-500 text-5xl opacity-50">01</span> Scope of Infrastructure
                        </h2>
                        <p className="text-blue-100/70 leading-relaxed mb-8 font-medium">
                            Aero Enterprises provides integrated sourcing and fabrication services across two facilities:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { t: 'Unit I (Production)', d: 'Stamping, Bending, & Powder Coating', i: <Hammer size={16} /> },
                                { t: 'Unit II (Logistics)', d: 'Bulk Coil Stock & Digital Weighing', i: <Truck size={16} /> },
                                { t: 'Raw Material', d: 'Primary JSW/TATA/SAIL & Secondary Sheets', i: <CheckCircle size={16} /> },
                                { t: 'CNC Processing', d: 'Fiber Laser Cutting & Precision Shearing', i: <Zap size={16} /> }
                            ].map((s, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4">
                                    <div className="text-blue-400">{s.i}</div>
                                    <div>
                                        <div className="text-xs font-black uppercase tracking-tight">{s.t}</div>
                                        <div className="text-[10px] font-bold text-blue-300/50 uppercase">{s.d}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CLAUSE 2: QUOTATIONS */}
                    <section className="p-12 bg-white rounded-[3.5rem] border border-gray-100 shadow-sm">
                        <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter text-slate-900">02. Market Dynamics & RFQs</h2>
                        <div className="space-y-6 text-slate-600 text-sm font-medium leading-relaxed">
                            <p className="pl-6 border-l-4 border-blue-600"><strong className="text-slate-900 uppercase tracking-widest block mb-1">2.1 Pricing Volatility:</strong> Steel market indices (JSW/TATA) fluctuate daily. All quotes are valid for a maximum of 24 hours unless explicitly locked via a purchase deposit.</p>
                            <p className="pl-6 border-l-4 border-blue-600"><strong className="text-slate-900 uppercase tracking-widest block mb-1">2.2 Batch Traceability:</strong> Mill Test Certificates (MTC) must be requested prior to dispatch. We cannot guarantee retroactive MTC issuance for processed secondary stock.</p>
                            <p className="pl-6 border-l-4 border-blue-600"><strong className="text-slate-900 uppercase tracking-widest block mb-1">2.3 Fabrication Tolerance:</strong> All CNC processing follows a standard ±0.5mm tolerance unless stricter engineering blueprints are submitted and approved.</p>
                        </div>
                    </section>

                    {/* CLAUSE 3: QUALITY & LIABILITY (PROTECTS YOUR POWDER COATING/WELDING) */}
                    <section className='bg-slate-900 p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden'>
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
                        <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter flex items-center gap-4">
                            <span className="text-blue-500 text-5xl opacity-50">03</span> Liability Benchmarks
                        </h2>
                        <div className="space-y-6 text-blue-100/70 text-sm leading-relaxed font-medium">
                            <p><strong className="text-white">3.1 Weight Protocol:</strong> Dispatches are weighed at our certified digital facility. Any discrepancy claims must be noted on the delivery challan *before* the material is unloaded from the vehicle.</p>
                            <p><strong className="text-white">3.2 Finishing & Coating:</strong> For Powder Coating services, Aero Enterprises is liable for adhesion quality according to RAL standards. We are not liable for subsequent scratching or chemical exposure post-delivery.</p>
                            <p><strong className="text-white">3.3 Force Majeure:</strong> Delays caused by mill supply-chain disruptions, power outages at the Vasai grid, or industrial strikes are considered beyond our control.</p>
                        </div>
                    </section>

                    {/* CLAUSE 4: JURISDICTION */}
                    <section className="p-12 bg-slate-50 rounded-[3.5rem] border border-gray-200">
                        <h2 className="text-2xl font-black mb-6 uppercase tracking-tighter text-slate-900 underline decoration-blue-600 decoration-4 underline-offset-8">04. Legal Jurisdiction</h2>
                        <p className="text-slate-600 text-sm font-bold leading-relaxed uppercase tracking-tight">
                            All commercial agreements are governed by the laws of India. Any disputes are subject to the exclusive jurisdiction of the courts in **Palghar/Mumbai, Maharashtra**.
                        </p>
                    </section>
                </div>

                {/* 5. LEGAL FOOTER DESK */}
                <div className="mt-24 p-12 bg-white border-4 border-slate-900 rounded-[3.5rem] flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="text-center md:text-left">
                        <h4 className="font-black text-2xl uppercase tracking-tighter mb-2">Technical Contract Desk</h4>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Inquiries for long-term MOU supply agreements.</p>
                    </div>
                    <div className="text-center md:text-right">
                        <a href="mailto:aeroenterprises00@gmail.com" className="text-xl font-black text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-3">
                            <FileText className="text-blue-600" /> aeroenterprises00@gmail.com
                        </a>
                        <p className="text-[10px] font-black text-gray-400 uppercase mt-2 tracking-[0.3em]">Ref: Integrated-Terms-2026-V2</p>
                    </div>
                </div>

                <CTA
                    title="Audit Our Technical Logistics"
                    description="Our terms are built on 36 years of industrial honesty. Request a facility visit to our Vasai Hub to witness our MTC compliance and weighbridge transparency."
                    primaryButtonText="View Material Catalog"
                    primaryButtonLink="/products"
                    secondaryButtonText="Contact Technical Head"
                    secondaryButtonLink="/contact"
                />
            </div>
        </main>
    );
}