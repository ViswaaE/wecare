import React from 'react';
import { Heart, Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">WeCARE</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-purple-600">Features</a>
            <a href="#coaches" className="text-gray-600 hover:text-purple-600">Our Coaches</a>
            <a href="#testimonials" className="text-gray-600 hover:text-purple-600">Testimonials</a>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
              Sign In
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-4 py-2 rounded-md hover:bg-purple-50">
              Register
            </button>
          </div>
          
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
}