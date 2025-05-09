import React from 'react';

export const SelfScreening = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Self-Screening Made Simple</h2>
        <div className="w-32 h-1.5 bg-yellow-400 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: 1,
              title: "Choose Your Test",
              description: "Select the genetic test that best matches your health concerns"
            },
            {
              step: 2,
              title: "Home Collection",
              description: "Easily collect your sample at home using our collection kit"
            },
            {
              step: 3,
              title: "Lab Return",
              description: "Send your sample back to our lab using the prepaid shipping package"
            }
          ].map((item) => (
            <div key={item.step} className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold mb-4">
                {item.step}
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