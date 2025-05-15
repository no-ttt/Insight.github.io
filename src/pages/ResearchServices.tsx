import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import HeroSlider from '../components/home/HeroSlider';
import ServicesList from '../components/research/ServicesList';
import ServiceDetail from '../components/research/ServiceDetail';

const ResearchServices = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSlider />
        <ServicesList />
        <ServiceDetail />
      </main>
      <Footer />
    </div>
  );
};

export default ResearchServices;