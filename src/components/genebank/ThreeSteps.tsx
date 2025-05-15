import React from 'react';
import { DnaIcon, Database, Download } from 'lucide-react';

const ThreeSteps = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Gene Bank in Three Easy Steps
          </h2>
          <p className="text-xl text-gray-600">Simple and secure genetic data management</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Decode */}
          <div className="bg-white rounded-lg shadow-lg p-8 transform transition duration-500 hover:-translate-y-1">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <DnaIcon className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">Decode</h3>
            <p className="text-gray-600 text-center">
              Advanced genetic analysis using cutting-edge technology for accurate results
            </p>
            <div className="mt-6 text-center">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Store */}
          <div className="bg-white rounded-lg shadow-lg p-8 transform transition duration-500 hover:-translate-y-1">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Database className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-4 text-center">Store</h3>
            <p className="text-gray-600 text-center">
              Secure storage of your genetic data with state-of-the-art encryption
            </p>
            <div className="mt-6 text-center">
              <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
                Store Now
              </button>
            </div>
          </div>

          {/* Retrieve */}
          <div className="bg-white rounded-lg shadow-lg p-8 transform transition duration-500 hover:-translate-y-1">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <Download className="w-8 h-8 text-purple-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-purple-800 mb-4 text-center">Retrieve</h3>
            <p className="text-gray-600 text-center">
              Easy access to your genetic information whenever you need it
            </p>
            <div className="mt-6 text-center">
              <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">
                Retrieve Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeSteps;