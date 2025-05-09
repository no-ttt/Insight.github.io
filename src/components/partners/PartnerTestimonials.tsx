import React from 'react';

const testimonials = [
  {
    quote: "Our collaboration has led to groundbreaking discoveries in genetic research.",
    author: "Dr. Sarah Chen",
    title: "Research Director",
    institution: "University of Malaysia",
    image: "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    quote: "The partnership has enhanced our ability to provide personalized patient care.",
    author: "Dr. Ahmad Rahman",
    title: "Chief Medical Officer",
    institution: "Kuala Lumpur Medical Center",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const PartnerTestimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Partner Testimonials
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {testimonial.author}
                  </h3>
                  <p className="text-gray-600">{testimonial.title}</p>
                  <p className="text-blue-600">{testimonial.institution}</p>
                </div>
              </div>
              <blockquote className="text-gray-600 italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerTestimonials;