import React from 'react';
import { Link } from 'react-router-dom';
// Import the image directly
import backgroundImage from '../NBO_homepage.jpg';

const Hero: React.FC = () => {
  return (
    <div className="relative">
      {/* Full background image panel */}
      <div 
        className="absolute inset-0 w-full"
        style={{
          backgroundColor: 'black', // couleur de fond noire
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '600px',
          zIndex: -1
        }}
      ></div>
      
      {/* Content with semi-transparent overlay for readability */}
      <div className="relative z-10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col justify-center bg-black bg-opacity-40 p-6 rounded-lg">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
                Trusted energy provider for residential and business customers
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.6)' }}>
                We offer reliable energy solutions with transparent rates
                and exceptional customer service for over 25 years.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/energy-types" 
                  className="inline-block bg-white text-primary font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Discover our energy sources
                </Link>
                <Link 
                  to="/offers" 
                  className="inline-block bg-accent text-white font-medium px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors"
                >
                  View our offers
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-full h-80">
                <div className="absolute inset-0 bg-white bg-opacity-20 rounded-lg transform rotate-3"></div>
                <div className="absolute inset-0 bg-white bg-opacity-20 rounded-lg transform -rotate-3"></div>
                <div className="absolute inset-0 bg-white bg-opacity-90 rounded-lg shadow-lg flex items-center justify-center p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">Calculate your savings</h3>
                    <p className="text-gray-600 mb-6">Estimate how much you could save by choosing our energy offers</p>
                    <Link 
                      to="/compare" 
                      className="inline-block bg-primary text-white font-medium px-6 py-2 rounded-md hover:bg-secondary transition-colors"
                    >
                      Compare offers
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
