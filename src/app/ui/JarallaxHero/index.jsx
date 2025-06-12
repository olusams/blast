'use client';
import { useEffect, useRef } from 'react';
import 'jarallax/dist/jarallax.css';

export default function JarallaxHero({ image, title, subtitle }) {
  const jarallaxRef = useRef(null);

  useEffect(() => {
    // Ensure this code runs only on the client
    if (typeof window !== 'undefined') {
      const { jarallax } = require('jarallax');
      const jarallaxElement = jarallaxRef.current;
      jarallax(jarallaxElement, {
        speed: 0.2,
      });

      return () => {
        if (jarallaxElement) {
          jarallax(jarallaxElement, 'destroy');
        }
      };
    }
  }, []);

  return (
    <div
      ref={jarallaxRef}
      className="vlt-hero-title-holder jarallax"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="vlt-hero-title-inner">
        <h1 className="vlt-hero-title">{title}</h1>
        {subtitle && <p className="vlt-hero-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
} 