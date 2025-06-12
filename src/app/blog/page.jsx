'use client'

import { useEffect } from 'react';
import { useDynamicBg } from '../context/DynamicBgContext';
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import Pagination from "@/app/ui/Pagination";
import PostStyle2 from "@/app/ui/Post/PostStyle2";
import Sidebar from "@/app/ui/Sidebar.jsx/index.jsx";
import Spacing from "@/app/ui/Spacing";

const postData = [
  {
    thumb: '/images/post_4.jpeg',
    title: 'Digital Transformation: The Key to Business Growth in 2024',
    subtitle:
      'In today\'s rapidly evolving digital landscape, businesses must adapt to stay competitive. This article explores how digital transformation strategies can drive growth, improve efficiency, and create new opportunities. Learn how Remlyx helps businesses leverage technology to achieve their goals and maintain a competitive edge in their industry.',
    date: 'March 7, 2024',
    category: 'Digital Strategy',
    categoryHref: '/blog',
    href: '/blog/blog-details',
  },
  {
    thumb: '/images/post_5.jpeg',
    title: 'Bespoke Web Development: Creating Custom Solutions for Your Business',
    subtitle:
      'Every business has unique needs and challenges. Our bespoke web development approach ensures that your digital solution is tailored to your specific requirements. Discover how Remlyx combines technical expertise with creative innovation to build powerful, scalable, and user-friendly web applications that drive results.',
    date: 'March 5, 2024',
    category: 'Web Development',
    categoryHref: '/blog',
    href: '/blog/blog-details',
  },
  {
    thumb: '/images/post_6.jpeg',
    title: 'The Impact of AI on Modern Business Operations',
    subtitle:
      'Artificial Intelligence is revolutionizing how businesses operate and compete. From automating routine tasks to providing deep insights through data analysis, AI is becoming an essential tool for growth. Learn how Remlyx helps businesses integrate AI solutions to enhance efficiency, improve decision-making, and create new opportunities.',
    date: 'March 4, 2024',
    category: 'Technology',
    categoryHref: '/blog',
    href: '/blog/blog-details',
  },
];

export default function BlogPage() {
  const { setBackground, setHeroImage } = useDynamicBg();

  useEffect(() => {
    setBackground('/images/funfact_bg.jpeg');
    setHeroImage('/images/blog_hero_bg.jpeg');
    return () => {
      setBackground('');
      setHeroImage('');
    }
  }, [setBackground, setHeroImage]);

  return (
    <>
      <PageHeading
        title="Digital Insights & Industry Trends"
        pageLinkText="Blog"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">
            {postData.map((item, index) => (
              <Div key={index}>
                <PostStyle2
                  thumb={item.thumb}
                  title={item.title}
                  subtitle={item.subtitle}
                  date={item.date}
                  category={item.category}
                  categoryHref={item.categoryHref}
                  href={item.href}
                />
                {postData.length > index + 1 && <Spacing lg="95" md="60" />}
              </Div>
            ))}
            <Spacing lg="60" md="40" />
            <Pagination />
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            <Spacing lg="0" md="80" />
            <Sidebar />
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Ready to Transform Your Business <br />With <i>Digital Solutions</i>?"
          btnText="Start Your Project"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
}
