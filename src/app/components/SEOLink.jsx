import Link from 'next/link';

export default function SEOLink({
  href,
  children,
  className = '',
  title,
  rel,
  target,
  onClick,
  ...props
}) {
  // Determine if the link is external
  const isExternal = href.startsWith('http') || href.startsWith('//');
  
  // Set default rel attributes for external links
  const defaultRel = isExternal ? 'noopener noreferrer' : '';
  const finalRel = rel ? `${defaultRel} ${rel}`.trim() : defaultRel;
  
  // Set default target for external links
  const finalTarget = target || (isExternal ? '_blank' : undefined);
  
  // Generate aria-label if title is provided
  const ariaLabel = title ? { 'aria-label': title } : {};

  return (
    <Link
      href={href}
      className={`seo-link ${className}`}
      rel={finalRel}
      target={finalTarget}
      onClick={onClick}
      {...ariaLabel}
      {...props}
    >
      {children}
    </Link>
  );
} 