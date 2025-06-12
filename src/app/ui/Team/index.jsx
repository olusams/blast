import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Div from '../Div';

/**
 * Team component displays a team member's information including their image, name, designation, and social media links.
 * @component
 * @param {Object} props - Component props
 * @param {string} props.memberImage - URL of the team member's image
 * @param {string} props.memberName - Name of the team member
 * @param {string} props.memberDesignation - Team member's job title or role
 * @param {Object} props.memberSocial - Object containing social media links
 * @param {string} [props.memberSocial.linkedin] - LinkedIn profile URL
 * @param {string} [props.memberSocial.twitter] - Twitter profile URL
 * @param {string} [props.memberSocial.youtube] - YouTube channel URL
 * @param {string} [props.memberSocial.facebook] - Facebook profile URL
 */
const Team = ({
  memberImage,
  memberName,
  memberDesignation,
  memberSocial,
}) => {
  const getStyles = (url) => {
    const socialStyles = {
      'linkedin.com': {
        backgroundColor: '#0077b5',
        borderColor: '#0077b5',
        color: '#fff'
      },
      'twitter.com': {
        backgroundColor: '#1da1f2',
        borderColor: '#1da1f2',
        color: '#fff'
      },
      'youtube.com': {
        backgroundColor: '#ff0000',
        borderColor: '#ff0000',
        color: '#fff'
      },
      'facebook.com': {
        backgroundColor: '#1877f2',
        borderColor: '#1877f2',
        color: '#fff'
      }
    };

    for (const [platform, style] of Object.entries(socialStyles)) {
      if (url.includes(platform)) {
        return style;
      }
    }

    return {
      backgroundColor: 'transparent',
      borderColor: '#fff',
      color: '#fff'
    };
  };

  return (
    <Div className="cs-team cs-style1" role="article" aria-label={`Team member: ${memberName}`}>
      <Div className="cs-member_thumb">
        <img 
          src={memberImage} 
          alt={`${memberName} - ${memberDesignation}`} 
          loading="lazy"
          width={300}
          height={300}
        />
        <Div className="cs-member_overlay" />
      </Div>
      <Div className="cs-member_info">
        <h2 className="cs-member_name">
          <Link href="/team/team-details" aria-label={`View details for ${memberName}`}>
            {memberName}
          </Link>
        </h2>
        <Div className="cs-member_designation">{memberDesignation}</Div>
      </Div>
      <Div className="cs-member_social cs-primary_color" role="list" aria-label="Social media links">
        {memberSocial.linkedin && (
          <Link 
            href={memberSocial.linkedin} 
            style={getStyles(memberSocial.linkedin)} 
            target="_blank" 
            rel="noopener noreferrer"
            role="listitem"
            aria-label={`${memberName}'s LinkedIn profile`}
          >
            <Icon icon="fa6-brands:linkedin-in" width="16" height="16" aria-hidden="true" />
          </Link>
        )}
        {memberSocial.twitter && (
          <Link 
            href={memberSocial.twitter} 
            style={getStyles(memberSocial.twitter)} 
            target="_blank" 
            rel="noopener noreferrer"
            role="listitem"
            aria-label={`${memberName}'s Twitter profile`}
          >
            <Icon icon="fa-brands:twitter" width="16" height="16" aria-hidden="true" />
          </Link>
        )}
        {memberSocial.youtube && (
          <Link 
            href={memberSocial.youtube} 
            style={getStyles(memberSocial.youtube)} 
            target="_blank" 
            rel="noopener noreferrer"
            role="listitem"
            aria-label={`${memberName}'s YouTube channel`}
          >
            <Icon icon="fa-brands:youtube" width="16" height="16" aria-hidden="true" />
          </Link>
        )}
        {memberSocial.facebook && (
          <Link 
            href={memberSocial.facebook} 
            style={getStyles(memberSocial.facebook)} 
            target="_blank" 
            rel="noopener noreferrer"
            role="listitem"
            aria-label={`${memberName}'s Facebook profile`}
          >
            <Icon icon="fa-brands:facebook-f" width="16" height="16" aria-hidden="true" />
          </Link>
        )}
      </Div>
    </Div>
  );
};

Team.propTypes = {
  memberImage: PropTypes.string.isRequired,
  memberName: PropTypes.string.isRequired,
  memberDesignation: PropTypes.string.isRequired,
  memberSocial: PropTypes.shape({
    linkedin: PropTypes.string,
    twitter: PropTypes.string,
    youtube: PropTypes.string,
    facebook: PropTypes.string,
  }).isRequired,
};

export default Team;
