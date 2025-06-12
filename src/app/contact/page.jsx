'use client'
import { useEffect } from 'react';
import { useDynamicBg } from '../context/DynamicBgContext';
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import ContactInfoWidget from "@/app/ui/Widget/ContactInfoWidget";
import { Icon } from "@iconify/react";
import Map from '@/app/ui/Map';

export default function ContactPage() {
  const { setBackground, setHeroImage } = useDynamicBg();

  useEffect(() => {
    setBackground('/images/hero_bg_6.jpeg');
    setHeroImage('/images/contact_hero_bg.jpeg');
    return () => {
      setBackground('');
      setHeroImage('');
    }
  }, [setBackground, setHeroImage]);

  return (
    <>
      <PageHeading
        title="Contact Us"
        pageLinkText="Contact"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Let's Forge Your Digital Success Story"
              subtitle="Get in Touch"
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            <form action="#" className="row">
              <Div className="col-sm-6">
                <label className="cs-primary_color" htmlFor="fullName">
                  Full Name*
                </label>
                <input
                  type="text"
                  className="cs-form_field"
                  id="fullName"
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color" htmlFor="email">
                  Email*
                </label>
                <input type="text" className="cs-form_field" id="email" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color" htmlFor="projectType">
                  Project Type*
                </label>
                <input
                  type="text"
                  className="cs-form_field"
                  id="projectType"
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color" htmlFor="mobile">
                  Mobile*
                </label>
                <input type="text" className="cs-form_field" id="mobile" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color" htmlFor="message">
                  Message*
                </label>
                <textarea
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                  id="message"
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="cs-google_map">
        <Map center={{ lat: 53.79193, lng: -1.59918 }} />
      </Div>
      <Spacing lg="50" md="40" />
    </>
  );
}
