'use client';
import { useEffect } from 'react';
import { useDynamicBg } from '../context/DynamicBgContext';
import Image from "next/image";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import FunFact from "@/app/ui/FunFact";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import TeamSlider from "@/app/ui/Slider/TeamSlider";
import Spacing from "@/app/ui/Spacing";
import aboutImg from '../../../public/images/about_img_1.jpeg'
import aboutImg2 from '../../../public/images/about_img_2.jpeg'
import aboutImg3 from '../../../public/images/about_img_3.jpeg'
import aboutImg4 from '../../../public/images/about_img_4.jpeg'

const funfaceData = [
  {
    title: 'Innovation',
    factNumber: '99%',
  },
  {
    title: 'Integrity',
    factNumber: '100%',
  },
  {
    title: 'Excellence',
    factNumber: '100%',
  },
  {
    title: 'Collaboration',
    factNumber: '100%',
  },
];

export default function AboutClientPage() {
  const { setBackground, setHeroImage } = useDynamicBg();

  useEffect(() => {
    setBackground('/images/hero_bg_6.jpeg');
    setHeroImage('/images/about_hero_bg.jpeg');
    return () => {
      setBackground('');
      setHeroImage('');
    }
  }, [setBackground, setHeroImage]);

  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="About Remlyx"
        pageLinkText="About Us"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="The Vision That Drives Our Success"
              subtitle="About Our Agency"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              From a dedicated team of passionate developers to a comprehensive digital agency, Remlyx was founded on the core principles of innovation, integrity, and unwavering excellence. Our mission is to empower businesses in Leeds and beyond to realize their digital ambitions by creating beautifully engineered, high-performance websites that drive growth and deliver exceptional results.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <Image
              src={aboutImg}
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-7">
            <Image
              src={aboutImg2}
              alt="Our team at work"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <Image
              src={aboutImg3}
              alt="Brainstorming session"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

      {/* Start Fun Fact Section */}
      <Div className="container">
        <FunFact
          title="Our Core Values"
          subtitle="At Remlyx, we are driven by a set of core values that define who we are and how we work. These principles guide our actions and ensure we consistently deliver excellence."
          data={funfaceData}
        />
      </Div>
      {/* End Fun Fact Section */}

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src={aboutImg4}
                  alt="Our team collaborating"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="Our Unwavering Commitment to Your Success"
              subtitle="Why Choose Us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              We are more than a web development agency—we are your dedicated strategic partner. Our team is committed to delivering solutions that are not only visually captivating but also technically robust, scalable, and perfectly aligned with your business objectives.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
              We build enduring relationships with our clients, founded on trust, transparency, and a shared passion for groundbreaking innovation. When you choose Remlyx, you gain a partner wholly dedicated to achieving your success.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Meet the Visionaries Driving Our Success"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      {/* End Team Section */}

      {/* Start CTA Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Ready to Elevate Your Digital Presence?"
          btnText="Get a Free Quote"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
} 