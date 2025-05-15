import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import PartnerHero from '../components/partners/PartnerHero';
import PartnerGrid from '../components/partners/PartnerGrid';
import PartnerTestimonials from '../components/partners/PartnerTestimonials';
import CollaborationBenefits from '../components/partners/CollaborationBenefits';

const PartnerInstitutions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PartnerHero />
        <CollaborationBenefits />
        <PartnerGrid />
        <PartnerTestimonials />
      </main>
      <Footer />
    </div>
  );
};

export default PartnerInstitutions;