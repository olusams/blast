import React from 'react';
import parse from 'html-react-parser';
import Div from '../Div';
import Button from '../Button';
import VerticalLinks from '../VerticalLinks';

export default function Hero({
  title,
  subtitle,
  btnText,
  btnLink,
  scrollDownId,
  socialLinksHeading,
  heroSocialLinks,
  bgImageUrl,
}) {
  return (
    <Div
      className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1 pt-40"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="container">
        <Div className="cs-hero_text pt-12">
          <h1 className="text-base lg:text-5xl font-bold">
            {parse(title || '')}
          </h1>
          <Div className="flex flex-col-reverse lg:flex-row items-start lg:items-center">
            <Div className="mt-6 lg:mt-0">
              <Button btnLink={btnLink} btnText={btnText} />
            </Div>
            <Div className="mt-6 lg:mt-0 lg:ml-12">
              <Div className="text-lg lg:text-xl max-w-lg">{subtitle}</Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
      <a href={scrollDownId} className="cs-down_btn">
        .
      </a>
    </Div>
  );
}
