'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  const [socialData, setSocialData] = useState([]);

  useEffect(() => {
    const fetchSocialData = async () => {
      try {
        const response = await fetch('/data/social.json');
        const data = await response.json();
        setSocialData(data);
      } catch (error) {
        console.error('Error fetching social data:', error);
      }
    };

    fetchSocialData();
  }, []);

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
    if (url.includes('pinterest.com')) {
      return {
        backgroundColor: '#bd081c',
        borderColor: '#bd081c',
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
    if (url.includes('tiktok.com')) {
      return {
        background: 'linear-gradient(45deg, #ff0050, #00f2ea)',
        borderColor: '#000000',
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
      {socialData.map((item, index) => (
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
