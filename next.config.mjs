/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/blast',
  assetPrefix: '/blast/',
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@iconify/react', 'swiper', 'react-slick'],
  },
  distDir: '.next',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'remlyx-portfolio.netlify.app',
        port: '',
        pathname: '/assets/img/portfolio/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'oakfusion.com',
      },
      {
        protocol: 'https',
        hostname: 'ridetofood.com',
      },
      {
        protocol: 'https',
        hostname: 'www.jessicajonesdesign.com',
      },
      {
        protocol: 'https',
        hostname: 'www.lojasrennersa.com.br',
      },
      {
        protocol: 'https',
        hostname: '2kul.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'www.thephotoargus.com',
      },
      {
        protocol: 'http',
        hostname: 'www.thephotoargus.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.awwwards.com',
      },
      {
        protocol: 'https',
        hostname: 'images-platform.99static.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com'
      }
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
