import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import AboutHero from '../components/about/AboutHero';
import AboutAdvantages from '../components/about/AboutAdvantages';
import PhotoGallery from '../components/about/PhotoGallery';
import TeamBanner from '../components/about/TeamBanner';
import ExecutiveProfile from '../components/about/ExecutiveProfile';
import DepartmentSection from '../components/about/DepartmentSection';

// Sample data for departments
const rdStaff = [
  {
    name: "Dr. Tan Wei Cheng",
    nameEn: "TAN WEI CHENG",
    title: "R&D Consultant",
    titleEn: "R&D Consultant",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Dr. Lim Yi Jia",
    nameEn: "LIM YI JIA",
    title: "R&D Vice President",
    titleEn: "R&D Vice President",
    image: "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Lee You Hong",
    nameEn: "LEE YOU HONG",
    title: "Project Manager",
    titleEn: "Project Manager",
    image: "https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Zhang Cong Ming",
    nameEn: "ZHANG CONG MING",
    title: "RAISED Project Manager",
    titleEn: "RAISED Project Manager",
    image: "https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Chen Yu Ting",
    nameEn: "CHEN YU TING",
    title: "Researcher",
    titleEn: "Researcher",
    image: "https://images.pexels.com/photos/6129500/pexels-photo-6129500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Yan Wei Xuan",
    nameEn: "YAN WEI XUAN",
    title: "Researcher",
    titleEn: "Researcher",
    image: "https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Guo Chong Qing",
    nameEn: "GUO CHONG QING",
    title: "Medical Technologist",
    titleEn: "Medical Technologist",
    image: "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const marketingStaff = [
  {
    name: "Tseng Jue Ming",
    nameEn: "TSENG JUE MING",
    title: "Sales Coordinator",
    titleEn: "Sales Coordinator",
    image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Shi Hong Kai",
    nameEn: "SHI HONG KAI",
    title: "Sales Coordinator",
    titleEn: "Sales Coordinator",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Lin Yi Jeng",
    nameEn: "LIN YI JENG",
    title: "Sales Specialist",
    titleEn: "Sales Specialist",
    image: "https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Wu Xian Hua",
    nameEn: "WU XIAN HUA",
    title: "Marketing Manager",
    titleEn: "Marketing Manager",
    image: "https://images.pexels.com/photos/5905497/pexels-photo-5905497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Hsiao Shao Wei",
    nameEn: "HSIAO SHAO WEI",
    title: "Commercial Art Designer",
    titleEn: "Commercial Art Designer",
    image: "https://images.pexels.com/photos/8942735/pexels-photo-8942735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Wei Hua Xuan",
    nameEn: "WEI HUA XUAN",
    title: "Market Planning Specialist",
    titleEn: "Market Planning Specialist",
    image: "https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const adminStaff = [
  {
    name: "Tsai He Rong",
    nameEn: "TSAI HE RONG",
    title: "Senior Executive Secretary",
    titleEn: "Senior Executive Secretary",
    image: "https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Huang Mei Ling",
    nameEn: "HUANG MEI LING",
    title: "General Affairs",
    titleEn: "General Affairs",
    image: "https://images.pexels.com/photos/4350113/pexels-photo-4350113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AboutHero />
        <AboutAdvantages />
        <PhotoGallery />
        <TeamBanner />
        <ExecutiveProfile />
        <DepartmentSection 
          title="R&D Department" 
          titleEn="Research & Development" 
          color="blue" 
          textColor="blue" 
          staff={rdStaff}
        />
        <DepartmentSection 
          title="Marketing Department" 
          titleEn="Marketing & Planning" 
          color="green" 
          textColor="green" 
          reverse={true} 
          staff={marketingStaff}
        />
        <DepartmentSection 
          title="Administration" 
          titleEn="Administration Department" 
          color="lightGreen" 
          textColor="lightGreen" 
          staff={adminStaff}
        />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;