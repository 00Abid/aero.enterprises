// Breadcrumb Schema Component
// Provides comprehensive breadcrumb schema markup for navigation

import { generateBreadcrumbSchema, stringifySchema } from '../../utils/schemaGenerator.js';
import { withErrorHandling } from '../../utils/schemaErrorHandler.js';

/**
 * Breadcrumb Schema Component
 * @param {Object} props - Component props
 * @param {Array} props.breadcrumbs - Array of breadcrumb items
 * @param {Object} props.options - Additional options for schema generation
 * @returns {JSX.Element} Script tag with BreadcrumbList schema
 */
export default function BreadcrumbSchema({ breadcrumbs = [], options = {} }) {
  if (!breadcrumbs.length) {
    console.warn('BreadcrumbSchema: No breadcrumb data provided');
    return null;
  }

  // Generate breadcrumb schema with error handling
  const generateSchema = () => {
    return withErrorHandling(
      generateBreadcrumbSchema,
      [breadcrumbs, { baseUrl: 'https://www.aeroenterprises.shop', ...options }],
      {
        fallbackType: 'organization',
        enableRetry: false,
        sanitizeData: true
      }
    );
  };

  const schema = generateSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(schema) }}
    />
  );
}

/**
 * Enhanced Breadcrumb Name Mapping
 * Provides better display names for different page types
 */
export const breadcrumbNameMap = {
  // Main sections
  'products': 'Steel Products',
  'services': 'Fabrication Services',
  'about': 'About Us',
  'contact': 'Contact',
  'machinery': 'Manufacturing Equipment',
  'testimonials': 'Customer Reviews',
  'blog': 'Industry News',
  'industries': 'Industries Served',
  'privacy': 'Privacy Policy',
  'terms': 'Terms of Service',
  'cookiepolicy': 'Cookie Policy',
  'sitemap': 'Site Map',

  // Product pages
  'hr-coil-supplier-mumbai': 'HR Coil',
  'cr-coil-supplier-mumbai': 'CR Coil',
  'gi-coil-supplier-mumbai': 'GI Coil',
  'ss-coil-supplier-mumbai': 'SS Coil',
  'crc-sheet-supplier-mumbai': 'CRC Sheet',
  'hr-sheet-supplier-mumbai': 'HR Sheet',
  'gi-sheet-supplier-mumbai': 'GI Sheet',
  'po-sheet-supplier-mumbai': 'P&O Sheet',
  'ss-sheet-supplier-mumbai': 'SS Sheet',
  'secondary-cr-sheet-supplier-mumbai': 'Secondary CR Sheet',
  'secondary-hr-sheet-supplier-mumbai': 'Secondary HR Sheet',
  'secondary-gi-sheet-supplier-mumbai': 'Secondary GI Sheet',
  'secondary-po-sheet-supplier-mumbai': 'Secondary P&O Sheet',
  'secondary-ss-sheet-supplier-mumbai': 'Secondary SS Sheet',

  // Service pages
  'metal-stamping': 'Metal Stamping',
  'cnc-bending': 'CNC Bending',
  'powder-coating': 'Powder Coating',
  'laser-cutting': 'Laser Cutting',
  'welding': 'Welding Services',
  'shearing-blanking': 'Shearing & Blanking',
  'technical-consultation': 'Technical Consultation',
  'punching-shearing': 'Punching & Shearing'
};

/**
 * Generate breadcrumbs from pathname
 * @param {string} pathname - Current pathname
 * @returns {Array} Array of breadcrumb objects
 */
export function generateBreadcrumbsFromPath(pathname) {
  if (!pathname || pathname === '/') return [];

  const pathnames = pathname.split('/').filter((x) => x);
  const breadcrumbs = [
    { name: 'Home', url: '/' }
  ];

  pathnames.forEach((segment, index) => {
    const url = `/${pathnames.slice(0, index + 1).join('/')}`;
    const name = breadcrumbNameMap[segment] || 
                 segment.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase());
    
    breadcrumbs.push({ name, url });
  });

  return breadcrumbs;
}

/**
 * Auto Breadcrumb Schema Component
 * Automatically generates breadcrumbs from current pathname
 * @param {Object} props - Component props
 * @param {string} props.pathname - Current pathname
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Script tag with BreadcrumbList schema
 */
export function AutoBreadcrumbSchema({ pathname, options = {} }) {
  const breadcrumbs = generateBreadcrumbsFromPath(pathname);
  
  if (!breadcrumbs.length) return null;

  return <BreadcrumbSchema breadcrumbs={breadcrumbs} options={options} />;
}