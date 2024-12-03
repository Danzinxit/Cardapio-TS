import React from 'react';
import { Navigation } from './Navigation';
import { Utensils } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Utensils className="w-8 h-8 text-amber-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Sabor Brasileiro</span>
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
}