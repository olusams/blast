import React from 'react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';

const testimonialData = [
  {
    testimonialText:
      'Partnering with Remlyx was a pivotal moment for our business. Their exceptional team delivered a visually stunning, high-performance website that significantly boosted our online presence and drove measurable growth. Their unwavering commitment and meticulous attention to detail were evident in every aspect of the project.',
    avatarName: 'Sarah Johnson',
    avatarDesignation: 'CEO, Innovate Ltd.',
    ratings: '5',
  },
  {
    testimonialText:
      'Remlyx is more than an agency; they are a true strategic partner. They invested the time to deeply understand our vision and masterfully translated it into a digital experience that far exceeded our expectations. Their world-class expertise in UI/UX is unmatched and has transformed our user engagement.',
    avatarName: 'Linda Chen',
    avatarDesignation: 'Marketing Director, Tech Solutions',
    ratings: '5',
  },
];

export default function TestimonialSection({ testimonialData: customTestimonialData }) {
  const data = customTestimonialData || testimonialData;
  return (
    <>
      <Spacing lg="130" md="80" />
      <Div className="container">
        <Div className="cs-testimonial_slider">
          {data.map((item, index) => (
            <Div key={index}>
              <Testimonial
                testimonialText={item.testimonialText}
                avatarName={item.avatarName}
                avatarDesignation={item.avatarDesignation}
                ratings={item.ratings}
              />
            </Div>
          ))}
        </Div>
      </Div>
      <Spacing lg="130" md="80" />
    </>
  );
} 