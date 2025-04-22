import React from 'react';

const TeamBanner = () => {
  return (
    <div className="container mx-auto my-12 px-4">
      <div className="border-t border-b border-gray-300 py-2 mb-8"></div>
      
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Our Team
        </h2>
        <p className="text-lg text-gray-600">
          Meet the experts behind our genetic innovation
        </p>
      </div>
      
      <div className="border-t border-b border-gray-300 py-2 mt-8 mb-8"></div>
    </div>
  );
};

export default TeamBanner;