import React from 'react';
import Div from '../Div';
import Image from 'next/image';

export default function TestimonialStyle2({
  avatarImgUrl,
  testimonialText,
  avatarName,
  avatarDesignation,
  ratings,
}) {
  return (
    <Div className="cs-testimonial cs-style3">
      <Div className="cs-client_info">
        <Div className="cs-client_img">
          <Image src={avatarImgUrl} alt="Avatar" width={50} height={50} />
        </Div>
        <Div className="cs-client_meta">
          <h4 className="cs-client_name">{avatarName}</h4>
          <p className="cs-client_designation mb-0">{avatarDesignation}</p>
        </Div>
      </Div>
      <p className="cs-client_review">{testimonialText}</p>
      <Div className="cs-rating">
        <Div
          className="cs-rating_bg"
          style={{ backgroundImage: 'url(/images/rating.svg)' }}
        />
        <Div
          className="cs-rating_percentage"
          style={{
            backgroundImage: 'url(/images/rating.svg)',
            width: `${ratings * 20}%`,
          }}
        />
      </Div>
    </Div>
  );
}
