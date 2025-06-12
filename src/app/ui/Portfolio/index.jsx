import React from 'react';
import Link from 'next/link';
import Div from '../Div';
import Image from 'next/image';

export default function Portfolio({ href, src, title, subtitle, variant }) {
  return (
    <Link
      href={href}
      className={`cs-portfolio cs-bg ${variant ? variant : 'cs-style1'}`}
    >
      <>
        <Div className="cs-portfolio_hover" />
        <Image
          src={src}
          alt={title}
          className="cs-portfolio_bg"
          width={500}
          height={500}
          placeholder="blur"
          blurDataURL="/images/blur.jpg"
        />
        <Div className="cs-portfolio_info">
          <Div className="cs-portfolio_info_bg cs-accent_bg" />
          <h2 className="cs-portfolio_title">{title}</h2>
          <Div className="cs-portfolio_subtitle">{subtitle}</Div>
          <Div className="cs-portfolio_btn">View Project</Div>
        </Div>
      </>
    </Link>
  );
}
