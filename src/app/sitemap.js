const URL = "https://www.remlyx.com";

export default async function sitemap() {

  const routes = ["" , "/about", "/contact", "/portfolio", "/service", "/team", "/blog", "/faq"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));
 
  return [...routes];
} 