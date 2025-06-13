import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Post from '../Post';
import { defaultSliderSettings } from '@/app/utils/sliderSettings';

const postData = [
  {
    url: '/blog/blog-details',
    src: '/images/post_1.jpeg',
    alt: 'Post',
    date: '18 Oct 2023',
    title: 'The Future of Web Development: Trends to Watch in 2024',
  },
  {
    url: '/blog/blog-details',
    src: '/images/post_2.jpeg',
    alt: 'Post',
    date: '23 Sep 2023',
    title: 'Why a Strong UI/UX Is Non-Negotiable for Business Success',
  },
  {
    url: '/blog/blog-details',
    src: '/images/post_3.jpeg',
    alt: 'Post',
    date: '12 Aug 2023',
    title: 'Maximizing Your ROI with a Strategic SEO Approach',
  },
  {
    url: '/blog/blog-details',
    src: '/images/post_1.jpeg',
    alt: 'Post',
    date: '18 Oct 2023',
    title: 'The Future of Web Development: Trends to Watch in 2024',
  },
  {
    url: '/blog/blog-details',
    src: '/images/post_2.jpeg',
    alt: 'Post',
    date: '23 Sep 2023',
    title: 'Why a Strong UI/UX Is Non-Negotiable for Business Success',
  },
  {
    url: '/blog/blog-details',
    src: '/images/post_3.jpeg',
    alt: 'Post',
    date: '12 Aug 2023',
    title: 'Maximizing Your ROI with a Strategic SEO Approach',
  },
];

export default function PostSlider() {
  const settings = {
    ...defaultSliderSettings,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider
      {...settings}
      className="cs-gap-24"
      role="region"
      aria-label="Recent Posts"
    >
      {postData.map((item, index) => (
        <Div key={index} as="li">
          <Post
            url={item.url}
            src={item.src}
            alt={item.title}
            date={item.date}
            title={item.title}
          />
        </Div>
      ))}
    </Slider>
  );
}
