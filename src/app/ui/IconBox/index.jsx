import React from 'react';
import parse from 'html-react-parser';
import Div from '../Div';
import Image from 'next/image';

export default function IconBox({ title, subtitle, icon }) {
  return (
    <Div className="cs-iconbox cs-style1 text-center">
      <Div className="cs-iconbox_icon">
        <Image src={icon} alt="Icon" width={50} height={50} />
      </Div>
      <h2 className="cs-iconbox_title">{parse(title)}</h2>
      <Div className="cs-iconbox_subtitle">{parse(subtitle)}</Div>
    </Div>
  );
}
