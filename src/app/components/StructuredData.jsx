import React from 'react';

export default function StructuredData({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Example usage for different page types
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Remlyx",
  "url": "https://www.remlyx.com",
  "logo": "https://www.remlyx.com/images/logorempl.png",
  "description": "Premier web development agency in Leeds, UK, specializing in high-performance websites, SEO optimization, and responsive design.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address",
    "addressLocality": "Leeds",
    "addressRegion": "West Yorkshire",
    "postalCode": "Your Postal Code",
    "addressCountry": "GB"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+044 546664",
    "contactType": "customer service",
    "email": "info@remlyx.com",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://www.facebook.com/remlyx",
    "https://www.linkedin.com/company/remlyx",
    "https://twitter.com/remlyx",
    "https://www.instagram.com/remlyx"
  ]
});

export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Remlyx",
  "url": "https://www.remlyx.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.remlyx.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

export const getBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const getServiceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "Organization",
    "name": "Remlyx"
  },
  "areaServed": {
    "@type": "City",
    "name": "Leeds"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Development Services",
    "itemListElement": service.offers
  }
});

export const getBlogPostSchema = (post) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": post.title,
  "image": post.image,
  "author": {
    "@type": "Organization",
    "name": "Remlyx"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Remlyx",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.remlyx.com/images/logorempl.png"
    }
  },
  "datePublished": post.datePublished,
  "dateModified": post.dateModified,
  "description": post.description
}); 