import React from 'react';

const PartnerHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Partner Institutions
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Join our network of leading research institutions and healthcare providers
              in advancing genetic research and precision medicine.
            </p>
            <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition">
              Become a Partner
            </button>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Research Laboratory"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500"></div>
    </section>
  );
};

export default PartnerHero;