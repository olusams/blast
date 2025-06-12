import { useRouter } from 'next/router';
import MetaTags from './MetaTags';
import StructuredData from './StructuredData';

export default function DynamicRoute({
  title,
  description,
  keywords,
  ogImage,
  ogType = 'article',
  children,
  schemaType = 'WebPage',
  schemaData = {},
  breadcrumbs = []
}) {
  const router = useRouter();
  const canonicalUrl = `https://www.remlyx.com${router.asPath}`;

  // Generate breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': item.url,
        name: item.title
      }
    }))
  };

  // Combine schema data
  const combinedSchemaData = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    '@id': canonicalUrl,
    url: canonicalUrl,
    ...schemaData
  };

  return (
    <>
      <MetaTags
        title={title}
        description={description}
        keywords={keywords}
        ogImage={ogImage}
        ogType={ogType}
        canonicalUrl={canonicalUrl}
      />
      <StructuredData data={combinedSchemaData} />
      {breadcrumbs.length > 0 && <StructuredData data={breadcrumbSchema} />}
      {children}
    </>
  );
} 