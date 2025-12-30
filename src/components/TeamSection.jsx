import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaGithub, FaSkype } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { RiBasketballLine } from 'react-icons/ri';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Leah Salomon",
      role: "UI Designer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      socialLinks: [
        { platform: "twitter", icon: <FaTwitter />, url: "#" },
        { platform: "facebook", icon: <FaFacebook />, url: "#" },
        { platform: "dribbble", icon: <RiBasketballLine />, url: "#" },
        { platform: "instagram", icon: <FaInstagram />, url: "#" }
      ]
    },
    {
      id: 2,
      name: "Colin Timmons",
      role: "UX Designer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      socialLinks: [
        { platform: "twitter", icon: <FaTwitter />, url: "#" },
        { platform: "dribbble", icon: <RiBasketballLine />, url: "#" }
      ]
    },
    {
      id: 3,
      name: "Miguel Osborne",
      role: "Front-end Developer",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      socialLinks: [
        { platform: "skype", icon: <FaSkype />, url: "#" },
        { platform: "medium", icon: <SiGmail />, url: "#" },
        { platform: "github", icon: <FaGithub />, url: "#" }
      ]
    },
    {
      id: 4,
      name: "Taylor Simon",
      role: "Product Manager",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      socialLinks: [
        { platform: "twitter", icon: <FaTwitter />, url: "#" },
        { platform: "instagram", icon: <FaInstagram />, url: "#" }
      ]
    },
    {
      id: 5,
      name: "Steven MacAlister",
      role: "Copyrighter",
      image: "https://randomuser.me/api/portraits/men/58.jpg",
      socialLinks: [
        { platform: "twitter", icon: <FaTwitter />, url: "#" }
      ]
    }
  ];

  return (
    <div style={{
      background: '#2f1893',
      padding: '100px 20px',
      minHeight: '800px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header Section */}
        <div style={{
          textAlign: 'left',
          marginBottom: '100px'
        }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '700',
            color: 'white',
            margin: '0 0 30px 0',
            fontFamily: 'Arial, sans-serif'
          }}>
            Startup Crew
          </h2>
          <p style={{
            fontSize: '22px',
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.6',
            maxWidth: '650px',
            margin: 0,
            fontFamily: 'Arial, sans-serif'
          }}>
            The most important part of the Startup Framework is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks from UI Kit.
          </p>
        </div>

        {/* Team Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: '80px 0',
          justifyItems: 'left',
          maxWidth: '900px',
          margin: '0 0'
        }}>
          {teamMembers.map((member) => (
            <div
              key={member.id}
              style={{
                textAlign: 'center',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Profile Image */}
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                overflow: 'hidden',
                margin: '0 auto 25px',
                transition: 'transform 0.3s ease'
              }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Name */}
              <h3 style={{
                fontSize: '22px',
                fontWeight: '500',
                color: 'white',
                margin: '0 0 5px 0',
                fontFamily: 'Arial, sans-serif'
              }}>
                {member.name}
              </h3>

              {/* Role */}
              <p style={{
                fontSize: '14px',
                fontWeight: '400',
                color: 'rgba(255, 255, 255, 0.7)',
                margin: '0 0 25px 0',
                fontFamily: 'Arial, sans-serif'
              }}>
                {member.role}
              </p>

              {/* Social Links */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '12px'
              }}>
                {member.socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '36px',
                      height: '36px',
                      color: 'white',
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;