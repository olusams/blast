import React from 'react';
import Link from 'next/link';
import Div from '../Div';
import Image from 'next/image';

export default function Post({ url, src, alt, date, title }) {
  return (
    <Div className="cs-post cs-style1">
      <Link href={url} className="cs-post_thumb">
        <Image src={src} alt={alt} fill sizes="100vw"/>
        <Div className="cs-post_overlay" />
      </Link>
      <Div className="cs-post_info">
        <Div className="cs-posted_by">{date}</Div>
        <h2 className="cs-post_title">
          <Link href="blog-details.html">{title}</Link>
        </h2>
      </Div>
    </Div>
  );
}
