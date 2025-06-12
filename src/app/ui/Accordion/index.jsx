import React, { useState } from 'react';
import Div from '../Div';

const accordionData = [
  {
    title: 'What is the process for bespoke web development?',
    content: 'Our process begins with a deep dive into your business goals. We then move to wireframing, UI/UX design, development, and rigorous testing to ensure a flawless final product.',
  },
  {
    title: 'How do you approach UI/UX design?',
    content: 'We focus on creating intuitive, user-centric designs that are both beautiful and functional. Our design process is collaborative and iterative, ensuring the final product aligns perfectly with your brand and user needs.',
  },
  {
    title: 'What is your expertise in eCommerce solutions?',
    content: 'We build robust, scalable, and secure eCommerce platforms that drive sales and provide a seamless customer experience. We have experience with a variety of platforms and can help you choose the best one for your business.',
  },
  {
    title: 'How do you handle SEO and digital strategy?',
    content: 'Our SEO strategies are data-driven and tailored to your specific business goals. We focus on on-page, off-page, and technical SEO to improve your search engine rankings and drive organic traffic.',
  },
  {
    title: 'Do you provide ongoing support and maintenance?',
    content: 'Yes, we offer a range of support and maintenance packages to ensure your website or application remains secure, up-to-date, and performing at its best.',
  },
];

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <Div
      className={`cs-accordian ${isOpen ? 'active' : ''}`}
    >
      <Div
        className="cs-accordian_head"
        onClick={onClick}
      >
        <h2 className="cs-accordian_title">{title}</h2>
        <span className="cs-accordian_toggle cs-accent_color">
          <svg
            width={15}
            height={8}
            viewBox="0 0 15 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
          </svg>
        </span>
      </Div>
      <Div className="cs-accordian_body">
        <Div className="cs-accordian_body_in">{content}</Div>
      </Div>
    </Div>
  );
};

export default function Accordion() {
  const [selected, setSelected] = useState(0);
  const handelToggle = index => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={selected === index}
          onClick={() => handelToggle(index)}
        />
      ))}
    </Div>
  );
}
