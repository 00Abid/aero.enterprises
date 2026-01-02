// LocalBusiness Schema Component
// Provides facility-specific schema markup for manufacturing units

import { generateLocalBusinessSchema, stringifySchema } from '../../utils/schemaGenerator.js';
import { withErrorHandling } from '../../utils/schemaErrorHandler.js';

/**
 * LocalBusiness Schema Component
 * @param {Object} props - Component props
 * @param {string} props.locationName - Name of the location (Unit I or Unit II)
 * @param {Object} props.options - Additional options for schema generation
 * @returns {JSX.Element} Script tag with LocalBusiness schema
 */
export default function LocalBusinessSchema({ locationName = "Unit I", options = {} }) {
  // Generate local business schema with error handling
  const generateSchema = () => {
    return withErrorHandling(
      generateLocalBusinessSchema,
      [locationName, { baseUrl: 'https://www.aeroenterprises.shop', ...options }],
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
 * Dual Facility Schema Component
 * Renders schema for both manufacturing units
 * @param {Object} props - Component props
 * @param {Object} props.options - Additional options for schema generation
 * @returns {JSX.Element} Script tags for both facilities
 */
export function DualFacilitySchema({ options = {} }) {
  return (
    <>
      <LocalBusinessSchema locationName="Unit I" options={options} />
      <LocalBusinessSchema locationName="Unit II" options={options} />
    </>
  );
}

/**
 * Manufacturing Hub Schema Component
 * Specifically for Unit I (Manufacturing Hub)
 * @param {Object} props - Component props
 * @param {Object} props.options - Additional options for schema generation
 * @returns {JSX.Element} Script tag with manufacturing facility schema
 */
export function ManufacturingHubSchema({ options = {} }) {
  return <LocalBusinessSchema locationName="Unit I" options={options} />;
}

/**
 * Logistics Hub Schema Component  
 * Specifically for Unit II (Logistics Hub)
 * @param {Object} props - Component props
 * @param {Object} props.options - Additional options for schema generation
 * @returns {JSX.Element} Script tag with logistics facility schema
 */
export function LogisticsHubSchema({ options = {} }) {
  return <LocalBusinessSchema locationName="Unit II" options={options} />;
}