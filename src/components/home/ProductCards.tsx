import React from 'react';
import { ArrowRight } from 'lucide-react';

const productCards = [
  {
    id: 1,
    title: "Women's Common Disease Genetic Testing",
    description: "Brain tumors, nasopharyngeal cancer, lung cancer, and other common diseases affecting women."
  },
  {
    id: 2,
    title: "Men's Health Genetic Analysis",
    description: "Prostate cancer, cardiovascular disease, and other conditions with genetic predispositions in men."
  },
  {
    id: 3,
    title: "Cancer Risk Assessment",
    description: "Comprehensive analysis of genetic risk factors for various types of cancer."
  },
  {
    id: 4,
    title: "Cardiovascular Disease Risk",
    description: "Genetic testing for heart disease, stroke risk factors, and related conditions."
  },
  {
    id: 5,
    title: "Metabolic Health Screening",
    description: "Analysis of genetic factors affecting metabolism, diabetes risk, and obesity."
  }
];

const ProductCards = () => {
  return (
    <section className="py-16">
      <div className="relative container mx-auto px-4">
        <div className="relative mb-12 flex flex-col md:flex-row items-center justify-center">
          <div className="bg-white shadow-lg rounded-lg p-4 relative z-10 max-w-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              You Might Be Interested In
            </h2>
            <div className="h-1 w-24 bg-yellow-400 mb-4"></div>
            <p className="text-gray-600 text-right text-lg">
              Multiple popular tests you can easily do at home!
            </p>
            
            {/* Yellow decorative elements */}
            <div className="absolute top-4 right-0 w-4 h-16 bg-yellow-400 translate-x-1/2 -translate-y-1/4 -rotate-45"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {productCards.map((card) => (
            <div 
              key={card.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {card.description}
                </p>
                <div className="flex justify-center">
                  <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition duration-300">
                    Get Tested
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;