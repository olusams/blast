import React from 'react';
import Link from 'next/link';
import Div from '../Div';
import Image from 'next/image';

export default function Card({ title, link, src, alt }) {
  return (
    <Link href={link} className="cs-card cs-style1">
      <>
        <Image src={src} alt={alt} fill sizes="100vw" />
        <Div className="cs-card_overlay" />
        <Div className="cs-card_info">
          <span className=" cs-hover_layer3 cs-accent_bg" />
          <h2 className="text-lg md:text-2xl [text-shadow:1px_1px_2px_rgba(0,0,0,0.5)]">{title}</h2>
        </Div>
      </>
    </Link>
  );
}
