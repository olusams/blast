'use client'
import { useEffect } from 'react';
import { useDynamicBg } from '../context/DynamicBgContext';
import Card from "../ui/Card";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import PricingTableList from "@/app/ui/PricingTable/PricingTableList";
import SectionHeading from "@/app/ui/SectionHeading";
import TestimonialSlider from "@/app/ui/Slider/TestimonialSlider";
import Spacing from "@/app/ui/Spacing";
import { serviceData } from "@/app/data/services";

export default function ServicePage() {
  const { setBackground, setHeroImage } = useDynamicBg();

  useEffect(() => {
    setBackground('/images/cta_bg.jpeg');
    setHeroImage('/images/service_hero_bg.jpeg');
    return () => {
      setBackground('');
      setHeroImage('');
    }
  }, [setBackground, setHeroImage]);

  return (
    <>
      <PageHeading
        title="Services"
        bgSrc="/images/service_hero_bg.jpeg"
        pageLinkText="Services"
      />
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <SectionHeading
            title="Strategic Solutions to Elevate Your Business"
            subtitle="What Can We Do"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
          <Div className="row">
            {serviceData.map((service, index) => (
              <Div key={index} className="col-lg-4 col-md-6">
                <Card
                  title={service.title}
                  link={`/service/${service.slug}`}
                  src={service.imgUrl}
                  alt={service.alt}
                />
                <Spacing lg="30" md="30" />
              </Div>
            ))}
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <SectionHeading
          title='Transparent Pricing for Exceptional Value' 
          subtitle='Pricing & Packaging'
        />
        <Spacing lg='85' md='40'/>
        <PricingTableList/>
      </Div>
      <Spacing lg='125' md='55'/>
      <TestimonialSlider/>
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Cta 
          title="Let's Build Something Remarkable Together"
          btnText='Apply For Meeting' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
