// Contact Schema Component
// Provides comprehensive contact schema markup for contact information

import { generateContactPageSchema, stringifySchema } from '../../utils/schemaGenerator.js';
import { withErrorHandling } from '../../utils/schemaErrorHandler.js';
import { organizationData, contactPoints, locationsData } from '../../data/schemaData.js';

/**
 * Contact Schema Component
 * @param {Object} props - Component props
 * @param {Object} props.options - Additional options for schema generation
 * @returns {JSX.Element} Script tag with ContactPage schema
 */
export default function ContactSchema({ options = {} }) {
  // Generate contact schema with error handling
  const generateSchema = () => {
    return withErrorHandling(
      generateContactPageSchema,
      [{ baseUrl: 'https://www.aeroenterprises.shop', ...options }],
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
 * Enhanced Contact Schema with detailed contact information
 * @param {Object} props - Component props
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Script tag with enhanced contact schema
 */
export function EnhancedContactSchema({ options = {} }) {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://www.aeroenterprises.shop/contact",
    "name": "Contact Aero Enterprises",
    "description": "Get in touch with Aero Enterprises for steel supply and fabrication services. Multiple contact methods and facility locations available.",
    "url": "https://www.aeroenterprises.shop/contact",
    "mainEntity": {
      "@type": "Organization",
      "@id": "https://www.aeroenterprises.shop/#organization",
      "name": organizationData.name,
      "contactPoint": contactPoints,
      "location": locationsData.map(location => ({
        "@type": "Place",
        "name": location.name,
        "description": location.description,
        "address": location.address,
        "geo": location.geo,
        "telephone": location.telephone,
        "openingHours": location.openingHours
      }))
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.aeroenterprises.shop/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": "https://www.aeroenterprises.shop/contact"
        }
      ]
    },
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.aeroenterprises.shop/#website"
    },
    "inLanguage": "en-IN",
    "datePublished": "2015-01-01T00:00:00Z",
    "dateModified": new Date().toISOString()
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(contactSchema) }}
    />
  );
}

/**
 * Contact Point Schema Component
 * Generates detailed contact point information
 * @param {Object} props - Component props
 * @param {Array} props.contactMethods - Array of contact methods
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Script tag with contact point schema
 */
export function ContactPointSchema({ contactMethods = [], options = {} }) {
  if (!contactMethods.length) {
    // Use default contact points from schema data
    contactMethods = contactPoints;
  }

  const contactPointSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.aeroenterprises.shop/#organization",
    "contactPoint": contactMethods.map(contact => ({
      "@type": "ContactPoint",
      "telephone": contact.telephone,
      "contactType": contact.contactType,
      "availableLanguage": contact.availableLanguage,
      "hoursAvailable": contact.hoursAvailable,
      "areaServed": contact.areaServed,
      "email": contact.email || organizationData.email
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(contactPointSchema) }}
    />
  );
}

/**
 * Business Hours Schema Component
 * Generates detailed business hours information
 * @param {Object} props - Component props
 * @param {Object} props.hours - Business hours object
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Script tag with business hours schema
 */
export function BusinessHoursSchema({ hours, options = {} }) {
  const defaultHours = {
    monday: "08:00-18:00",
    tuesday: "08:00-18:00", 
    wednesday: "08:00-18:00",
    thursday: "08:00-18:00",
    friday: "08:00-18:00",
    saturday: "08:00-18:00",
    sunday: "closed"
  };

  const businessHours = hours || defaultHours;

  const hoursSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.aeroenterprises.shop/#organization",
    "openingHoursSpecification": Object.entries(businessHours).map(([day, time]) => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": `https://schema.org/${day.charAt(0).toUpperCase() + day.slice(1)}`,
      "opens": time === "closed" ? null : time.split('-')[0],
      "closes": time === "closed" ? null : time.split('-')[1]
    })).filter(spec => spec.opens && spec.closes)
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(hoursSchema) }}
    />
  );
}

/**
 * Multi-Location Contact Schema Component
 * Generates contact schema for multiple business locations
 * @param {Object} props - Component props
 * @param {Array} props.locations - Array of location objects
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Multiple script tags for each location
 */
export function MultiLocationContactSchema({ locations, options = {} }) {
  const businessLocations = locations || locationsData;

  return (
    <>
      {businessLocations.map((location, index) => {
        const locationSchema = {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `https://www.aeroenterprises.shop/#${location.name.toLowerCase().replace(/\s+/g, '-')}`,
          "name": `${organizationData.name} - ${location.name}`,
          "description": location.description,
          "address": location.address,
          "geo": location.geo,
          "telephone": location.telephone,
          "openingHours": location.openingHours,
          "parentOrganization": {
            "@type": "Organization",
            "@id": "https://www.aeroenterprises.shop/#organization"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": location.telephone,
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi", "Marathi"]
          },
          "hasMap": `https://maps.google.com/?q=${location.geo.latitude},${location.geo.longitude}`,
          "additionalProperty": location.specialCapabilities?.map(capability => ({
            "@type": "PropertyValue",
            "name": "Capability",
            "value": capability
          })) || []
        };

        return (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: stringifySchema(locationSchema) }}
          />
        );
      })}
    </>
  );
}

/**
 * Contact Form Schema Component
 * Generates schema for contact forms and inquiries
 * @param {Object} props - Component props
 * @param {Object} props.formData - Contact form information
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Script tag with contact form schema
 */
export function ContactFormSchema({ formData, options = {} }) {
  const defaultFormData = {
    name: "Contact Form",
    description: "Get in touch with Aero Enterprises for steel supply and fabrication inquiries",
    url: "https://www.aeroenterprises.shop/contact"
  };

  const form = formData || defaultFormData;

  const formSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${form.url}#contact-form`,
    "name": form.name,
    "description": form.description,
    "mainEntity": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi", "Marathi"],
      "areaServed": {
        "@type": "Country",
        "name": "India"
      }
    },
    "potentialAction": {
      "@type": "CommunicateAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": form.url,
        "actionPlatform": [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform"
        ]
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(formSchema) }}
    />
  );
}

/**
 * Comprehensive Contact Schema Component
 * Combines all contact-related schemas
 * @param {Object} props - Component props
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Multiple script tags with comprehensive contact data
 */
export function ComprehensiveContactSchema({ options = {} }) {
  return (
    <>
      <EnhancedContactSchema options={options} />
      <ContactPointSchema options={options} />
      <BusinessHoursSchema options={options} />
      <MultiLocationContactSchema options={options} />
      <ContactFormSchema options={options} />
    </>
  );
}