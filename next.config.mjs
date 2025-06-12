/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
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
  },
};

export default nextConfig;
