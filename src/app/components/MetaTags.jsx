import Head from 'next/head';

export default function MetaTags({
  title,
  description,
  keywords,
  ogImage,
  ogType = 'website',
  canonicalUrl,
  twitterCard = 'summary_large_image',
  twitterHandle = '@remlyx',
  children
}) {
  const siteTitle = 'Remlyx - Web Development Agency';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'Premier web development agency in Leeds, UK, specializing in high-performance websites, SEO optimization, and responsive design.';
  const defaultKeywords = 'Web Development Leeds, Leeds Web Agency, UK Web Development, Next.js Development, React Development, SEO Services Leeds';
  const defaultOgImage = '/images/og-image.jpg';

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl || 'https://www.remlyx.com'} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Additional meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Additional children meta tags */}
      {children}
    </Head>
  );
} 