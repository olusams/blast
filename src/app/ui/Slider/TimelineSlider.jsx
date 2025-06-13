import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Timeline from '../Timeline';
import { defaultSliderSettings } from '@/app/utils/sliderSettings';

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

export default function TimelineSlider() {
  const settings = {
    ...defaultSliderSettings,
    slidesToShow: 2,
    prevArrow: <SlickArrow aria-label="Previous" />,
    nextArrow: <SlickArrow aria-label="Next" />,
    arrows: true,
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
    <Slider
      {...settings}
      className="cs-arrow_style3"
      role="region"
      aria-label="Our Process"
    >
      {timelineData.map((item, index) => (
        <Div key={index}>
          <Timeline columnData={item} />
        </Div>
      ))}
    </Slider>
  );
}
