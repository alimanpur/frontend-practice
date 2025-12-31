import React from 'react';
import { teamMembersData } from '../data/Data.js';
import { FaTwitter, FaFacebook, FaInstagram, FaGithub, FaSkype } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { RiBasketballLine } from 'react-icons/ri';

const TeamSection = () => {
  const getIcon = (platform) => {
    switch (platform) {
      case 'twitter': return <FaTwitter />;
      case 'facebook': return <FaFacebook />;
      case 'instagram': return <FaInstagram />;
      case 'github': return <FaGithub />;
      case 'skype': return <FaSkype />;
      case 'gmail': return <SiGmail />;
      case 'dribbble': return <RiBasketballLine />;
      default: return null;
    }
  };

  return (
    <section className="team-section">
      <div className="team-container">
        {/* Header Section */}
        <div className="team-header">
          <h2 className="team-main-title">Startup Crew</h2>
          <p className="team-main-desc">
            The most important part of the Startup Framework is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks from UI Kit.
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {teamMembersData.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-img-wrapper">
                <img src={member.image} alt={member.name} className="team-img" />
              </div>

              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-role">{member.role}</p>

              <div className="team-social-links">
                {member.socials.map((platform, index) => (
                  <a key={index} href="#" className="team-social-icon">
                    {getIcon(platform)}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;