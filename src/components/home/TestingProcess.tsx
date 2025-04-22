import React from 'react';
import { Package, TestTube, Truck } from 'lucide-react';

const TestingProcess = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Self-Testing Made Simple
          </h2>
          <div className="mt-3 h-1.5 w-36 bg-yellow-400 mx-auto"></div>
        </div>

        {/* Desktop Steps */}
        <div className="hidden md:block px-4 pt-8">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center max-w-xs">
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 relative">
                <Package className="w-10 h-10 text-blue-600" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">
                  1
                </div>
              </div>
              <div className="h-2 w-32 bg-red-600 rounded-full mb-2"></div>
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                Order Online, Delivered to Your Door
              </h3>
            </div>

            <div className="flex flex-col items-center max-w-xs">
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 relative">
                <TestTube className="w-10 h-10 text-green-600" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg">
                  2
                </div>
              </div>
              <div className="h-2 w-32 bg-green-600 rounded-full mb-2"></div>
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                Self-Test Safely at Home
              </h3>
            </div>

            <div className="flex flex-col items-center max-w-xs">
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 relative">
                <Truck className="w-10 h-10 text-blue-600" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  3
                </div>
              </div>
              <div className="h-2 w-32 bg-blue-600 rounded-full mb-2"></div>
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                Return Sample, Get Results
              </h3>
            </div>
          </div>
        </div>

        {/* Mobile Steps */}
        <div className="md:hidden space-y-12">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center relative shrink-0">
              <Package className="w-8 h-8 text-blue-600" />
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                1
              </div>
            </div>
            <div>
              <div className="h-1.5 w-24 bg-red-600 rounded-full mb-2"></div>
              <h3 className="text-lg font-semibold text-gray-800">
                Order Online, Delivered to Your Door
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center relative shrink-0">
              <TestTube className="w-8 h-8 text-green-600" />
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                2
              </div>
            </div>
            <div>
              <div className="h-1.5 w-24 bg-green-600 rounded-full mb-2"></div>
              <h3 className="text-lg font-semibold text-gray-800">
                Self-Test Safely at Home
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center relative shrink-0">
              <Truck className="w-8 h-8 text-blue-600" />
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                3
              </div>
            </div>
            <div>
              <div className="h-1.5 w-24 bg-blue-600 rounded-full mb-2"></div>
              <h3 className="text-lg font-semibold text-gray-800">
                Return Sample, Get Results
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestingProcess;