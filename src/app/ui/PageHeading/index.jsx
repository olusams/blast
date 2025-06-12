'use client';
import React from 'react';
import Link from "next/link";;
import Div from '@ui/Div';
import { useDynamicBg } from '@context/DynamicBgContext';

export default function PageHeading({ title, bgSrc, pageLinkText }) {
  const { heroImage } = useDynamicBg();
  const finalBgSrc = heroImage || bgSrc;

  return (
    <Div
      className="cs-page_heading cs-style1 cs-center text-center cs-bg"
      style={{ backgroundImage: `url(${finalBgSrc})` }}
    >
      <Div className="container">
        <Div className="cs-page_heading_in">
          <h1 className="cs-page_title cs-font_50 cs-white_color">{title}</h1>
          <ol className="breadcrumb text-uppercase">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">{pageLinkText}</li>
          </ol>
        </Div>
      </Div>
    </Div>
  );
}
