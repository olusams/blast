'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const HeroBackground = ({ title, subtitle, backgroundImage }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="cs-page_heading cs-style1">
      <div className="cs-page_heading_bg">
        <div className="cs-page_heading_overlay" />
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt={title}
            fill
            priority
            className={`cs-page_heading_img ${isLoaded ? 'loaded' : ''}`}
            style={{ objectFit: 'cover' }}
          />
        )}
      </div>
      <div className="container">
        <div className="cs-page_heading_in">
          <h1 className="cs-page_title cs-font_50 cs-white_color animate__animated animate__fadeInDown">
            {title}
          </h1>
          {subtitle && (
            <p className="cs-page_subtitle cs-white_color animate__animated animate__fadeInUp">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroBackground; 