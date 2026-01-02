// Schema Validation Utilities
// Provides comprehensive validation for Schema.org JSON-LD markup

/**
 * Schema validation error types
 */
export const VALIDATION_ERRORS = {
  MISSING_CONTEXT: 'MISSING_CONTEXT',
  MISSING_TYPE: 'MISSING_TYPE',
  INVALID_CONTEXT: 'INVALID_CONTEXT',
  INVALID_TYPE: 'INVALID_TYPE',
  MISSING_REQUIRED_PROPERTY: 'MISSING_REQUIRED_PROPERTY',
  INVALID_PROPERTY_TYPE: 'INVALID_PROPERTY_TYPE',
  INVALID_URL: 'INVALID_URL',
  INVALID_EMAIL: 'INVALID_EMAIL',
  INVALID_PHONE: 'INVALID_PHONE',
  INVALID_DATE: 'INVALID_DATE',
  CIRCULAR_REFERENCE: 'CIRCULAR_REFERENCE'
};

/**
 * Required properties for different schema types
 */
const REQUIRED_PROPERTIES = {
  'Organization': ['name', 'url'],
  'LocalBusiness': ['name', 'address'],
  'Product': ['name', 'description'],
  'Service': ['name', 'provider'],
  'WebPage': ['name', 'url'],
  'ContactPage': ['name'],
  'CollectionPage': ['name', 'mainEntity'],
  'FAQPage': ['mainEntity'],
  'BreadcrumbList': ['itemListElement'],
  'Person': ['name'],
  'Place': ['name'],
  'PostalAddress': ['addressCountry']
};

/**
 * Valid Schema.org contexts
 */
const VALID_CONTEXTS = [
  'https://schema.org',
  'http://schema.org',
  'https://schema.org/',
  'http://schema.org/'
];

/**
 * Validation result structure
 */
class ValidationResult {
  constructor() {
    this.isValid = true;
    this.errors = [];
    this.warnings = [];
  }

  addError(type, message, path = '') {
    this.isValid = false;
    this.errors.push({
      type,
      message,
      path,
      severity: 'error'
    });
  }

  addWarning(type, message, path = '') {
    this.warnings.push({
      type,
      message,
      path,
      severity: 'warning'
    });
  }

  getReport() {
    return {
      isValid: this.isValid,
      errorCount: this.errors.length,
      warningCount: this.warnings.length,
      errors: this.errors,
      warnings: this.warnings
    };
  }
}

/**
 * Validates basic schema structure and required properties
 * @param {Object} schema - Schema object to validate
 * @param {string} path - Current path in schema (for nested validation)
 * @returns {ValidationResult} Validation result
 */
export function validateSchemaStructure(schema, path = '') {
  const result = new ValidationResult();

  // Check if schema is an object
  if (!schema || typeof schema !== 'object') {
    result.addError(VALIDATION_ERRORS.INVALID_TYPE, 'Schema must be an object', path);
    return result;
  }

  // Check for @context
  if (!schema['@context']) {
    result.addError(VALIDATION_ERRORS.MISSING_CONTEXT, 'Missing @context property', path);
  } else if (!VALID_CONTEXTS.includes(schema['@context'])) {
    result.addError(VALIDATION_ERRORS.INVALID_CONTEXT, `Invalid @context: ${schema['@context']}`, path);
  }

  // Check for @type
  if (!schema['@type']) {
    result.addError(VALIDATION_ERRORS.MISSING_TYPE, 'Missing @type property', path);
    return result;
  }

  // Validate @type format
  const schemaType = Array.isArray(schema['@type']) ? schema['@type'][0] : schema['@type'];
  if (typeof schemaType !== 'string') {
    result.addError(VALIDATION_ERRORS.INVALID_TYPE, '@type must be a string or array of strings', path);
    return result;
  }

  // Check required properties for schema type
  const requiredProps = REQUIRED_PROPERTIES[schemaType];
  if (requiredProps) {
    requiredProps.forEach(prop => {
      if (!schema[prop]) {
        result.addError(
          VALIDATION_ERRORS.MISSING_REQUIRED_PROPERTY,
          `Missing required property: ${prop}`,
          path
        );
      }
    });
  }

  return result;
}

/**
 * Validates URL format
 * @param {string} url - URL to validate
 * @returns {boolean} Whether URL is valid
 */
