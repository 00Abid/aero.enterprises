import React from 'react';
import {
    Settings, Gauge, Zap, Hammer, ShieldCheck,
    Warehouse, Truck, Ruler, Factory, CheckCircle2, MapPin,
    Paintbrush, Thermometer, Tool, Crosshair, Cpu, BarChart
} from 'lucide-react';
import Image from 'next/image';
import CTA from '../components/CTA';

export const metadata = {
    title: "Machinery & Production Capacity | Aero Enterprises Vasai",
    description: "Technical breakdown of Aero Enterprises production facility. Featuring 150-ton power presses, a conveyorized 7-tank powder coating unit, and CNC laser cutting infrastructure.",
    keywords: ["150 ton power press Vasai", "7 tank powder coating Mumbai", "CNC bending capacity", "sheet metal tool room"],
};

// Data Structures for the detailed lists
const powerPresses = [
    { tonnage: "150 TON", count: "1 nos" },
    { tonnage: "100 TON", count: "1 nos" },
    { tonnage: "75 TON", count: "1 nos" },
    { tonnage: "60 TON", count: "1 nos" },
    { tonnage: "50 TON", count: "2 nos" },
    { tonnage: "30 TON", count: "1 nos" },
    { tonnage: "20 TON", count: "4 nos" },
    { tonnage: "10 TON", count: "7 nos" },
];

const powderCoating = [
    { item: "PAINTING BOOTH", spec: "Industrial Extraction System", qty: "2 nos" },
    { item: "OVEN 1 (Large Batch)", spec: "4 x 5 x 6 Ft Capacity", qty: "1 nos" },
    { item: "OVEN 2 (Deep Batch)", spec: "4 x 8 x 4 Ft Capacity", qty: "1 nos" },
    { item: "7-TANK PRE-TREATMENT", spec: "1000 Lt. Capacity / Tank", qty: "7 nos" },
];

const toolRoom = [
    { machine: "SURFACE GRINDER", qty: "1 nos" },
    { machine: "TAPPING MACHINE", qty: "3 nos" },
    { machine: "DRILL PRESS", qty: "1 nos" },
    { machine: "SHEARING MACHINE", qty: "1 nos" },
    { machine: "ARC WELDING UNIT", qty: "2 nos" },
    { machine: "HYDRAULIC HAND SHEAR", qty: "1 nos" },
];

