import { DM_Sans, Inter } from 'next/font/google';
import AppWrapper from '@/app/components/AppWrapper';
import StructuredData from '@/app/ui/StructuredData';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./scss/index.scss";
import { Poppins, Open_Sans } from "next/font/google";
import 'animate.css';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--primary-font",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--secondary-font",
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--primary-font',
  weight: ['400', '500', '600', '700'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--secondary-font',
  weight: ['400', '500', '700'],
});

export const metadata = {
  metadataBase: new URL("https://www.remlyx.com"),
  title: {
    default: "Remlyx | Premier Web Development Agency in Leeds, UK",
    template: "%s | Remlyx - Leeds Web Development Agency",
  },
  description:
    "Remlyx is a premier web development agency in Leeds, UK, specializing in high-performance websites, SEO optimization, and responsive design. Based in Leeds, we deliver cutting-edge digital solutions that drive business growth. Contact us for expert web development services.",
  keywords: [
    "Web Development Leeds",
    "Leeds Web Agency",
    "UK Web Development",
    "Next.js Development",
    "React Development",
    "SEO Services Leeds",
    "Digital Agency Leeds",
    "E-commerce Solutions",
    "Bespoke Websites",
    "UI/UX Design",
    "Digital Growth",
    "Web Application Development",
    "Mobile-First Design",
    "Performance Optimization",
    "Local SEO Leeds",
    "Custom Software Development",
    "Digital Transformation",
    "Cloud Solutions",
    "Enterprise Web Development",
    "Progressive Web Apps"
  ],
  author: "Remlyx",
  openGraph: {
    title: "Remlyx | Premier Web Development Agency in Leeds, UK",
    description:
      "Expert web development and digital solutions in Leeds, UK. Specializing in high-performance websites, SEO, and responsive design. Transform your digital presence with our cutting-edge solutions.",
    url: "https://www.remlyx.com",
    siteName: "Remlyx",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Remlyx - Web Development Agency in Leeds"
      }
    ],
    address: {
      streetAddress: "Your Street Address",
      addressLocality: "Leeds",
      addressRegion: "West Yorkshire",
      postalCode: "Your Postal Code",
      addressCountry: "GB"
    }
  },
  twitter: {
    card: "summary_large_image",
    title: "Remlyx | Premier Web Development Agency in Leeds, UK",
    description:
      "Expert web development and digital solutions in Leeds, UK. Specializing in high-performance websites, SEO, and responsive design. Transform your digital presence with our cutting-edge solutions.",
    images: ["/images/twitter-image.jpg"],
    creator: "@remlyx",
    site: "@remlyx"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.remlyx.com",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    bing: "your-bing-verification-code",
  },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  manifest: "/manifest.json",
  other: {
    "theme-color": "#000000",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#000000",
    "msapplication-tap-highlight": "no",
  }
};

export default function RootLayout({ children }) {
  const jsonLd = {
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
  };

  return (
    <html lang="en">
      <head>
        <StructuredData data={jsonLd} />
      </head>
      <body className={`cs-dark ${inter.variable} ${dmSans.variable}`}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