export function validateURL(url) {
  if (typeof url !== 'string') return false;
  
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validates email format
 * @param {string} email - Email to validate
 * @returns {boolean} Whether email is valid
 */
export function validateEmail(email) {
  if (typeof email !== 'string') return false;
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates phone number format
 * @param {string} phone - Phone number to validate
 * @returns {boolean} Whether phone is valid
 */
export function validatePhone(phone) {
  if (typeof phone !== 'string') return false;
  
  // Basic phone validation - allows international formats
  const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
  return phoneRegex.test(phone);
}

/**
 * Validates date format (ISO 8601)
 * @param {string} date - Date to validate
 * @returns {boolean} Whether date is valid
 */
export function validateDate(date) {
  if (typeof date !== 'string') return false;
  
  const parsedDate = new Date(date);
  return !isNaN(parsedDate.getTime()) && date.includes('-');
}

/**
 * Validates specific schema properties based on their expected types
 * @param {Object} schema - Schema object to validate
 * @param {string} path - Current path in schema
 * @returns {ValidationResult} Validation result
 */
export function validateSchemaProperties(schema, path = '') {
  const result = new ValidationResult();

  // Validate URLs
  const urlProperties = ['url', 'sameAs', 'logo', 'image'];
  urlProperties.forEach(prop => {
    if (schema[prop]) {
      if (Array.isArray(schema[prop])) {
        schema[prop].forEach((url, index) => {
          if (!validateURL(url)) {
            result.addError(
              VALIDATION_ERRORS.INVALID_URL,
              `Invalid URL in ${prop}[${index}]: ${url}`,
              path
            );
          }
        });
      } else if (typeof schema[prop] === 'object' && schema[prop].url) {
        if (!validateURL(schema[prop].url)) {
          result.addError(
            VALIDATION_ERRORS.INVALID_URL,
            `Invalid URL in ${prop}.url: ${schema[prop].url}`,
            path
          );
        }
      } else if (typeof schema[prop] === 'string' && !validateURL(schema[prop])) {
        result.addError(
          VALIDATION_ERRORS.INVALID_URL,
          `Invalid URL in ${prop}: ${schema[prop]}`,
          path
        );
      }
    }
  });

  // Validate email
  if (schema.email && !validateEmail(schema.email)) {
    result.addError(
      VALIDATION_ERRORS.INVALID_EMAIL,
      `Invalid email: ${schema.email}`,
      path
    );
  }

  // Validate phone numbers
  const phoneProperties = ['telephone', 'faxNumber'];
  phoneProperties.forEach(prop => {
    if (schema[prop] && !validatePhone(schema[prop])) {
      result.addError(
        VALIDATION_ERRORS.INVALID_PHONE,
        `Invalid phone number in ${prop}: ${schema[prop]}`,
        path
      );
    }
  });

  // Validate dates
  const dateProperties = ['foundingDate', 'datePublished', 'dateModified'];
  dateProperties.forEach(prop => {
    if (schema[prop] && !validateDate(schema[prop])) {
      result.addError(
        VALIDATION_ERRORS.INVALID_DATE,
        `Invalid date in ${prop}: ${schema[prop]}`,
        path
      );
    }
  });

  return result;
}

/**
 * Recursively validates nested schema objects
 * @param {Object} schema - Schema object to validate
 * @param {string} path - Current path in schema
 * @param {Set} visited - Set of visited objects (for circular reference detection)
 * @returns {ValidationResult} Validation result
 */
export function validateNestedSchema(schema, path = '', visited = new Set()) {
  const result = new ValidationResult();

  // Check for circular references
  if (visited.has(schema)) {
    result.addError(
      VALIDATION_ERRORS.CIRCULAR_REFERENCE,
      'Circular reference detected',
      path
    );
    return result;
  }

  visited.add(schema);

  // Validate current level
  const structureResult = validateSchemaStructure(schema, path);
  const propertiesResult = validateSchemaProperties(schema, path);
  
  result.errors.push(...structureResult.errors, ...propertiesResult.errors);
  result.warnings.push(...structureResult.warnings, ...propertiesResult.warnings);
  
  if (structureResult.errors.length > 0 || propertiesResult.errors.length > 0) {
    result.isValid = false;
  }

  // Recursively validate nested objects
  Object.keys(schema).forEach(key => {
    const value = schema[key];
    const currentPath = path ? `${path}.${key}` : key;

    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        if (item && typeof item === 'object' && item['@type']) {
          const nestedResult = validateNestedSchema(item, `${currentPath}[${index}]`, new Set(visited));
          result.errors.push(...nestedResult.errors);
          result.warnings.push(...nestedResult.warnings);
          if (!nestedResult.isValid) result.isValid = false;
        }
      });
    } else if (value && typeof value === 'object' && value['@type']) {
      const nestedResult = validateNestedSchema(value, currentPath, new Set(visited));
      result.errors.push(...nestedResult.errors);
      result.warnings.push(...nestedResult.warnings);
      if (!nestedResult.isValid) result.isValid = false;
    }
  });

  visited.delete(schema);
  return result;
}

