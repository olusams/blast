'use client';
import React, { useState, useEffect } from 'react';
import Div from '../Div';

const CountUp = ({ end, duration, 'aria-hidden': ariaHidden }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Prefers reduced motion check
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setCount(end);
      return;
    }

    let start = 0;
    const endNum = parseInt(end, 10);
    if (start === endNum) return;

    let totalMilSecDur = parseInt(duration, 10);
    let a = totalMilSecDur / endNum;
    let incrementTime = a > 50 ? 50 : a;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === endNum) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span aria-hidden={ariaHidden}>{count}</span>;
};

export default function FunFact({ variant, title, subtitle, data }) {
  return (
    <Div
      as="section"
      className={variant ? `cs-funfact_wrap ${variant}` : 'cs-funfact_wrap'}
      aria-labelledby="funfact-heading"
    >
      <Div
        className="cs-funfact_shape"
        style={{ backgroundImage: 'url(/images/funfact_shape_bg.svg)' }}
      />
      <Div className="cs-funfact_left">
        <Div className="cs-funfact_heading">
          <h2 id="funfact-heading">{title}</h2>
          <p>{subtitle}</p>
        </Div>
      </Div>
      <Div className="cs-funfact_right">
        <ul className="cs-funfacts">
          {data.map((item, index) => {
            const number = parseInt(item.factNumber, 10);
            const suffix = item.factNumber.replace(number.toString(), '');
            const fullNumber = `${number}${suffix}`;
            return (
              <li className="cs-funfact cs-style1" key={index}>
                <Div
                  className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color"
                  style={{ color: item.color }}
                >
                  <span className="cs-sr_only">
                    {item.title}: {fullNumber}
                  </span>
                  <CountUp end={number} duration={2000} aria-hidden="true" />
                  <span aria-hidden="true">{suffix}</span>
                </Div>
                <Div className="cs-funfact_text">
                  <span className="cs-accent_color" />
                  <p>{item.title}</p>
                </Div>
              </li>
            );
          })}
        </ul>
      </Div>
    </Div>
  );
}
