import React from 'react';
import Portfolio from '../Portfolio';
import Div from '../Div';
import Slider from 'react-slick';
import { defaultSliderSettings } from '@/app/utils/sliderSettings';

export default function PortfolioSlider({ data }) {
  const sliderSettings = {
    ...defaultSliderSettings,
    className: 'center',
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider
      {...sliderSettings}
      className="cs-slider cs-style3 cs-gap-24"
      role="region"
      aria-label="Featured Projects"
    >
      {data.map((item, index) => (
        <Div key={index} as="li">
          <Portfolio
            title={item.title}
            subtitle={item.subtitle}
            href={item.href}
            src={item.src}
            alt={item.alt}
          />
        </Div>
      ))}
    </Slider>
  );
}
