
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import EducationSection from '@/components/EducationSection';
import Footer from '@/components/Footer';
import AppPromotion from '@/components/AppPromotion';
import Testimonials from '@/components/Testimonials';
import QueryForm from '@/components/QueryForm';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, ShieldCheck, RefreshCw } from 'lucide-react';

const Index = () => {
  // Featured products data
  const featuredProducts = [
    {
      title: "Ultra Soft Sanitary Pads",
      description: "Pack of 24 ultra-absorbent, eco-friendly sanitary pads",
      price: "₹199",
      originalPrice: "₹249",
      image: "/lovable-uploads/94a0ccc3-db2b-4b73-bf87-2ef65a7751b8.png",
      tag: "Bestseller"
    },
    {
      title: "Bamboo Fiber Overnight Pads",
      description: "12 biodegradable overnight pads with extra protection",
      price: "₹299",
      originalPrice: "₹349",
      image: "/lovable-uploads/892adf88-c366-4136-ba1d-ba155d257b5d.png",
      tag: "New"
    },
    {
      title: "Eco-Friendly Panty Liners",
      description: "30 ultra-thin, biodegradable panty liners for daily use",
      price: "₹149",
      originalPrice: "₹179",
      image: "/lovable-uploads/928cd2a2-93b5-4bd4-930a-a52cd3e74b7b.png"
    },
    {
      title: "Baby Soft Diapers",
      description: "Pack of 40 gentle, hypoallergenic baby diapers",
      price: "₹599",
      originalPrice: "₹699",
      image: "/lovable-uploads/060a284d-b6e9-43e9-a5e9-ced9abc9d449.png",
      tag: "Popular"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Featured Products Section - First section after Hero */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="inline-block bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full text-sm font-medium mb-4">
                Featured Products
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Popular Products
              </h2>
              <p className="text-gray-600 text-lg">
                Discover our range of high-quality sanitary products designed for comfort and sustainability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in-up" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button className="bg-brand-orange hover:bg-brand-orange-light">
                View All Products <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* App Promotion Section - Now positioned after Products */}
        <AppPromotion />
        
        {/* Benefits Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <Award className="text-brand-orange" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
                <p className="text-gray-600">
                  Our products are made with high-quality, carefully selected materials for maximum comfort and protection.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <ShieldCheck className="text-brand-orange" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">100% Safe</h3>
                <p className="text-gray-600">
                  Dermatologically tested and free from harmful chemicals, our products are safe for sensitive skin.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <RefreshCw className="text-brand-orange" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Eco-Friendly</h3>
                <p className="text-gray-600">
                  Our biodegradable products are designed to minimize environmental impact without compromising performance.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Education Section */}
        <EducationSection />
        
        {/* Testimonials Section - New */}
        <Testimonials />
        
        {/* CTA Section */}
        <section className="py-12 bg-orange-gradient text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Ready to experience the difference?</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Try our products today and join thousands of satisfied customers who've made the switch to safer, more sustainable period care.
            </p>
            <div className="flex justify-center space-x-4 flex-wrap">
              <Button size="lg" className="bg-white text-brand-orange hover:bg-gray-100">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Get a Free Sample
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Query Button & Form - Fixed position */}
      <QueryForm />
    </div>
  );
};

export default Index;
