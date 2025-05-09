import React from 'react';

const photos = [
  { id: 1, src: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400", text: "Laboratory Research" },
  { id: 2, src: "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=400", text: "DNA Analysis" },
  { id: 3, src: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=400", text: "Medical Research" },
  { id: 4, src: "https://images.pexels.com/photos/8851617/pexels-photo-8851617.jpeg?auto=compress&cs=tinysrgb&w=400", text: "Team Collaboration" },
  { id: 5, src: "https://images.pexels.com/photos/8851746/pexels-photo-8851746.jpeg?auto=compress&cs=tinysrgb&w=400", text: "Client Consultation" },
  { id: 6, src: "https://images.pexels.com/photos/3912352/pexels-photo-3912352.jpeg?auto=compress&cs=tinysrgb&w=400", text: "Sample Analysis" },
  { id: 7, src: "https://images.pexels.com/photos/8851755/pexels-photo-8851755.jpeg?auto=compress&cs=tinysrgb&w=400", text: "Advanced Equipment" },
  { id: 8, src: "https://images.pexels.com/photos/8851633/pexels-photo-8851633.jpeg?auto=compress&cs=tinysrgb&w=400", text: "Research Development" },
  { id: 9, src: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=400", text: "Technology Innovation" },
  { id: 10, src: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=400", text: "Team Meeting" },
  { id: 11, src: "https://images.pexels.com/photos/8851592/pexels-photo-8851592.jpeg?auto=compress&cs=tinysrgb&w=400", text: "Community Outreach" },
  { id: 12, src: "https://images.pexels.com/photos/8851689/pexels-photo-8851689.jpeg?auto=compress&cs=tinysrgb&w=400", text: "Health Education" },
  { id: 13, src: "https://images.pexels.com/photos/8851741/pexels-photo-8851741.jpeg?auto=compress&cs=tinysrgb&w=400", text: "Quality Control" },
  { id: 14, src: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=400", text: "Genetic Research" },
  { id: 15, src: "https://images.pexels.com/photos/8851637/pexels-photo-8851637.jpeg?auto=compress&cs=tinysrgb&w=400", text: "Innovation" },
];

const PhotoGallery = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className="break-inside-avoid relative overflow-hidden rounded-lg group"
            >
              <img 
                src={photo.src} 
                alt={photo.text} 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                <p className="text-white text-center font-medium px-4">{photo.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;