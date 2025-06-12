import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Div from '../Div';

export default function Team({
  memberImage,
  memberName,
  memberDesignation,
  memberSocial,
}) {
  const getStyles = (url) => {
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
    if (url.includes('youtube.com')) {
      return {
        backgroundColor: '#ff0000',
        borderColor: '#ff0000',
        color: '#fff'
      };
    }
    if (url.includes('facebook.com')) {
      return {
        backgroundColor: '#1877f2',
        borderColor: '#1877f2',
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
    <Div className="cs-team cs-style1">
      <Div className="cs-member_thumb">
        <img src={memberImage} alt={memberName} />
        <Div className="cs-member_overlay" />
      </Div>
      <Div className="cs-member_info">
        <h2 className="cs-member_name">
          <Link href="/team/team-details">{memberName}</Link>
        </h2>
        <Div className="cs-member_designation">{memberDesignation}</Div>
      </Div>
      <Div className="cs-member_social cs-primary_color">
        {memberSocial.linkedin && (
          <Link href={memberSocial.linkedin} style={getStyles(memberSocial.linkedin)} target="_blank" rel="noopener noreferrer">
            <Icon icon="fa6-brands:linkedin-in" width="16" height="16" />
          </Link>
        )}
        {memberSocial.twitter && (
          <Link href={memberSocial.twitter} style={getStyles(memberSocial.twitter)} target="_blank" rel="noopener noreferrer">
            <Icon icon="fa-brands:twitter" width="16" height="16" />
          </Link>
        )}
        {memberSocial.youtube && (
          <Link href={memberSocial.youtube} style={getStyles(memberSocial.youtube)} target="_blank" rel="noopener noreferrer">
            <Icon icon="fa-brands:youtube" width="16" height="16" />
          </Link>
        )}
        {memberSocial.facebook && (
          <Link href={memberSocial.facebook} style={getStyles(memberSocial.facebook)} target="_blank" rel="noopener noreferrer">
            <Icon icon="fa-brands:facebook-f" width="16" height="16" />
          </Link>
        )}
      </Div>
    </Div>
  );
}
