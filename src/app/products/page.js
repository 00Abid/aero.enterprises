import Link from 'next/link';
import Image from 'next/image';
import CTA from '../components/CTA';
import WhatsappButton from '../components/WhatsappButton';
import { FileText, CheckCircle2, Info, Award } from 'lucide-react';

const productsData = [
    // --- INDUSTRIAL COILS ---
    {
        slug: "hr-coil-supplier-mumbai",
        category: "Industrial Coil",
        type: "HOT ROLLED (HR) COIL",
        description: "Industrial grade HR Coils (IS 2062) for structural fabrication, heavy machinery, and base plate manufacturing. High tensile strength for the construction sector.",
        img: "/hr-coil.webp"
    },
    {
        slug: "cr-coil-supplier-mumbai",
        category: "Industrial Coil",
        type: "COLD ROLLED (CR) COIL",
        description: "Precision CR Coils (IS 513) with superior surface finish. Essential for automotive skin panels, furniture, and high-precision white goods.",
        img: "/cr-coil.webp"
    },
    {
        slug: "gi-coil-supplier-mumbai",
        category: "Industrial Coil",
        type: "GALVANIZED IRON (GI) COIL",
        description: "Zinc-coated (120-180 GSM) GI Coils. Unmatched corrosion resistance for HVAC ducting, roofing sheets, and industrial cladding.",
        img: "/gi-coil.webp"
    },
    {
        slug: "ss-coil-supplier-mumbai",
        category: "Industrial Coil",
        type: "STAINLESS STEEL (SS) COIL",
        description: "High-grade SS coils for pharmaceutical, chemical, and food processing industries. Corrosion-resistant and food-safe.",
        img: "/ss-coil.webp"
    },

    // --- PRIMARY SHEETS (Premium 8x4 FT) ---
    {
        slug: "crc-sheet-supplier-mumbai",
        category: "Primary Sheet",
        type: "COLD ROLLED (CR) SHEET (8x4 FT)",
        description: "Standard 8x4 ft CRC sheets (0.5mm - 3.0mm). Perfect for powder coating and deep drawing in appliance and electrical panel manufacturing.",
        img: "/crc-sheet.webp"
    },
    {
        slug: "hr-sheet-supplier-mumbai",
        category: "Primary Sheet",
        type: "HOT ROLLED (HR) SHEET (8x4 FT)",
        description: "Primary IS 2062 HR sheets. Robust structural base plates for factory mezzanines and heavy-duty industrial platforms.",
        img: "/hr-sheet.webp"
    },
    {
        slug: "gi-sheet-supplier-mumbai",
        category: "Primary Sheet",
        type: "GALVANIZED IRON (GI) SHEET (8x4 FT)",
        description: "8x4 ft GI sheets providing long-term rust protection for coastal industrial projects and general outdoor structural cladding.",
        img: "/gi-sheet.webp"
    },
    {
        slug: "po-sheet-supplier-mumbai",
        category: "Primary Sheet",
        type: "PICKLED & OILED (P&O) SHEET (8x4 FT)",
        description: "Surface-cleaned P&O sheets. Free of scale for immediate welding and painting. Used heavily in automotive part fabrication.",
        img: "/pickle-sheet.webp"
    },
    {
        slug: "ss-sheet-supplier-mumbai",
        category: "Primary Sheet",
        type: "STAINLESS STEEL (SS) SHEET (8x4 FT)",
        description: "High-grade SS 304/316 sheets. Specialized corrosion-resistant materials for pharmaceutical cleanrooms and chemical processing units.",
        img: "/ss-sheet.webp"
    },

    // --- SECONDARY SHEETS ---
    {
        slug: "secondary-cr-sheet-supplier-mumbai",
        category: "Secondary Sheet",
        type: "SECONDARY COLD ROLLED (CR) SHEET",
        description: "Cost-effective CRCA sheets for general fabrication, storage bins, and non-cosmetic industrial components where budget is key.",
        img: "/cr.webp"
    },
    {
        slug: "secondary-hr-sheet-supplier-mumbai",
        category: "Secondary Sheet",
        type: "SECONDARY HOT ROLLED (HR) SHEET",
        description: "Affordable HR sheets for structural backing, site hoarding, and shoring. High strength-to-cost ratio for budget fabrication.",
        img: "/hr.webp"
    },
    {
        slug: "secondary-gi-sheet-supplier-mumbai",
        category: "Secondary Sheet",
        type: "SECONDARY GALVANIZED IRON (GI) SHEET",
        description: "Budget-friendly galvanized sheets for temporary roofing, industrial fencing, and basic weather protection.",
        img: "/gi.webp"
    },
    {
        slug: "secondary-po-sheet-supplier-mumbai",
        category: "Secondary Sheet",
        type: "SECONDARY PICKLE & OILED (P&O) SHEET",
        description: "Economic P&O sheets for applications requiring a scale-free surface without the premium cost of primary prime material.",
        img: "/pickle.webp"
    },
    {
        slug: "secondary-ss-sheet-supplier-mumbai",
        category: "Secondary Sheet",
        type: "SECONDARY STAINLESS STEEL (SS) SHEET",
        description: "Budget SS sheets for structural frameworks in humid environments where premium aesthetic finish is not required.",
        img: "/ss.webp"
    }
];

