// Test Setup for Schema Tests
import '@testing-library/jest-dom';

// Mock console methods to avoid noise in tests
global.console = {
  ...console,
  warn: jest.fn(),
  error: jest.fn(),
  log: jest.fn()
};

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn(),
    beforePopState: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
  }),
}));

// Mock Next.js navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    refresh: jest.fn(),
  }),
  useSearchParams: () => new URLSearchParams(),
}));

// Mock Next.js Image component
jest.mock('next/image', () => {
  return function MockImage({ src, alt, ...props }) {
    return <img src={src} alt={alt} {...props} />;
  };
});

// Mock Next.js Link component
jest.mock('next/link', () => {
  return function MockLink({ children, href, ...props }) {
    return <a href={href} {...props}>{children}</a>;
  };
});

// Global test utilities
global.mockProduct = {
  material_slug: 'test-product',
  category: 'Industrial Coil',
  type: 'Test Steel Product',
  material_name: 'Test Steel Product',
  description: 'Test product description',
  img: '/test-image.jpg',
  price_avg_inr: 55000,
  stock_status: 'High Stock'
};

global.mockService = {
  slug: 'test-service',
  title: 'Test Fabrication Service',
  description: 'Test service description',
  capabilities: ['CNC Cutting', 'Welding'],
  industries: ['Automotive', 'Construction']
};

global.mockFAQs = [
  {
    question: 'What is steel?',
    answer: 'Steel is an alloy of iron and carbon.'
  }
];

// Schema validation helpers
global.validateJSONLD = (schemaString) => {
  try {
    const schema = JSON.parse(schemaString);
    return {
      isValid: true,
      schema,
      errors: []
    };
  } catch (error) {
    return {
      isValid: false,
      schema: null,
      errors: [error.message]
    };
  }
};

global.validateSchemaType = (schema, expectedType) => {
  return schema['@type'] === expectedType || 
         (Array.isArray(schema['@type']) && schema['@type'].includes(expectedType));
};

global.validateSchemaContext = (schema) => {
  return schema['@context'] === 'https://schema.org';
};