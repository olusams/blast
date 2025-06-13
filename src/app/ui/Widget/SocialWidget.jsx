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
    const socialStyles = {
      'linkedin.com': {
        background: 'linear-gradient(45deg, #0077b5, #00a0dc)',
        borderColor: '#0077b5',
        color: '#fff',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: '0 5px 15px rgba(0, 119, 181, 0.3)'
        }
      },
      'twitter.com': {
        background: 'linear-gradient(45deg, #1da1f2, #0d8bd9)',
        borderColor: '#1da1f2',
        color: '#fff',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: '0 5px 15px rgba(29, 161, 242, 0.3)'
        }
      },
      'instagram.com': {
        background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
        borderColor: '#e4405f',
        color: '#fff',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: '0 5px 15px rgba(228, 64, 95, 0.3)'
        }
      },
      'facebook.com': {
        background: 'linear-gradient(45deg, #1877f2, #0d6efd)',
        borderColor: '#1877f2',
        color: '#fff',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: '0 5px 15px rgba(24, 119, 242, 0.3)'
        }
      }
    };

    for (const [platform, style] of Object.entries(socialStyles)) {
      if (url.includes(platform)) {
        return style;
      }
    }

    return {
      background: 'linear-gradient(45deg, #333, #666)',
      borderColor: '#fff',
      color: '#fff',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-3px)',
        boxShadow: '0 5px 15px rgba(255, 255, 255, 0.3)'
      }
    };
  };

  return (
    <Div className="cs-social_btns cs-style1">
      {defaultSocialData.map((item, index) => (
        <Link 
          href={item.url} 
          className="cs-center cs-social-link" 
          key={index} 
          target="_blank" 
          rel="noopener noreferrer"
          style={getStyles(item.url)}
          aria-label={`Visit our ${item.url.split('.')[1]} page`}
        >
          <Icon icon={item.icon} width="20" height="20" aria-hidden="true" />
        </Link>
      ))}
    </Div>
  );
}
