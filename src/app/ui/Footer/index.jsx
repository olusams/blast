import React from 'react';
import Div from '@/app/ui/Div';
import ContactInfoWidget from '@/app/ui/Widget/ContactInfoWidget';
import MenuWidget from '@/app/ui/Widget/MenuWidget';
import Newsletter from '@/app/ui/Widget/Newsletter';
import SocialWidget from '@/app/ui/Widget/SocialWidget';
import TextWidget from '@/app/ui/Widget/TextWidget';

const copyrightLinks = [
  {
    title: 'Terms of Use',
    href: '/',
  },
  {
    title: 'Privacy Policy',
    href: '/',
  },
];

const serviceMenu = [
  {
    title: 'UI/UX design',
    href: '/service/service-details',
  },
  {
    title: 'WP development',
    href: '/service/service-details',
  },
  {
    title: 'Digital marketing',
    href: '/service/service-details',
  },
  {
    title: 'React development',
    href: '/service/service-details',
  },
];

const date = new Date().getFullYear();

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc="/images/logorempl.png"
                  logoAlt="Logo"
                  text=""
                />
                <SocialWidget />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget
                  menuItems={serviceMenu}
                  menuHeading="Services"
                  ariaLabel="Services"
                />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Contact Us" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter
                  title="Subscribe"
                  subtitle="We deliver bespoke digital solutions that drive growth and create tangible value for your business."
                  placeholder="example@gmail.com"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">
              Copyright © {`${date}`} Remlyx.com
            </Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget
              menuItems={copyrightLinks}
              variant=" cs-style2"
              ariaLabel="Legal"
            />
          </Div>
        </Div>
      </Div>
    </footer>
  );
}
