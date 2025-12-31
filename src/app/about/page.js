import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CTA from '../components/CTA';
import { Target, Users, ShieldCheck, Factory, History, Settings, Paintbrush, Zap } from 'lucide-react';

// ELITE SEO: Metadata focusing on 'Legacy' and 'Technical Expertise'
export const metadata = {
    title: "About Aero Enterprises | Integrated Steel Supply & Fabrication Hub",
    description: "Discover the 36-year legacy of Aero Enterprises. From mill-certified steel distribution to advanced CNC fabrication, stamping, and powder coating in Vasai, Mumbai.",
};

const values = [
    {
        icon: <Settings className="w-10 h-10" />,
        title: "Integrated Engineering",
        description: "Bridging the gap between raw material sourcing and finished components through advanced CNC processing."
    },
    {
        icon: <Users className="w-10 h-10" />,
        title: "OEM Collaboration",
        description: "Working as a Tier-1 fabrication partner for Automotive and HVAC sectors, ensuring assembly-line readiness."
    },
    {
        icon: <ShieldCheck className="w-10 h-10" />,
        title: "Verified MTC Quality",
        description: "Every dispatch—whether raw sheet or fabricated part—is backed by a Mill Test Certificate (MTC) for total transparency."
    },
    {
        icon: <Zap className="w-10 h-10" />,
        title: "Zero-Latency Supply",
        description: "Optimized logistics via our Dhumal Nagar hub to keep the Mumbai-Thane industrial corridor running 24/7."
    }
];

const milestones = [
    { year: "1989", event: "Manufacturing Foundation", description: "Mastering steel behavior through precision metal processing and technical job work in the Mumbai industrial heartland." },
    { year: "2015", event: "Aero Enterprises Setup", description: "Strategically founded in Vasai East to solve the industrial need for high-quality, technically verified steel supply." },
    { year: "2021", event: "CNC Infrastructure Integration", description: "Upgrading to advanced CNC Multi-Axis Bending and Fiber Laser Cutting to serve high-precision engineering needs." },
    { year: "2024", event: "Integrated Hub Launch", description: "Establishing Unit I (Production) and Unit II (Logistics) to consolidate raw material supply with finished fabrication." },
    { year: "2026", event: "Advanced Finishing Unit", description: "Integrating high-volume Stamping presses and Industrial Powder Coating for factory-ready components." }
];

