import React from 'react';
import { Button } from '@/components/ui/button';
import { HeartPulse, Droplet, CircleFadingPlus, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-orange-gradient overflow-hidden min-h-[70vh] flex items-center pt-4">
      <div className="absolute inset-0 overflow-hidden">
        <svg className="opacity-10" width="100%" height="100%">
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="2" fill="white"></circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)"></rect>
        </svg>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-orange-light/20 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-dark/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-orange/30 rounded-full blur-2xl animate-float"></div>
      </div>
      
      <div className="container mx-auto px-4 py-10 md:py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-white space-y-4">
            <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
              Comfort meets care
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Making Periods</span> 
              <span className="relative inline-block animate-wave">Comfortable</span>
              <span className="block">For Every Woman</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              We understand the challenges women face during their periods. Our products are designed to provide comfort, confidence, and care when you need it most.
            </p>
            
            <div className="flex flex-wrap gap-8 pt-3">
              <div className="flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <HeartPulse className="text-white" size={20} />
                </div>
                <span className="text-white font-medium">Gentle Care</span>
              </div>
              
              <div className="flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Droplet className="text-white" size={20} />
                </div>
                <span className="text-white font-medium">Extra Protection</span>
              </div>
              
              <div className="flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <CircleFadingPlus className="text-white" size={20} />
                </div>
                <span className="text-white font-medium">Eco-Friendly</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-3">
              <Button size="lg" className="bg-white text-orange-dark hover:bg-orange-light hover:text-white transition-all duration-300 animate-scale-pulse">
                Discover Our Products
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Learn More
              </Button>
              <Button size="lg" className="bg-orange-dark text-white animate-pulse-soft flex items-center gap-2 border border-white">
                <Download className="h-5 w-5" />
                <span>Download App</span>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/30 rounded-full blur-lg animate-pulse-soft"></div>
              <div className="relative z-10 animate-float">
                <img 
                  src="/lovable-uploads/heroImg.png" 
                  alt="Featured product" 
                  className="w-full max-w-lg rounded-lg shadow-l"
                />
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center animate-scale-pulse">
                  <span className="text-orange-dark font-bold text-lg">100%<br/>Natural</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
