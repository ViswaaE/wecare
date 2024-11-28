import React from 'react';
import { Calendar, Users, Award } from 'lucide-react';
import { Button } from './ui/Button';
import { FeatureCard } from './features/FeatureCard';

const features = [
  {
    icon: Users,
    title: "Expert Coaches",
    description: "Access to certified life coaches with diverse expertise."
  },
  {
    icon: Calendar,
    title: "Easy Scheduling",
    description: "Book and manage appointments with just a few clicks."
  },
  {
    icon: Award,
    title: "Guaranteed Results",
    description: "Achieve your goals with personalized guidance."
  }
];

export function Hero() {
  return (
    <div className="pt-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Transform Your Life with Expert Life Coaching
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Connect with certified life coaches and begin your journey to personal growth and success.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="large">Find a Coach</Button>
              <Button variant="outline large">Become a Coach</Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80"
              alt="Life Coaching Session"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}