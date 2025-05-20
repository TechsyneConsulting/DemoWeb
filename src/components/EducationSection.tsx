
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const EducationSection = () => {
  const educationTopics = [
    {
      title: "Menstrual Hygiene",
      description: "Learn about proper hygiene practices during menstruation for better health.",
      icon: "🧼"
    },
    {
      title: "Eco-Friendly Products",
      description: "Discover how sustainable products can make a difference to your health and the planet.",
      icon: "🌱"
    },
    {
      title: "Breaking Taboos",
      description: "Join the conversation about menstruation to break stigmas and taboos.",
      icon: "💬"
    }
  ];

  return (
    <section className="bg-brand-orange/10 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-brand-orange text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
            Education & Awareness
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Empowering Through Education
          </h2>
          <p className="text-gray-600 text-lg">
            We believe that knowledge is power. Explore our educational resources designed to empower and inform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationTopics.map((topic, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{topic.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-brand-orange">{topic.title}</h3>
              <p className="text-gray-600 mb-4">{topic.description}</p>
              <Button variant="outline" className="text-brand-orange border-brand-orange hover:bg-brand-orange hover:text-white">
                Learn More
              </Button>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-lg mt-16 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-orange mb-4">
                Our Commitment To Health & Comfort
              </h3>
              <p className="text-gray-600 mb-6">
                We're dedicated to creating products that prioritize your health and comfort while being gentle on the environment.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check className="text-brand-orange mr-2" size={20} />
                  <span>Dermatologically tested</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-brand-orange mr-2" size={20} />
                  <span>Biodegradable materials</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-brand-orange mr-2" size={20} />
                  <span>Chemical-free & hypoallergenic</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-brand-orange mr-2" size={20} />
                  <span>Super absorbent technology</span>
                </li>
              </ul>
              <Button className="bg-brand-orange hover:bg-brand-orange-light text-white">
                Download Our Guide
              </Button>
            </div>
            <div className="md:w-1/2 bg-orange-gradient">
              <div className="h-full flex items-center justify-center p-8">
                <div className="text-white text-center">
                  <h4 className="text-2xl font-bold mb-4">Get Your Free Sample</h4>
                  <p className="mb-6">Try our products and experience the comfort and quality for yourself.</p>
                  <Button className="bg-white text-brand-orange hover:bg-gray-100">
                    Request Sample
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
