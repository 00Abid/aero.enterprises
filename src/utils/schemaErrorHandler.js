// Schema Error Handling Utilities
// Provides robust error handling and fallback mechanisms for schema operations

import { schemaLogger } from './schemaValidator.js';

/**
 * Error types for schema operations
 */
export const SCHEMA_ERROR_TYPES = {
  GENERATION_FAILED: 'GENERATION_FAILED',
  VALIDATION_FAILED: 'VALIDATION_FAILED',
  DATA_MISSING: 'DATA_MISSING',
  INVALID_INPUT: 'INVALID_INPUT',
  NETWORK_ERROR: 'NETWORK_ERROR',
  PARSING_ERROR: 'PARSING_ERROR'
};

/**
 * Schema error class with detailed information
 */
export class SchemaError extends Error {
  constructor(type, message, details = {}) {
    super(message);
    this.name = 'SchemaError';
    this.type = type;
    this.details = details;
    this.timestamp = new Date().toISOString();
  }

  toJSON() {
    return {
      name: this.name,
      type: this.type,
      message: this.message,
      details: this.details,
      timestamp: this.timestamp,
      stack: this.stack
    };
  }
}

/**
 * Fallback schema generators for when primary generation fails
 */
export const fallbackSchemas = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Aero Enterprises",
    "description": "Steel supply and fabrication services",
    "url": "https://www.aeroenterprises.shop"
  },
  
  product: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Steel Product",
    "description": "Industrial steel product",
    "brand": {
      "@type": "Brand",
      "name": "Aero Enterprises"
    }
  },
  
  service: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fabrication Service",
    "description": "Professional fabrication services",
    "provider": {
      "@type": "Organization",
      "name": "Aero Enterprises"
    }
  },
  
  webpage: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Aero Enterprises",
    "description": "Steel supply and fabrication services",
    "url": "https://www.aeroenterprises.shop"
  }
};

/**
 * Safely executes a schema generation function with error handling
 * @param {Function} generatorFn - Schema generator function
 * @param {Array} args - Arguments for the generator
 * @param {string} fallbackType - Type of fallback schema to use
 * @param {Object} options - Additional options
 * @returns {Object} Generated schema or fallback
 */
export function safeSchemaExecution(generatorFn, args = [], fallbackType = 'organization', options = {}) {
  const { enableFallback = true, logErrors = true } = options;
  
  try {
    // Validate inputs
    if (typeof generatorFn !== 'function') {
      throw new SchemaError(
        SCHEMA_ERROR_TYPES.INVALID_INPUT,
        'Generator function is required',
        { generatorFn, args }
      );
    }

    // Execute generator function
    const schema = generatorFn(...args);
    
    // Basic validation
    if (!schema || typeof schema !== 'object') {
      throw new SchemaError(
        SCHEMA_ERROR_TYPES.GENERATION_FAILED,
        'Generator returned invalid schema',
        { schema, args }
      );
    }

    // Check for required Schema.org properties
    if (!schema['@context'] || !schema['@type']) {
      throw new SchemaError(
        SCHEMA_ERROR_TYPES.VALIDATION_FAILED,
        'Generated schema missing required properties',
        { schema, missing: ['@context', '@type'].filter(prop => !schema[prop]) }
      );
    }

    return schema;

  } catch (error) {
    if (logErrors) {
      schemaLogger.error('Schema generation failed', {
        error: error.message,
        type: error.type || 'UNKNOWN',
        details: error.details || {},
        args,
        fallbackType
      });
    }

    // Return fallback schema if enabled
    if (enableFallback && fallbackSchemas[fallbackType]) {
      schemaLogger.warning(`Using fallback schema: ${fallbackType}`, { originalError: error.message });
      return { ...fallbackSchemas[fallbackType] };
    }

    // If no fallback, return minimal valid schema
    return {
      "@context": "https://schema.org",
      "@type": "Thing",
      "name": "Content",
      "description": "Web content"
    };
  }
}

/**
 * Handles missing data gracefully in schema generation
 * @param {Object} data - Data object to check
 * @param {Array} requiredFields - Required field names
 * @param {string} schemaType - Type of schema being generated
 * @returns {Object} Processed data with defaults
 */
export function handleMissingData(data, requiredFields = [], schemaType = 'unknown') {
  const processedData = { ...data };
  const missingFields = [];

  // Check for missing required fields
  requiredFields.forEach(field => {
    if (!processedData[field]) {
      missingFields.push(field);
    }
  });

  // Log missing fields
  if (missingFields.length > 0) {
    schemaLogger.warning(`Missing required fields for ${schemaType} schema`, {
      missingFields,
      schemaType,
      availableFields: Object.keys(processedData)
    });
  }

  // Provide defaults for common missing fields
  const defaults = {
    name: 'Aero Enterprises',
    description: 'Steel supply and fabrication services',
    url: 'https://www.aeroenterprises.shop',
    image: 'https://www.aeroenterprises.shop/hero-image.webp',
    telephone: '+91-9820749841',
    email: 'info@aeroenterprises.shop'
  };

  // Apply defaults for missing fields
  missingFields.forEach(field => {
    if (defaults[field]) {
      processedData[field] = defaults[field];
      schemaLogger.info(`Applied default value for ${field}`, { 
        field, 
        value: defaults[field],
        schemaType 
      });
    }
  });

  return processedData;
}

