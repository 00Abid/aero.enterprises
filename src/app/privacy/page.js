import React from 'react';
import Link from 'next/link';
import { Shield, Lock, Eye, FileText, Database, ShieldCheck, HardHat, FileCode } from 'lucide-react';
import CTA from '../components/CTA';
import { ContentPageSchema } from '../../components/schema/WebPageSchema.js';

// 1. --- Next.js SEO Metadata ---
export const metadata = {
    title: "Privacy Policy | Industrial Data & RFQ Security | Aero Enterprises",
    description: "Discover how Aero Enterprises protects your fabrication blueprints, RFQ data, and industrial specifications. Our commitment to B2B confidentiality in Mumbai & Vasai.",
    alternates: {
        canonical: 'https://www.aeroenterprises.shop/privacy',
    },
};

const sections = [
    {
        icon: <FileCode className="w-8 h-8 text-blue-500" />,
        title: "Blueprint Security",
        content: "Technical fabrication blueprints (DXF/DWG) for laser cutting and stamping are stored on encrypted servers with restricted access to authorized engineering staff only."
    },
    {
        icon: <Database className="w-8 h-8 text-blue-500" />,
        title: "RFQ Protocol",
        content: "We collect professional data including GST details and material grades to optimize supply chain cycles and provide rapid technical quotations."
    },
    {
        icon: <Lock className="w-8 h-8 text-blue-500" />,
        title: "B2B Confidentiality",
        content: "Aero Enterprises enforces strict Non-Disclosure Protocols. We do not trade or sell your procurement history or specialized fabrication methods to third parties."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
        title: "Statutory Compliance",
        content: "All commercial records, including Mill Test Certificates (MTC), are retained for 7 years as mandated by the Indian Companies Act and GST regulations."
    }
];

