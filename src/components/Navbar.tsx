import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Announcement banner */}
      <div className="bg-orange-gradient text-white py-1 px-4 text-center">
        <p className="text-sm md:text-base font-medium animate-pulse-soft">
          GET A FREE SAMPLE TODAY! <span className="hidden md:inline">Experience our premium products</span> →
        </p>
      </div>
      
      {/* Main navbar */}
      <div className="container mx-auto px-4 py-1.5 flex items-center justify-between">
        <div className="flex items-center">
          <button 
            className="mr-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link to="/" className="text-2xl font-bold text-orange-dark">
            TEST
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 lg:space-x-6">
          <Link to="/" className="animated-link text-gray-700 hover:text-orange-dark font-medium">
            Home
          </Link>
          <Link to="/products" className="animated-link text-gray-700 hover:text-orange-dark font-medium">
            Products
          </Link>
          <Link to="/foundation" className="animated-link text-gray-700 hover:text-orange-dark font-medium">
            Foundation
          </Link>
          <Link to="/education" className="animated-link text-gray-700 hover:text-orange-dark font-medium">
            Education
          </Link>
          <Link to="/media" className="animated-link text-gray-700 hover:text-orange-dark font-medium">
            Media
          </Link>
          <Link to="/careers" className="animated-link text-gray-700 hover:text-orange-dark font-medium">
            Careers
          </Link>
          <Link to="/blogs" className="animated-link text-gray-700 hover:text-orange-dark font-medium">
            Blogs
          </Link>
          <Link to="/about" className="animated-link text-gray-700 hover:text-orange-dark font-medium">
            About Us
          </Link>
          <Link to="/contact" className="animated-link text-gray-700 hover:text-orange-dark font-medium">
            Contact
          </Link>
        </div>
        
        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-orange-dark">
            <User size={20} />
          </button>
          <button className="text-gray-700 hover:text-orange-dark relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-orange text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="flex flex-col py-1">
            <Link to="/" className="px-4 py-1.5 text-gray-700 hover:bg-orange-light/10" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/products" className="px-4 py-1.5 text-gray-700 hover:bg-orange-light/10" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>
            <Link to="/foundation" className="px-4 py-1.5 text-gray-700 hover:bg-orange-light/10" onClick={() => setIsMenuOpen(false)}>
              Foundation
            </Link>
            <Link to="/education" className="px-4 py-1.5 text-gray-700 hover:bg-orange-light/10" onClick={() => setIsMenuOpen(false)}>
              Education
            </Link>
            <Link to="/media" className="px-4 py-1.5 text-gray-700 hover:bg-orange-light/10" onClick={() => setIsMenuOpen(false)}>
              Media
            </Link>
            <Link to="/careers" className="px-4 py-1.5 text-gray-700 hover:bg-orange-light/10" onClick={() => setIsMenuOpen(false)}>
              Careers
            </Link>
            <Link to="/blogs" className="px-4 py-1.5 text-gray-700 hover:bg-orange-light/10" onClick={() => setIsMenuOpen(false)}>
              Blogs
            </Link>
            <Link to="/about" className="px-4 py-1.5 text-gray-700 hover:bg-orange-light/10" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/contact" className="px-4 py-1.5 text-gray-700 hover:bg-orange-light/10" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
