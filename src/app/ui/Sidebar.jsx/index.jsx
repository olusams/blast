import React from 'react'
import Div from '../Div'
import AuthorWidget from '../Widget/AuthorWidget'
import RecentPost from '../Widget/RecentPost'
import SearchWidget from '../Widget/SearchWidget'
import SideMenuWidget from '../Widget/SideMenuWidget'
import TagWidget from '../Widget/TagWidget'
import Spacing from '../Spacing'

export default function Sidebar() {
  const tagData = [
    {
      title: 'Web Development',
      url:'/blog?tag=web-development'
    },
    {
      title: 'Digital Strategy',
      url:'/blog?tag=digital-strategy'
    },
    {
      title: 'UI/UX Design',
      url:'/blog?tag=ui-ux-design'
    },
    {
      title: 'eCommerce',
      url:'/blog?tag=ecommerce'
    },
    {
      title: 'Business Growth',
      url:'/blog?tag=business-growth'
    },
    {
      title: 'Technology',
      url:'/blog?tag=technology'
    },
    {
      title: 'Digital Marketing',
      url:'/blog?tag=digital-marketing'
    },
  ]
  const archiveData = [
    {
      title: 'Archives',
      url:'/blog'
    },
    {
      title: 'March 2024',
      url:'/blog?month=2024-03'
    },
    {
      title: 'February 2024',
      url:'/blog?month=2024-02'
    },
    {
      title: 'January 2024',
      url:'/blog?month=2024-01'
    },
    {
      title: 'December 2023',
      url:'/blog?month=2023-12'
    }
  ]
  const categoryData = [
    {
      title: 'Web Development',
      url:'/blog?category=web-development'
    },
    {
      title: 'Digital Strategy',
      url:'/blog?category=digital-strategy'
    },
    {
      title: 'UI/UX Design',
      url:'/blog?category=ui-ux-design'
    },
    {
      title: 'eCommerce',
      url:'/blog?category=ecommerce'
    },
    {
      title: 'Business Growth',
      url:'/blog?category=business-growth'
    }
  ]
  const recentPostData = [
    {
      title: 'Digital Transformation: The Key to Business Growth in 2024',
      thumb: '/images/recent_post_1.jpeg',
      href: '/blog/blog-details',
      date: 'March 7, 2024'
    },
    {
      title: 'Bespoke Web Development: Creating Custom Solutions for Your Business',
      thumb: '/images/recent_post_2.jpeg',
      href: '/blog/blog-details',
      date: 'March 5, 2024'
    },
    {
      title: 'The Impact of AI on Modern Business Operations',
      thumb: '/images/recent_post_3.jpeg',
      href: '/blog/blog-details',
      date: 'March 4, 2024'
    },
    {
      title: 'Optimizing Your Digital Strategy for Maximum ROI',
      thumb: '/images/recent_post_4.jpeg',
      href: '/blog/blog-details',
      date: 'March 3, 2024'
    },
  ]
  return (
    <>
      <Div className="cs-sidebar_item">
        <AuthorWidget
          src="/images/about_img_4.jpeg"
          name="Remlyx Digital"
          description="Based in Leeds, we are a leading digital agency specializing in bespoke web development, UI/UX design, and digital strategy. Our team combines technical expertise with creative innovation to deliver powerful digital solutions that drive business growth and create lasting value for our clients."
        />
        <Spacing lg="50" md="30" />
        <h2 className="cs-widget_title">Categories</h2>
      </Div>
      <Div className="cs-sidebar_item">
        <SearchWidget title='Search Digital Insights'/>
      </Div>
      <Div className="cs-sidebar_item">
        <SideMenuWidget title='Categories' data={categoryData}/>
      </Div>
      <Div className="cs-sidebar_item">
        <RecentPost title='Latest Articles' data={recentPostData}/>
      </Div>
      <Div className="cs-sidebar_item">
        <SideMenuWidget title='Archives' data={archiveData}/>
      </Div>
      <Div className="cs-sidebar_item">
        <TagWidget title='Popular Topics' data={tagData}/>
      </Div>
    </>
  )
}