/**
 * Validates and sanitizes schema data before generation
 * @param {Object} data - Raw data for schema generation
 * @param {string} schemaType - Type of schema
 * @returns {Object} Sanitized data
 */
export function sanitizeSchemaData(data, schemaType) {
  if (!data || typeof data !== 'object') {
    schemaLogger.error('Invalid data provided for schema generation', { data, schemaType });
    return {};
  }

  const sanitized = {};

  // Sanitize common fields
  Object.keys(data).forEach(key => {
    const value = data[key];

    // Skip null/undefined values
    if (value == null) {
      return;
    }

    // Sanitize strings
    if (typeof value === 'string') {
      const trimmed = value.trim();
      if (trimmed.length > 0) {
        sanitized[key] = trimmed;
      }
    }
    // Sanitize arrays
    else if (Array.isArray(value)) {
      const filtered = value.filter(item => item != null);
      if (filtered.length > 0) {
        sanitized[key] = filtered;
      }
    }
    // Sanitize objects
    else if (typeof value === 'object') {
      const nestedSanitized = sanitizeSchemaData(value, `${schemaType}.${key}`);
      if (Object.keys(nestedSanitized).length > 0) {
        sanitized[key] = nestedSanitized;
      }
    }
    // Keep other types as-is
    else {
      sanitized[key] = value;
    }
  });

  return sanitized;
}

/**
 * Retry mechanism for schema operations
 * @param {Function} operation - Operation to retry
 * @param {number} maxRetries - Maximum number of retries
 * @param {number} delay - Delay between retries in ms
 * @returns {Promise} Operation result
 */
export async function retrySchemaOperation(operation, maxRetries = 3, delay = 1000) {
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      
      schemaLogger.warning(`Schema operation failed, attempt ${attempt}/${maxRetries}`, {
        error: error.message,
        attempt,
        maxRetries
      });

      // Don't delay on the last attempt
      if (attempt < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  // All retries failed
  schemaLogger.error('Schema operation failed after all retries', {
    error: lastError.message,
    attempts: maxRetries
  });

  throw lastError;
}

/**
 * Circuit breaker for schema operations
 */
export class SchemaCircuitBreaker {
  constructor(options = {}) {
    this.failureThreshold = options.failureThreshold || 5;
    this.resetTimeout = options.resetTimeout || 60000; // 1 minute
    this.monitoringPeriod = options.monitoringPeriod || 300000; // 5 minutes
    
    this.failures = 0;
    this.lastFailureTime = null;
    this.state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN
  }

  async execute(operation) {
    if (this.state === 'OPEN') {
      if (Date.now() - this.lastFailureTime > this.resetTimeout) {
        this.state = 'HALF_OPEN';
        schemaLogger.info('Circuit breaker moving to HALF_OPEN state');
      } else {
        throw new SchemaError(
          SCHEMA_ERROR_TYPES.NETWORK_ERROR,
          'Circuit breaker is OPEN - operation blocked',
          { state: this.state, failures: this.failures }
        );
      }
    }

    try {
      const result = await operation();
      
      // Success - reset if we were in HALF_OPEN
      if (this.state === 'HALF_OPEN') {
        this.reset();
      }
      
      return result;
    } catch (error) {
      this.recordFailure();
      throw error;
    }
  }

  recordFailure() {
    this.failures++;
    this.lastFailureTime = Date.now();

    if (this.failures >= this.failureThreshold) {
      this.state = 'OPEN';
      schemaLogger.error('Circuit breaker opened due to failures', {
        failures: this.failures,
        threshold: this.failureThreshold
      });
    }
  }

  reset() {
    this.failures = 0;
    this.lastFailureTime = null;
    this.state = 'CLOSED';
    schemaLogger.info('Circuit breaker reset to CLOSED state');
  }

  getState() {
    return {
      state: this.state,
      failures: this.failures,
      lastFailureTime: this.lastFailureTime
    };
  }
}

/**
 * Global circuit breaker instance for schema operations
 */
export const schemaCircuitBreaker = new SchemaCircuitBreaker({
  failureThreshold: 5,
  resetTimeout: 60000,
  monitoringPeriod: 300000
});

/**
 * Comprehensive error handling wrapper for schema generation
 * @param {Function} generatorFn - Schema generator function
 * @param {Array} args - Arguments for generator
 * @param {Object} options - Error handling options
 * @returns {Object} Generated schema with error handling
 */
export function withErrorHandling(generatorFn, args = [], options = {}) {
  const {
    fallbackType = 'organization',
    enableRetry = false,
    maxRetries = 3,
    enableCircuitBreaker = false,
    sanitizeData = true
  } = options;

  // Sanitize input data if enabled
  if (sanitizeData && args.length > 0) {
    args[0] = sanitizeSchemaData(args[0], fallbackType);
  }

  // Create operation function
  const operation = () => safeSchemaExecution(generatorFn, args, fallbackType, options);

  // Apply circuit breaker if enabled
  if (enableCircuitBreaker) {
    return schemaCircuitBreaker.execute(operation);
  }

  // Apply retry logic if enabled
  if (enableRetry) {
    return retrySchemaOperation(operation, maxRetries);
  }

  // Execute directly
  return operation();
}

export default {
  safeSchemaExecution,
  handleMissingData,
  sanitizeSchemaData,
  retrySchemaOperation,
  withErrorHandling,
  SchemaError,
  SchemaCircuitBreaker,
  schemaCircuitBreaker,
  fallbackSchemas,
  SCHEMA_ERROR_TYPES
};