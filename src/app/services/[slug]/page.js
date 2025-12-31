import { servicesData } from '../../../data/services';
import { notFound } from 'next/navigation';
import CTA from '../../components/CTA';
import { CheckCircle2, ShieldCheck, Cpu, Microscope, Award, Zap, BarChart3 } from 'lucide-react';
import Image from 'next/image';

// 1. --- DYNAMIC SEO METADATA ---
export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const service = servicesData.find(s => s.slug === resolvedParams.slug);

    if (!service) return { title: "Service Not Found" };

    return {
        title: `${service.title} | Technical Fabrication | Aero Enterprises`,
        description: service.description.substring(0, 160), // Perfect length for Google
        alternates: {
            canonical: `https://www.aeroenterprises.shop/services/${service.slug}`,
        },
        openGraph: {
            title: service.title,
            description: service.description,
            url: `https://www.aeroenterprises.shop/services/${service.slug}`,
            siteName: 'Aero Enterprises',
            images: [{ url: '/AE-logo.webp' }],
            type: 'website',
        },
    };
}

// 2. --- STATIC PARAMS (Performance) ---
export async function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

// 3. --- MAIN PAGE COMPONENT ---
export default async function ServicePage({ params }) {
    const resolvedParams = await params;
    const service = servicesData.find(s => s.slug === resolvedParams.slug);

    if (!service) return notFound();

    return (
        <main className="bg-white font-sans text-slate-900">
            {/* JSON-LD Schema for SEO (Tells Google this is a specific Technical Service) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": service.title,
                        "description": service.description,
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Aero Enterprises",
                            "address": "Vasai East, Palghar"
                        }
                    })
                }}
            />

            {/* HERO SECTION */}
            <section className="bg-slate-900 py-32 px-6 relative overflow-hidden text-center">
                <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
                <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 px-4 py-1 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                            <Zap size={12} className="animate-pulse" /> Precision Engineering Hub
                        </div>
                        <h1 className="text-5xl md:text-8xl text-white font-black uppercase tracking-tighter mb-8 leading-none italic">
                            {service.title}
                        </h1>
                        <p className="text-blue-100 text-xl md:text-2xl font-medium italic border-l-4 border-blue-600 pl-8">
                            {service.h1}
                        </p>
                    </div>
                </div>
            </section>

            {/* TECHNICAL DEEP DIVE SECTION */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-7">
                        <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 border-b-4 border-slate-900 pb-2 w-fit">Expertise & Experience</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-10 font-medium italic">
                            {service.description}
                        </p>

                        <div className="p-10 bg-blue-50 rounded-[3rem] border border-blue-100 mb-12 relative overflow-hidden">
                            <Award className="absolute -top-4 -right-4 w-32 h-32 text-blue-100 opacity-50" />
                            <h4 className="font-black uppercase text-blue-900 mb-4 flex items-center gap-2 relative z-10">
                                <Award size={20} className="text-blue-600" /> Why Our Process Wins
                            </h4>
                            <p className="text-blue-800 text-md font-bold leading-relaxed relative z-10">
                                {service.expertiseNote}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {service.specs.map((spec, i) => (
                                <div key={i} className="p-8 bg-slate-50 rounded-4xl border border-gray-100 hover:bg-slate-900 group transition-all duration-500">
                                    <div className="text-[10px] font-black uppercase text-blue-600 tracking-widest mb-2 group-hover:text-blue-400">{spec.label}</div>
                                    <div className="text-2xl font-black text-slate-900 group-hover:text-white tracking-tighter">{spec.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quality sidebar */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-slate-900 p-12 rounded-[4rem] text-white shadow-2xl">
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-10 flex items-center gap-3">
                                <ShieldCheck className="text-blue-500" /> Core Capabilities
                            </h3>
                            <div className="space-y-4">
                                {service.capabilities.map((cap, i) => (
                                    <div key={i} className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 group hover:bg-blue-600 transition-all">
                                        <CheckCircle2 size={18} className="text-blue-400 group-hover:text-white" />
                                        <span className="font-bold uppercase tracking-widest text-[11px]">{cap}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white border-4 border-slate-900 p-12 rounded-[4rem]">
                            <h3 className="text-xl font-black uppercase tracking-tight mb-8 text-slate-900 flex items-center gap-2">
                                <Microscope size={20} className="text-blue-600" /> Verification Protocol
                            </h3>
                            <div className="space-y-6">
                                {service.qualityProtocol.map((protocol, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-600 shrink-0"></div>
                                        <p className="text-slate-500 text-[11px] font-black uppercase tracking-widest leading-relaxed">{protocol}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTOR & FACILITY CONTEXT */}
            <section className="py-24 bg-slate-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                    <div className="p-12 bg-white rounded-[3.5rem] shadow-sm border border-gray-100">
                        <div className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-6">Manufacturing ID</div>
                        <h4 className="text-3xl font-black uppercase tracking-tighter mb-6 flex items-center gap-4">
                            <Cpu size={28} className="text-slate-900" /> Unit I Capability
                        </h4>
                        <p className="text-gray-500 text-md font-medium leading-relaxed">
                            Machinery Deployment: <strong>{service.machineryUsed}</strong>. Managed within our primary production hub in Vasai Phata.
                        </p>
                    </div>

                    <div className="p-12 bg-white rounded-[3.5rem] shadow-sm border border-gray-100">
                        <div className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-6">Vertical Integration</div>
                        <h4 className="text-3xl font-black uppercase tracking-tighter mb-8 italic text-slate-900">Industrial Applications</h4>
                        <div className="flex flex-wrap gap-3">
                            {service.industries.map((ind, i) => (
                                <span key={i} className="px-5 py-3 bg-slate-900 text-white text-[10px] font-black uppercase rounded-full tracking-widest hover:bg-blue-600 transition-colors">
                                    {ind}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CTA
                title={`Request a quote for ${service.title}`}
                description="Consolidate your sourcing and fabrication with a single Tier-1 partner. Visit our Unit I hub for a facility audit."
                primaryButtonText="Contact Engineering Desk"
                primaryButtonLink="/contact"
                secondaryButtonText="All Services"
                secondaryButtonLink="/services"
            />
        </main>
    );
}