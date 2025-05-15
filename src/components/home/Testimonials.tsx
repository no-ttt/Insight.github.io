import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Ahmad Yusof",
    age: 29,
    location: "Penang",
    hasVideo: true,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "I never thought I could know my body's condition in advance! It's truly amazing!"
  },
  {
    id: 2,
    name: "Lim Wei Ming",
    age: 30,
    location: "Kuala Lumpur",
    hasVideo: true,
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "When I saw my grandmother get sick, I decided to try i-genomics products to quickly understand her suitable medication. So grateful!"
  },
  {
    id: 3,
    name: "Siti Fatimah",
    age: 41,
    location: "Johor Bahru",
    hasVideo: false,
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "After suffering an injury, I became more aware of the importance of prevention over treatment. Genetic testing has truly helped me a lot."
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap -mx-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6 h-full transform transition duration-500 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.age} years old, {testimonial.location}
                    </p>
                    {testimonial.hasVideo && (
                      <button className="mt-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition">
                        Watch Video
                      </button>
                    )}
                  </div>
                </div>
                <p className="text-gray-700">
                  "{testimonial.content}"
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination dots for mobile */}
        <div className="flex justify-center mt-6 md:hidden">
          <span className="h-2 w-2 rounded-full bg-blue-600 mx-1"></span>
          <span className="h-2 w-2 rounded-full bg-gray-300 mx-1"></span>
          <span className="h-2 w-2 rounded-full bg-gray-300 mx-1"></span>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent z-0"></div>
    </section>
  );
};

export default Testimonials;