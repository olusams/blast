import React from 'react';
import Div from '../Div';
import './logolist.scss';

export default function LogoList() {
  const partnerLogos = [
    {
      src: '/images/partner_1.svg',
      alt: 'Nike',
      isBlack: true,
    },
    {
      src: '/images/partner_2.svg',
      alt: 'CBBC',
    },
    {
      src: '/images/partner_3.svg',
      alt: 'BBC',
    },
    {
      src: '/images/partner_4.svg',
      alt: 'Canva',
    },
    {
      src: '/images/partner_5.svg',
      alt: 'Figma',
    },
    {
      src: '/images/partner_6.svg',
      alt: 'Pinterest',
    },
    {
      src: '/images/partner_7.svg',
      alt: 'Dribbble',
    },
  ];
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index) => (
        <Div
          className={`cs-partner_logo ${partnerLogo.isBlack ? 'black-logo' : ''}`}
          key={index}
        >
          <img src={partnerLogo.src} alt={partnerLogo.alt} />
        </Div>
      ))}
    </Div>
  );
}