export default function AboutPage() {
    return (
        <main className="bg-white">
            {/* 1. HERO: LEGACY ANCHOR */}
            <div className='bg-slate-900 w-full h-[50vh] flex justify-center items-center text-center px-6 relative overflow-hidden'>
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-blue-600 mix-blend-multiply"></div>
                </div>
                <div className="relative z-10">
                    <div className="mb-4 inline-flex items-center gap-2 bg-blue-600 px-4 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em]">
                        One Hub. Total Solutions.
                    </div>
                    <h1 className="text-5xl md:text-8xl text-white font-black uppercase tracking-tighter leading-none mb-4">
                        Aero <span className="text-blue-500 text-outline">Evolution</span>
                    </h1>
                    <p className='text-blue-100 max-w-2xl mx-auto text-lg md:text-xl font-medium'>
                        From Mill-Certified Supply to Precision Fabrication Mastery.
                    </p>
                </div>
            </div>

            {/* 2. THE PROVENANCE STORY (E-E-A-T) */}
            <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
                    <div data-aos="fade-right">
                        <h2 className="text-4xl md:text-6xl text-slate-900 font-black mb-10 uppercase tracking-tighter leading-tight">The Strength <br />Behind the Steel</h2>
                        <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-medium">
                            <p>
                                At <strong>Aero Enterprises</strong>, we believe that steel is not just a commodity; it is the skeleton of modern infrastructure. Our journey began in 1989, not in a boardroom, but on the factory floor, mastering the intricate chemistry and mechanical behavior of metal.
                            </p>
                            <p>
                                Recognizing a critical gap in the <strong>Mumbai-Vasai industrial belt</strong> for technically transparent sourcing, we evolved into an integrated hub. We realized that modern manufacturers didn't just need a vendor; they needed an <strong>Integrated Fabrication Partner</strong> who understands both the raw material and the finished component.
                            </p>
                            <p className="border-l-8 border-blue-600 pl-8 font-black text-slate-900 italic text-2xl py-2">
                                &quot;We bridge the gap from the Mill to the Assembly Line by owning the entire value chain.&quot;
                            </p>
                            <p>
                                Today, operating from two specialized units in Vasai, we provide a vertically integrated ecosystem. Whether it is sourcing <strong>IS 2062 HR Sheets</strong> from Unit II or delivering **Powder Coated Stamped Components** from Unit I, Aero Enterprises delivers mill-certified certainty at every micron.
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="relative group">
                        <div className="absolute -inset-4 bg-blue-600/20 rounded-[4rem] blur-2xl group-hover:bg-blue-600/30 transition-all"></div>
                        <video
                            src="/about.mp4"
                            className="relative rounded-[3.5rem] shadow-2xl w-full object-cover h-[600px] grayscale hover:grayscale-0 transition-all duration-700"
                            autoPlay muted loop playsInline
                        />
                        <div className="absolute -bottom-10 -left-10 bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-2xl border border-white/10">
                            <div className="flex items-center gap-4 mb-2">
                                <Factory className="text-blue-500" />
                                <span className="text-4xl font-black">36+</span>
                            </div>
                            <span className="text-[10px] uppercase font-black tracking-[0.2em] text-blue-400">Years of Industrial Pedigree</span>
                        </div>
                    </div>
                </div>

                {/* 3. CAPABILITY BOXES: THE INTEGRATED PROMISE */}
                <div className="grid md:grid-cols-3 gap-8 mb-32">
                    <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100">
                        <Settings className="text-blue-600 mb-6" size={40} />
                        <h4 className="text-xl font-black uppercase mb-4">Precision Pressing</h4>
                        <p className="text-gray-500 text-sm font-medium">High-volume stamping and punching facility for automotive hardware and structural brackets.</p>
                    </div>
                    <div className="p-10 bg-slate-900 rounded-[3rem] text-white">
                        <Zap className="text-blue-400 mb-6" size={40} />
                        <h4 className="text-xl font-black uppercase mb-4 text-white">CNC Processing</h4>
                        <p className="text-blue-100/50 text-sm font-medium">Multi-axis bending and fiber laser cutting with ±0.1mm tolerance for complex engineering parts.</p>
                    </div>
                    <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100">
                        <Paintbrush className="text-blue-600 mb-6" size={40} />
                        <h4 className="text-xl font-black uppercase mb-4">Industrial Coating</h4>
                        <p className="text-gray-500 text-sm font-medium">Integrated powder coating line providing factory-ready finishes in full RAL color spectrum.</p>
                    </div>
                </div>

                {/* 4. EXPERTISE-DRIVEN VALUES */}
                <div className="mb-32">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 text-center mb-20 uppercase tracking-tighter">Core Directives</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="group bg-white border border-gray-100 p-10 rounded-[2.5rem] shadow-sm hover:bg-slate-900 transition-all duration-500"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="text-blue-600 group-hover:text-blue-400 mb-8 transform group-hover:scale-110 transition-transform">{value.icon}</div>
                                <h3 className="text-lg font-black text-slate-900 group-hover:text-white mb-4 uppercase tracking-tight">
                                    {value.title}
                                </h3>
                                <p className="text-gray-500 group-hover:text-gray-400 text-xs font-bold leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 5. THE MILESTONE TIMELINE (TRUST) */}
                <div className="mb-32 bg-slate-50 rounded-[4rem] py-24 px-8 md:px-16 border border-gray-200">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 text-center mb-24 uppercase tracking-tighter">The Aero Timeline</h2>
                        <div className="space-y-16 relative">
                            {/* Central Line */}
                            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-px bg-gray-300"></div>

                            {milestones.map((milestone, index) => (
                                <div
                                    key={index}
                                    className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                    data-aos="fade-up"
                                >
                                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-lg z-10"></div>
                                    <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-12">
                                        <div className={`p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                            <time className="font-black text-4xl text-blue-600 block mb-2">{milestone.year}</time>
                                            <span className="font-black text-xs uppercase tracking-[0.2em] text-slate-400 mb-4 block">{milestone.event}</span>
                                            <p className="text-gray-600 text-sm font-medium leading-relaxed">{milestone.description}</p>
                                        </div>
                                    </div>
                                    <div className="hidden md:block md:w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 6. ENTITY BINDING STATS */}
                <div className="mb-32 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { val: "36+", label: "Years Exp" },
                        { val: "500+", label: "B2B Clients" },
                        { val: "10k+", label: "Tonnes P.A." },
                        { val: "2", label: "Industrial Units" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center p-8 bg-white border border-gray-100 rounded-3xl">
                            <div className="text-5xl font-black text-slate-900 tracking-tighter mb-2">{stat.val}</div>
                            <div className="text-[10px] font-black uppercase text-blue-600 tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* 7. CTA: THE FINAL CONVERSION */}
                <CTA
                    title="Experience the Aero Standard"
                    description="From material selection to finished component delivery, our integrated process ensures your project is built on mill-certified quality. Request a facility audit at our Vasai units today."
                    primaryButtonText="Contact Engineering Desk"
                    primaryButtonLink="/contact"
                    secondaryButtonText="Our Services"
                    secondaryButtonLink="/services"
                />
            </div>
        </main>
    );
}