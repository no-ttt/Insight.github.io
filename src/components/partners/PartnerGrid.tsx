import React from 'react';

const partners = [
  {
    name: "University of Malaysia",
    type: "Academic Institution",
    image: "https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Leading research in genomics and biotechnology"
  },
  {
    name: "National Research Center",
    type: "Research Institution",
    image: "https://images.pexels.com/photos/8851617/pexels-photo-8851617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Advanced facilities for genetic research"
  },
  {
    name: "Kuala Lumpur Medical Center",
    type: "Healthcare Provider",
    image: "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Pioneering personalized medicine applications"
  },
  {
    name: "BioTech Research Institute",
    type: "Research Institution",
    image: "https://images.pexels.com/photos/8851633/pexels-photo-8851633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Innovative genetic testing solutions"
  }
];

const PartnerGrid = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Partner Network
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">
                  {partner.type}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                  {partner.name}
                </h3>
                <p className="text-gray-600">
                  {partner.description}
                </p>
                <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerGrid;