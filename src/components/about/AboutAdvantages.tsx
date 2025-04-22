import React from 'react';
import { DnaIcon, ClipboardCheck, HeadsetIcon, Shield } from 'lucide-react';

const AboutAdvantages = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Advantages Make Excellence
          </h2>
          <div className="mt-3 h-1.5 w-36 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* High Precision */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition duration-500 hover:scale-105">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
              <DnaIcon className="h-8 w-8 text-green-800" />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-4">High Precision</h3>
            <p className="text-gray-600">
              High precision with simultaneous detection of up to <span className="text-red-600 font-semibold">750,000 sites</span>!
              <br />
              The most comprehensive genetic testing available.
            </p>
          </div>

          {/* Professional Reports */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition duration-500 hover:scale-105">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
              <ClipboardCheck className="h-8 w-8 text-blue-800" />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-4">Professional Reports</h3>
            <p className="text-gray-600">
              Highly professional R&D team with all testing and AI data analysis conducted <span className="text-red-600 font-semibold">in Malaysia</span>.
              <br />
              Reassuring, secure, and absolutely dedicated.
            </p>
          </div>

          {/* Comprehensive Service */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition duration-500 hover:scale-105">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 mb-6">
              <HeadsetIcon className="h-8 w-8 text-purple-800" />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-4">Comprehensive Service</h3>
            <p className="text-gray-600">
              The most comprehensive after-sales service. Local Malaysian doctors, biologists, and medical technologists provide <span className="text-red-600 font-semibold">complete report consultation and health management information</span>.
            </p>
          </div>

          {/* Privacy & Security */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition duration-500 hover:scale-105">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 mb-6">
              <Shield className="h-8 w-8 text-yellow-800" />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-4">Privacy & Security</h3>
            <p className="text-gray-600">
              Safe <span className="text-red-600 font-semibold">privacy protection you can trust</span>.
              <br />
              We protect your data with absolute dedication for your peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAdvantages;