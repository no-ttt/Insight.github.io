import React from 'react';

const papers = [
  {
    title: "Understanding DNA Replication in Bacteria",
    author: "Sarah Chen",
    school: "St. John's High School",
    grade: "Grade 11",
    image: "https://images.pexels.com/photos/8851633/pexels-photo-8851633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Genetic Markers in Plant Growth",
    author: "Michael Lee",
    school: "Victoria Academy",
    grade: "Grade 12",
    image: "https://images.pexels.com/photos/8851689/pexels-photo-8851689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Effects of Environment on Gene Expression",
    author: "Emma Wong",
    school: "Riverside School",
    grade: "Grade 11",
    image: "https://images.pexels.com/photos/8851741/pexels-photo-8851741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const CampResults = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Research Showcase
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {papers.map((paper, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={paper.image}
                alt={paper.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {paper.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {paper.author}
                  <br />
                  <span className="text-sm">
                    {paper.school} • {paper.grade}
                  </span>
                </p>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Read Paper →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Video Presentations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <div key={index} className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title={`Presentation ${index}`}
                  className="w-full h-full rounded-lg shadow-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampResults;