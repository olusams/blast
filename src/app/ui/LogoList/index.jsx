import React from 'react';
import Div from '../Div';
import './logolist.scss';
import Image from 'next/image';

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
    {
      src: '/images/leeds_united.png',
      alt: 'Leeds United',
    },
  ];
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index) => (
        <Div
          className={`cs-partner_logo ${partnerLogo.isBlack ? 'black-logo' : ''}`}
          key={index}
        >
          <Image src={partnerLogo.src} alt={partnerLogo.alt} width={100} height={50} />
          <p className="cs-partner_logo_name">{partnerLogo.alt}</p>
        </Div>
      ))}
    </Div>
  );
}
