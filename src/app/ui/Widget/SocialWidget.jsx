'use client';
import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Div from '@/app/ui/Div';

const defaultSocialData = [
  {
    icon: 'fa-brands:facebook-f',
    url: 'https://facebook.com'
  },
  {
    icon: 'fa-brands:twitter',
    url: 'https://twitter.com'
  },
  {
    icon: 'fa-brands:linkedin-in',
    url: 'https://linkedin.com'
  },
  {
    icon: 'fa-brands:instagram',
    url: 'https://instagram.com'
  }
];

export default function SocialWidget() {
  const getStyles = (url) => {
    if (url.includes('facebook.com')) {
      return {
        backgroundColor: '#1877f2',
        borderColor: '#1877f2',
        color: '#fff'
      };
    }
    if (url.includes('linkedin.com')) {
      return {
        backgroundColor: '#0077b5',
        borderColor: '#0077b5',
        color: '#fff'
      };
    }
    if (url.includes('twitter.com')) {
      return {
        backgroundColor: '#1da1f2',
        borderColor: '#1da1f2',
        color: '#fff'
      };
    }
    if (url.includes('instagram.com')) {
      return {
        background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
        borderColor: '#e4405f',
        color: '#fff'
      };
    }
    return {
      backgroundColor: 'transparent',
      borderColor: '#fff',
      color: '#fff'
    };
  };

  return (
    <Div className="cs-social_btns cs-style1">
      {defaultSocialData.map((item, index) => (
        <Link 
          href={item.url} 
          className="cs-center" 
          key={index} 
          target="_blank" 
          rel="noopener noreferrer"
          style={getStyles(item.url)}
        >
          <Icon icon={item.icon} width="20" height="20" />
        </Link>
      ))}
    </Div>
  );
}
