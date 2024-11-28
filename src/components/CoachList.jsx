import React from 'react';
import { coaches } from '../constants/coaches';
import { CoachCard } from './coaches/CoachCard';

export function CoachList() {
  return (
    <section id="coaches" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Meet Our Expert Coaches</h2>
          <p className="mt-4 text-xl text-gray-600">Find the perfect coach to guide you on your journey</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coaches.map((coach) => (
            <CoachCard key={coach.name} {...coach} />
          ))}
        </div>
      </div>
    </section>
  );
}