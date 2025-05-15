import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '/images/logo.png';
import qr1 from '/images/QR-1.png';
import qr2 from '/images/QR-2.png';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-2 hidden md:block">
            <img 
              src={logo} 
              alt="i-genomics" 
              className="w-32"
            />
          </div>
          
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-2 text-left">
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-green-700">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-600 hover:text-green-700">
                Terms of Service
              </Link>
            </div>
          </div>
          
          <div className="md:col-span-4 hidden md:block">
            <div className="grid grid-cols-5 gap-2 text-center">
              <Link to="/about" className="text-sm text-gray-600 hover:text-green-700">
                About Us
              </Link>
              <div className="col-span-2 border-x border-gray-300 px-2">
                <Link to="/gene-bank" className="block text-sm text-gray-600 hover:text-green-700">
                  Gene Bank
                </Link>
                <Link to="/genetic-testing" className="block text-sm text-gray-600 hover:text-green-700">
                  Genetic Testing
                </Link>
                <Link to="/research-services" className="block text-sm text-gray-600 hover:text-green-700">
                  Research Services
                </Link>
              </div>
              <Link to="/partner-institutions" className="text-sm text-gray-600 hover:text-green-700">
                Partner Institutions
              </Link>
              <Link to="/contact" className="text-sm text-gray-600 hover:text-green-700">
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Mobile links */}
          <div className="grid grid-cols-2 gap-2 md:hidden">
            <Link to="/about" className="text-sm text-gray-600 hover:text-green-700">
              About Us
            </Link>
            <div>
              <Link to="/gene-bank" className="block text-sm text-gray-600 hover:text-green-700">
                Gene Bank
              </Link>
              <Link to="/genetic-testing" className="block text-sm text-gray-600 hover:text-green-700">
                Genetic Testing
              </Link>
              <Link to="/research-services" className="block text-sm text-gray-600 hover:text-green-700">
                Research Services
              </Link>
            </div>
            <Link to="/partner-institutions" className="text-sm text-gray-600 hover:text-green-700">
              Partner Institutions
            </Link>
            <Link to="/contact" className="text-sm text-gray-600 hover:text-green-700">
              Contact Us
            </Link>
          </div>
          
          <div className="md:col-span-2">
            <div className="flex space-x-4 mb-3">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-red-600">
                <Youtube size={24} />
              </a>
            </div>
            <p className="text-sm text-gray-600">+60 3-1234 5678</p>
            <a href="mailto:service@i-genomics.com.my" className="text-sm text-gray-600 hover:text-green-700">
              service@i-genomics.com.my
            </a>
          </div>
          
          <div className="md:col-span-2 flex justify-center md:justify-start">
            <div className="flex space-x-2">
              <img 
                src={qr1} 
                alt="QR Code" 
                className="w-16 h-16 object-cover"
              />
              <img 
                src={qr2} 
                alt="QR Code" 
                className="w-16 h-16 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-200 mt-8 py-4 text-center text-sm text-gray-600">
        Lot 123, Jalan Genomics, Taman Science, 50000 Kuala Lumpur, Malaysia
      </div>
    </footer>
  );
};

export default Footer;