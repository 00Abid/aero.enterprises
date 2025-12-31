import React from 'react';
import Link from 'next/link';
import CTA from '../components/CTA';
import { Star, Quote, ShieldCheck, CheckCircle2, Factory, Settings, Paintbrush } from 'lucide-react';

const testimonials = [
    {
        name: "Vikram Shah",
        company: "Auto-Component OEM (Tier 1)",
        location: "Chakan, Pune",
        rating: 5,
        text: "Aero Enterprises is more than a supplier; they are a fabrication partner. Their stamping unit handles our high-volume bracket orders with ±0.1mm precision, and the powder coating finish is consistently top-tier.",
        product: "Stamped Components & Powder Coating",
        date: "2025-11-12"
    },
    {
        name: "Rajesh Kumar",
        company: "Infrastructure & Structural Fabricator",
        location: "Vasai East, Maharashtra",
        rating: 5,
        text: "We source all our IS 2062 HR sheets here. The integration of a digital weighbridge at their Dhumal Nagar hub gives us 100% confidence in the tonnage we pay for. Zero weight disputes in 4 years.",
        product: "Hot Rolled (HR) Sheets",
        date: "2025-12-15"
    },
    {
        name: "Irfan Sheikh",
        company: "Steel Trading & Retail Hub",
        location: "Bhiwandi, Maharashtra",
        rating: 5,
        text: "Best source for Secondary and Secondhand CR/HR sheets in the Mumbai belt. For budget-sensitive projects, their hand-picked secondary lots offer the best price-to-quality ratio. Reliable loading and transport support.",
        product: "Secondary HR/CR Sheets",
        date: "2025-08-22"
    },
    {
        name: "Suresh Mehra",
        company: "HVAC Systems Manufacturer",
        location: "Thane, Maharashtra",
        rating: 5,
        text: "The multi-axis CNC bending capability at Aero has reduced our production lead time by 30%. They source the GI coils and deliver finished, bent panels directly to our assembly line.",
        product: "CNC Bending & GI Coils",
        date: "2025-10-20"
    },
    {
        name: "Deepak Prajapati",
        company: "Pre-Engineered Building (PEB) Contractor",
        location: "Palghar, Maharashtra",
        rating: 5,
        text: "Sourcing 120-180 GSM GI Coils is usually a challenge for small batches, but Aero keeps primary stock ready. Their slitting and Cut-to-Length (CTL) service is extremely precise for our roofing requirements.",
        product: "GI Coils & Slitting",
        date: "2025-09-05"
    },
    {
        name: "Amit Desai",
        company: "Pharma Equipment Manufacturer",
        location: "Tarapur MIDC",
        rating: 5,
        text: "Finding genuine SS 316L with full MTC traceability in Vasai was difficult until we found Aero. Their Stainless Steel sheets have superior surface finish (No. 4/Matt) which is critical for our cleanroom equipment.",
        product: "Stainless Steel (SS) Sheets",
        date: "2025-07-14"
    }
];

const stats = [
    { number: "500+", label: "Industrial Clients" },
    { number: "2 Units", label: "Manufacturing & Logistics" },
    { number: "36+ Years", label: "Group Pedigree" },
    { number: "100%", label: "MTC Traceability" }
];

export const metadata = {
    title: "Industrial Reviews | Aero Enterprises | Fabrication & Steel Supply",
    description: "Verified B2B reviews from automotive OEMs, HVAC manufacturers, and engineers. See why India's core sectors trust Aero Enterprises for integrated fabrication and steel supply.",
};

const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
        <Star
            key={index}
            className={`w-3 h-3 ${index < rating ? 'fill-blue-500 text-blue-500' : 'text-gray-200'}`}
        />
    ));
};

export default function TestimonialsPage() {
    return (
        <main className="bg-white font-sans">
            {/* 1. HERO SECTION: THE PARTNER TRUST */}
            <div className="bg-slate-900 w-full h-[45vh] flex justify-center items-center text-center px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"></div>
                <div className="relative z-10">
                    <div className="mb-4 inline-flex items-center gap-2 bg-blue-600 px-4 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em]">
                        Verified B2B Partnerships
                    </div>
                    <h1 className="text-5xl md:text-8xl text-white font-black uppercase tracking-tighter leading-none mb-4">
                        Industrial <span className="text-blue-500 text-outline">Trust</span>
                    </h1>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg md:text-xl font-medium">
                        Real-world feedback from the engineers and procurement heads who keep the Indian industry moving.
                    </p>
                </div>
            </div>

            {/* 2. LIVE STATS BAR */}
            <div className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group" data-aos="zoom-in">
                                <div className="text-4xl md:text-6xl font-black text-slate-900 mb-2 tracking-tighter group-hover:text-blue-600 transition-colors">{stat.number}</div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. TESTIMONIALS GRID */}
            <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-100 rounded-[3rem] p-10 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-4 bg-blue-50 rounded-2xl text-blue-600">
                                    <Quote size={24} />
                                </div>
                                <div className="flex gap-1">{renderStars(t.rating)}</div>
                            </div>

                            <p className="text-slate-700 font-medium text-lg italic mb-10 leading-relaxed grow">
                                &quot;{t.text}&quot;
                            </p>

                            <div className="pt-8 border-t border-gray-100 mt-auto">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="font-black text-slate-900 uppercase text-sm tracking-tight">{t.name}</span>
                                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                                </div>
                                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-4">{t.company}</p>

                                <div className="flex flex-wrap gap-2">
                                    <div className="flex items-center gap-1 bg-slate-900 text-white text-[8px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
                                        <Settings size={10} /> {t.product}
                                    </div>
                                    <div className="flex items-center gap-1 bg-gray-100 text-gray-500 text-[8px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
                                        {t.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 4. TECHNICAL TRUST SIGNALS */}
            <section className="py-24 bg-slate-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-white rounded-3xl shadow-sm flex items-center justify-center mx-auto mb-6 text-blue-600 border border-gray-100">
                            <Factory size={28} />
                        </div>
                        <h4 className="font-black uppercase text-slate-900 mb-2">Facility Transparency</h4>
                        <p className="text-gray-500 text-xs font-medium uppercase tracking-tight">Open Audits for OEM Partners</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-white rounded-3xl shadow-sm flex items-center justify-center mx-auto mb-6 text-blue-600 border border-gray-100">
                            <ShieldCheck size={28} />
                        </div>
                        <h4 className="font-black uppercase text-slate-900 mb-2">Material Integrity</h4>
                        <p className="text-gray-500 text-xs font-medium uppercase tracking-tight">100% Mill Test Certification</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-white rounded-3xl shadow-sm flex items-center justify-center mx-auto mb-6 text-blue-600 border border-gray-100">
                            <Paintbrush size={28} />
                        </div>
                        <h4 className="font-black uppercase text-slate-900 mb-2">Finish Excellence</h4>
                        <p className="text-gray-500 text-xs font-medium uppercase tracking-tight">ISO-Standard Powder Coating</p>
                    </div>
                </div>
            </section>

            <CTA
                title="Join India's Leading Manufacturers"
                description="Experience the Aero synergy of raw material stockholding and precision fabrication. From Vasai Phata to Pan-India, we are your engineering partner."
                primaryButtonText="Start Technical Discussion"
                primaryButtonLink="/contact"
                secondaryButtonText="Explore Products"
                secondaryButtonLink="/products"
            />
        </main>
    );
}