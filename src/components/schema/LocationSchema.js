// Location Schema Component
// Provides comprehensive location schema markup for business facilities

import { generateLocalBusinessSchema, stringifySchema } from '../../utils/schemaGenerator.js';
import { withErrorHandling } from '../../utils/schemaErrorHandler.js';
import { organizationData, locationsData } from '../../data/schemaData.js';

/**
 * Location Schema Component for individual facilities
 * @param {Object} props - Component props
 * @param {Object} props.location - Location data object
 * @param {Object} props.options - Additional options for schema generation
 * @returns {JSX.Element} Script tag with Place schema
 */
export default function LocationSchema({ location, options = {} }) {
  if (!location) {
    console.warn('LocationSchema: No location data provided');
    return null;
  }

  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `https://www.aeroenterprises.shop/locations/${location.name.toLowerCase().replace(/\s+/g, '-')}`,
    "name": location.name,
    "description": location.description,
    "address": location.address,
    "geo": location.geo,
    "telephone": location.telephone,
    "openingHours": location.openingHours,
    "containedInPlace": {
      "@type": "City",
      "name": location.address.addressLocality,
      "containedInPlace": {
        "@type": "State",
        "name": location.address.addressRegion,
        "containedInPlace": {
          "@type": "Country",
          "name": "India"
        }
      }
    },
    "hasMap": `https://maps.google.com/?q=${location.geo.latitude},${location.geo.longitude}`,
    "additionalProperty": location.specialCapabilities?.map(capability => ({
      "@type": "PropertyValue",
      "name": "Capability",
      "value": capability
    })) || [],
    "photo": location.image ? {
      "@type": "ImageObject",
      "url": `https://www.aeroenterprises.shop${location.image}`,
      "caption": `${location.name} facility`
    } : undefined
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(locationSchema) }}
    />
  );
}

/**
 * Manufacturing Facility Schema Component
 * Specifically for Unit I (Manufacturing Hub)
 * @param {Object} props - Component props
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Script tag with manufacturing facility schema
 */
export function ManufacturingFacilitySchema({ options = {} }) {
  const manufacturingLocation = locationsData.find(loc => loc.name.includes("Manufacturing"));
  
  if (!manufacturingLocation) return null;

  const facilitySchema = {
    "@context": "https://schema.org",
    "@type": ["Place", "Factory"],
    "@id": "https://www.aeroenterprises.shop/#manufacturing-facility",
    "name": manufacturingLocation.name,
    "alternateName": "Unit I - Vasai Phata Manufacturing Hub",
    "description": manufacturingLocation.description,
    "address": manufacturingLocation.address,
    "geo": manufacturingLocation.geo,
    "telephone": manufacturingLocation.telephone,
    "openingHours": manufacturingLocation.openingHours,
    "parentOrganization": {
      "@type": "Organization",
      "@id": "https://www.aeroenterprises.shop/#organization"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Manufacturing Services",
      "itemListElement": manufacturingLocation.specialCapabilities?.map(capability => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": capability,
          "serviceType": "Manufacturing Service"
        }
      })) || []
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "CNC Equipment",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification", 
        "name": "Powder Coating Facility",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Quality Control Lab",
        "value": true
      }
    ],
    "hasMap": `https://maps.google.com/?q=${manufacturingLocation.geo.latitude},${manufacturingLocation.geo.longitude}`
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(facilitySchema) }}
    />
  );
}

/**
 * Logistics Facility Schema Component
 * Specifically for Unit II (Logistics Hub)
 * @param {Object} props - Component props
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Script tag with logistics facility schema
 */
export function LogisticsFacilitySchema({ options = {} }) {
  const logisticsLocation = locationsData.find(loc => loc.name.includes("Logistics"));
  
  if (!logisticsLocation) return null;

  const facilitySchema = {
    "@context": "https://schema.org",
    "@type": ["Place", "Warehouse"],
    "@id": "https://www.aeroenterprises.shop/#logistics-facility",
    "name": logisticsLocation.name,
    "alternateName": "Unit II - Dhumal Nagar Logistics Hub",
    "description": logisticsLocation.description,
    "address": logisticsLocation.address,
    "geo": logisticsLocation.geo,
    "telephone": logisticsLocation.telephone,
    "openingHours": logisticsLocation.openingHours,
    "parentOrganization": {
      "@type": "Organization",
      "@id": "https://www.aeroenterprises.shop/#organization"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Logistics Services",
      "itemListElement": logisticsLocation.specialCapabilities?.map(capability => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": capability,
          "serviceType": "Logistics Service"
        }
      })) || []
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Digital Weighbridge",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Bulk Storage Capacity",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Loading Dock",
        "value": true
      }
    ],
    "hasMap": `https://maps.google.com/?q=${logisticsLocation.geo.latitude},${logisticsLocation.geo.longitude}`
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(facilitySchema) }}
    />
  );
}

