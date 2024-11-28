import React from 'react';
import { Menu } from 'lucide-react';
import { Logo } from './ui/Logo';
import { Button } from './ui/Button';
import { NavLinks } from './navigation/NavLinks';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <Button variant="primary">Sign In</Button>
            <Button variant="outline">Register</Button>
          </div>
          
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
}