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
      title: 'Business',
      url:'/'
    },
    {
      title: 'Agency',
      url:'/'
    },
    {
      title: 'Artwork',
      url:'/'
    },
    {
      title: 'Marketing',
      url:'/'
    },
    {
      title: 'Information',
      url:'/'
    },
    {
      title: 'Design',
      url:'/'
    },
    {
      title: 'Wordpress',
      url:'/'
    },
  ]
  const archiveData = [
    {
      title: 'Archives',
      url:'/'
    },
    {
      title: '15 Aug 2022',
      url:'/'
    },
    {
      title: '20 Sep 2021',
      url:'/'
    },
    {
      title: '11 Dec 2020',
      url:'/'
    },
    {
      title: '25 jun 2020',
      url:'/'
    }
  ]
  const categoryData = [
    {
      title: 'Corporate',
      url:'/'
    },
    {
      title: 'Company',
      url:'/'
    },
    {
      title: 'Search Engine',
      url:'/'
    },
    {
      title: 'Information',
      url:'/'
    },
    {
      title: 'Painting',
      url:'/'
    }
  ]
  const recentPostData = [
    {
      title: 'How to studio setup...',
      thumb: '/images/recent_post_1.jpeg',
      href: '/blog/blog-details',
      date: '15 Aug 2022'
    },
    {
      title: 'Creative people mind...',
      thumb: '/images/recent_post_2.jpeg',
      href: '/blog/blog-details',
      date: '14 Aug 2022'
    },
    {
      title: 'AI take over human...',
      thumb: '/images/recent_post_3.jpeg',
      href: '/blog/blog-details',
      date: '13 Aug 2022'
    },
    {
      title: 'You should now add...',
      thumb: '/images/recent_post_4.jpeg',
      href: '/blog/blog-details',
      date: '12 Aug 2022'
    },
  ]
  return (
    <>
      <Div className="cs-sidebar_item">
        <AuthorWidget
          src="/images/about_img_4.jpeg"
          name="remlyx"
          description="We are a digital agency that helps brands to achieve their business outcomes. We see technology as a tool to create amazing things."
        />
        <Spacing lg="50" md="30" />
        <h2 className="cs-widget_title">Categories</h2>
      </Div>
      <Div className="cs-sidebar_item">
        <SearchWidget title='Search'/>
      </Div>
      <Div className="cs-sidebar_item">
        <SideMenuWidget title='Categories' data={categoryData}/>
      </Div>
      <Div className="cs-sidebar_item">
        <RecentPost title='Archives' data={recentPostData}/>
      </Div>
      <Div className="cs-sidebar_item">
        <SideMenuWidget title='Archives' data={archiveData}/>
      </Div>
      <Div className="cs-sidebar_item">
        <TagWidget title='Tags' data={tagData}/>
      </Div>
    </>
  )
}
