import React from 'react';

const AboutHero = () => {
  return (
    <div className="w-full bg-white">
      {/* Colored bar */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-green-500 to-yellow-400 w-full"></div>
      
      <div className="flex flex-col-reverse lg:flex-row">
        {/* Left content section */}
        <div className="w-full lg:w-1/2 py-10 lg:py-16 px-6 md:px-12 bg-white">
          <div className="max-w-xl mx-auto lg:mr-0">
            <h3 className="text-2xl font-bold text-green-800 mb-2">Choose Insight to See the Future</h3>
            <h6 className="text-sm font-medium text-green-700 mb-6">Have INSIGHT to have a seeing into future.</h6>
            
            <div className="space-y-4 mb-8">
              {/* Professional */}
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col mb-2 md:mb-0 md:mr-4">
                  <div className="bg-blue-700 text-white px-4 py-1 rounded-r-full inline-block mb-1">
                    Professional
                  </div>
                  <div className="flex flex-col space-y-0.5">
                    <div className="h-0.5 w-12 bg-blue-700"></div>
                    <div className="h-0.5 w-12 bg-blue-700"></div>
                    <div className="h-0.5 w-12 bg-green-700"></div>
                    <div className="h-0.5 w-12 bg-green-700"></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  A research team consisting of Malaysia's excellent doctors, biologists, and medical technologists provides the most professional genetic testing services.
                </p>
              </div>
              
              {/* Precision */}
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col mb-2 md:mb-0 md:mr-4">
                  <div className="bg-green-700 text-white px-4 py-1 rounded-r-full inline-block mb-1">
                    Precision
                  </div>
                  <div className="flex flex-col space-y-0.5">
                    <div className="h-0.5 w-12 bg-green-700"></div>
                    <div className="h-0.5 w-12 bg-green-700"></div>
                    <div className="h-0.5 w-12 bg-green-500"></div>
                    <div className="h-0.5 w-12 bg-green-500"></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  High precision with up to 750,000 points, paired with advanced genomic databases, provides users with the best results.
                </p>
              </div>
              
              {/* High Quality */}
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col mb-2 md:mb-0 md:mr-4">
                  <div className="bg-green-500 text-white px-4 py-1 rounded-r-full inline-block mb-1">
                    High Quality
                  </div>
                  <div className="flex flex-col space-y-0.5">
                    <div className="h-0.5 w-12 bg-green-500"></div>
                    <div className="h-0.5 w-12 bg-green-500"></div>
                    <div className="h-0.5 w-12 bg-orange-500"></div>
                    <div className="h-0.5 w-12 bg-orange-500"></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Professional R&D team conducts testing and analysis entirely in Malaysia.
                </p>
              </div>
              
              {/* Comprehensive */}
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col mb-2 md:mb-0 md:mr-4">
                  <div className="bg-orange-500 text-white px-4 py-1 rounded-r-full inline-block mb-1">
                    Comprehensive
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Excellent after-sales service and secure privacy protection provide users with comprehensive care.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right image section */}
        <div className="w-full lg:w-1/2 relative overflow-hidden">
          {/* Diagonal white overlay for design */}
          <div className="hidden lg:block absolute top-0 left-0 h-[120%] w-[20%] bg-white transform rotate-12 -translate-x-10 -translate-y-10 z-10"></div>
          
          <img 
            src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Laboratory equipment" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;