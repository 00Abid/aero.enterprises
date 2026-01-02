'use client';
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AutoBreadcrumbSchema, breadcrumbNameMap } from '../../components/schema/BreadcrumbSchema';

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <>
      {/* Enhanced Breadcrumb Schema */}
      <AutoBreadcrumbSchema pathname={pathname} options={{ baseUrl: 'https://www.aeroenterprises.shop' }} />

      <nav className="bg-white border-b border-gray-100 py-3 md:py-4 px-4 md:px-6 overflow-hidden " aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto relative">

          {/* MOBILE OPTIMIZATION: Scrollable container with hidden scrollbar */}
          <ol className="flex items-center space-x-2 md:space-x-3 text-[9px] md:text-[10px] font-black uppercase tracking-widest overflow-x-auto no-scrollbar whitespace-nowrap scroll-smooth py-1">
            <li className="shrink-0">
              <Link
                href="/"
                className="text-gray-500 hover:text-black transition-colors flex items-center gap-1"
                aria-label="Go to homepage"
              >
                <Home className="w-3 h-3" />
                <span className="hidden xs:inline">Home</span>
              </Link>
            </li>

            {pathnames.map((segment, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;
              const displayName = breadcrumbNameMap[segment] || segment.replace(/-/g, ' ');

              return (
                <li key={segment} className="flex items-center space-x-2 md:space-x-3 shrink-0">
                  <ChevronRight className="w-3 h-3 text-gray-300 shrink-0" />
                  {isLast ? (
                    <span className="text-black font-black" aria-current="page">
                      {displayName}
                    </span>
                  ) : (
                    <Link
                      href={routeTo}
                      className="text-gray-400 hover:text-black transition-colors"
                    >
                      {displayName}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>

          {/* MOBILE FADE INDICATOR (Visual UX) */}
          <div className="absolute right-0 top-0 h-full w-8 bg-linear-to-l from-white to-transparent pointer-events-none md:hidden"></div>
        </div>
      </nav>

      {/* Tailwind Style Bypass for hidden scrollbar */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default Breadcrumb;