/**
 * Comprehensive schema validation function
 * @param {Object} schema - Schema object to validate
 * @returns {ValidationResult} Complete validation result
 */
export function validateSchema(schema) {
  try {
    return validateNestedSchema(schema);
  } catch (error) {
    const result = new ValidationResult();
    result.addError(
      'VALIDATION_ERROR',
      `Validation failed: ${error.message}`,
      ''
    );
    return result;
  }
}

/**
 * Schema error logging utility
 */
export class SchemaLogger {
  constructor(options = {}) {
    this.logLevel = options.logLevel || 'error'; // 'error', 'warning', 'info'
    this.enableConsole = options.enableConsole !== false;
    this.enableStorage = options.enableStorage || false;
    this.errors = [];
  }

  log(level, message, data = null) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      data,
      url: typeof window !== 'undefined' ? window.location.href : 'server'
    };

    // Store error
    if (this.enableStorage) {
      this.errors.push(logEntry);
      
      // Keep only last 100 errors
      if (this.errors.length > 100) {
        this.errors = this.errors.slice(-100);
      }
    }

    // Console logging
    if (this.enableConsole && this.shouldLog(level)) {
      const consoleMethod = level === 'error' ? 'error' : level === 'warning' ? 'warn' : 'log';
      console[consoleMethod](`[Schema ${level.toUpperCase()}]`, message, data);
    }
  }

  shouldLog(level) {
    const levels = { error: 0, warning: 1, info: 2 };
    return levels[level] <= levels[this.logLevel];
  }

  error(message, data) {
    this.log('error', message, data);
  }

  warning(message, data) {
    this.log('warning', message, data);
  }

  info(message, data) {
    this.log('info', message, data);
  }

  getErrors() {
    return this.errors;
  }

  clearErrors() {
    this.errors = [];
  }
}

/**
 * Global schema logger instance
 */
export const schemaLogger = new SchemaLogger({
  logLevel: 'warning',
  enableConsole: process.env.NODE_ENV === 'development',
  enableStorage: true
});

/**
 * Safe schema generation wrapper with error handling
 * @param {Function} generatorFunction - Schema generator function
 * @param {Array} args - Arguments for the generator function
 * @param {string} schemaType - Type of schema being generated
 * @returns {Object|null} Generated schema or null if error
 */
export function safeSchemaGeneration(generatorFunction, args, schemaType) {
  try {
    const schema = generatorFunction(...args);
    
    // Validate generated schema
    const validationResult = validateSchema(schema);
    
    if (!validationResult.isValid) {
      schemaLogger.error(`Invalid ${schemaType} schema generated`, {
        errors: validationResult.errors,
        schema
      });
      return null;
    }

    if (validationResult.warnings.length > 0) {
      schemaLogger.warning(`${schemaType} schema has warnings`, {
        warnings: validationResult.warnings,
        schema
      });
    }

    return schema;
  } catch (error) {
    schemaLogger.error(`Error generating ${schemaType} schema`, {
      error: error.message,
      stack: error.stack,
      args
    });
    return null;
  }
}

/**
 * Validates schema against Google's Rich Results requirements
 * @param {Object} schema - Schema to validate
 * @param {string} schemaType - Type of schema
 * @returns {ValidationResult} Validation result
 */
export function validateForRichResults(schema, schemaType) {
  const result = new ValidationResult();
  
  // Google-specific validation rules
  const googleRequirements = {
    'Product': ['name', 'image', 'description'],
    'Organization': ['name', 'url', 'logo'],
    'LocalBusiness': ['name', 'address', 'telephone'],
    'Service': ['name', 'provider', 'areaServed'],
    'FAQPage': ['mainEntity'],
    'BreadcrumbList': ['itemListElement']
  };

  const requiredProps = googleRequirements[schemaType];
  if (requiredProps) {
    requiredProps.forEach(prop => {
      if (!schema[prop]) {
        result.addError(
          VALIDATION_ERRORS.MISSING_REQUIRED_PROPERTY,
          `Missing property required for Rich Results: ${prop}`,
          ''
        );
      }
    });
  }

  // Additional Google-specific checks
  if (schemaType === 'Product' && schema.offers) {
    if (!schema.offers.price && !schema.offers.priceRange) {
      result.addWarning(
        'MISSING_PRICE',
        'Product offers should include price information for better Rich Results',
        'offers'
      );
    }
  }

  return result;
}

export default {
  validateSchema,
  validateSchemaStructure,
  validateSchemaProperties,
  validateNestedSchema,
  validateForRichResults,
  validateURL,
  validateEmail,
  validatePhone,
  validateDate,
  safeSchemaGeneration,
  SchemaLogger,
  schemaLogger,
  VALIDATION_ERRORS,
  ValidationResult
};