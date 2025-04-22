import React from 'react';

const ExecutiveProfile = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <img 
              src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="General Manager" 
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover mx-auto shadow-lg"
            />
          </div>
          
          <div className="w-full md:w-1/4 mb-8 md:mb-0 text-center md:text-left">
            <div>
              <p className="text-gray-600 text-sm">
                General Manager
              </p>
              <p className="text-gray-600 text-sm mb-2">
                Chief Executive Officer
              </p>
              <h2 className="text-3xl font-bold text-gray-800">Sarah Wong</h2>
              <h3 className="text-xl text-gray-700">WONG SARAH</h3>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="relative max-w-md">
              <p className="text-3xl text-gray-400 italic leading-relaxed">
                "Giving every child a chance at a healthy future!"
              </p>
              <div className="absolute -top-6 -left-6 text-8xl text-gray-200 opacity-50">"</div>
              <div className="absolute -bottom-6 -right-6 text-8xl text-gray-200 opacity-50">"</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveProfile;