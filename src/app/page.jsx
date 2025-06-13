'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { useDynamicBg } from './context/DynamicBgContext';
import Cta from '@/app/ui/Cta';
import Div from '@/app/ui/Div';
import FunFact from '@/app/ui/FunFact';
import Hero from '@/app/ui/Hero';
import LogoList from '@/app/ui/LogoList';
import MovingText from '@/app/ui/MovingText';
import SectionHeading from '@/app/ui/SectionHeading';
import PortfolioSlider from '@/app/ui/Slider/PortfolioSlider';
import PostSlider from '@/app/ui/Slider/PostSlider';
import TeamSlider from '@/app/ui/Slider/TeamSlider';
import TestimonialSlider from '@/app/ui/Slider/TestimonialSlider';
import TimelineSlider from '@/app/ui/Slider/TimelineSlider';
import Spacing from '@/app/ui/Spacing';
import VideoModal from '@/app/ui/VideoModal';
import Card from './ui/Card';

// FunFact Data
const funfaceData = [
  {
    title: 'Years in Business',
    factNumber: '12+',
    color: '#ff4a17',
  },
  {
    title: 'Successful Projects',
    factNumber: '500+',
    color: '#00d282',
  },
  {
    title: 'Satisfied Clients',
    factNumber: '98%',
    color: '#0372e0',
  },
  {
    title: 'Growth Delivered',
    factNumber: '33x',
    color: '#f9a825',
  },
];
// Portfolio Data
const portfolioData = [
  {
    title: 'E-commerce Platform for a Global Fashion Brand',
    subtitle: 'Web Development',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_1.jpeg',
    alt: 'E-commerce Platform for a Global Fashion Brand',
  },
  {
    title: 'Corporate Website for a Tech Startup',
    subtitle: 'UI/UX Design',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_2.jpeg',
    alt: 'Corporate Website for a Tech Startup',
  },
  {
    title: 'Mobile App for a Leading FinTech Company',
    subtitle: 'App Development',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_0.jpg',
    alt: 'Mobile App for a Leading FinTech Company',
  },
  {
    title: 'Booking System for a Luxury Hotel Chain',
    subtitle: 'Web Development',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_3.jpeg',
    alt: 'Booking System for a Luxury Hotel Chain',
  },
  {
    title: 'Data Visualization Dashboard for a Marketing Agency',
    subtitle: 'Web Development',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_4.jpeg',
    alt: 'Data Visualization Dashboard for a Marketing Agency',
  },
];

export default function Home() {
  const { setBackground } = useDynamicBg();

  useEffect(() => {
    setBackground('/images/funfact_bg.jpeg');
    // Cleanup function to reset background when component unmounts
    return () => setBackground('');
  }, [setBackground]);

  return (
    <>
      {/* Start Hero Section */}
      <Hero
        title="Digital Solutions That Drive Growth"
        subtitle="Based in Leeds, we craft powerful and intelligent digital solutions that boost user engagement, increase conversions, and deliver lasting value for your business."
        btnText="Explore Our Work"
        btnLink="/portfolio"
        scrollDownId="#service"
        bgImageUrl="/images/hero_bg.jpeg"
      />
      {/* End Hero Section */}

      <Spacing lg="100" md="80" />

      {/* Start FunFact Section */}
      <div className="container">
        <FunFact
          variant="cs-type1"
          title="Proven Results"
          subtitle="We merge creative innovation with technical mastery to build captivating digital experiences that convert. Our track record speaks for itself."
          data={funfaceData}
        />
      </div>
      {/* End FunFact Section */}

      {/* Start Service Section */}
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Our Expertise, Your Advantage"
                subtitle="Core Services"
                btnText="Explore All Services"
                btnLink="/service"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6">
                  <Spacing lg="0" md="30" />
                  <Card
                    title="Bespoke Web Development"
                    link="/service/service-details"
                    src="/images/service_1.jpeg"
                    alt="Bespoke Web Development"
                  />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="UI/UX Design"
                    link="/service/service-details"
                    src="/images/service_2.jpeg"
                    alt="UI/UX Design"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Spacing lg="0" md="30" />
                  <Card
                    title="eCommerce Solutions"
                    link="/service/service-details"
                    src="/images/service_3.jpeg"
                    alt="eCommerce Solutions"
                  />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="SEO & Digital Strategy"
                    link="/service/service-details"
                    src="/images/service_4.jpeg"
                    alt="SEO & Digital Strategy"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Spacing lg="0" md="30" />
                  <Card
                    title="Cloud & DevOps"
                    link="/service/service-details"
                    src="/images/service_5.jpeg"
                    alt="Cloud & DevOps"
                  />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Mobile App Development"
                    link="/service/service-details"
                    src="/images/service_6.jpeg"
                    alt="Mobile App Development"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Spacing lg="0" md="30" />
                  <Card
                    title="AI Integration"
                    link="/service/service-details"
                    src="/images/service_7.jpeg"
                    alt="AI Integration"
                  />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Ongoing Support"
                    link="/service/service-details"
                    src="/images/offer.jpeg"
                    alt="Ongoing Support"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Service Section */}

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />
      <Div>
        <Div className="container">
          <SectionHeading
            title="Featured Projects"
            subtitle="Our Work"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider data={portfolioData} />
      </Div>
      {/* End Portfolio Section */}

      {/* Start Why Choose Us Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_2">
        <Div className="cs-shape_2">
          <Div />
        </Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Why Partner with Remlyx?"
                subtitle="Our Process"
                variant="cs-style1"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <TimelineSlider />
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Us Section */}

      {/* Start Video Block Section */}
      <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
          Discover How We Transform Businesses. <br />
          Watch Our Story.
        </h2>
        <Spacing lg="70" md="70" />
        <VideoModal
          videoSrc="https://www.youtube.com/watch?v=GQyWIur03aw"
          bgUrl="/images/video_bg.jpeg"
        />
      </Div>
      {/* End Video Block Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="The Experts Behind Our Success"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End Team Section */}

      {/* Start Testimonial Section */}
      <Div className="container">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Testimonials"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
      </Div>
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* Start Blog Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4">
          <Image src="/images/partner_1.svg" alt="Partner" width={100} height={50} />
        </Div>
        <Div className="cs-shape_4" />
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Our Insights & News"
                subtitle="Blog"
                btnText="View More"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Blog Section */}

      {/* Start MovingText Section */}
      <Spacing lg="130" md="70" />
      <MovingText text="Our reputed world wide partners" />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Ready to Start Your Project?"
          btnText="Get a Free Quote"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
