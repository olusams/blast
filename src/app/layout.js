import { DM_Sans, Inter } from 'next/font/google';
import AppWrapper from '@/app/components/AppWrapper';
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
    "Local SEO Leeds"
  ],
  author: "Remlyx",
  openGraph: {
    title: "Remlyx | Premier Web Development Agency in Leeds, UK",
    description:
      "Expert web development and digital solutions in Leeds, UK. Specializing in high-performance websites, SEO, and responsive design.",
    url: "https://www.remlyx.com",
    siteName: "Remlyx",
    locale: "en_GB",
    type: "website",
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
      "Expert web development and digital solutions in Leeds, UK. Specializing in high-performance websites, SEO, and responsive design.",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`cs-dark ${inter.variable} ${dmSans.variable}`}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
