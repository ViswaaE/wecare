import React from 'react';
import { Calendar, Users, Award } from 'lucide-react';

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
              <button className="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 text-lg">
                Find a Coach
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-md hover:bg-purple-50 text-lg">
                Become a Coach
              </button>
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
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Coaches</h3>
            <p className="text-gray-600">Access to certified life coaches with diverse expertise.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Calendar className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
            <p className="text-gray-600">Book and manage appointments with just a few clicks.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Award className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Guaranteed Results</h3>
            <p className="text-gray-600">Achieve your goals with personalized guidance.</p>
          </div>
        </div>
      </div>
    </div>
  );
}