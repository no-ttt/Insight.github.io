import React from 'react';

export const TestingSteps = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Genetic Testing Steps</h2>
          <p className="text-gray-600 mt-2">Four simple steps to understand your genetic profile</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: 1,
              title: "Choose Your Test",
              description: "Select the genetic test that matches your needs"
            },
            {
              step: 2,
              title: "Sample Collection",
              description: "Safely collect your DNA sample using our collection kit"
            },
            {
              step: 3,
              title: "Lab Analysis",
              description: "Professional DNA extraction and genetic analysis"
            },
            {
              step: 4,
              title: "Get Results",
              description: "Receive your detailed genetic report with expert interpretation"
            }
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">{item.step}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};