import React from 'react';

const ServiceDetail = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Research Service"
              className="rounded-2xl shadow-lg"
            />
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Microbiome Array Analysis
            </h2>
            <p className="text-gray-600 mb-8">
              Our microbiome analysis uses advanced microarray technology to study known microbial species and strains in samples. This service meets diverse needs including biodefense, microbial forensics, environmental monitoring, food and product safety, agricultural assessment, and research.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Sample Requirements</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow text-center">
                    <p className="font-semibold text-blue-600">Total DNA</p>
                    <p className="text-gray-600">≥1μg</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow text-center">
                    <p className="font-semibold text-blue-600">Concentration</p>
                    <p className="text-gray-600">≥20ng/μL</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow text-center">
                    <p className="font-semibold text-blue-600">Volume</p>
                    <p className="text-gray-600">≥20μL</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow text-center">
                    <p className="font-semibold text-blue-600">Purity</p>
                    <p className="text-gray-600">260/280: 1.8-2.0</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                  Contact Us
                </button>
                <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
                  View Sample Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;