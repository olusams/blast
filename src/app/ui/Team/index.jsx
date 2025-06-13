import React from 'react';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import Div from '@ui/Div';
import Image from 'next/image';
import SEOLink from '@components/SEOLink';
import StructuredData from '@components/StructuredData';

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
      'youtube.com': {
        background: 'linear-gradient(45deg, #ff0000, #cc0000)',
        borderColor: '#ff0000',
        color: '#fff',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: '0 5px 15px rgba(255, 0, 0, 0.3)'
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

  // Generate structured data for the team member
  const teamMemberSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: memberName,
    jobTitle: memberDesignation,
    image: memberImage,
    sameAs: Object.values(memberSocial).filter(Boolean)
  };

  return (
    <Div className="cs-team cs-style1" role="article" aria-label={`Team member: ${memberName}`}>
      <StructuredData data={teamMemberSchema} />
      <Div className="cs-member_thumb">
        <Image 
          src={memberImage} 
          alt={`${memberName} - ${memberDesignation}`}
          fill
          sizes="100vw"
          placeholder="blur"
          blurDataURL={memberImage}
          className="cs-member_image"
        />
        <Div className="cs-member_overlay" />
      </Div>
      <Div className="cs-member_info">
        <h2 className="cs-member_name">
          <SEOLink 
            href="/team/team-details" 
            title={`View details for ${memberName}`}
            aria-label={`View details for ${memberName}`}
          >
            {memberName}
          </SEOLink>
        </h2>
        <Div className="cs-member_designation">{memberDesignation}</Div>
      </Div>
      <Div className="cs-member_social cs-primary_color" role="list" aria-label="Social media links">
        {memberSocial.linkedin && (
          <SEOLink 
            href={memberSocial.linkedin} 
            style={getStyles(memberSocial.linkedin)} 
            role="listitem"
            title={`${memberName}'s LinkedIn profile`}
            aria-label={`${memberName}'s LinkedIn profile`}
            className="cs-social-link"
          >
            <Icon icon="fa6-brands:linkedin-in" width="16" height="16" aria-hidden="true" />
          </SEOLink>
        )}
        {memberSocial.twitter && (
          <SEOLink 
            href={memberSocial.twitter} 
            style={getStyles(memberSocial.twitter)} 
            role="listitem"
            title={`${memberName}'s Twitter profile`}
            aria-label={`${memberName}'s Twitter profile`}
            className="cs-social-link"
          >
            <Icon icon="fa-brands:twitter" width="16" height="16" aria-hidden="true" />
          </SEOLink>
        )}
        {memberSocial.youtube && (
          <SEOLink 
            href={memberSocial.youtube} 
            style={getStyles(memberSocial.youtube)} 
            role="listitem"
            title={`${memberName}'s YouTube channel`}
            aria-label={`${memberName}'s YouTube channel`}
            className="cs-social-link"
          >
            <Icon icon="fa-brands:youtube" width="16" height="16" aria-hidden="true" />
          </SEOLink>
        )}
        {memberSocial.facebook && (
          <SEOLink 
            href={memberSocial.facebook} 
            style={getStyles(memberSocial.facebook)} 
            role="listitem"
            title={`${memberName}'s Facebook profile`}
            aria-label={`${memberName}'s Facebook profile`}
            className="cs-social-link"
          >
            <Icon icon="fa-brands:facebook-f" width="16" height="16" aria-hidden="true" />
          </SEOLink>
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
