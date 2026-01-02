import React from 'react';
import {
    Zap, Settings, Hammer, Paintbrush, Scissors,
    Ruler, Cpu, CheckCircle2, MoveRight, Factory, Layers
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import CTA from '../components/CTA';
import { ServiceCollectionSchema } from '../../components/schema/CollectionSchema.js';
import { generateWebPageSchema, stringifySchema } from '../../utils/schemaGenerator.js';
import { withErrorHandling } from '../../utils/schemaErrorHandler.js';

// 1. --- Next.js SEO Metadata ---
export const metadata = {
    title: "Precision Metal Fabrication Services Mumbai | Aero Enterprises",
    description: "Integrated fabrication services in Vasai. specialized in Sheet Metal Stamping, CNC Bending, Fiber Laser Cutting, and Industrial Powder Coating for OEMs.",
    keywords: ["sheet metal stamping Vasai", "CNC bending services Mumbai", "powder coating unit Vasai East", "custom metal fabrication Palghar"],
};

const serviceList = [
    {
        title: "Precision Stamping",
        slug: "metal-stamping",
        icon: <Hammer size={40} />,
        desc: "High-volume mechanical and hydraulic pressing for automotive components, hardware, and structural brackets.",
        features: ["±0.1mm Tolerance", "Progressive Tooling", "High-Volume Runs"]
    },
    {
        title: "CNC Multi-Axis Bending",
        slug: "cnc-bending",
        icon: <Layers size={40} />,
        desc: "Advanced multi-axis forming for complex geometries in HR, CR, and Stainless Steel sheets up to 3100mm.",
        features: ["100-Ton Capacity", "Angle Accuracy", "Zero Surface Marring"]
    },
    {
        title: "Industrial Powder Coating",
        slug: "powder-coating",
        icon: <Paintbrush size={40} />,
        desc: "Automated finishing unit providing durable, anti-corrosive coatings in full RAL color spectrum for factory-ready parts.",
        features: ["7-Tank Pre-treatment", "Conveyorized Line", "High Adhesion Standards"]
    },
    {
        title: "Fiber Laser Cutting",
        slug: "laser-cutting",
        icon: <Scissors size={40} />,
        desc: "High-speed 3000W laser profiling for MS (up to 20mm) and SS (up to 12mm) with intricate design capability.",
        features: ["Clean Edge Finish", "Nesting Optimization", "Rapid Prototyping"]
    },
    {
        title: "CNC Punching & Shearing",
        slug: "punching-shearing",
        icon: <Cpu size={40} />,
        desc: "High-speed hole profiling and custom cut-to-length shearing to reduce material wastage and assembly time.",
        features: ["Custom Patterning", "6mm Shearing Capacity", "Fast Turnaround"]
    },
    {
        title: "Certified Welding",
        slug: "welding",
        icon: <Factory size={40} />,
        desc: "Professional MIG, TIG, and Spot Welding services for structural assemblies and precision enclosures.",
        features: ["Structural Integrity", "Leak-Proof Welds", "Spatter-Free Finish"]
    }
];

export default function ServicesPage() {
    // Generate comprehensive services collection schema
    const services = serviceList.map(service => ({
        slug: service.slug,
        name: service.title,
        description: service.desc,
        serviceType: "Manufacturing Service",
        category: "Fabrication Services",
        capabilities: service.features
    }));

    // Generate webpage schema for the services page
    const generatePageSchema = () => {
        return withErrorHandling(
            generateWebPageSchema,
            [{
                type: 'CollectionPage',
                url: '/services',
                title: 'Precision Metal Fabrication Services Mumbai | Aero Enterprises',
                description: 'Integrated fabrication services in Vasai. specialized in Sheet Metal Stamping, CNC Bending, Fiber Laser Cutting, and Industrial Powder Coating for OEMs.',
                mainEntity: {
                    "@type": "ItemList",
                    "numberOfItems": serviceList.length
                }
            }],
            {
                fallbackType: 'webpage',
                enableRetry: false,
                sanitizeData: true
            }
        );
    };

    const pageSchema = generatePageSchema();
    return (
        <main className="bg-white font-sans text-slate-900">
            {/* Services Collection Schema */}
            <ServiceCollectionSchema
                services={services}
                title="Precision Metal Fabrication Services Mumbai | Aero Enterprises"
                description="Integrated fabrication services in Vasai. specialized in Sheet Metal Stamping, CNC Bending, Fiber Laser Cutting, and Industrial Powder Coating for OEMs."
                url="/services"
                options={{ baseUrl: 'https://www.aeroenterprises.shop' }}
            />
            
            {/* Page Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: stringifySchema(pageSchema) }}
            />
            {/* 1. HERO: THE FABRICATION POWERHOUSE */}
            <div className='bg-slate-900 w-full h-[50vh] flex justify-center items-center text-center px-6 relative overflow-hidden'>
                <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
                <div className="relative z-10">
                    <div className="mb-4 inline-flex items-center gap-2 bg-blue-600 px-4 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em]">
                        Unit I: Production Center
                    </div>
                    <h1 className="text-5xl md:text-8xl text-white font-black uppercase tracking-tighter leading-none mb-4">
                        Integrated <span className="text-blue-500 text-outline">Processing</span>
                    </h1>
                    <p className='text-blue-100 text-lg md:text-xl font-medium max-w-2xl mx-auto'>
                        Transforming Raw Steel into Engineered Precision Components.
                    </p>
                </div>
            </div>

            {/* 2. CORE SERVICES GRID */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Our Capabilities</h2>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">One-Stop Solution from Sourcing to Surface Finishing</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceList.map((service, i) => (
                        <div key={i} className="group bg-slate-50 border border-gray-100 rounded-[3rem] p-10 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-full">
                            <div>
                                <div className="text-blue-600 mb-8 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 mb-4">{service.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium italic">
                                    &quot;{service.desc}&quot;
                                </p>
                                <ul className="space-y-3 mb-10">
                                    {service.features.map((feat, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-700">
                                            <CheckCircle2 size={14} className="text-blue-600" /> {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Link href={`/services/${service.slug}`} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 group-hover:gap-4 transition-all">
                                Technical Specs <MoveRight size={16} />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. WORKFLOW VISUALIZATION */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative h-[600px] rounded-[4rem] overflow-hidden group border-8 border-white/5">
                            <Image src="/infra.webp" alt="Integrated Fabrication Workflow" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                            <div className="absolute inset-0 bg-blue-900/20"></div>
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-tight">
                                From Coil to <br /> <span className="text-blue-500 text-outline-white">Component</span>
                            </h2>
                            <p className="text-blue-100/60 text-lg font-medium leading-relaxed mb-12">
                                By integrating Unit II (Material Logistics) with Unit I (Precision Manufacturing), we eliminate middleman logistics and reduce your procurement lead time by up to 25%.
                            </p>

                            <div className="space-y-8">
                                {[
                                    { step: "01", t: "Material Sourcing", d: "Selecting primary JSW/TATA stock from our Unit II godown." },
                                    { step: "02", t: "CNC Processing", d: "Precision Laser Cutting and Bending at Unit I." },
                                    { step: "03", t: "Secondary Operations", d: "Stamping, Punching, and MIG/TIG Welding." },
                                    { step: "04", t: "Surface Finishing", d: "Conveyorized Powder Coating and Final Quality Check." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-6 items-start group">
                                        <div className="text-4xl font-black text-blue-600/30 group-hover:text-blue-500 transition-colors">{item.step}</div>
                                        <div>
                                            <h4 className="font-black uppercase text-lg tracking-tight">{item.t}</h4>
                                            <p className="text-blue-100/40 text-sm font-medium leading-relaxed">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* 4. SECTOR SOLUTIONS */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-16 underline decoration-blue-600 decoration-8 underline-offset-8">Solutions by Industry</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-12 border border-gray-100 rounded-[3rem] bg-slate-50">
                            <h4 className="font-black uppercase mb-4 text-xl">Automotive</h4>
                            <p className="text-gray-500 text-xs font-bold leading-relaxed">Chassis brackets, skin panels, and hardware components with DDQ precision.</p>
                        </div>
                        <div className="p-12 border border-gray-100 rounded-[3rem] bg-slate-50">
                            <h4 className="font-black uppercase mb-4 text-xl">HVAC</h4>
                            <p className="text-gray-500 text-xs font-bold leading-relaxed">Corrosion-resistant enclosures, fan housings, and ducting assemblies.</p>
                        </div>
                        <div className="p-12 border border-gray-100 rounded-[3rem] bg-slate-50">
                            <h4 className="font-black uppercase mb-4 text-xl">Electrical</h4>
                            <p className="text-gray-500 text-xs font-bold leading-relaxed">Junction boxes, control panels, and server rack components with powder coating.</p>
                        </div>
                    </div>
                </div>
            </section>

            <CTA
                title="Consolidate Your Procurement"
                description="Why deal with three vendors when you can have one? Experience the Aero synergy of supply and fabrication today."
                primaryButtonText="Request Fabrication RFQ"
                primaryButtonLink="/contact"
                secondaryButtonText="Our Machinery"
                secondaryButtonLink="/machinery"
            />
        </main>
    );
}