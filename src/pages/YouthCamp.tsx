import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import CampHero from '../components/youth/CampHero';
import PhotoGallery from '../components/about/PhotoGallery';
import CampResults from '../components/youth/CampResults';
import CampRegistration from '../components/youth/CampRegistration';

const YouthCamp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <CampHero />
        <PhotoGallery />
        <CampResults />
        <CampRegistration />
      </main>
      <Footer />
    </div>
  );
};

export default YouthCamp;