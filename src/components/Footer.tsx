import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-2xl font-bold">WeCARE</span>
            </div>
            <p className="mt-4 text-gray-400">
              Transforming lives through expert guidance and support.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400">Find a Coach</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400">Become a Coach</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-purple-400" />
                <span className="text-gray-400">support@wecare.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-purple-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-purple-400" />
                <span className="text-gray-400">123 Coaching Street, NY</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for tips and updates.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-900"
              />
              <button className="bg-purple-600 px-4 py-2 rounded-r-md hover:bg-purple-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} WeCARE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}