import React from 'react';
import { Heart } from 'lucide-react';

export function Logo({ className = '' }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Heart className="h-8 w-8 text-purple-600" />
      <span className="ml-2 text-2xl font-bold text-gray-900">WeCARE</span>
    </div>
  );
}