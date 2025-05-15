import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, ShoppingBag, FileText, MessageSquare } from 'lucide-react';

const AccountNav = () => {
  const location = useLocation();

  const links = [
    {
      to: '/account/profile',
      icon: User,
      label: 'Profile'
    },
    {
      to: '/account/orders',
      icon: ShoppingBag,
      label: 'Orders'
    },
    {
      to: '/account/reports',
      icon: FileText,
      label: 'Reports'
    },
    {
      to: '/account/consultations',
      icon: MessageSquare,
      label: 'Consultations'
    }
  ];

  return (
    <nav className="bg-white rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.to;
          
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center px-6 py-3 ${
                isActive 
                  ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="h-5 w-5 mr-2" />
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default AccountNav;