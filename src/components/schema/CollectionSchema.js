// Collection Schema Component
// Provides comprehensive collection page schema markup for product/service listings

import { generateCollectionPageSchema, stringifySchema } from '../../utils/schemaGenerator.js';
import { withErrorHandling } from '../../utils/schemaErrorHandler.js';

/**
 * Collection Schema Component for product/service listings
 * @param {Object} props - Component props
 * @param {Object} props.collectionData - Collection information (title, description, url)
 * @param {Array} props.items - Items in the collection
 * @param {Object} props.options - Additional options for schema generation
 * @returns {JSX.Element} Script tag with CollectionPage schema
 */
export default function CollectionSchema({ collectionData, items = [], options = {} }) {
  if (!collectionData || !items.length) {
    console.warn('CollectionSchema: Missing collection data or items');
    return null;
  }

  // Generate collection schema with error handling
  const generateSchema = () => {
    return withErrorHandling(
      generateCollectionPageSchema,
      [collectionData, items, { baseUrl: 'https://www.aeroenterprises.shop', ...options }],
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
 * Product Collection Schema Component
 * Specifically for product collections with enhanced product data
 * @param {Object} props - Component props
 * @param {Array} props.products - Array of product objects
 * @param {string} props.title - Collection title
 * @param {string} props.description - Collection description
 * @param {string} props.url - Collection URL
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Script tag with enhanced product collection schema
 */
export function ProductCollectionSchema({ products = [], title, description, url, options = {} }) {
  if (!products.length) return null;

  const collectionData = { title, description, url };
  
  const items = products.map(product => ({
    type: 'Product',
    name: product.type || product.name,
    description: product.description,
    url: `/products/${product.slug}`,
    image: product.img || product.image,
    category: product.category,
    brand: 'Aero Enterprises',
    manufacturer: 'Aero Enterprises',
    additionalProperties: {
      stockStatus: product.stock_status,
      price: product.price_avg_inr,
      minThickness: product.min_thickness_mm,
      maxThickness: product.max_thickness_mm
    }
  }));

  return <CollectionSchema collectionData={collectionData} items={items} options={options} />;
}

/**
 * Service Collection Schema Component
 * Specifically for service collections
 * @param {Object} props - Component props
 * @param {Array} props.services - Array of service objects
 * @param {string} props.title - Collection title
 * @param {string} props.description - Collection description
 * @param {string} props.url - Collection URL
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Script tag with service collection schema
 */
export function ServiceCollectionSchema({ services = [], title, description, url, options = {} }) {
  if (!services.length) return null;

  const collectionData = { title, description, url };
  
  const items = services.map(service => ({
    type: 'Service',
    name: service.name || service.title,
    description: service.description,
    url: `/services/${service.slug}`,
    image: service.img || service.image,
    category: service.category,
    provider: 'Aero Enterprises',
    serviceType: service.serviceType || 'Manufacturing Service'
  }));

  return <CollectionSchema collectionData={collectionData} items={items} options={options} />;
}

/**
 * Category Collection Schema Component
 * For category-specific product/service listings
 * @param {Object} props - Component props
 * @param {string} props.categoryName - Name of the category
 * @param {Array} props.items - Items in the category
 * @param {string} props.itemType - Type of items ('Product' or 'Service')
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Script tag with category collection schema
 */
export function CategoryCollectionSchema({ categoryName, items = [], itemType = 'Product', options = {} }) {
  if (!categoryName || !items.length) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${categoryName} ${itemType}s`,
    "description": `Complete range of ${categoryName.toLowerCase()} ${itemType.toLowerCase()}s from Aero Enterprises`,
    "numberOfItems": items.length,
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": itemType,
        "@id": `https://www.aeroenterprises.shop/${itemType.toLowerCase()}s/${item.slug}`,
        "name": item.name || item.type,
        "description": item.description,
        "image": item.img ? `https://www.aeroenterprises.shop${item.img}` : undefined,
        "category": item.category,
        ...(itemType === 'Product' ? {
          "brand": {
            "@type": "Brand",
            "name": "Aero Enterprises"
          },
          "manufacturer": {
            "@type": "Organization",
            "@id": "https://www.aeroenterprises.shop/#organization"
          }
        } : {
          "provider": {
            "@type": "Organization",
            "@id": "https://www.aeroenterprises.shop/#organization"
          }
        })
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(schema) }}
    />
  );
}

/**
 * Multi-Category Collection Schema Component
 * Generates schemas for multiple categories within a collection
 * @param {Object} props - Component props
 * @param {Object} props.categorizedItems - Object with category names as keys and item arrays as values
 * @param {string} props.itemType - Type of items ('Product' or 'Service')
 * @param {Object} props.options - Additional options
 * @returns {JSX.Element} Multiple script tags for each category
 */
export function MultiCategoryCollectionSchema({ categorizedItems = {}, itemType = 'Product', options = {} }) {
  const categories = Object.keys(categorizedItems);
  
  if (!categories.length) return null;

  return (
    <>
      {categories.map((category, index) => (
        <CategoryCollectionSchema
          key={index}
          categoryName={category}
          items={categorizedItems[category]}
          itemType={itemType}
          options={options}
        />
      ))}
    </>
  );
}