export const metadata = {
    title: 'Industrial Steel Sheets & Coils Catalog | Mumbai & Vasai | Aero Enterprises',
    description: 'Explore our 2025 inventory of HR, CR, GI, and SS Coils and Sheets. Primary mill-certified sheets and cost-effective secondary steel for Maharashtra manufacturing.',
};

export default function ProductsPage() {
    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Industrial Sheet Metal Collection | Aero Enterprises",
        "description": metadata.description,
        "mainEntity": productsData.map(p => ({
            "@type": "Product",
            "name": p.type,
            "description": p.description,
            "url": `https://www.aeroenterprises.shop/products/${p.slug}`,
            "image": `https://www.aeroenterprises.shop${p.img}`
        }))
    };

    return (
        <main className='bg-white font-sans'>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
            />

            {/* 1. HERO HEADER */}
            <div className='blue-metal w-full h-[40vh] flex justify-center items-center text-center px-4'>
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-6xl text-white font-black uppercase mb-6 drop-shadow-lg tracking-tighter">
                        Industrial Steel Inventory
                    </h1>
                    <p className='text-blue-100 text-lg md:text-xl font-medium'>
                        Sourcing specialists for JSW, TATA, and SAIL certified materials. From high-precision Coils to structural 8x4 Sheets.
                    </p>
                </div>
            </div>


            {/* 3. PRODUCTS GRID */}
            <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-10 pb-20 px-6">
                {productsData.map((product, index) => (
                    <div
                        key={index}
                        className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl border border-gray-100 overflow-hidden flex flex-col transition-all duration-500 transform hover:-translate-y-2"
                    >
                        <div className="relative h-60 bg-gray-50 p-6">
                            <Image
                                src={product.img}
                                alt={product.type}
                                fill
                                style={{ objectFit: 'contain' }}
                                sizes="(max-width: 768px) 100vw, 33vw"
                                priority={index < 3}
                                className="p-4 transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        <div className="p-8 flex flex-col grow">
                            <span className='text-[10px] font-black text-blue-600 mb-2 uppercase tracking-[0.3em]'>
                                {product.category}
                            </span>
                            <h3 className="text-xl font-black mb-4 text-slate-900 uppercase tracking-tight">
                                {product.type}
                            </h3>
                            <p className="text-sm text-slate-600 mb-8 grow leading-relaxed font-medium">
                                {product.description}
                            </p>

                            <div className='flex flex-col gap-3 mt-auto pt-6 border-t border-gray-100'>
                                <Link
                                    href={`/products/${product.slug}`}
                                    className='flex-1 flex items-center justify-center dark-metal-card text-white text-xs font-black uppercase tracking-widest py-3 rounded-xl hover:bg-black transition-all'
                                >
                                    <FileText className='w-4 h-4 mr-2' />
                                    Technical Specs
                                </Link>
                                <WhatsappButton productType={product.type} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* 4. COMPARISON SECTION (E-E-A-T BOOSTER) */}
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl text-black font-black uppercase tracking-tighter mb-4">The Steel Sourcing Spectrum</h2>
                        <div className="w-32 h-2 bg-blue-600 md:mx-auto mb-6"></div>
                        <p className="text-gray-600 font-bold uppercase tracking-widest text-sm max-w-2xl md:mx-auto">
                            From 20-Ton Coil logistics to individual 8x4 precision sheets—we map our inventory to your technical requirements.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">

                        {/* 1. INDUSTRIAL COILS: THE LOGISTICS POWERHOUSE */}
                        <div className="flex flex-col border-2 border-black rounded-[2.5rem] p-10 hover:shadow-2xl transition-all group hover:border-black">
                            <div className="mb-8">
                                <span className="bg-black text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">High Volume</span>
                                <h3 className="text-3xl font-black text-black mt-6 uppercase leading-none">Industrial<br />Coils</h3>
                            </div>
                            <p className="text-gray-600 text-sm font-medium leading-relaxed mb-8 grow">
                                Best for automated production lines, large-scale fabrication, and roll-forming operations. Available in HR, CR, and GI.
                            </p>
                            <div className="space-y-4 mb-10">
                                <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                                    <CheckCircle2 className="w-5 h-5 text-black" />
                                    <span className="text-xs font-bold text-gray-800">20-Ton Average Weight</span>
                                </div>
                                <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                                    <CheckCircle2 className="w-5 h-5 text-black" />
                                    <span className="text-xs font-bold text-gray-800">Direct Mill Sourcing</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-black" />
                                    <span className="text-xs font-bold text-gray-800">Slitting & CTL Ready</span>
                                </div>
                            </div>
                            <div className="p-4 dark-metal-card rounded-2xl text-white text-xs font-black text-center uppercase tracking-widest">
                                Best For: Heavy Infrastructure & OEMs
                            </div>
                        </div>

                        {/* 2. PRIMARY SHEETS: THE PRECISION STANDARD */}
                        <div className="flex flex-col border-2 border-black rounded-[2.5rem] p-10 shadow-xl bg-slate-50 relative overflow-hidden">
                            <div className="absolute top-6 right-6">
                                <Award className="w-8 h-8 text-black" />
                            </div>
                            <div className="mb-8">
                                <span className="bg-black text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Mill Certified</span>
                                <h3 className="text-3xl font-black text-black mt-6 uppercase leading-none">Primary<br />Sheets</h3>
                            </div>
                            <p className="text-gray-600 text-sm font-medium leading-relaxed mb-8 grow">
                                The gold standard for 8x4 sheets. Guaranteed gauge, chemistry, and surface finish. Full MTC traceability included.
                            </p>
                            <div className="space-y-4 mb-10">
                                <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                                    <CheckCircle2 className="w-5 h-5 text-black" />
                                    <span className="text-xs font-bold text-gray-800">IS 2062 / IS 513 Compliance</span>
                                </div>
                                <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                                    <CheckCircle2 className="w-5 h-5 text-black" />
                                    <span className="text-xs font-bold text-gray-800">Guaranteed Thickness Tolerance</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-black" />
                                    <span className="text-xs font-bold text-gray-800">Premium Packaging (8x4 FT)</span>
                                </div>
                            </div>
                            <div className="p-4 dark-metal-card rounded-2xl text-white text-xs font-black text-center uppercase tracking-widest">
                                Best For: Automotive & High-End Panels
                            </div>
                        </div>

                        {/* 3. SECONDARY SHEETS: THE COST ADVANTAGE */}
                        <div className="flex flex-col border-2 border-black rounded-[2.5rem] p-10 hover:shadow-2xl transition-all group hover:border-black">
                            <div className="mb-8">
                                <span className="bg-black text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Budget Optimized</span>
                                <h3 className="text-3xl font-black text-black mt-6 uppercase leading-none">Secondary<br />Sheets</h3>
                            </div>
                            <p className="text-gray-600 text-sm font-medium leading-relaxed mb-8 grow">
                                High-strength material with minor aesthetic variations. 15-20% cost savings for structural and general fabrication.
                            </p>
                            <div className="space-y-4 mb-10">
                                <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                                    <CheckCircle2 className="w-5 h-5 text-black" />
                                    <span className="text-xs font-bold text-gray-800">Economical Rate Per KG</span>
                                </div>
                                <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                                    <CheckCircle2 className="w-5 h-5 text-black " />
                                    <span className="text-xs font-bold text-gray-800">Hand-Picked Commercial Lots</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-black" />
                                    <span className="text-xs font-bold text-gray-800">Immediate Vasai Stock</span>
                                </div>
                            </div>
                            <div className="p-4 dark-metal-card rounded-2xl text-white text-xs font-black text-center uppercase tracking-widest">
                                Best For: Hoarding & General Fab.
                            </div>
                        </div>

                    </div>
                </div>

            {/* 5. INDUSTRIAL COMPLIANCE NOTICE */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex items-start gap-4 p-8 bg-blue-50 rounded-3xl border border-blue-100">
                    <Info className="text-blue-600 w-10 h-10 shrink-0 mt-1" />
                    <div>
                        <h3 className="font-black text-xl mb-2 text-blue-900 uppercase tracking-tight">Compliance & Weighbridge Transparency</h3>
                        <p className="text-blue-800 text-sm leading-relaxed font-medium">
                            Aero Enterprises adheres to strict <strong>HSN 7208 (HR), 7209 (CR), and 7219 (SS)</strong> billing codes. Every transaction is processed through our certified digital weighbridge in Vasai East to ensure 100% weight accuracy. We provide Mill Test Certificates (MTC) for all primary stock to verify chemical composition and yield strength.
                        </p>
                    </div>
                </div>
            </div>

            <CTA
                title="Secure Your Material Inventory"
                description="Join 500+ industrial entities in the Mumbai-Thane-Vasai belt who rely on Aero Enterprises for verified steel supply."
                primaryButtonText="Download Industrial Catalogue"
                primaryButtonLink="/AERO-ENTERPRISES-CATALOGUE.pdf"
                isPrimaryDownload={true}
                secondaryButtonText="Request Custom Quote"
                secondaryButtonLink="/contact"
            />
        </main>
    );
}
// import Link from 'next/link';
// import Image from 'next/image';
// import CTA from '../components/CTA';
// import WhatsappButton from '../components/WhatsappButton';
// import { FileText, CheckCircle2, Info, Award, Settings, Zap, Paintbrush } from 'lucide-react';

// const productsData = [
//     // --- NEW: FABRICATED COMPONENTS (Manufacturing Unit Focus) ---
//     {
//         slug: "precision-stamped-components",
//         category: "Fabricated Part",
//         type: "CUSTOM STAMPED COMPONENTS",
//         description: "High-volume precision stamping and pressing. Custom brackets, automotive hardware, and electrical connectors manufactured to ±0.1mm tolerance.",
//         img: "/stamping-part.webp"
//     },
//     {
//         slug: "cnc-bent-enclosures",
//         category: "Fabricated Part",
//         type: "CNC BENT ENCLOSURES & PANELS",
//         description: "Multi-axis CNC bending for complex geometries. Ideal for HVAC housings, electrical panels, and structural industrial shrouds.",
//         img: "/bent-part.webp"
//     },
//     {
//         slug: "powder-coated-assemblies",
//         category: "Fabricated Part",
//         type: "POWDER COATED ASSEMBLIES",
//         description: "Fully finished, assembly-ready metal parts. Integrated welding and automated powder coating in a wide RAL color spectrum.",
//         img: "/coated-part.webp"
//     },

//     // --- INDUSTRIAL COILS ---
//     {
//         slug: "hr-coil-supplier-mumbai",
//         category: "Industrial Coil",
//         type: "HOT ROLLED (HR) COIL",
//         description: "Industrial grade HR Coils (IS 2062). Direct mill sourcing for structural fabrication and heavy machinery base plates.",
//         img: "/hr-coil.webp"
//     },
//     {
//         slug: "cr-coil-supplier-mumbai",
//         category: "Industrial Coil",
//         type: "COLD ROLLED (CR) COIL",
//         description: "Precision CR Coils (IS 513) with superior surface finish for automotive skin panels and white goods.",
//         img: "/cr-coil.webp"
//     },
//     {
//         slug: "gi-coil-supplier-mumbai",
//         category: "Industrial Coil",
//         type: "GALVANIZED IRON (GI) COIL",
//         description: "Zinc-coated corrosion resistance. Critical for HVAC ducting, roofing, and industrial cladding systems.",
//         img: "/gi-coil.webp"
//     },

//     // --- PRIMARY SHEETS ---
//     {
//         slug: "crc-sheet-supplier-mumbai",
//         category: "Primary Sheet",
//         type: "CRCA SHEET (8x4 FT)",
//         description: "Mill-certified 8x4 ft sheets. Perfect for high-end powder coating and deep drawing applications.",
//         img: "/crc-sheet.webp"
//     },
//     {
//         slug: "po-sheet-supplier-mumbai",
//         category: "Primary Sheet",
//         type: "P&O SHEET (8x4 FT)",
//         description: "Pickled & Oiled scale-free surface. Immediate readiness for precision welding and stamping.",
//         img: "/pickle-sheet.webp"
//     },

//     // --- SECONDARY SHEETS ---
//     {
//         slug: "secondary-cr-sheet-supplier-mumbai",
//         category: "Secondary Sheet",
//         type: "SECONDARY CR SHEET",
//         description: "Cost-effective solutions for general fabrication where budget efficiency is prioritized over aesthetic finish.",
//         img: "/cr.webp"
//     }
// ];

// export const metadata = {
//     title: 'Integrated Steel Inventory & Fabrication Catalog | Mumbai | Aero Enterprises',
//     description: 'Explore Aero Enterprises 2026 inventory. From JSW/TATA Mill-Certified Coils to Precision Stamped and Powder Coated Components in Vasai.',
// };

// export default function ProductsPage() {
//     return (
//         <main className='bg-white font-sans'>
//             {/* 1. HERO HEADER: THE INTEGRATED HUB MESSAGE */}
//             <div className='bg-slate-900 w-full h-[50vh] flex justify-center items-center text-center px-4 relative overflow-hidden'>
//                 <div className="absolute inset-0 opacity-20 bg-[url('/grid-pattern.svg')]"></div>
//                 <div className="max-w-5xl relative z-10">
//                     <div className="mb-6 inline-flex items-center gap-2 bg-blue-600 px-4 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em]">
//                         Sourcing + Manufacturing
//                     </div>
//                     <h1 className="text-5xl md:text-8xl text-white font-black uppercase mb-6 tracking-tighter leading-none">
//                         Industrial <br/> <span className="text-blue-500 text-outline">Portfolio</span>
//                     </h1>
//                     <p className='text-blue-100 text-lg md:text-xl font-medium max-w-3xl mx-auto'>
//                         Bridging the gap from Mill-Certified Steel sourcing to high-precision Component Fabrication. Total transparency. Total precision.
//                     </p>
//                 </div>
//             </div>

//             {/* 2. CAPABILITY QUICK-LINKS */}
//             <div className="bg-gray-50 py-8 border-b border-gray-200">
//                 <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16">
//                     <div className="flex items-center gap-3">
//                         <Settings className="text-blue-600 w-5 h-5"/>
//                         <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">CNC Processing</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                         <Zap className="text-blue-600 w-5 h-5"/>
//                         <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Precision Stamping</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                         <Paintbrush className="text-blue-600 w-5 h-5"/>
//                         <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Powder Coating</span>
//                     </div>
//                 </div>
//             </div>

//             {/* 3. PRODUCTS GRID */}
//             <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-20 pb-28 px-6">
//                 {productsData.map((product, index) => (
//                     <div
//                         key={index}
//                         className={`group bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl border ${product.category === 'Fabricated Part' ? 'border-blue-100' : 'border-gray-100'} overflow-hidden flex flex-col transition-all duration-500 transform hover:-translate-y-2`}
//                     >
//                         <div className="relative h-64 bg-gray-50 p-6 overflow-hidden">
//                             <Image
//                                 src={product.img}
//                                 alt={product.type}
//                                 fill
//                                 style={{ objectFit: 'contain' }}
//                                 sizes="(max-width: 768px) 100vw, 33vw"
//                                 className="p-8 transition-transform duration-700 group-hover:scale-110"
//                             />
//                             {product.category === 'Fabricated Part' && (
//                                 <div className="absolute top-6 left-6 bg-blue-600 text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
//                                     Factory Direct
//                                 </div>
//                             )}
//                         </div>

//                         <div className="p-10 flex flex-col grow">
//                             <span className='text-[10px] font-black text-blue-600 mb-2 uppercase tracking-[0.3em]'>
//                                 {product.category}
//                             </span>
//                             <h3 className="text-2xl font-black mb-4 text-slate-900 uppercase tracking-tighter leading-tight">
//                                 {product.type}
//                             </h3>
//                             <p className="text-sm text-slate-500 mb-10 grow leading-relaxed font-medium">
//                                 {product.description}
//                             </p>

//                             <div className='flex flex-col gap-3 mt-auto pt-8 border-t border-gray-100'>
//                                 <Link
//                                     href={`/products/${product.slug}`}
//                                     className='flex-1 flex items-center justify-center bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest py-4 rounded-2xl hover:bg-blue-600 transition-all'
//                                 >
//                                     <FileText className='w-4 h-4 mr-2 text-blue-400' />
//                                     Technical Datasheet
//                                 </Link>
//                                 <WhatsappButton productType={product.type} />
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* 4. HUB ARCHITECTURE SECTION (UNIT I vs UNIT II) */}
//             <div className="bg-slate-50 py-24 border-y border-gray-200">
//                 <div className="max-w-7xl mx-auto px-6">
//                     <div className="grid lg:grid-cols-2 gap-20 items-center">
//                         <div>
//                             <h2 className="text-4xl md:text-6xl text-slate-900 font-black uppercase tracking-tighter leading-none mb-8">Integrated Hub <br/>Architecture</h2>
//                             <p className="text-gray-600 font-medium text-lg leading-relaxed mb-12">
//                                 We operate two specialized units in Vasai to ensure zero-latency between raw material procurement and final part delivery.
//                             </p>
//                             <div className="space-y-6">
//                                 <div className="flex gap-6 p-8 bg-white rounded-3xl border border-gray-200 shadow-sm group hover:border-blue-500 transition-all">
//                                     <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all"><Settings/></div>
//                                     <div>
//                                         <h4 className="font-black uppercase text-slate-900">Unit I: Fabrication Center</h4>
//                                         <p className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-widest">Vasai Phata | Manufacturing & Powder Coating</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex gap-6 p-8 bg-white rounded-3xl border border-gray-200 shadow-sm group hover:border-blue-500 transition-all">
//                                     <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all"><Warehouse/></div>
//                                     <div>
//                                         <h4 className="font-black uppercase text-slate-900">Unit II: Logistics Godown</h4>
//                                         <p className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-widest">Dhumal Nagar | Bulk Inventory & Weighbridge</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
//                             <Image src="/infra.webp" alt="Industrial Facility" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
//                             <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-[1px]"></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <CTA
//                 title="Consolidate Your Supply Chain"
//                 description="Source mill-certified steel and precision components from a single technical partner. Serving over 500+ industrial entities across India."
//                 primaryButtonText="Request Direct RFQ"
//                 primaryButtonLink="/contact"
//             />
//         </main>
//     );
// }
