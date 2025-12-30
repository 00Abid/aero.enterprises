import React from 'react';
import Link from 'next/link';
import { Shield, Lock, Eye, FileText, Database, ShieldCheck } from 'lucide-react';
import CTA from '../components/CTA';

// 1. --- Next.js SEO Metadata ---
export const metadata = {
    title: "Privacy Policy | Data Protection & RFQ Security | Aero Enterprises",
    description: "Learn how Aero Enterprises safeguards your industrial data, RFQ details, and technical specifications. Our commitment to B2B data privacy in Mumbai & Vasai.",
    alternates: {
        canonical: 'https://www.aeroenterprises.shop/privacy',
    },
};

const sections = [
    {
        icon: <Database className="w-8 h-8" />,
        title: "Information Collection",
        content: "We collect professional identity data, including company GST details, material specifications, and logistics requirements to provide accurate industrial quotes."
    },
    {
        icon: <Lock className="w-8 h-8" />,
        title: "Usage & Security",
        content: "Your data is used strictly for order fulfillment and technical consultation. We utilize encrypted servers to protect sensitive fabrication blueprints and RFQ history."
    },
    {
        icon: <Eye className="w-8 h-8" />,
        title: "Third-Party Disclosure",
        content: "We do not trade or sell your data. Disclosure is limited to logistics partners for material delivery or as required by Indian industrial regulations."
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "Your Data Rights",
        content: "Under Indian IT laws, you retain the right to access, rectify, or request the deletion of your professional records from our procurement database."
    }
];

export default function PrivacyPage() {
    return (
        <main className="bg-white font-sans">
            {/* Title Section */}
            <div className='blue-metal w-full h-[35vh] flex justify-center items-center text-center px-6'>
                <div>
                    <h1 className="text-4xl md:text-6xl text-white font-black uppercase tracking-tighter mb-4">
                        Privacy & Data Policy
                    </h1>
                    <p className='text-blue-100 text-lg md:text-xl font-medium max-w-2xl mx-auto italic'>
                        B2B Data Protection & Industrial Confidentiality
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-20">
                {/* Last Updated Hook */}
                <div className="mb-16 border-l-4 border-black pl-6">
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Version 2.1 | Last Updated: January 4, 2025</p>
                    <p className="text-gray-700 leading-relaxed font-medium italic">
                        At **Aero Enterprises**, we understand that industrial specifications and procurement data are sensitive assets. This policy outlines our "Security-First" approach to handling your professional information.
                    </p>
                </div>

                {/* Key Pillars Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="dark-metal-card rounded-4xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
                        >
                            <div className=" mb-6">{section.icon}</div>
                            <h3 className="text-xl font-black  mb-4 uppercase tracking-tight">
                                {section.title}
                            </h3>
                            <p className=" text-sm leading-relaxed font-medium">{section.content}</p>
                        </div>
                    ))}
                </div>

                {/* Detailed Clauses */}
                <div className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-black text-black mb-6 uppercase tracking-tight">01. Technical Data Sourcing</h2>
                        <div className="text-gray-700 space-y-4 text-sm leading-relaxed">
                            <p><strong>RFQ Documentation:</strong> When you submit a Request for Quote, we store material grades (e.g., SS 316L, IS 2062), thickness requirements, and quantity data to optimize future supply cycles.</p>
                            <p><strong>WhatsApp Correspondence:</strong> We utilize WhatsApp for Business to facilitate rapid communication. Please note that while our internal handling is secure, WhatsApp data is subject to its own end-to-end encryption policies.</p>
                        </div>
                    </section>

                    <section className="dark-metal-card p-10 rounded-4xl">
                        <h2 className="text-2xl font-black mb-6 uppercase tracking-tight text-white">02. Cookies & Industrial Analytics</h2>
                        <p className=" text-sm leading-relaxed mb-6">
                            We use standard analytical cookies to monitor website performance and improve user experience. These tools collect non-identifiable data such as browser type and session duration to help us optimize our technical resource pages.
                        </p>
                        <Link href="/cookiePolicy" className="inline-block text-xs font-black uppercase tracking-widest border-b-2 border-blue-500 pb-1 hover:text-blue-400 transition-colors">
                            Read Full Cookie Policy →
                        </Link>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-black mb-6 uppercase tracking-tight">03. Data Retention & Compliance</h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Aero Enterprises retains commercial records (Invoices, Mill Test Certificates, and Delivery Challans) for a minimum period of 7 years as required under the **Indian Companies Act and GST regulations**. Non-commercial inquiry data is periodically purged to ensure database hygiene.
                        </p>
                    </section>

                    <section className="dark-metal-card border-t border-gray-100 p-12">
                        <h2 className="text-2xl font-black  mb-6 uppercase tracking-tight">04. Contact Our Data Desk</h2>
                        <div className="p-8  rounded-2xl border border-gray-100">
                            <p className=" text-sm mb-4">For requests regarding data access or deletion, please reach out to our Administrative Unit:</p>
                            <p className="font-black  uppercase tracking-tight">Aero Enterprises - Manufacturing Unit</p>
                            <p className="text-sm  mb-4">Survey No. 109 Richard Compound, Manchipada Road, Vasai Phata, Vasai East, Palghar- 401208</p>
                            <div className="flex flex-col md:flex-row gap-4">
                                <a href="mailto:aeroenterprises00@gmail.com" className=" font-bold hover:underline hover:text-blue-400 transition-colors">aeroenterprises00@gmail.com</a>
                                <span className="hidden md:inline">|</span>
                                <a href="tel:+918459121717" className=" font-bold hover:text-blue-400 transition-colors">+91 8459121717</a>
                            </div>
                        </div>
                    </section>
                </div>

                <CTA
                    title="Transparent. Secure. Professional."
                    description="Our commitment to privacy is as strong as our steel. Contact us for any clarifications regarding our data or supply policies."
                    primaryButtonText="Explore Products"
                    primaryButtonLink="/products"
                    secondaryButtonText="Contact Us"
                    secondaryButtonLink="/contact"
                />
            </div>
        </main>
    );
}