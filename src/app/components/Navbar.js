'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import { Menu, X, PhoneCall } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // TOP 0.1% SEO: Internal link structure focused on high-intent keywords
    const navItems = [
        { path: "/", label: "Home" },
        { path: "/products", label: "Inventory" }, 
        { path: "/about", label: "Our Legacy" },
        { path: "/services", label: "Fabrication" },
        { path: "/machinery", label: "Machinery" },
        { path: "/testimonials", label: "Reviews" },
    ];

    // Function to handle link clicks (Fixes the setState error)
    const handleLinkClick = () => {
        if (isOpen) setIsOpen(false);
    };

    const activeLinkClass = "text-black font-black";
    const inactiveLinkClass = "text-gray-500 hover:text-black font-bold";

    return (
        <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-100 transition-all border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between h-20 items-center">
                    
                    {/* 1. BRAND ENTITY SIGNAL */}
                    <Link href="/" onClick={handleLinkClick} className="flex items-center group">
                        <Image
                            src="/AE-logo.webp"
                            alt="Aero Enterprises - Industrial Steel Supplier Mumbai"
                            width={120}
                            height={40}
                            className="object-contain group-hover:scale-105 transition-transform w-auto"
                            priority
                        />
                    </Link>

                    {/* 2. DESKTOP NAVIGATION */}
                    <div className="hidden md:flex space-x-10 items-center">
                        {navItems.map((item, i) => {
                            const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
                            
                            return (
                                <Link 
                                    key={i} 
                                    href={item.path} 
                                    className={`${isActive ? activeLinkClass : inactiveLinkClass} text-[11px] uppercase tracking-[0.2em] transition-all relative py-2`}
                                >
                                    {item.label}
                                    <span 
                                        className={`absolute bottom-0 left-0 w-full h-[3px] bg-black transition-transform duration-500 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'}`}
                                    />
                                </Link>
                            );
                        })}

                        <Link 
                            href="/contact" 
                            className="bg-black text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-gray-800 transition-all active:scale-95 shadow-lg"
                        >
                            <PhoneCall size={14} /> Get Quote
                        </Link>
                    </div>

                    {/* 3. MOBILE TOGGLE */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-black focus:outline-none p-2"
                            aria-label="Toggle Navigation Menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* 4. MOBILE DRAWER - Updated with handleLinkClick */}
            <div
                id="mobile-menu"
                className={`fixed inset-x-0 top-20 bg-white shadow-2xl md:hidden transition-all duration-500 ease-in-out border-t border-gray-100 ${isOpen ? "max-h-screen opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4 overflow-hidden"}`}
            >
                <div className="px-6 py-10 space-y-6 flex flex-col items-center text-center">
                    {navItems.map((item, i) => {
                        const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
                        return (
                            <Link
                                key={i}
                                href={item.path}
                                onClick={handleLinkClick}
                                className={`text-xl font-black uppercase tracking-tighter w-full py-2 ${isActive ? "text-black border-b-2 border-black" : "text-gray-400"}`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                    <Link 
                        href="/contact" 
                        onClick={handleLinkClick}
                        className="w-full bg-black text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm flex justify-center items-center gap-3"
                    >
                        Contact Sales <PhoneCall size={18} />
                    </Link>
                </div>
            </div>
        </nav>
    );
}