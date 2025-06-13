const URL = "https://www.remlyx.com";

export default async function sitemap() {
  const baseRoutes = [
    "",
    "/about",
    "/contact",
    "/portfolio",
    "/service",
    "/team",
    "/blog",
    "/faq",
    "/privacy-policy",
    "/terms-of-service",
    "/case-studies",
    "/careers"
  ];

  const routes = baseRoutes.map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" || route === "/blog" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/blog" ? 0.9 : 0.8,
  }));

  // Add dynamic routes for blog posts
  const blogPosts = [
    "/blog/web-development-trends-2024",
    "/blog/seo-best-practices",
    "/blog/ux-design-principles",
    "/blog/mobile-first-development"
  ];

  const blogRoutes = blogPosts.map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Add dynamic routes for portfolio items
  const portfolioItems = [
    "/portfolio/e-commerce-website",
    "/portfolio/corporate-website",
    "/portfolio/mobile-app",
    "/portfolio/branding-project"
  ];

  const portfolioRoutes = portfolioItems.map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...routes, ...blogRoutes, ...portfolioRoutes];
} 