export default function PrivacyPage() {
    return (
        <main className="bg-white font-sans text-slate-900">
            {/* Privacy Page Schema */}
            <ContentPageSchema
                title="Privacy Policy | Industrial Data & RFQ Security | Aero Enterprises"
                description="Discover how Aero Enterprises protects your fabrication blueprints, RFQ data, and industrial specifications. Our commitment to B2B confidentiality in Mumbai & Vasai."
                url="/privacy"
                pageType="WebPage"
                options={{ baseUrl: 'https://www.aeroenterprises.shop' }}
            />
            {/* Title Section */}
            <div className='bg-slate-900 w-full h-[40vh] flex justify-center items-center text-center px-6 relative overflow-hidden'>
                <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
                <div className="relative z-10">
                    <div className="mb-4 inline-flex items-center gap-2 bg-blue-600 px-4 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em]">
                        Security & Confidentiality
                    </div>
                    <h1 className="text-4xl md:text-7xl text-white font-black uppercase tracking-tighter mb-4 leading-none">
                        Data <span className="text-blue-500 text-outline">Privacy</span>
                    </h1>
                    <p className='text-blue-100 text-lg md:text-xl font-medium max-w-2xl mx-auto italic'>
                        Protecting Industrial Intelligence in the Digital Steel Market.
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-24">
                {/* Last Updated Hook */}
                <div className="mb-20 p-10 bg-slate-50 rounded-[3rem] border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 -mr-16 -mt-16 rounded-full"></div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-4">Policy Version 2.2 | Effective 2026</p>
                    <p className="text-slate-700 leading-relaxed font-medium text-lg">
                        At **Aero Enterprises**, we recognize that industrial specifications and procurement strategies are competitive assets. This policy outlines our &quot;Security-First&quot; approach to handling your professional data across our integrated Manufacturing and Logistics units.
                    </p>
                </div>

                {/* Key Pillars Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-24">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
                        >
                            <div className="mb-6 group-hover:scale-110 transition-transform">{section.icon}</div>
                            <h3 className="text-xl font-black mb-4 uppercase tracking-tight text-slate-900">
                                {section.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed font-bold">{section.content}</p>
                        </div>
                    ))}
                </div>

                {/* Detailed Clauses */}
                <div className="space-y-16">
                    <section className="bg-slate-900 p-12 rounded-[3.5rem] text-white">
                        <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter flex items-center gap-4">
                            <span className="text-blue-500 opacity-50 text-5xl">01</span> Technical Data Handling
                        </h2>
                        <div className="space-y-6 text-blue-100/70 text-sm leading-relaxed font-medium">
                            <p className="pl-6 border-l-2 border-blue-600"><strong className="text-white uppercase tracking-widest block mb-1">RFQ Documentation:</strong> When you submit an RFQ, we store material grades (e.g., SS 316L, IS 2062), thickness requirements, and quantity data to optimize supply chain forecasting.</p>
                            <p className="pl-6 border-l-2 border-blue-600"><strong className="text-white uppercase tracking-widest block mb-1">Engineering Blueprints:</strong> All CAD files submitted for CNC bending or stamping are deleted post-production unless a long-term retention agreement is requested for recurring orders.</p>
                            <p className="pl-6 border-l-2 border-blue-600"><strong className="text-white uppercase tracking-widest block mb-1">Communication:</strong> WhatsApp for Business is used for logistics updates. Sensitive financial or technical documents should be channeled through our secure corporate email.</p>
                        </div>
                    </section>

                    <section className="p-12 border-2 border-slate-900 rounded-[3.5rem]">
                        <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">02. Industrial Analytics</h2>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8 font-bold uppercase tracking-tight">
                            We utilize standard cookies to monitor website health and optimize our technical resource hubs. This data is non-identifiable and serves purely to improve our digital industrial presence.
                        </p>
                        <Link href="/cookiePolicy" className="inline-block text-xs font-black uppercase tracking-[0.2em] border-b-2 border-blue-600 pb-2 hover:text-blue-600 transition-colors">
                            Full Cookie Policy →
                        </Link>
                    </section>

                    <section className="bg-slate-50 p-12 rounded-[3.5rem] border border-gray-200">
                        <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter flex items-center gap-4">
                            <span className="text-blue-600 opacity-50 text-5xl">03</span> Data Retention
                        </h2>
                        <p className="text-gray-600 text-md leading-relaxed font-medium">
                            Aero Enterprises maintains strict commercial records (Invoices, Mill Test Certificates, and Delivery Challans) for a minimum of 7 years in accordance with **Indian GST regulations**. This ensures that our clients can request historical MTC data for audit purposes at any time.
                        </p>
                    </section>

                    <section className="bg-slate-900 text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mb-32 -mr-32"></div>
                        <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter">04. Data Protection Desk</h2>
                        <div className="space-y-4">
                            <p className="text-blue-100/70 text-sm mb-8 font-medium">To request access to your procurement records or to initiate data rectification, contact our Administrative Hub:</p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <div className="text-blue-500 font-black text-xs uppercase tracking-widest mb-2 flex items-center gap-2"><HardHat size={14} /> Unit I: Manufacturing</div>
                                    <p className="text-sm font-bold leading-relaxed text-white/80">Vasai Phata Industrial Zone, Vasai East, Palghar - 401208</p>
                                </div>
                                <div>
                                    <div className="text-blue-500 font-black text-xs uppercase tracking-widest mb-2 flex items-center gap-2"><FileText size={14} /> Communication</div>
                                    <a href="mailto:aeroenterprises00@gmail.com" className="block text-lg font-black hover:text-blue-400 transition-all uppercase tracking-tighter underline">aeroenterprises00@gmail.com</a>
                                    <a href="tel:+918459121717" className="block text-md font-bold text-white/50 mt-1">+91 8459121717</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <CTA
                    title="Procure with Confidence"
                    description="Our commitment to your data privacy is as solid as our steel supply chain. Contact our technical desk for any clarifications regarding our confidentiality protocols."
                    primaryButtonText="View Steel Catalog"
                    primaryButtonLink="/products"
                    secondaryButtonText="Technical RFQ"
                    secondaryButtonLink="/contact"
                />
            </div>
        </main>
    );
}