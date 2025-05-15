
import React from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import Testimonials from '../../components/home/Testimonials';

const promotions = [
  {
    id: 1,
    title: "Kidney Health Package",
    subtitle: "March 12 is World Kidney Day",
    description: "Take care of your kidney health with our comprehensive genetic testing package. Early detection helps prevent future complications.",
    image: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg",
    testingTime: "7 working days",
    method: "Oral swab",
    price: 12900,
    originalPrice: 16900
  },
  // Add more promotions...
];

const PromotionsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold text-center mb-12">Special Promotions</h1>
          
          <div className="space-y-12">
            {promotions.map(promo => (
              <div key={promo.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2">
                    <img
                      src={promo.image}
                      alt={promo.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="bg-red-50 text-red-600 px-4 py-1 rounded-full inline-block mb-4">
                      Limited Time Offer
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{promo.title}</h2>
                    <p className="text-gray-600 mb-6">{promo.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between">
                        <span>Testing Time:</span>
                        <span>{promo.testingTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Method:</span>
                        <span>{promo.method}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Price:</span>
                        <div>
                          <span className="text-2xl font-bold text-red-600">
                            NT$ {promo.price.toLocaleString()}
                          </span>
                          <span className="ml-2 text-gray-500 line-through">
                            NT$ {promo.originalPrice.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                        Add to Cart
                      </button>
                      <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default PromotionsPage;
