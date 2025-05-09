import React from 'react';

interface PaperBlockProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  color: 'blue' | 'red' | 'green' | 'yellow';
  reverse?: boolean;
  showButton?: boolean;
  onClick?: () => void;
}

const colorClasses = {
  blue: 'bg-blue-100 text-blue-900',
  red: 'bg-red-100 text-red-900',
  green: 'bg-green-100 text-green-900',
  yellow: 'bg-yellow-100 text-yellow-900'
};

export const PaperBlock: React.FC<PaperBlockProps> = ({
  title,
  subtitle,
  description,
  image,
  color,
  reverse = false,
  showButton = false,
  onClick
}) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 py-12`}>
      <div className="w-full md:w-1/2 px-6">
        <img src={image} alt={title} className="w-full h-auto rounded-lg shadow-lg" />
      </div>
      
      <div className="w-full md:w-1/2 px-6">
        <div className={`rounded-lg p-8 ${colorClasses[color]}`}>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-sm opacity-75 mb-4">{subtitle}</p>
          <p className="mb-6">{description}</p>
          
          {showButton && (
            <button 
              onClick={onClick}
              className="px-6 py-2 bg-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow"
            >
              Learn More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};