import React from 'react';

interface CircleImageProps {
  image: string;
  title: string;
  subtitle: string;
  contentTitle?: string;
  content: string;
  reverse?: boolean;
}

export const CircleImage: React.FC<CircleImageProps> = ({
  image,
  title,
  subtitle,
  contentTitle,
  content,
  reverse = false
}) => {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-8 py-12`}>
      <div className="w-full md:w-1/3">
        <div className="relative aspect-square rounded-full overflow-hidden">
          <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
      
      <div className="w-full md:w-2/3 px-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{subtitle}</p>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          {contentTitle && (
            <strong className="block text-xl mb-4">{contentTitle}</strong>
          )}
          <p className="text-gray-700">{content}</p>
        </div>
      </div>
    </div>
  );
};