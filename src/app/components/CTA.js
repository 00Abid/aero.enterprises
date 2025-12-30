import Link from 'next/link'
import React from 'react'

const CTA = (props) => {
    const {
        title,
        description,
        primaryButtonText,
        secondaryButtonText,
        primaryButtonLink,
        secondaryButtonLink,
        isPrimaryDownload
    } = props;

    // ELITE UI: Higher contrast and better padding for industrial B2B users
    const primaryButtonClass = "dark-metal-card px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm text-white transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center";
    const secondaryButtonClass = "bg-white text-slate-900 px-8 py-4 rounded-4xl font-black uppercase tracking-widest text-sm border-2 border-transparent hover:border-white hover:bg-transparent hover:text-white transition-all flex items-center justify-center";

    return (
        <section className="text-center py-20 px-6">
            <div className="inline-block blue-metal-card p-10 md:p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden max-w-5xl" data-aos="zoom-in-up">

                {/* Visual Background Element for Authority Look */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -mr-16 -mt-16 rounded-full"></div>

                <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-tight">
                    {title}
                </h3>

                <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                    {description}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">

                    {/* 1. PRIMARY ACTION: DOWNLOAD OR EXTERNAL RFQ */}
                    <a
                        href={primaryButtonLink}
                        className={primaryButtonClass}
                        aria-label={`${primaryButtonText} - Aero Enterprises`}
                        {...(isPrimaryDownload ? { download: true, target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                        {primaryButtonText}
                    </a>

                    <Link
                        href={secondaryButtonLink}
                        className={secondaryButtonClass}
                        aria-label={secondaryButtonText}
                    >
                        {secondaryButtonText}
                    </Link>

                </div>

                {/* TRUST SIGNAL: Small micro-text below buttons */}
                <p className="mt-8 text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">
                    Mill Test Certificates (MTC) Available Upon Request
                </p>
            </div>
        </section>
    )
}

export default CTA