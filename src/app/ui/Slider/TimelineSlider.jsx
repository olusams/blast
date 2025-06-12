import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Timeline from '../Timeline';

const timelineData = [
  {
    title: '1. Discovery & Strategy',
    text: 'We begin by understanding your business, goals, and target audience. This phase involves deep research and strategic planning to create a roadmap for success.',
  },
  {
    title: '2. UI/UX Design & Prototyping',
    text: 'Our design team creates intuitive, user-centric interfaces. We build interactive prototypes to refine the user experience before development begins.',
  },
  {
    title: '3. Agile Development & Testing',
    text: 'Our developers bring the designs to life using cutting-edge technology. We follow an agile methodology with rigorous testing to ensure a flawless, high-performance product.',
  },
  {
    title: '4. Launch & Optimization',
    text: 'We handle the deployment and launch your project. Post-launch, we monitor performance and provide ongoing optimization to ensure continued growth and success.',
  },
];

export default function TimelineSlider() {
  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    arrows: false,
    responsive: [
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-arrow_style3">
      {timelineData.map((item, index) =>
        index % 2 === 0 ? (
          <Div key={index}>
            <Timeline columnData={timelineData[index]} />
            {timelineData[index + 1] && (
              <Timeline columnData={timelineData[index + 1]} />
            )}
          </Div>
        ) : null,
      )}
    </Slider>
  );
}