export default function MachineryPage() {
    return (
        <main className="bg-white font-sans text-slate-900">
            {/* 1. HERO: TECHNICAL AUTHORITY */}
            <div className='bg-slate-900 w-full h-[50vh] flex justify-center items-center text-center px-6 relative overflow-hidden'>
                <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
                <div className="relative z-10">
                    <div className="mb-4 inline-flex items-center gap-2 bg-blue-600 px-4 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em]">
                        Unit I & Unit II Infrastructure
                    </div>
                    <h1 className="text-5xl md:text-8xl text-white font-black uppercase tracking-tighter leading-none mb-4">
                        Plant <span className="text-blue-500 text-outline">Capacity</span>
                    </h1>
                    <p className='text-blue-100 text-lg md:text-xl font-medium max-w-3xl mx-auto uppercase tracking-widest'>
                        High-Volume Stamping | CNC Processing | Automated Finishing
                    </p>
                </div>
            </div>

            {/* 2. SECTION: POWER PRESS UNIT */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-16 items-start">
                    <div className="lg:col-span-1 sticky top-32">
                        <div className="flex items-center gap-3 text-blue-600 mb-6 font-black uppercase tracking-widest text-xs">
                            <Hammer size={20} /> Stamping Division
                        </div>
                        <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 leading-none">
                            Power Press <br />Line-Up
                        </h2>
                        <p className="text-gray-600 font-medium leading-relaxed mb-8">
                            Equipped with a diverse range of mechanical and hydraulic power presses, we handle everything from heavy-gauge structural stamping to high-speed precision hardware components.
                        </p>
                        <div className="p-8 bg-blue-600 rounded-3xl text-white shadow-xl shadow-blue-200">
                            <div className="text-4xl font-black mb-2 italic">18+</div>
                            <div className="text-[10px] font-black uppercase tracking-widest opacity-80">Total Operational Presses</div>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {powerPresses.map((p, i) => (
                                <div key={i} className="flex items-center justify-between p-6 bg-slate-50 border border-slate-100 rounded-2xl group hover:bg-slate-900 hover:text-white transition-all duration-300">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            <Gauge size={18} />
                                        </div>
                                        <span className="font-black text-xl tracking-tighter uppercase">{p.tonnage}</span>
                                    </div>
                                    <span className="text-xs font-black uppercase tracking-widest text-blue-600 group-hover:text-blue-400">{p.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* 3. SECTION: POWDER COATING UNIT */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center mb-20">
                        <div className="lg:w-1/2">
                            <div className="flex items-center gap-3 text-blue-400 mb-6 font-black uppercase tracking-widest text-xs">
                                <Paintbrush size={20} /> Finishing Division
                            </div>
                            <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none">
                                Industrial <br /><span className="text-blue-500">Powder Coating</span>
                            </h2>
                            <p className="text-blue-100/60 text-lg font-medium leading-relaxed">
                                Our integrated finishing line features a full 7-tank pre-treatment process to ensure maximum paint adhesion and corrosion resistance for parts up to 8 feet in length.
                            </p>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
                                <div className="text-3xl font-black text-blue-400 mb-1">1000L</div>
                                <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Tank Capacity</div>
                            </div>
                            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
                                <div className="text-3xl font-black text-blue-400 mb-1">7 STAGE</div>
                                <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Pre-Treatment</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {powderCoating.map((pc, i) => (
                            <div key={i} className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 hover:border-blue-500 transition-all group">
                                <div className="flex justify-between items-start mb-6">
                                    <h4 className="font-black text-lg uppercase tracking-tight leading-none text-white group-hover:text-blue-400 transition-colors">{pc.item}</h4>
                                    <span className="text-[10px] font-black bg-blue-600 px-3 py-1 rounded-full">{pc.qty}</span>
                                </div>
                                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">{pc.spec}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* 4. SECTION: TOOL ROOM & PRECISION CNC */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20">
                    {/* Tool Room List */}
                    <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 shadow-inner">
                        <div className="flex items-center gap-3 text-blue-600 mb-8 font-black uppercase tracking-widest text-xs">
                            <Crosshair size={20} /> Specialized Tool Room
                        </div>
                        <h3 className="text-3xl font-black uppercase tracking-tighter mb-10">Secondary <br />Operations</h3>
                        <div className="space-y-4">
                            {toolRoom.map((t, i) => (
                                <div key={i} className="flex justify-between items-center py-4 border-b border-slate-200">
                                    <span className="font-black text-sm uppercase tracking-tight text-slate-700">{t.machine}</span>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.qty}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CNC Capabilities */}
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-3 text-blue-600 mb-8 font-black uppercase tracking-widest text-xs">
                            <Cpu size={20} /> Digital Infrastructure
                        </div>
                        <h3 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-tight">CNC Laser & <br />Bending Unit</h3>
                        <p className="text-gray-600 text-lg font-medium leading-relaxed mb-12">
                            Our heavy-duty CNC infrastructure allows for zero-defect profile cutting and precision bending, ensuring that your parts are ready for seamless assembly.
                        </p>
                        <div className="grid grid-cols-1 gap-6">
                            <div className="flex gap-6 p-8 bg-slate-900 rounded-3xl text-white group hover:bg-blue-600 transition-all duration-500">
                                <Zap className="text-blue-400 group-hover:text-white shrink-0" size={32} />
                                <div>
                                    <h4 className="font-black uppercase text-lg tracking-tight">CNC Laser Cutting</h4>
                                    <p className="text-blue-100/50 text-xs font-bold uppercase tracking-widest mt-1">High-Speed Profiling (MS/SS/GI)</p>
                                </div>
                            </div>
                            <div className="flex gap-6 p-8 bg-slate-900 rounded-3xl text-white group hover:bg-blue-600 transition-all duration-500">
                                <Settings className="text-blue-400 group-hover:text-white shrink-0" size={32} />
                                <div>
                                    <h4 className="font-black uppercase text-lg tracking-tight">CNC Multi-Axis Bending</h4>
                                    <p className="text-blue-100/50 text-xs font-bold uppercase tracking-widest mt-1">±0.5 Degree Angle Precision</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. TECHNICAL TRUST SIGNALS */}
            <section className="py-24 bg-slate-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
                    <div>
                        <ShieldCheck className="mx-auto mb-6 text-blue-600" size={40} />
                        <h4 className="font-black uppercase text-sm text-slate-900">Periodic Maintenance</h4>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">Certified for High Precision</p>
                    </div>
                    <div>
                        <BarChart className="mx-auto mb-6 text-blue-600" size={40} />
                        <h4 className="font-black uppercase text-sm text-slate-900">Digital Weighbridge</h4>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">Daily Calibration Protocol</p>
                    </div>
                    <div>
                        <CheckCircle2 className="mx-auto mb-6 text-blue-600" size={40} />
                        <h4 className="font-black uppercase text-sm text-slate-900">ISO Standard Process</h4>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">Zero-Defect Quality Control</p>
                    </div>
                </div>
            </section>

            <CTA
                title="Consolidate Your Procurement"
                description="Why deal with multiple vendors for material and fabrication? Audit our technical infrastructure in Vasai Phata today."
                primaryButtonText="Request Factory Visit"
                primaryButtonLink="/contact"
                secondaryButtonText="Explore Products"
                secondaryButtonLink="/products"
            />
        </main>
    );
}
