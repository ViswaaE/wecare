import React from 'react';
import { Star } from 'lucide-react';

const coaches = [
  {
    name: "Sarah Johnson",
    specialty: "Career Development",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
  },
  {
    name: "Michael Chen",
    specialty: "Personal Growth",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    name: "Emma Williams",
    specialty: "Relationship Coaching",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
  }
];

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
            <div key={coach.name} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <img src={coach.image} alt={coach.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{coach.name}</h3>
                <p className="text-purple-600 mb-2">{coach.specialty}</p>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-2 text-gray-600">{coach.rating}</span>
                </div>
                <button className="mt-4 w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}