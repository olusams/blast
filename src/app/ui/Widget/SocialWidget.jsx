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

  return (
    <Div className="cs-social_btns cs-style1">
      {socialData.map((item, index) => (
        <Link href={item.url} className="cs-center" key={index}>
          <Icon icon={item.icon} />
        </Link>
      ))}
    </Div>
  );
}
