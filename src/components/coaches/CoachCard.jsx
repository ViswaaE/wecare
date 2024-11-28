import React from 'react';
import { Star } from 'lucide-react';
import { Button } from '../ui/Button';

export function CoachCard({ name, specialty, rating, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-purple-600 mb-2">{specialty}</p>
        <div className="flex items-center">
          <Star className="h-5 w-5 text-yellow-400 fill-current" />
          <span className="ml-2 text-gray-600">{rating}</span>
        </div>
        <Button variant="primary" className="mt-4 w-full">
          Book Session
        </Button>
      </div>
    </div>
  );
}