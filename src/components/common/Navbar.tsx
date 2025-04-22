import React, { useState } from 'react';
import { Menu, X, User, ShoppingCart, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="navbar shadow-sm bg-white">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <Link to="/" className="flex-shrink-0 w-32">
            <img 
              src="/images/logo.png" 
              alt="i-genomics" 
              className="w-full"
            />
          </Link>

          <div className="hidden md:flex space-x-1 flex-grow justify-center">
            <Link to="/about" className="nav-link px-3 py-2 text-sm font-medium hover:text-green-700">
              About Us
            </Link>
            <Link to="/gene-bank" className="nav-link px-3 py-2 text-sm font-medium hover:text-green-700">
              Gene Bank
            </Link>
            <div className="relative group">
              <button className="nav-link px-3 py-2 text-sm font-medium hover:text-green-700 flex items-center">
                Genetic Testing <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute z-10 hidden group-hover:block bg-white shadow-lg rounded-md p-2 w-48">
                <Link to="/genetic-testing" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded">
                  About Genetic Testing
                </Link>
                <Link to="/genetic-products" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded">
                  Testing Products
                </Link>
                <Link to="/promotions" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded">
                  Seasonal Promotions
                </Link>
              </div>
            </div>
            <Link to="/research-services" className="nav-link px-3 py-2 text-sm font-medium hover:text-green-700">
              Research Services
            </Link>
            <Link to="/partner-institutions" className="nav-link px-3 py-2 text-sm font-medium hover:text-green-700">
              Partner Institutions
            </Link>
            <Link to="/youth-camp" className="nav-link px-3 py-2 text-sm font-medium hover:text-green-700">
              Youth Camp Registration
            </Link>
            <Link to="/contact" className="nav-link px-3 py-2 text-sm font-medium hover:text-green-700">
              Contact Us
            </Link>
          </div>

          <div className="flex items-center space-x-3">
            <div className="text-sm font-medium">
              <button className="hover:text-green-700">EN</button>/
              <button className="hover:text-green-700">CN</button>
            </div>
            <Link to="/account" className="hover:text-green-700">
              <User className="h-6 w-6" />
            </Link>
            <Link to="/cart" className="hover:text-green-700">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <button 
              className="md:hidden focus:outline-none" 
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white p-5">
          <div className="flex justify-end">
            <button 
              className="focus:outline-none" 
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="flex flex-col space-y-4 mt-8">
            <Link to="/about" className="px-3 py-2 text-lg font-medium">
              About Us
            </Link>
            <Link to="/gene-bank" className="px-3 py-2 text-lg font-medium">
              Gene Bank
            </Link>
            <div className="px-3 py-2 text-lg font-medium">
              Genetic Testing
              <div className="ml-4 mt-2 flex flex-col space-y-2">
                <Link to="/genetic-testing" className="text-sm py-1">
                  About Genetic Testing
                </Link>
                <Link to="/genetic-products" className="text-sm py-1">
                  Testing Products
                </Link>
                <Link to="/promotions" className="text-sm py-1">
                  Seasonal Promotions
                </Link>
              </div>
            </div>
            <Link to="/research-services" className="px-3 py-2 text-lg font-medium">
              Research Services
            </Link>
            <Link to="/partner-institutions" className="px-3 py-2 text-lg font-medium">
              Partner Institutions
            </Link>
            <Link to="/youth-camp" className="px-3 py-2 text-lg font-medium">
              Youth Camp Registration
            </Link>
            <Link to="/contact" className="px-3 py-2 text-lg font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      )}
      
      {/* Colored bar below navbar */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-green-500 to-yellow-400 w-full"></div>
    </>
  );
};

export default Navbar;