/**
 * Service Area Schema Component
 * Defines the geographic service coverage
 * @param {Object} props - Component props
 * @param {Array} props.serviceAreas - Array of service area names
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Script tag with service area schema
 */
export function ServiceAreaSchema({ serviceAreas, options = {} }) {
  const defaultServiceAreas = [
    "Mumbai", "Thane", "Palghar", "Vasai", "Virar", "Nalasopara", 
    "Navi Mumbai", "Pune", "Nashik", "Aurangabad"
  ];

  const areas = serviceAreas || defaultServiceAreas;

  const serviceAreaSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.aeroenterprises.shop/#organization",
    "areaServed": areas.map(area => ({
      "@type": "City",
      "name": area,
      "containedInPlace": {
        "@type": "State",
        "name": "Maharashtra",
        "containedInPlace": {
          "@type": "Country",
          "name": "India"
        }
      }
    })),
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 19.4667,
        "longitude": 72.8167
      },
      "geoRadius": "100000"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(serviceAreaSchema) }}
    />
  );
}

/**
 * Geographic Coverage Schema Component
 * Provides detailed geographic service information
 * @param {Object} props - Component props
 * @param {Object} props.coverage - Geographic coverage data
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Script tag with geographic coverage schema
 */
export function GeographicCoverageSchema({ coverage, options = {} }) {
  const defaultCoverage = {
    primary: {
      name: "Mumbai Metropolitan Region",
      radius: 50,
      center: { latitude: 19.4667, longitude: 72.8167 }
    },
    secondary: {
      name: "Maharashtra State",
      radius: 500,
      center: { latitude: 19.7515, longitude: 75.7139 }
    },
    delivery: {
      name: "Pan-India",
      areas: ["Delhi", "Bangalore", "Chennai", "Hyderabad", "Ahmedabad", "Pune"]
    }
  };

  const geo = coverage || defaultCoverage;

  const coverageSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.aeroenterprises.shop/#organization",
    "areaServed": [
      {
        "@type": "GeoCircle",
        "name": geo.primary.name,
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": geo.primary.center.latitude,
          "longitude": geo.primary.center.longitude
        },
        "geoRadius": `${geo.primary.radius * 1000}`
      },
      {
        "@type": "State",
        "name": "Maharashtra",
        "containedInPlace": {
          "@type": "Country",
          "name": "India"
        }
      },
      ...geo.delivery.areas.map(area => ({
        "@type": "City",
        "name": area,
        "containedInPlace": {
          "@type": "Country",
          "name": "India"
        }
      }))
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(coverageSchema) }}
    />
  );
}

/**
 * Facility Capabilities Schema Component
 * Details the specific capabilities of each facility
 * @param {Object} props - Component props
 * @param {Object} props.facility - Facility information
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Script tag with facility capabilities schema
 */
export function FacilityCapabilitiesSchema({ facility, options = {} }) {
  if (!facility) return null;

  const capabilitiesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${facility.name} Capabilities`,
    "description": `Technical capabilities and services available at ${facility.name}`,
    "numberOfItems": facility.capabilities?.length || 0,
    "itemListElement": facility.capabilities?.map((capability, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": capability,
        "provider": {
          "@type": "Organization",
          "@id": "https://www.aeroenterprises.shop/#organization"
        },
        "availableAtLocation": {
          "@type": "Place",
          "name": facility.name,
          "address": facility.address
        }
      }
    })) || []
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(capabilitiesSchema) }}
    />
  );
}

/**
 * Comprehensive Location Schema Component
 * Combines all location-related schemas
 * @param {Object} props - Component props
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Multiple script tags with comprehensive location data
 */
export function ComprehensiveLocationSchema({ options = {} }) {
  return (
    <>
      <ManufacturingFacilitySchema options={options} />
      <LogisticsFacilitySchema options={options} />
      <ServiceAreaSchema options={options} />
      <GeographicCoverageSchema options={options} />
      {locationsData.map((location, index) => (
        <FacilityCapabilitiesSchema 
          key={index}
          facility={{
            name: location.name,
            address: location.address,
            capabilities: location.specialCapabilities
          }}
          options={options}
        />
      ))}
    </>
  );
}