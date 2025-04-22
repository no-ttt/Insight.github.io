import React from 'react';

const CompanyValues = () => {
  return (
    <section className="py-16 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Choose Insight to See the Future
          </h2>
          <p className="text-xl text-gray-600 mt-2">
            Have INSIGHT to have seeing into future.
          </p>
          <hr className="my-6 border-gray-200 w-full max-w-4xl mx-auto" />
          
          <div className="flex flex-wrap justify-center gap-3 my-4">
            <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium">
              Professional
            </span>
            <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium">
              Precision
            </span>
            <span className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-medium">
              High Quality
            </span>
            <span className="bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-medium">
              Comprehensive Service
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-medium">
              Pioneering Personalized Medicine
            </span>
          </div>
          
          <hr className="my-6 border-gray-200 w-full max-w-4xl mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-12">
          {/* 2020 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gradient-to-br from-indigo-500 to-blue-600 p-4 relative">
              <div className="absolute inset-0 opacity-20 bg-center bg-cover" style={{backgroundImage: 'url(https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}></div>
              <div className="relative z-10 h-full flex items-center text-white">
                <p className="text-sm">
                  Committed to promoting our products, aiming to become an international laboratory platform and multinational technology cooperation company.
                </p>
              </div>
            </div>
            <div className="px-4 py-3 bg-blue-700 text-white text-center">
              <h3 className="text-xl font-bold">2020</h3>
            </div>
          </div>

          {/* 2019 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gradient-to-br from-teal-500 to-green-600 p-4 relative">
              <div className="absolute inset-0 opacity-20 bg-center bg-cover" style={{backgroundImage: 'url(https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}></div>
              <div className="relative z-10 h-full flex items-center text-white">
                <p className="text-sm">
                  Expanding various locations and collaborating long-term with hospitals to develop testing methods.
                </p>
              </div>
            </div>
            <div className="px-4 py-3 bg-teal-700 text-white text-center">
              <h3 className="text-xl font-bold">2019</h3>
            </div>
          </div>

          {/* 2018 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gradient-to-br from-green-500 to-emerald-600 p-4 relative">
              <div className="absolute inset-0 opacity-20 bg-center bg-cover" style={{backgroundImage: 'url(https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}></div>
              <div className="relative z-10 h-full flex items-center text-white">
                <p className="text-sm">
                  Prioritizing the introduction of automated multi-gene detection chips to increase risk assessment accuracy. Using chips suitable for Asians to reduce analysis errors.
                </p>
              </div>
            </div>
            <div className="px-4 py-3 bg-green-700 text-white text-center">
              <h3 className="text-xl font-bold">2018</h3>
            </div>
          </div>

          {/* 2017 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gradient-to-br from-cyan-500 to-blue-600 p-4 relative">
              <div className="absolute inset-0 opacity-20 bg-center bg-cover" style={{backgroundImage: 'url(https://images.pexels.com/photos/8851637/pexels-photo-8851637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}></div>
              <div className="relative z-10 h-full flex items-center text-white">
                <p className="text-sm">
                  Received the Malaysian SME Grant Plan and was selected as an excellent vendor.
                </p>
              </div>
            </div>
            <div className="px-4 py-3 bg-cyan-700 text-white text-center">
              <h3 className="text-xl font-bold">2017</h3>
            </div>
          </div>

          {/* 2014 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 p-4 relative">
              <div className="absolute inset-0 opacity-20 bg-center bg-cover" style={{backgroundImage: 'url(https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}></div>
              <div className="relative z-10 h-full flex items-center text-white">
                <p className="text-sm">
                  Started from academic research and collaborated with University of Malaysia. Committed to improving various sequencing platform technologies and big data analysis.
                </p>
              </div>
            </div>
            <div className="px-4 py-3 bg-indigo-700 text-white text-center">
              <h3 className="text-xl font-bold">2014</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-20 md:w-40 md:h-40 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse hidden md:block"></div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-20 md:w-40 md:h-40 bg-green-100 rounded-full blur-3xl opacity-30 animate-pulse hidden md:block"></div>
    </section>
  );
};

export default CompanyValues;