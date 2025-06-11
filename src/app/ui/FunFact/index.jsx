'use client';
import React, { useState, useEffect } from 'react';
import Div from '../Div';

const CountUp = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
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

  return <span>{count}</span>;
};

export default function FunFact({ variant, title, subtitle, data }) {
  return (
    <Div className={variant ? `cs-funfact_wrap ${variant}` : 'cs-funfact_wrap'}>
      <Div
        className="cs-funfact_shape"
        style={{ backgroundImage: 'url(/images/funfact_shape_bg.svg)' }}
      />
      <Div className="cs-funfact_left">
        <Div className="cs-funfact_heading">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </Div>
      </Div>
      <Div className="cs-funfact_right">
        <Div className="cs-funfacts">
          {data.map((item, index) => (
            <Div className="cs-funfact cs-style1" key={index}>
              <Div
                className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color"
                style={{ color: item.color }}
              >
                <CountUp end={item.factNumber} duration={2000} />
              </Div>
              <Div className="cs-funfact_text">
                <span className="cs-accent_color">+</span>
                <p>{item.title}</p>
              </Div>
            </Div>
          ))}
        </Div>
      </Div>
    </Div>
  );
}
