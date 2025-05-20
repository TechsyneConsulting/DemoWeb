
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Star, Clock, Calendar, Leaf, HeartPulse, Droplet, Package } from 'lucide-react';

const AppPromotion = () => {
  return (
    <section className="py-12 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 space-y-6 animate-fade-in-up">
            <div className="inline-block bg-orange-100 text-orange-dark px-3 py-1 rounded-full text-sm font-medium mb-2">
              Period Tracker App
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              PERIOD TRACKER APP
            </h2>
            <p className="text-lg text-gray-600">
              ThIS App for Android and iOS is developed in consultation with professionals at FOGSI.
            </p>
            <p className="text-lg text-gray-600">
              Our application helps you reduce pain, track your cycle, and find eco-friendly products for a healthier period experience.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm transform hover:scale-105 transition-transform duration-300">
                <Clock className="text-orange-500" size={20} />
                <span className="font-medium">Track Cycles</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm transform hover:scale-105 transition-transform duration-300">
                <Calendar className="text-orange-500" size={20} />
                <span className="font-medium">Daily Insights</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm transform hover:scale-105 transition-transform duration-300">
                <Star className="text-orange-500" size={20} />
                <span className="font-medium">Symptom Tracking</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm transform hover:scale-105 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <HeartPulse className="text-orange-500" size={20} />
                <span className="font-medium">Pain Relief Tips</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm transform hover:scale-105 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <Leaf className="text-orange-500" size={20} />
                <span className="font-medium">Eco-Friendly Products</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm transform hover:scale-105 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <Package className="text-orange-500" size={20} />
                <span className="font-medium">Product Suggestions</span>
              </div>
            </div>
            
            <div className="pt-4">
              <Button size="lg" className="bg-orange-gradient text-white hover:bg-orange-dark shadow-md animate-pulse-soft">
                <Download className="mr-2" size={20} /> Download App Now
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Animated decorative elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-orange-200/70 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-orange-300/60 rounded-full animate-float" style={{ animationDelay: '1.2s' }}></div>
              
              {/* Glowing effect for "eco-friendly" emphasis */}
              <div className="absolute inset-0 bg-green-200/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
              
              <div className="relative z-10 animate-float">
                <div className="absolute -inset-4 bg-orange-200/50 rounded-3xl blur-lg"></div>
                <img 
                  src="/lovable-uploads/8247ee2c-a2ac-4939-b408-2544d0a7b550.png" 
                  alt="Niine Period Tracker App" 
                  className="relative z-10 max-w-full md:max-w-md rounded-xl shadow-2xl border-4 border-white" 
                />
                
                {/* Animated feature highlights */}
                <div className="absolute top-10 right-0 transform translate-x-1/2 bg-white rounded-full p-3 shadow-xl animate-scale-pulse">
                  <Droplet className="text-orange-500" size={24} />
                </div>
                <div className="absolute bottom-20 left-0 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-xl animate-scale-pulse" style={{ animationDelay: '1s' }}>
                  <HeartPulse className="text-orange-500" size={24} />
                </div>
                <div className="absolute bottom-0 right-20 transform translate-y-1/2 bg-white rounded-full p-3 shadow-xl animate-scale-pulse" style={{ animationDelay: '2s' }}>
                  <Leaf className="text-green-500" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;
