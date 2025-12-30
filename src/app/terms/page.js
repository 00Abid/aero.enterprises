import React from 'react';
import Link from 'next/link';
import { FileText, Scale, AlertCircle, CheckCircle, ShieldAlert, Gavel } from 'lucide-react';
import CTA from '../components/CTA';

export const metadata = {
    title: "Terms of Service | Industrial Supply Agreement | Aero Enterprises",
    description: "Official terms governing sheet metal supply, fabrication, and technical consultation at Aero Enterprises. Standard B2B industrial compliance terms for Mumbai & Vasai.",
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
        content: "Strict adherence to HSN codes 7208, 7209, and 7219 for transparent GST billing."
    },
    {
        icon: <ShieldAlert className="w-8 h-8" />,
        title: "MTC Accountability",
        content: "Verified Mill Test Certificates (MTC) provided to ensure chemical & mechanical accuracy."
    },
    {
        icon: <CheckCircle className="w-8 h-8" />,
        title: "Quality Benchmarks",
        content: "Material standards strictly following IS 2062, ASTM, and JIS industrial guidelines."
    }
];

export default function TermsPage() {
    return (
        <main className="bg-white font-sans">
            {/* 1. HERO HEADER */}
            <div className='blue-metal w-full h-[35vh] flex justify-center items-center text-center px-6'>
                <div>
                    <h1 className="text-4xl md:text-6xl text-white font-black uppercase tracking-tighter mb-4">
                        Terms of Service
                    </h1>
                    <p className='text-blue-100 text-lg md:text-xl font-medium max-w-2xl mx-auto italic'>
                        Industrial Supply & Service Level Agreements (SLA)
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-20">
                {/* 2. PREAMBLE */}
                <div className="mb-16 p-8 bg-gray-50 rounded-3xl border border-gray-100">
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-4">Effective Date: January 2025</p>
                    <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                        These Terms of Service ("Terms") govern the professional relationship between **Aero Enterprises** and its clients. By placing an order, requesting a technical quote, or utilizing our industrial facilities in Vasai, you agree to be bound by these commercial conditions.
                    </p>
                    <div className="w-20 h-1 bg-black"></div>
                </div>

                {/* 3. KEY HIGHLIGHTS GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {highlights.map((item, index) => (
                        <div key={index} className="dark-metal-card border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border-t-4 border-t-black">
                            <div className="text-black mb-4">{item.icon}</div>
                            <h3 className="text-sm font-black  mb-2 uppercase tracking-tight">{item.title}</h3>
                            <p className=" text-xs leading-relaxed font-medium">{item.content}</p>
                        </div>
                    ))}
                </div>

                {/* 4. DETAILED CLAUSES */}
                <div className="space-y-12 prose prose-slate max-w-none">
                    <section className='dark-metal-card p-10 rounded-[2.5rem] text-white'>
                        <h2 className="text-2xl font-black  mb-6 uppercase tracking-tight flex items-center gap-3">
                            <span className=" text-3xl">01</span> Scope of Industrial Services
                        </h2>
                        <p className=" leading-relaxed mb-4">
                            Aero Enterprises provides technical steel sourcing and processing, specifically:
                        </p>
                        <ul className="grid md:grid-cols-2 gap-3 list-none p-0">
                            {['Primary/Secondary Sheet Supply', 'Precision CNC Fiber Laser Cutting', 'Coil Slitting & CTL Services', 'Industrial Logistics & Warehousing'].map((s, i) => (
                                <li key={i} className="bg-gray-50 p-3 rounded-lg text-sm font-bold text-gray-800 flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-black" /> {s}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="dark-metal-card p-10 rounded-[2.5rem] text-white">
                        <h2 className="text-2xl font-black mb-6 uppercase tracking-tight text-white">02. Quotations & Market Volatility</h2>
                        <div className="space-y-4 text-white/70 text-sm font-medium">
                            <p><strong className="text-white uppercase tracking-widest">2.1 Validity:</strong> Standard quotes are valid for 24-48 hours due to high volatility in steel market rates (JSW/TATA/SAIL indices).</p>
                            <p><strong className="text-white uppercase tracking-widest">2.2 MTC Requests:</strong> Mill Test Certificates must be requested at the time of quotation to ensure batch traceability.</p>
                            <p><strong className="text-white uppercase tracking-widest">2.3 HSN Compliance:</strong> All billing follows GST guidelines for HSN 7208 (HR), 7209 (CR), and 7219 (SS).</p>
                        </div>
                    </section>

                    <section className='dark-metal-card p-10 rounded-4xl text-white'>
                        <h2 className="text-2xl font-black  mb-6 uppercase tracking-tight flex items-center gap-3">
                            <span className=" text-3xl">03</span> Quality & Liability
                        </h2>
                        <div className="space-y-6  text-sm leading-relaxed">
                            <p><strong>3.1 Material Standards:</strong> We warrant that primary stock will meet specified industrial grades (IS 2062/ASTM). Secondary stock is sold on an "As-Is" commercial basis without mill warranties.</p>
                            <p><strong>3.2 Weight Verification:</strong> All dispatches are verified at our **Certified Digital Weighbridge** in Vasai. Buyer claims regarding weight discrepancies must be logged before the vehicle leaves the delivery site.</p>
                            <p><strong>3.3 Limitation:</strong> Aero Enterprises is not liable for consequential losses, production downtime, or labor costs arising from material processing by third parties.</p>
                        </div>
                    </section>

                    <section className="dark-metal-card border-t border-gray-100  p-10 rounded-4xl">
                        <h2 className="text-2xl font-black  mb-6 uppercase tracking-tight">04. Dispute Resolution</h2>
                        <p className=" text-sm leading-relaxed">
                            These terms are governed by the laws of the **Republic of India**. Any commercial disputes are subject to the exclusive jurisdiction of the courts in **Palghar/Mumbai, Maharashtra**.
                        </p>
                    </section>
                </div>

                {/* 5. CONTACT FOOTER */}
                <div className=" mt-20 p-10 border-2 border-black rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <h4 className="font-black text-xl uppercase tracking-tight mb-2">Legal Desk</h4>
                        <p className="text-gray-500 text-sm font-medium italic">Contact for contract-level supply agreements.</p>
                    </div>
                    <div className="text-right flex flex-col items-center md:items-end">
                        <a href="mailto:aeroenterprises00@gmail.com" className="text-lg font-black text-black hover:underline">aeroenterprises00@gmail.com</a>
                        <p className="text-xs font-bold text-gray-400 uppercase mt-1">Ref: Terms 2025-V1</p>
                    </div>
                </div>

                <CTA
                    title="Procure with Confidence"
                    description="Standardized terms. Verified quality. Reliable delivery. Join 500+ industrial partners who trust Aero Enterprises."
                    primaryButtonText="View Inventory"
                    primaryButtonLink="/products"
                    secondaryButtonText="Contact Sales"
                    secondaryButtonLink="/contact"
                />
            </div>
        </main>
    );
}