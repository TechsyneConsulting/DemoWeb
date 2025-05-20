
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-bold text-brand-orange">
              Niine
            </Link>
            <p className="mt-4 text-gray-600">
              Committed to providing high-quality, sustainable sanitary products that prioritize your comfort and well-being.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-brand-orange">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-orange">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-orange">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/products/sanitary-pads" className="text-gray-600 hover:text-brand-orange">Sanitary Pads</Link></li>
              <li><Link to="/products/baby-diapers" className="text-gray-600 hover:text-brand-orange">Baby Diapers</Link></li>
              <li><Link to="/products/hand-hygiene" className="text-gray-600 hover:text-brand-orange">Hand Hygiene</Link></li>
              <li><Link to="/products/combo-packs" className="text-gray-600 hover:text-brand-orange">Combo Packs</Link></li>
              <li><Link to="/free-sample" className="text-gray-600 hover:text-brand-orange">Free Samples</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Learn</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-brand-orange">About Us</Link></li>
              <li><Link to="/education/menstrual-hygiene" className="text-gray-600 hover:text-brand-orange">Menstrual Hygiene</Link></li>
              <li><Link to="/education/sustainability" className="text-gray-600 hover:text-brand-orange">Sustainability</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-brand-orange">Blog</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-brand-orange">FAQs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="text-brand-orange mr-2 mt-1" size={18} />
                <span className="text-gray-600">support@example.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-brand-orange mr-2 mt-1" size={18} />
                <span className="text-gray-600">+91 123 456 7890</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-brand-orange focus:border-brand-orange"
                />
                <button className="bg-brand-orange text-white px-4 py-2 rounded-r-md hover:bg-brand-orange-light">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Niine. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-600 hover:text-brand-orange text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-600 hover:text-brand-orange text-sm">
              Terms of Service
            </Link>
            <Link to="/shipping-policy" className="text-gray-600 hover:text-brand-orange text-sm">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
