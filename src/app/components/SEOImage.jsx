import Image from 'next/image';

export default function SEOImage({
  src,
  alt,
  width,
  height,
  priority = false,
  quality = 90,
  className = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  objectFit = 'cover',
  loading = 'lazy',
  ...props
}) {
  // Ensure alt text is provided for SEO
  if (!alt) {
    console.warn('SEOImage: Missing alt text for image:', src);
  }

  // Generate srcSet for responsive images
  const generateSrcSet = (src) => {
    const widths = [320, 640, 768, 1024, 1280, 1536];
    return widths
      .map(width => `${src}?w=${width} ${width}w`)
      .join(', ');
  };

  return (
    <div className={`seo-image-wrapper ${className}`}>
      <Image
        src={src}
        alt={alt || ''}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        sizes={sizes}
        loading={loading}
        objectFit={objectFit}
        srcSet={generateSrcSet(src)}
        {...props}
      />
      {/* Add structured data for the image */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ImageObject',
            contentUrl: src,
            width: width,
            height: height,
            caption: alt
          })
        }}
      />
    </div>
  );
} 