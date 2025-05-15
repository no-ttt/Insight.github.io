import React from 'react';
import { Search } from 'lucide-react';

const services = [
  "Sample Nucleic Acid Extraction",
  "Genome Sequencing",
  "Translatome Sequencing",
  "Small RNA Sequencing",
  "Transcriptome Sequencing",
  "Exosome Profile (MiRNA+/-NcRNA)",
  "Precision Medicine Array",
  "Agrigenomics Genotyping Solutions",
  "Microbiome Array"
];

const ServicesList = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-end mb-8">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search services..."
              className="w-full px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-4 top-2.5 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{service}</h3>
              <div className="h-1 w-20 bg-blue-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;