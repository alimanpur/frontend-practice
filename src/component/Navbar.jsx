import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  // Logic for active links to avoid repeating classes
  const linkStyles = ({ isActive }) => 
    `px-4 py-2 rounded-md transition-colors ${
      isActive 
        ? 'bg-brand-primary text-white' 
        : 'text-brand-muted hover:text-brand-dark hover:bg-gray-100'
    }`;

  return (
    <nav className="bg-surface-card border-b border-surface-border sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-xl font-bold text-brand-dark tracking-tight">
          Community<span className="text-brand-primary">Hub</span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-4 font-medium">
          <NavLink to="/" className={linkStyles}>
            Home
          </NavLink>
          <NavLink to="/community" className={linkStyles}>
            Community
          </NavLink>
        </div>

        {/* Action Button (Optional based on Figma) */}
        <Button variant="secondary" size="sm">Join Now</Button>
      </div>
    </nav>
  );
};

export default Navbar;