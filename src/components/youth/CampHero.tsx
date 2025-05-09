import React from 'react';

const CampHero = () => {
  return (
    <div className="relative bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-4">YOUTH CAMP</h1>
            <p className="text-xl mb-8">Discover the World of Genetics</p>
            <a 
              href="#registration"
              className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition"
            >
              Register Now
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.pexels.com/photos/8851617/pexels-photo-8851617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Youth Camp"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute left-0 bottom-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500"></div>
    </div>
  );
};

export default CampHero;