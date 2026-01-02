// Service Schema Component
// Provides comprehensive service schema markup for fabrication services

import { generateServiceSchema, stringifySchema } from '../../utils/schemaGenerator.js';
import { withErrorHandling } from '../../utils/schemaErrorHandler.js';

/**
 * Service Schema Component for individual fabrication services
 * @param {Object} props - Component props
 * @param {Object} props.service - Service data object
 * @param {Object} props.options - Additional options for schema generation
 * @returns {JSX.Element} Script tag with Service schema
 */
export default function ServiceSchema({ service, options = {} }) {
  if (!service) {
    console.warn('ServiceSchema: No service data provided');
    return null;
  }

  // Transform service data to match schema generator expectations
  const serviceData = {
    slug: service.slug,
    name: service.title,
    description: service.description,
    serviceType: "Manufacturing Service",
    capabilities: service.capabilities,
    specifications: service.specs?.map(spec => ({
      name: spec.label,
      value: spec.value
    })) || [],
    targetIndustries: service.industries,
    machineryUsed: service.machineryUsed,
    qualityProtocol: service.qualityProtocol
  };

  // Generate service schema with error handling
  const generateSchema = () => {
    return withErrorHandling(
      generateServiceSchema,
      [serviceData, { baseUrl: 'https://www.aeroenterprises.shop', ...options }],
      {
        fallbackType: 'service',
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
 * Enhanced Service Schema with additional structured data
 * @param {Object} props - Component props
 * @param {Object} props.service - Service data object
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Multiple script tags with comprehensive service data
 */
export function EnhancedServiceSchema({ service, options = {} }) {
  if (!service) return null;

  // Generate main service schema
  const mainSchema = generateServiceSchema({
    slug: service.slug,
    name: service.title,
    description: service.description,
    serviceType: "Manufacturing Service",
    capabilities: service.capabilities,
    specifications: service.specs?.map(spec => ({
      name: spec.label,
      value: spec.value
    })) || [],
    targetIndustries: service.industries
  }, { baseUrl: 'https://www.aeroenterprises.shop', ...options });

  // Generate HowTo schema for service process if quality protocol exists
  const howToSchema = service.qualityProtocol && service.qualityProtocol.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `${service.title} Quality Process`,
    "description": `Quality assurance process for ${service.title.toLowerCase()} services`,
    "step": service.qualityProtocol.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": `Step ${index + 1}`,
      "text": step
    }))
  } : null;

  // Generate equipment schema
  const equipmentSchema = service.machineryUsed ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${service.title} Equipment`,
    "description": `Industrial equipment used for ${service.title.toLowerCase()}`,
    "category": "Industrial Machinery",
    "additionalProperty": {
      "@type": "PropertyValue",
      "name": "Equipment Details",
      "value": service.machineryUsed
    },
    "manufacturer": {
      "@type": "Organization",
      "@id": "https://www.aeroenterprises.shop/#organization"
    }
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifySchema(mainSchema) }}
      />
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: stringifySchema(howToSchema) }}
        />
      )}
      {equipmentSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: stringifySchema(equipmentSchema) }}
        />
      )}
    </>
  );
}

/**
 * Service Offer Schema Component
 * Generates detailed offer information for services
 * @param {Object} props - Component props
 * @param {Object} props.service - Service data object
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Script tag with Offer schema
 */
export function ServiceOfferSchema({ service, options = {} }) {
  if (!service) return null;

  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "@id": `https://www.aeroenterprises.shop/services/${service.slug}#offer`,
    "itemOffered": {
      "@type": "Service",
      "@id": `https://www.aeroenterprises.shop/services/${service.slug}`,
      "name": service.title
    },
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "@id": "https://www.aeroenterprises.shop/#organization",
      "name": "Aero Enterprises"
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "Maharashtra"
      },
      {
        "@type": "Country",
        "name": "India"
      }
    ],
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceLocation": {
        "@type": "Place",
        "name": "Unit I - Manufacturing Hub",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Survey No. 109 Richard Compound, Manchipada Road, Vasai Phata, Vasai East, Palghar - 401208.",
          "addressLocality": "Vasai East",
          "addressRegion": "Maharashtra",
          "postalCode": "401208",
          "addressCountry": "IN"
        }
      }
    },
    "deliveryMethod": "https://schema.org/OnSitePickup"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(offerSchema) }}
    />
  );
}

/**
 * Service Capability Schema Component
 * Generates detailed capability information
 * @param {Object} props - Component props
 * @param {Object} props.service - Service data object
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Script tag with capability schema
 */
export function ServiceCapabilitySchema({ service, options = {} }) {
  if (!service || !service.capabilities) return null;

  const capabilitySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${service.title} Capabilities`,
    "description": `Technical capabilities for ${service.title.toLowerCase()} services`,
    "numberOfItems": service.capabilities.length,
    "itemListElement": service.capabilities.map((capability, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Thing",
        "name": capability,
        "description": `${capability} capability provided by Aero Enterprises`
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(capabilitySchema) }}
    />
  );
}