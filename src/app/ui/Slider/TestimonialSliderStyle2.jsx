import React, { useState } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';
import Image from 'next/image';
const testimonialData = [
  {
    testimonialThumb: '/images/testimonial_1.jpeg',
    testimonialText:
      'I wish I would have thought of it first. Creative agency is the most tech valuable business resource we have ever purchased. Dude your stuff  is the bomb! eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.',
    avatarName: 'Ahon Monsery',
    avatarDesignation: 'CEO AT TECH',
    ratings: '4',
  },
  {
    testimonialThumb: '/images/testimonial_2.jpeg',
    testimonialText:
      'I wish I would have thought of it first. Creative agency is the most tech valuable business resource we have ever purchased. Dude your stuff  is the bomb! eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.',
    avatarName: 'Ahon Monsery',
    avatarDesignation: 'CEO AT TECH',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/testimonial_3.jpeg',
    testimonialText:
      'I wish I would have thought of it first. Creative agency is the most tech valuable business resource we have ever purchased. Dude your stuff  is the bomb! eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.',
    avatarName: 'Ahon Monsery',
    avatarDesignation: 'CEO AT TECH',
    ratings: '4.5',
  },
  {
    testimonialThumb: '/images/testimonial_1.jpeg',
    testimonialText:
      'I wish I would have thought of it first. Creative agency is the most tech valuable business resource we have ever purchased. Dude your stuff  is the bomb! eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.',
    avatarName: 'Ahon Monsery',
    avatarDesignation: 'CEO AT TECH',
    ratings: '3.5',
  },
];

export default function TestimonialSliderStyle2() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <Div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </Div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <Div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </Div>
  );
  return (
    <>
      <Div className="cs-shape_wrap_3 cs-parallax">
        <Div
          className="cs-bg"
          style={{ backgroundImage: `url(images/testimonial_bg.jpeg)` }}
        >
          <Spacing lg="130" md="80" />
          <Div className="cs-shape_3 cs-to_up">
            <Image src="/images/shape_1.svg" alt="Shape" width={100} height={100} />
          </Div>
          <Div className="container">
            <Div className="cs-testimonial_slider_2">
              <Div className="cs-testimonial_slider_left">
                <Slider
                  asNavFor={nav1}
                  ref={slider2 => setNav2(slider2)}
                  slidesToShow={3}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  centerMode={true}
                  centerPadding="0px"
                  arrows={false}
                >
                  {testimonialData.map((item, index) => (
                    <Div className="slider-nav_item" key={index}>
                      <Div className="cs-rotate_img">
                        <Div className="cs-rotate_img_in">
                          <Image src={item.testimonialThumb} alt="Thumb" width={100} height={100} />
                        </Div>
                      </Div>
                    </Div>
                  ))}
                </Slider>
              </Div>
              <Slider
                asNavFor={nav2}
                ref={slider1 => setNav1(slider1)}
                prevArrow={<SlickArrowLeft />}
                nextArrow={<SlickArrowRight />}
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
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
            <Div className="cs-testimonial_slider">
              <Div className="cs-testimonial_slider_left"></Div>
              <Div className="cs-testimonial_slider_right"></Div>
            </Div>
          </Div>
          <Spacing lg="130" md="80" />
        </Div>
      </Div>
    </>
  );
}
