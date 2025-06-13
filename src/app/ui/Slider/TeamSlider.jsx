import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Team from '../Team';
import { teamData } from '@/app/data/team';
import { defaultSliderSettings } from '@/app/utils/sliderSettings';

const SlickArrow = ({ currentSlide, slideCount, ...props }) => {
  const { className, style, onClick, 'aria-label': ariaLabel } = props;
  return (
    <button
      className={className}
      style={{ ...style }}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <Icon
        icon={
          ariaLabel === 'Previous' ? 'bi:arrow-left' : 'bi:arrow-right'
        }
      />
    </button>
  );
};

export default function TeamSlider() {
  /** Team Member Data **/

  /** Slider Settings **/
  const settings = {
    ...defaultSliderSettings,
    slidesToShow: 4,
    prevArrow: <SlickArrow aria-label="Previous" />,
    nextArrow: <SlickArrow aria-label="Next" />,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
    variableWidth: true,
  };

  return (
    <Slider
      {...settings}
      className="cs-gap-24 cs-arrow_style2"
      role="region"
      aria-label="Our Team"
    >
      {teamData.map((item, index) => (
        <Div key={index} as="li">
          <Team
            memberImage={item.memberImage}
            memberName={item.memberName}
            memberDesignation={item.memberDesignation}
            memberSocial={item.memberSocial}
            memberSlug={item.slug}
          />
        </Div>
      ))}
    </Slider>
  );
}
