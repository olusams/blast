import React, { useState } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';
import Image from 'next/image';
import { defaultSliderSettings } from '@/app/utils/sliderSettings';

const testimonialData = [
  {
    testimonialThumb: '/images/testimonial_1.jpeg',
    testimonialText:
      'Partnering with Remlyx was a pivotal moment for our business. Their exceptional team delivered a visually stunning, high-performance website that significantly boosted our online presence and drove measurable growth. Their unwavering commitment and meticulous attention to detail were evident in every aspect of the project.',
    avatarName: 'Sarah Johnson',
    avatarDesignation: 'CEO, Innovate Ltd.',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/testimonial_2.jpeg',
    testimonialText:
      'Remlyx is more than an agency; they are a true strategic partner. They invested the time to deeply understand our vision and masterfully translated it into a digital experience that far exceeded our expectations. Their world-class expertise in UI/UX is unmatched and has transformed our user engagement.',
    avatarName: 'Linda Chen',
    avatarDesignation: 'Marketing Director, Tech Solutions',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/testimonial_3.jpeg',
    testimonialText:
      "The Remlyx team is a powerhouse of talent—professional, responsive, and incredibly skilled. They executed our project flawlessly, delivering on time and within budget, with results that have been nothing short of phenomenal. We are beyond thrilled with our new website and the impact it has had on our business.",
    avatarName: 'Emily Rodriguez',
    avatarDesignation: 'Founder, The Design Co.',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/testimonial_1.jpeg',
    testimonialText:
      'We entrusted Remlyx with a highly complex e-commerce project, and they delivered with absolute precision. Their profound technical expertise and innovative problem-solving were critical to our success. I wholeheartedly recommend them to any business seeking exceptional results.',
    avatarName: 'Florence McCarthy',
    avatarDesignation: 'CTO, Retail Innovations',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/testimonial_2.jpeg',
    testimonialText:
      "Our new website is a masterpiece—visually striking, incredibly fast, and exceptionally user-friendly. The team's passion and dedication were palpable throughout the entire process. We are ecstatic with the final product and have seen a remarkable increase in user engagement and conversions.",
    avatarName: 'James Anderson',
    avatarDesignation: 'Founder of Anderson Corp',
    ratings: '5',
  },
];

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

export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const testimonialSliderSettings = {
    ...defaultSliderSettings,
    asNavFor: nav2,
    prevArrow: <SlickArrow aria-label="Previous" />,
    nextArrow: <SlickArrow aria-label="Next" />,
    arrows: true,
  };

  const navSliderSettings = {
    ...defaultSliderSettings,
    asNavFor: nav1,
    slidesToShow: 3,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: '0px',
  };

  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        <Div className="cs-shape_3 cs-to_up">
          <Image src="/images/shape_1.svg" alt="Shape" width={100} height={100} />
        </Div>
        <Div className="container">
          <Div className="cs-testimonial_slider">
            <Div className="cs-testimonial_slider_left">
              <Slider
                {...navSliderSettings}
                ref={slider2 => setNav2(slider2)}
                role="region"
                aria-label="Testimonial Navigation"
              >
                {testimonialData.map((item, index) => (
                  <Div className="slider-nav_item" key={index} as="li">
                    <Div className="cs-rotate_img">
                      <Div className="cs-rotate_img_in">
                        <Image
                          src={item.testimonialThumb}
                          alt={item.avatarName}
                          width={100}
                          height={100}
                        />
                      </Div>
                    </Div>
                  </Div>
                ))}
              </Slider>
            </Div>
            <Div className="cs-testimonial_slider_right">
              <Slider
                {...testimonialSliderSettings}
                ref={slider1 => setNav1(slider1)}
                className="cs-arrow_style1"
                role="region"
                aria-label="Client Testimonials"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index} as="li">
                    <Testimonial
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      avatarDesignation={item.avatarDesignation}
                      ratings={item.ratings}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
