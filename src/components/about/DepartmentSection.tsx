import React from 'react';

interface DepartmentSectionProps {
  title: string;
  titleEn: string;
  color: string;
  textColor: string;
  reverse?: boolean;
  staff: {
    name: string;
    nameEn: string;
    title: string;
    titleEn: string;
    image: string;
  }[];
}

const DepartmentSection: React.FC<DepartmentSectionProps> = ({ 
  title, 
  titleEn, 
  color, 
  textColor, 
  reverse = false, 
  staff 
}) => {
  const colorClasses = {
    'blue': 'bg-blue-700',
    'green': 'bg-green-700',
    'lightGreen': 'bg-green-500',
    'orange': 'bg-orange-500'
  };
  
  const textColorClasses = {
    'blue': 'text-blue-700',
    'green': 'text-green-700',
    'lightGreen': 'text-green-500', 
    'orange': 'text-orange-500'
  };
  
  const bgColor = colorClasses[color as keyof typeof colorClasses] || 'bg-blue-700';
  const txtColor = textColorClasses[textColor as keyof typeof textColorClasses] || 'text-blue-700';

  return (
    <section className="py-8">
      <div className="flex flex-col md:flex-row">
        {reverse ? (
          <>
            <div className="w-full md:w-8/12 order-2 md:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[90%] mx-auto">
                {staff.map((person, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <img 
                      src={person.image} 
                      alt={person.name} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-xs text-gray-600">{person.title}</p>
                      <p className="text-xs text-gray-600 mb-2">{person.titleEn}</p>
                      <p className={`text-lg font-semibold ${txtColor}`}>{person.name}</p>
                      <p className={`text-sm ${txtColor}`}>{person.nameEn}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`w-full md:w-4/12 ${bgColor} flex flex-col items-start relative py-10 order-1 md:order-2`}>
              <div className="px-8 py-6 text-white">
                <span className="block text-sm">{titleEn}</span>
                <span className="block text-3xl font-bold">{title}</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={`w-full md:w-4/12 ${bgColor} flex flex-col items-end relative py-10`}>
              <div className="px-8 py-6 text-white text-right">
                <span className="block text-sm">{titleEn}</span>
                <span className="block text-3xl font-bold">{title}</span>
              </div>
            </div>
            <div className="w-full md:w-8/12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[90%] mx-auto">
                {staff.map((person, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <img 
                      src={person.image} 
                      alt={person.name} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-xs text-gray-600">{person.title}</p>
                      <p className="text-xs text-gray-600 mb-2">{person.titleEn}</p>
                      <p className={`text-lg font-semibold ${txtColor}`}>{person.name}</p>
                      <p className={`text-sm ${txtColor}`}>{person.nameEn}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default DepartmentSection;