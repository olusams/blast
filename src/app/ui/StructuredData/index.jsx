import React from 'react';

/**
 * Adds JSON-LD structured data to the page.
 * @param {Object} data The JSON-LD data object.
 */
const StructuredData = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default StructuredData; 