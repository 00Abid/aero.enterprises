import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CTA from '../components/CTA';
import { Target, Users, Award, TrendingUp, ShieldCheck, Factory, History } from 'lucide-react';

// ELITE SEO: Metadata focusing on 'Legacy' and 'Technical Expertise'
export const metadata = {
    title: "About Aero Enterprises | 36 Years of Steel Excellence in Mumbai",
    description: "From our 1989 roots in precision cutting to our modern ISO-certified supply chain, Aero Enterprises is the definitive source for HR, CR, and Stainless Steel in Vasai, Mumbai.",
};

const values = [
    {
        icon: <Target className="w-10 h-10" />,
        title: "Technical Sourcing",
        description: "Moving beyond simple trading to provide engineer-level material selection for high-stakes industrial projects."
    },
    {
        icon: <Users className="w-10 h-10" />,
        title: "Industrial Consultation",
        description: "Our team leverages three decades of metallurgy experience to solve material failure and wastage issues for our clients."
    },
    {
        icon: <ShieldCheck className="w-10 h-10" />,
        title: "Verified MTC Compliance",
        description: "We don't just claim quality; every sheet is backed by a Mill Test Certificate (MTC) for total chemical transparency."
    },
    {
        icon: <TrendingUp className="w-10 h-10" />,
        title: "Supply Chain Innovation",
        description: "Utilizing digital logistics to ensure the Boisar-Bhiwandi-Thane corridor remains supplied with zero-latency inventory."
    }
];

const milestones = [
    { year: "1989", event: "Manufacturing Roots", description: "The foundation of our group's technical expertise began with precision metal processing and job work in Mumbai." },
    { year: "2015", event: "Aero Enterprises Launch", description: "Strategically founded to bridge the gap between major mills and specialized industrial SMEs in Vasai East." },
    { year: "2018", event: "Multi-Grade Specialization", description: "Expanded inventory to include advanced SS 316L and High-Tensile E350 grades for pharma and infra sectors." },
    { year: "2021", event: "ISO 9001:2015 Certification", description: "Formalized our 'Zero-Defect' supply chain process with international quality management standards." },
    { year: "2024", event: "Logistics Hub Expansion", description: "Integrated our dedicated Godown facility in the Dhumal Nagar Industrial Hub for massive stock readiness." }
];

export default function AboutPage() {
    return (
        <main className="bg-white">
            {/* 1. HERO: LEGACY ANCHOR */}
            <div className='blue-metal w-full h-[40vh] flex justify-center items-center text-center px-6'>
                <div>
                    <h1 className="text-4xl md:text-6xl text-white font-black uppercase tracking-tighter mb-4">
                        Our Industrial Legacy
                    </h1>
                    <p className='text-blue-100 max-w-2xl mx-auto text-lg font-medium'>
                        Engineering Trust in the Indian Steel Market Since 1989.
                    </p>
                </div>
            </div>

            {/* 2. THE PROVENANCE STORY (E-E-A-T) */}
            <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
                    <div data-aos="fade-right">
                        <h2 className="text-3xl md:text-5xl text-black font-black mb-8 uppercase tracking-tighter italic text-center md:text-left">The Aero Story: 36 Years of Grit</h2>
                        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                            <p>
                                Unlike generic traders, <strong>Aero Enterprises</strong> was forged on the factory floor. Our journey began in 1989 with <strong>Sagar Metal Cutting Works</strong>, where we mastered the behavior of steel through precision CNC processing and fabrication.
                            </p>
                            <p>
                                In 2015, we evolved into a dedicated supply-chain partner to solve the #1 problem in the <strong>Vasai-Mumbai industrial belt</strong>: Lack of technical transparency. We realized that procurement managers didn't just need metal; they needed <em>verified certainty</em>.
                            </p>
                            <p className="border-l-4 border-black pl-6 font-bold text-black italic">
                                "We don't just move tons; we move your project forward by ensuring the chemistry of the steel matches the demands of your engineering."
                            </p>
                            <p>
                                Today, we are a vertically integrated ecosystem serving over 500+ clients across India. From <strong>IS 2062 HR Sheets</strong> to <strong>Pharma-grade SS 316L</strong>, our inventory is a reflection of our 36-year commitment to industrial safety.
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="relative">
                        <video
                            src="/about.mp4"
                            className="rounded-4xl shadow-2xl w-full object-cover h-[500px]"
                            autoPlay muted loop playsInline
                        />
                        <div className="absolute -bottom-6 -right-6 bg-black text-white p-8 rounded-2xl hidden md:block">
                            <span className="block text-4xl font-black">36+</span>
                            <span className="text-xs uppercase font-bold tracking-widest text-gray-400">Years of Metallurgy</span>
                        </div>
                    </div>
                </div>

                {/* 3. CORE PRINCIPLES: TECHNICAL DEPTH */}
                <div className="mb-24">
                    <h2 className="text-3xl md:text-4xl font-black text-black text-center mb-16 uppercase">Expertise-Driven Values</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 border-t-4 border-black p-8 shadow-sm hover:shadow-xl transition-all"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="text-black mb-6">{value.icon}</div>
                                <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-tight leading-none">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. THE MILESTONE TIMELINE (TRUST) */}
                <div className="mb-24 dark-metal-card rounded-[3rem] py-20 px-8 md:px-16 text-white">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-16 uppercase tracking-tighter">Growth Trajectory</h2>
                        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                            {milestones.map((milestone, index) => (
                                <div
                                    key={index}
                                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                                    data-aos="fade-up"
                                >
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_rgba(255,255,255,0.1)]">
                                        <History className="w-4 h-4" />
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="flex items-center justify-between mb-1">
                                            <time className="font-black text-2xl text-blue-400">{milestone.year}</time>
                                            <span className="font-bold text-xs uppercase tracking-widest text-white/50">{milestone.event}</span>
                                        </div>
                                        <p className="text-white/70 text-sm">{milestone.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 5. THE RAW STATS (SOCIAL PROOF) */}
                <div className="mb-24 grid md:grid-cols-3 gap-12 text-center border-y border-gray-100 py-16">
                    <div data-aos="zoom-in">
                        <div className="text-6xl font-black text-black mb-2 tracking-tighter">500+</div>
                        <p className="text-gray-500 uppercase font-bold tracking-widest text-xs">Industrial Entities Served</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="100">
                        <div className="text-6xl font-black text-black mb-2 tracking-tighter">36+</div>
                        <p className="text-gray-500 uppercase font-bold tracking-widest text-xs">Years Professional Pedigree</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="200">
                        <div className="text-6xl font-black text-black mb-2 tracking-tighter">2</div>
                        <p className="text-gray-500 uppercase font-bold tracking-widest text-xs">Major Facility Units (Vasai)</p>
                    </div>
                </div>

                {/* 6. CTA: THE FINAL CONVERSION */}
                <CTA
                    title="Audit Our Technical Infrastructure"
                    description="Our ISO-certified supply chain and 36-year legacy are your guarantee of material precision. Request a facility visit or a technical material audit today."
                    primaryButtonText="Contact Technical Desk"
                    primaryButtonLink="/contact"
                    secondaryButtonText="Explore Inventory"
                    secondaryButtonLink="/products"
                />
            </div>
        </main>
    );
}