import Link from 'next/link';
import Image from 'next/image';
import CTA from '../components/CTA';
import WhatsappButton from '../components/WhatsappButton';
import {
    FileText, CheckCircle2, Info, Award, Settings,
    Zap, Paintbrush, Warehouse, ChevronRight, Search
} from 'lucide-react';
import { generateCollectionPageSchema, generateWebPageSchema, stringifySchema } from '../../utils/schemaGenerator.js';
import { withErrorHandling } from '../../utils/schemaErrorHandler.js';

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
    title: 'Industrial Steel & Fabrication Catalog | Mumbai & Vasai | Aero Enterprises',
    description: 'Sourcing + Manufacturing. From JSW/TATA Mill-Certified Coils to Precision Stamped and Powder Coated Components. Explore our integrated Vasai inventory.',
};

export default function ProductsPage() {
    // Generate comprehensive collection page schema
    const generateCollectionSchema = () => {
        const collectionData = {
            title: 'Industrial Steel & Fabrication Catalog | Mumbai & Vasai | Aero Enterprises',
            description: 'Sourcing + Manufacturing. From JSW/TATA Mill-Certified Coils to Precision Stamped and Powder Coated Components. Explore our integrated Vasai inventory.',
            url: '/products'
        };

        const items = productsData.map(product => ({
            type: 'Product',
            name: product.type,
            description: product.description,
            url: `/products/${product.slug}`,
            image: product.img,
            category: product.category
        }));

        return withErrorHandling(
            generateCollectionPageSchema,
            [collectionData, items, { baseUrl: 'https://www.aeroenterprises.shop' }],
            {
                fallbackType: 'organization',
                enableRetry: false,
                sanitizeData: true
            }
        );
    };

    // Generate webpage schema for the products page
    const generatePageSchema = () => {
        return withErrorHandling(
            generateWebPageSchema,
            [{
                type: 'CollectionPage',
                url: '/products',
                title: 'Industrial Steel & Fabrication Catalog | Mumbai & Vasai | Aero Enterprises',
                description: 'Sourcing + Manufacturing. From JSW/TATA Mill-Certified Coils to Precision Stamped and Powder Coated Components. Explore our integrated Vasai inventory.',
                mainEntity: {
                    "@type": "ItemList",
                    "numberOfItems": productsData.length
                }
            }],
            {
                fallbackType: 'webpage',
                enableRetry: false,
                sanitizeData: true
            }
        );
    };

    // Generate category-specific schemas
    const generateCategorySchema = (categoryName, categoryProducts) => {
        return {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": `${categoryName} Products`,
            "description": `Complete range of ${categoryName.toLowerCase()} products from Aero Enterprises`,
            "numberOfItems": categoryProducts.length,
            "itemListElement": categoryProducts.map((product, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                    "@type": "Product",
                    "@id": `https://www.aeroenterprises.shop/products/${product.slug}`,
                    "name": product.type,
                    "description": product.description,
                    "image": `https://www.aeroenterprises.shop${product.img}`,
                    "category": product.category,
                    "brand": {
                        "@type": "Brand",
                        "name": "Aero Enterprises"
                    },
                    "manufacturer": {
                        "@type": "Organization",
                        "@id": "https://www.aeroenterprises.shop/#organization"
                    }
                }
            }))
        };
    };

    const collectionSchema = generateCollectionSchema();
    const pageSchema = generatePageSchema();

    // Group products by category for category schemas
    const productsByCategory = productsData.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {});

    const categorySchemas = Object.entries(productsByCategory).map(([category, products]) => 
        generateCategorySchema(category, products)
    );

    return (
        <main className='bg-white font-sans text-slate-900'>
            {/* Comprehensive Collection Page Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: stringifySchema(collectionSchema) }}
            />
            
            {/* Page Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: stringifySchema(pageSchema) }}
            />
            
            {/* Category-specific Schemas */}
            {categorySchemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: stringifySchema(schema) }}
                />
            ))}

            {/* 1. HERO HEADER: INTEGRATED VISION */}
            <header className='bg-slate-900 w-full h-[50vh] flex justify-center items-center text-center px-6 relative overflow-hidden'>
                <div className="absolute inset-0 opacity-10"></div>
                <div className="relative z-10">
                    <div className="mb-6 inline-flex items-center gap-2 bg-blue-600 px-4 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em]">
                        Mill Sourcing + Manufacturing Unit
                    </div>
                    <h1 className="text-5xl md:text-8xl text-white font-black uppercase tracking-tighter leading-none mb-4">
                        Industrial <span className="text-blue-500 text-outline">Portfolio</span>
                    </h1>
                    <p className='text-blue-100 max-w-2xl mx-auto text-lg md:text-xl font-medium'>
                        We don't just supply steel; we engineer it. Access our integrated hub for mill-certified coils and assembly-ready fabricated parts.
                    </p>
                </div>
            </header>

            {/* 2. CAPABILITY RIBBON (SEO & Trust) */}
            <div className="bg-slate-50 py-10 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-20">
                        <div className="flex items-center gap-3 group">
                            <Settings className="text-blue-600 w-5 h-5 group-hover:rotate-90 transition-transform" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">CNC Laser Cutting, Bending</span>
                        </div>
                        <div className="flex items-center gap-3 group">
                            <Zap className="text-blue-600 w-5 h-5 group-hover:scale-125 transition-transform" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Precision Stamping, Pressing</span>
                        </div>
                        <div className="flex items-center gap-3 group">
                            <Paintbrush className="text-blue-600 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Powder Coating, Welding</span>
                        </div>
                        <div className="flex items-center gap-3 group">
                            <Warehouse className="text-blue-600 w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Bulk Logistics</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. PRODUCTS GRID: REFINED CARD DESIGN */}
            <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10 py-24 px-6">
                {productsData.map((product, index) => (
                    <div
                        key={index}
                        className={`group bg-white rounded-[3rem] shadow-sm hover:shadow-2xl border ${product.category === 'Fabricated Part' ? 'border-blue-100' : 'border-gray-100'} overflow-hidden flex flex-col transition-all duration-700 transform hover:-translate-y-3`}
                    >
                        {/* Image Hub */}
                        <div className="relative h-80 md:h-96 bg-slate-50 overflow-hidden">
                            <Image
                                src={product.img}
                                alt={product.type}
                                fill
                                style={{ objectFit: 'contain' }}
                                className="transition-all duration-700 group-hover:scale-105 group-hover:rotate-2"
                            />
                            {product.category === 'Fabricated Part' && (
                                <div className="absolute top-8 left-8 bg-blue-600 text-white text-[8px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                                    Factory Direct Part
                                </div>
                            )}
                        </div>

                        {/* Content Hub */}
                        <div className="p-10 flex flex-col grow">
                            <div className="flex items-center justify-between mb-4">
                                <span className='text-[9px] font-black text-blue-600 uppercase tracking-[0.3em]'>
                                    {product.category}
                                </span>
                                <Award className={`w-4 h-4 ${product.category === 'Fabricated Part' ? 'text-blue-600' : 'text-slate-200'}`} />
                            </div>

                            <h3 className="text-2xl font-black mb-6 text-slate-900 uppercase tracking-tighter leading-tight">
                                {product.type}
                            </h3>
                            <p className="text-sm text-slate-500 mb-10 grow leading-relaxed font-medium italic">
                                {product.description}
                            </p>

                            <div className='flex flex-col gap-3 mt-auto pt-8 border-t border-slate-50'>
                                <Link
                                    href={`/products/${product.slug}`}
                                    className='flex-1 flex items-center justify-center bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.2em] py-4 rounded-2xl hover:bg-blue-600 transition-all shadow-md hover:shadow-blue-200'
                                >
                                    <FileText className='w-4 h-4 mr-3 text-blue-400' />
                                    Technical Specs
                                </Link>
                                <WhatsappButton productType={product.type} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* 4. INTEGRATED HUB ARCHITECTURE (Dual Unit Proof) */}
            <section className="bg-slate-50 py-32 border-y border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100/50 rounded-full blur-[100px] -ml-32 -mt-32"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 md:gap-28 items-center">
                        <div>
                            <h2 className="text-4xl md:text-7xl text-slate-900 font-black uppercase tracking-tighter leading-[0.85] mb-10">
                                Integrated <br />Hub <span className="text-blue-600">Sync</span>
                            </h2>
                            <p className="text-slate-500 font-medium text-lg md:text-xl leading-relaxed mb-12 italic">
                                We eliminated the middleman. By operating both a massive raw material godown and a high-tech fabrication unit, we ensure your components are made from the highest quality steel at mill rates.
                            </p>

                            <div className="grid gap-6">
                                <div className="flex gap-8 p-10 bg-white rounded-[3rem] border border-gray-100 shadow-sm group hover:border-blue-600 transition-all">
                                    <div className="p-5 bg-blue-50 text-blue-600 rounded-3xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        <Settings size={32} />
                                    </div>
                                    <div>
                                        <h4 className="font-black uppercase text-slate-900 text-lg">Unit I: Manufacturing</h4>
                                        <p className="text-[10px] font-bold text-gray-400 mt-2 uppercase tracking-widest leading-loose">
                                            Vasai Phata | CNC Laser Cutting, Bending, Precision Stamping, Pressing, Welding, Shearing & <br className="hidden md:block" />Automated Powder Coating Hub.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-8 p-10 bg-white rounded-[3rem] border border-gray-100 shadow-sm group hover:border-blue-600 transition-all">
                                    <div className="p-5 bg-slate-100 text-slate-900 rounded-3xl group-hover:bg-slate-900 group-hover:text-white transition-all">
                                        <Warehouse size={32} />
                                    </div>
                                    <div>
                                        <h4 className="font-black uppercase text-slate-900 text-lg">Unit II: Logistics</h4>
                                        <p className="text-[10px] font-bold text-gray-400 mt-2 uppercase tracking-widest leading-loose">
                                            Dhumal Nagar | Bulk Coil Storage, Decoil & Cut-to-Length <br className="hidden md:block" />Heavy-Duty Weighbridge Hub.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Proof */}
                        <div className="relative h-[600px] rounded-[4rem] overflow-hidden shadow-2xl group border-8 border-white">

                            <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-1000">
                                <div className="relative h-[600px] rounded-[3rem] overflow-hidden group">
                                    <Image src="/press2.webp" alt="Heavy Stamping Press"
                                        fill className="object-cover  shadow-2xl" />
                                    <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>

                                </div>
                            </div>
                            <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/90 backdrop-blur rounded-3xl border border-gray-100 shadow-xl">
                                <div className="flex items-center gap-4 mb-2">
                                    <CheckCircle2 className="text-blue-600" size={20} />
                                    <span className="text-sm font-black uppercase tracking-widest text-slate-900 italic">Verified Infrastructure</span>
                                </div>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter leading-relaxed">
                                    Our integrated facility allows for 15-minute dispatch readiness to NH-48 Express Highway.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. COMPLIANCE FOOTNOTE */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="p-10 bg-white rounded-[3rem] border-2 border-slate-900 shadow-xl flex flex-col md:flex-row gap-10 items-center">
                    <div className="shrink-0 p-6 bg-slate-900 text-white rounded-[2.5rem]">
                        <Info size={48} className="animate-pulse" />
                    </div>
                    <div>
                        <h3 className="font-black text-2xl mb-4 text-slate-900 uppercase tracking-tight">Compliance & Weighbridge Transparency</h3>
                        <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium italic">
                            Aero Enterprises adheres to strict <strong>HSN 7208 (HR), 7209 (CR), and 7219 (SS)</strong> billing codes. Every transaction is processed through our certified digital weighbridge to ensure 100% weight accuracy. Full MTC traceability is provided for every primary mill order.
                        </p>
                    </div>
                </div>
            </div>

            <CTA
                title="Consolidate Your Supply Chain"
                description="Source mill-certified steel and assembly-ready components from a single technical partner. Bulk tonnage discounts available."
                primaryButtonText="Request Direct RFQ"
                primaryButtonLink="/contact"
                secondaryButtonText="All Services"
                secondaryButtonLink="/services"
            />
        </main>
    );
}