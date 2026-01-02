// WebPage Schema Component
// Provides comprehensive webpage schema markup for all page types

import { generateWebPageSchema, stringifySchema } from '../../utils/schemaGenerator.js';
import { withErrorHandling } from '../../utils/schemaErrorHandler.js';

/**
 * WebPage Schema Component for any page type
 * @param {Object} props - Component props
 * @param {Object} props.pageData - Page information
 * @param {Object} props.options - Additional options for schema generation
 * @returns {JSX.Element} Script tag with WebPage schema
 */
export default function WebPageSchema({ pageData, options = {} }) {
  if (!pageData) {
    console.warn('WebPageSchema: No page data provided');
    return null;
  }

  // Generate webpage schema with error handling
  const generateSchema = () => {
    return withErrorHandling(
      generateWebPageSchema,
      [pageData, { baseUrl: 'https://www.aeroenterprises.shop', ...options }],
      {
        fallbackType: 'webpage',
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
 * Home Page Schema Component
 * Specifically for the home page with enhanced organization data
 * @param {Object} props - Component props
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Script tag with home page schema
 */
export function HomePageSchema({ options = {} }) {
  const pageData = {
    type: 'WebPage',
    url: '/',
    title: 'AERO ENTERPRISES | Industrial Steel Sheets & Coils Supplier Mumbai',
    description: 'Certified suppliers of HR, CR, GI, and SS sheets in Vasai, Maharashtra. Serving Mumbai, Thane, and Palghar with Mill Test Certificates (MTC) and certified digital weighbridge accuracy.',
    mainEntity: {
      "@type": "Organization",
      "@id": "https://www.aeroenterprises.shop/#organization"
    },
    datePublished: "2015-01-01T00:00:00Z",
    dateModified: new Date().toISOString()
  };

  return <WebPageSchema pageData={pageData} options={options} />;
}

/**
 * About Page Schema Component
 * Specifically for the about page
 * @param {Object} props - Component props
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Script tag with about page schema
 */
export function AboutPageSchema({ options = {} }) {
  const pageData = {
    type: 'AboutPage',
    url: '/about',
    title: 'About Aero Enterprises | Integrated Steel Supply & Fabrication Hub',
    description: 'Discover the 36-year legacy of Aero Enterprises. From mill-certified steel distribution to advanced CNC fabrication, stamping, and powder coating in Vasai, Mumbai.',
    mainEntity: {
      "@type": "Organization",
      "@id": "https://www.aeroenterprises.shop/#organization"
    },
    datePublished: "2015-01-01T00:00:00Z",
    dateModified: new Date().toISOString()
  };

  return <WebPageSchema pageData={pageData} options={options} />;
}

/**
 * Contact Page Schema Component
 * Specifically for the contact page
 * @param {Object} props - Component props
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Script tag with contact page schema
 */
export function ContactPageSchema({ options = {} }) {
  const pageData = {
    type: 'ContactPage',
    url: '/contact',
    title: 'Contact Aero Enterprises | Industrial Supply & Fabrication Hub Vasai',
    description: 'Connect with Mumbai\'s integrated hub for steel supply and fabrication. Visit Unit I (Manufacturing) at Vasai Phata or Unit II (Logistics) at Dhumal Nagar.',
    mainEntity: {
      "@type": "Organization",
      "@id": "https://www.aeroenterprises.shop/#organization"
    },
    datePublished: "2015-01-01T00:00:00Z",
    dateModified: new Date().toISOString()
  };

  return <WebPageSchema pageData={pageData} options={options} />;
}

/**
 * Collection Page Schema Component
 * For product and service collection pages
 * @param {Object} props - Component props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} props.url - Page URL
 * @param {Object} props.mainEntity - Main entity for the page
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Script tag with collection page schema
 */
export function CollectionPageSchema({ title, description, url, mainEntity, options = {} }) {
  const pageData = {
    type: 'CollectionPage',
    url,
    title,
    description,
    mainEntity,
    datePublished: "2015-01-01T00:00:00Z",
    dateModified: new Date().toISOString()
  };

  return <WebPageSchema pageData={pageData} options={options} />;
}

/**
 * Item Page Schema Component
 * For individual product and service pages
 * @param {Object} props - Component props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} props.url - Page URL
 * @param {Object} props.mainEntity - Main entity for the page
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Script tag with item page schema
 */
export function ItemPageSchema({ title, description, url, mainEntity, options = {} }) {
  const pageData = {
    type: 'ItemPage',
    url,
    title,
    description,
    mainEntity,
    datePublished: "2015-01-01T00:00:00Z",
    dateModified: new Date().toISOString()
  };

  return <WebPageSchema pageData={pageData} options={options} />;
}

/**
 * Generic Content Page Schema Component
 * For content pages like privacy, terms, etc.
 * @param {Object} props - Component props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} props.url - Page URL
 * @param {string} props.pageType - Type of page (default: 'WebPage')
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Script tag with content page schema
 */
export function ContentPageSchema({ title, description, url, pageType = 'WebPage', options = {} }) {
  const pageData = {
    type: pageType,
    url,
    title,
    description,
    mainEntity: {
      "@type": "Organization",
      "@id": "https://www.aeroenterprises.shop/#organization"
    },
    datePublished: "2015-01-01T00:00:00Z",
    dateModified: new Date().toISOString()
  };

  return <WebPageSchema pageData={pageData} options={options} />;
}

/**
 * Blog Page Schema Component
 * For blog and article pages
 * @param {Object} props - Component props
 * @param {Object} props.article - Article data
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Script tag with blog page schema
 */
export function BlogPageSchema({ article, options = {} }) {
  if (!article) return null;

  const pageData = {
    type: 'WebPage',
    url: `/blog/${article.slug}`,
    title: article.title,
    description: article.description || article.excerpt,
    mainEntity: {
      "@type": "Article",
      "@id": `https://www.aeroenterprises.shop/blog/${article.slug}`,
      "headline": article.title,
      "description": article.description || article.excerpt,
      "author": {
        "@type": "Organization",
        "@id": "https://www.aeroenterprises.shop/#organization"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://www.aeroenterprises.shop/#organization"
      },
      "datePublished": article.datePublished || "2024-01-01T00:00:00Z",
      "dateModified": article.dateModified || new Date().toISOString()
    },
    datePublished: article.datePublished || "2024-01-01T00:00:00Z",
    dateModified: article.dateModified || new Date().toISOString()
  };

  return <WebPageSchema pageData={pageData} options={options} />;
}

/**
 * Enhanced WebPage Schema with additional metadata
 * @param {Object} props - Component props
 * @param {Object} props.pageData - Page information
 * @param {Array} props.breadcrumbs - Breadcrumb navigation
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Multiple script tags with comprehensive page data
 */
export function EnhancedWebPageSchema({ pageData, breadcrumbs, options = {} }) {
  if (!pageData) return null;

  // Add breadcrumbs to page data if provided
  const enhancedPageData = {
    ...pageData,
    breadcrumbs: breadcrumbs || []
  };

  return <WebPageSchema pageData={enhancedPageData} options={options} />;
}