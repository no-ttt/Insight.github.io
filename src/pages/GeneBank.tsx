import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import HeroSlider from '../components/home/HeroSlider';
import ThreeSteps from '../components/genebank/ThreeSteps';
import Testimonials from '../components/home/Testimonials';

const GeneBank = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSlider />
        <ThreeSteps />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default GeneBank;