import React from 'react';
const Navbar = () => {
  const scrollToFeatures = (e) => {
    e.preventDefault();
    const featuresSection = document.getElementById('features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-red-500 shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">Frontend Practice</div>
          <div className="flex space-x-6">
            <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#features" onClick={scrollToFeatures} className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;