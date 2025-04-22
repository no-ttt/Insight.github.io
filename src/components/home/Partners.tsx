import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Partners = () => {
  // In a real application, this would be dynamic data
  const partnerImages = [
    "/images/best-pals.jpg",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Partners & Collaborators
        </h2>

        <div className="relative max-w-6xl mx-auto">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100">
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <div className="overflow-hidden">
            <div className="px-16">
              <img src="/images/best-pals.jpg" alt="Best Pals" className="mx-auto h-32 object-contain" />
              {/* {partnerImages.map((img, index) => (
                <div key={index} className="w-1/2 px-4">
                  <img 
                    src={img} 
                    alt={`Partner ${index + 1}`} 
                    className="mx-auto h-32 object-contain"
                  />
                </div>
              ))} */}
            </div>
          </div>
          
          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100">
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;